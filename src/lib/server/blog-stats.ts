import type { Collection, WithId } from "mongodb";

import { BLOGS } from "@/data";
import { getMongoClient } from "@/lib/server/mongodb";

export interface BlogStats {
  slug: string;
  views: number;
  likes: number;
}

interface BlogStatsDocument extends BlogStats {
  createdAt?: Date;
  updatedAt?: Date;
}

const COUNTS_COLLECTION = process.env.MONGODB_COUNTS_COLLECTION ?? "counts";

function normalizeStats(document: WithId<BlogStatsDocument> | BlogStatsDocument | null): BlogStats | null {
  if (!document) return null;

  return {
    slug: document.slug,
    views: Math.max(0, document.views ?? 0),
    likes: Math.max(0, document.likes ?? 0),
  };
}

export function isKnownBlogSlug(slug: string): boolean {
  return BLOGS.some((post) => post.id === slug);
}

async function getCollection(): Promise<Collection<BlogStatsDocument>> {
  const client = await getMongoClient();
  const db = process.env.MONGODB_DB_NAME ? client.db(process.env.MONGODB_DB_NAME) : client.db();
  return db.collection<BlogStatsDocument>(COUNTS_COLLECTION);
}

export async function getBlogStats(slug: string): Promise<BlogStats | null> {
  const collection = await getCollection();
  const document = await collection.findOne({ slug });
  return normalizeStats(document);
}

export async function incrementBlogView(slug: string): Promise<BlogStats> {
  const collection = await getCollection();
  const now = new Date();
  const document = await collection.findOneAndUpdate(
    { slug },
    {
      $setOnInsert: {
        slug,
        likes: 0,
        createdAt: now,
      },
      $inc: { views: 1 },
      $set: { updatedAt: now },
    },
    { upsert: true, returnDocument: "after" },
  );

  return normalizeStats(document) ?? { slug, views: 1, likes: 0 };
}

export async function applyBlogLikeDelta(slug: string, delta: number): Promise<BlogStats> {
  const collection = await getCollection();
  const now = new Date();
  const document = await collection.findOneAndUpdate(
    { slug },
    {
      $setOnInsert: {
        slug,
        views: 0,
        createdAt: now,
      },
      $inc: { likes: delta },
      $set: { updatedAt: now },
    },
    { upsert: true, returnDocument: "after" },
  );

  const stats = normalizeStats(document) ?? { slug, views: 0, likes: 0 };

  if (stats.likes < 0) {
    await collection.updateOne({ slug }, { $set: { likes: 0, updatedAt: now } });
    return { ...stats, likes: 0 };
  }

  return stats;
}
