import type { Metadata } from "next";

import { BlogList } from "@/components/blog/blog-list";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "React, Next.js & DevOps Engineering Blog",
  description:
    "Engineering articles by Abolfazl Jamshidi about React hooks, Next.js, Suspense, streaming, selective hydration, performance, practical UI architecture, and DevOps delivery workflows.",
  keywords: [
    "React blog",
    "Next.js blog",
    "frontend engineering blog",
    "DevOps engineering blog",
    "React hooks",
    "useEffect",
    "useRef vs useState",
    "React Suspense",
    "selective hydration",
    "Docker GitLab CI",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "React, Next.js & DevOps Engineering Blog | Abolfazl Jamshidi",
    description:
      "Articles on React hooks, Suspense, streaming, hydration, performance, frontend architecture, and DevOps delivery workflows.",
    url: "/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <Container className="pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="writing"
        title="Frontend and DevOps engineering blog"
        intro="React, Next.js, TypeScript, Suspense, hooks, rendering, practical frontend architecture, and DevOps delivery notes written from real implementation work."
      />
      <BlogList />
    </Container>
  );
}
