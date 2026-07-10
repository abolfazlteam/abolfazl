import type { Metadata } from "next";

import { WorkGallery } from "@/components/projects/work-gallery";
import { WorkList } from "@/components/projects/work-list";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Frontend Projects & Case Studies",
  description:
    "React, Next.js, and TypeScript frontend case studies by Abolfazl Jamshidi, covering support systems, service portals, SSO, job marketplaces, map platforms, and scheduling dashboards.",
  keywords: [
    "frontend projects",
    "React case studies",
    "Next.js portfolio",
    "TypeScript projects",
    "frontend architecture",
    "dashboard frontend",
    "SSO frontend",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Frontend Projects & Case Studies | Abolfazl Jamshidi",
    description:
      "Production frontend work across portals, platforms, authentication, marketplaces, and internal tooling.",
    url: "/projects",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <Container className="pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="work"
        title="Frontend case studies"
        intro="Selected React, Next.js, and TypeScript production projects: support systems, internal platforms, service portals, SSO flows, marketplace features, map SDKs, and scheduling tools."
      />

      <WorkGallery />

      <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead n="02" title="Index" />
        </Reveal>
        <Reveal delay={60}>
          <WorkList />
        </Reveal>
      </section>
    </Container>
  );
}
