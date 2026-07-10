import type { Metadata } from "next";

import { BlogList } from "@/components/blog/blog-list";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "React, Next.js & Frontend Engineering Blog",
  description:
    "Frontend engineering articles by Abolfazl Jamshidi about React hooks, Next.js, Suspense, streaming, selective hydration, performance, and practical UI architecture.",
  keywords: [
    "React blog",
    "Next.js blog",
    "frontend engineering blog",
    "React hooks",
    "useEffect",
    "useRef vs useState",
    "React Suspense",
    "selective hydration",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "React, Next.js & Frontend Engineering Blog | Abolfazl Jamshidi",
    description:
      "Articles on React hooks, Suspense, streaming, hydration, performance, and frontend architecture.",
    url: "/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <Container className="pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="writing"
        title="Frontend engineering blog"
        intro="React, Next.js, TypeScript, Suspense, hooks, rendering, and practical frontend architecture notes written from real implementation work."
      />
      <BlogList />
    </Container>
  );
}
