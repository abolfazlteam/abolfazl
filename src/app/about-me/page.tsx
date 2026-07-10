import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/about-intro";
import { ExperienceList } from "@/components/about/experience-list";
import { SkillsGrid } from "@/components/about/skills-grid";
import { Timeline } from "@/components/about/timeline";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "About Abolfazl Jamshidi",
  description:
    "About Abolfazl Jamshidi, a React, Next.js, and TypeScript frontend developer in Tehran with experience building portals, dashboards, SSO flows, marketplaces, and reusable frontend systems.",
  keywords: [
    "Abolfazl Jamshidi",
    "React developer Tehran",
    "Next.js developer Iran",
    "TypeScript frontend developer",
    "frontend developer experience",
  ],
  alternates: { canonical: "/about-me" },
  openGraph: {
    title: "About Abolfazl Jamshidi | React & Next.js Frontend Developer",
    description:
      "Experience, skills, and background of a React, Next.js, and TypeScript frontend developer focused on production web apps.",
    url: "/about-me",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <Container className="pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="about"
        title="React developer in Tehran."
        intro="I build production frontend systems with React, Next.js, TypeScript, TanStack Query, design systems, and practical DevOps workflows."
      />
      <AboutIntro />
      <ExperienceList />
      <SkillsGrid />
      <Timeline />
    </Container>
  );
}
