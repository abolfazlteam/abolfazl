import type { MetadataRoute } from "next";

import { BLOGS, PROJECTS } from "@/data";
import { SITE_URL } from "@/lib/seo";

const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: NOW, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blogs`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about-me`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
  ];

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOGS.map((post) => ({
    url: `${SITE_URL}/blogs/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
