import { ObjectId, type Collection, type WithId } from "mongodb";

import { BLOGS, PROJECTS } from "@/data";
import { getMongoClient } from "@/lib/server/mongodb";

export interface StoredComment {
  id: string;
  contentId: string;
  name: string;
  text: string;
  likes: number;
  when: string;
  createdAt: string;
  canDelete: boolean;
}

interface CommentDocument {
  contentId: string;
  name: string;
  text: string;
  likes: number;
  ownerToken: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateCommentInput {
  contentId: string;
  name: string;
  text: string;
  ownerToken: string;
}

interface DeleteCommentInput {
  contentId: string;
  commentId: string;
  ownerToken: string;
}

const COMMENTS_COLLECTION = process.env.MONGODB_COMMENTS_COLLECTION ?? "comments";
const MAX_NAME_LENGTH = 80;
const MAX_TEXT_LENGTH = 1200;
const MAX_TOKEN_LENGTH = 120;

export function isKnownCommentContentId(contentId: string): boolean {
  return (
    BLOGS.some((post) => post.id === contentId) ||
    PROJECTS.some((project) => project.id === contentId)
  );
}

function cleanText(value: string, maxLength: number): string {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanCommentBody(value: string): string {
  return value.trim().replace(/\n{3,}/g, "\n\n").slice(0, MAX_TEXT_LENGTH);
}

function cleanOwnerToken(value: string): string {
  return value.trim().slice(0, MAX_TOKEN_LENGTH);
}

function formatRelativeDate(date: Date): string {
  const seconds = Math.max(1, Math.floor((Date.now() - date.getTime()) / 1000));
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() === new Date().getFullYear() ? undefined : "numeric",
  }).format(date);
}

function toStoredComment(
  document: WithId<CommentDocument>,
  ownerToken?: string,
): StoredComment {
  const canDelete = Boolean(ownerToken && ownerToken === document.ownerToken);

  return {
    id: document._id.toHexString(),
    contentId: document.contentId,
    name: document.name,
    text: document.text,
    likes: Math.max(0, document.likes ?? 0),
    when: formatRelativeDate(document.createdAt),
    createdAt: document.createdAt.toISOString(),
    canDelete,
  };
}

async function getCollection(): Promise<Collection<CommentDocument>> {
  const client = await getMongoClient();
  const db = process.env.MONGODB_DB_NAME ? client.db(process.env.MONGODB_DB_NAME) : client.db();
  return db.collection<CommentDocument>(COMMENTS_COLLECTION);
}

export async function listStoredComments(
  contentId: string,
  ownerToken?: string,
): Promise<StoredComment[]> {
  const collection = await getCollection();
  const safeOwnerToken = ownerToken ? cleanOwnerToken(ownerToken) : undefined;
  const comments = await collection
    .find({ contentId })
    .sort({ createdAt: -1 })
    .limit(100)
    .toArray();

  return comments.map((comment) => toStoredComment(comment, safeOwnerToken));
}

export async function createStoredComment({
  contentId,
  name,
  text,
  ownerToken,
}: CreateCommentInput): Promise<StoredComment> {
  const safeName = cleanText(name, MAX_NAME_LENGTH) || "Anonymous";
  const safeText = cleanCommentBody(text);
  const safeOwnerToken = cleanOwnerToken(ownerToken);

  if (!safeText) {
    throw new Error("Comment text is required.");
  }

  if (!safeOwnerToken) {
    throw new Error("Comment owner token is required.");
  }

  const collection = await getCollection();
  const now = new Date();
  const result = await collection.insertOne({
    contentId,
    name: safeName,
    text: safeText,
    likes: 0,
    ownerToken: safeOwnerToken,
    createdAt: now,
    updatedAt: now,
  });

  return {
    id: result.insertedId.toHexString(),
    contentId,
    name: safeName,
    text: safeText,
    likes: 0,
    when: "just now",
    createdAt: now.toISOString(),
    canDelete: true,
  };
}

export async function deleteStoredComment({
  contentId,
  commentId,
  ownerToken,
}: DeleteCommentInput): Promise<boolean> {
  const safeOwnerToken = cleanOwnerToken(ownerToken);

  if (!ObjectId.isValid(commentId) || !safeOwnerToken) {
    return false;
  }

  const collection = await getCollection();
  const result = await collection.deleteOne({
    _id: new ObjectId(commentId),
    contentId,
    ownerToken: safeOwnerToken,
  });

  return result.deletedCount > 0;
}
