import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetail } from "@/components/blog/blog-detail";
import { BLOGS, getBlogById } from "@/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogById(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

// Fixed post set — all slugs are prerendered; anything else 404s via notFound().
export function generateStaticParams() {
  return BLOGS.map((post) => ({ slug: post.id }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogById(slug);
  if (!post) notFound();
  return <BlogDetail blog={post} />;
}
