import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetail } from "@/components/blog/blog-detail";
import { BLOGS, getBlogById } from "@/data";
import { absoluteUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogById(slug);
  if (!post) return {};
  const url = `/blogs/${post.id}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.tag,
      "React",
      "Next.js",
      "frontend engineering",
      "JavaScript",
      "TypeScript",
      post.title,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      images: [{ url: absoluteUrl(post.hero), alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [absoluteUrl(post.hero)],
    },
  };
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
