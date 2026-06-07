import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/about-intro";
import { ExperienceList } from "@/components/about/experience-list";
import { SkillsGrid } from "@/components/about/skills-grid";
import { Timeline } from "@/components/about/timeline";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "About",
  description:
    "Front-end developer turned DevOps intern — experience, toolbox, and how I got here.",
};

export default function AboutPage() {
  return (
    <Container className="pt-[clamp(40px,5vw,72px)]">
      <PageHeader page="about" title="Hi, I'm Abolfazl." />
      <AboutIntro />
      <ExperienceList />
      <SkillsGrid />
      <Timeline />
    </Container>
  );
}
