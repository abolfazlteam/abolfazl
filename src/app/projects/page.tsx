import type { Metadata } from "next";

import { WorkGallery } from "@/components/projects/work-gallery";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Frontend & DevOps Projects Case Studies",
  description:
    "React, Next.js, TypeScript, and DevOps case studies by Abolfazl Jamshidi, covering support systems, service portals, SSO, job marketplaces, map platforms, scheduling dashboards, Docker builds, and GitLab CI workflows.",
  keywords: [
    "frontend projects",
    "DevOps projects",
    "React case studies",
    "Next.js portfolio",
    "TypeScript projects",
    "DevOps portfolio",
    "frontend architecture",
    "dashboard frontend",
    "SSO frontend",
    "Docker GitLab CI",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Frontend & DevOps Projects Case Studies | Abolfazl Jamshidi",
    description:
      "Production frontend and DevOps work across portals, platforms, authentication, marketplaces, internal tooling, Docker, and GitLab CI workflows.",
    url: "/projects",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <Container className="pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="work"
        title="Frontend and DevOps case studies"
        intro="Selected React, Next.js, TypeScript, and DevOps production projects: support systems, internal platforms, service portals, SSO flows, marketplace features, map SDKs, scheduling tools, Docker builds, and GitLab CI workflows."
      />

      <WorkGallery />

      {/* <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead n="02" title="Index" />
        </Reveal>
        <Reveal delay={60}>
          <WorkList />
        </Reveal>
      </section> */}
    </Container>
  );
}
