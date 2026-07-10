import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/about-intro";
import { ExperienceList } from "@/components/about/experience-list";
import { SkillsGrid } from "@/components/about/skills-grid";
import { Timeline } from "@/components/about/timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { PERSON } from "@/data";
import { SITE_URL } from "@/lib/seo";

export const unstable_instant = { prefetch: "static" };

const ABOUT_DESCRIPTION =
  "About Abolfazl Jamshidi, a React, Next.js, TypeScript, and DevOps engineer in Tehran with experience building portals, dashboards, SSO flows, marketplaces, reusable frontend systems, Docker builds, GitLab CI pipelines, and Kubernetes-ready workflows.";

export const metadata: Metadata = {
  title: "About Abolfazl Jamshidi",
  description: ABOUT_DESCRIPTION,
  keywords: [
    "Abolfazl Jamshidi",
    "React developer Tehran",
    "Next.js developer Iran",
    "DevOps Engineer Tehran",
    "DevOps Engineer Iran",
    "TypeScript frontend developer",
    "frontend developer experience",
    "Docker GitLab CI Kubernetes",
  ],
  alternates: { canonical: "/about-me" },
  openGraph: {
    title: "About Abolfazl Jamshidi | React, Next.js & DevOps Engineer",
    description:
      "Experience, skills, and background of a React, Next.js, TypeScript, and DevOps engineer focused on production web apps and delivery workflows.",
    url: "/about-me",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE_URL}/about-me#profile`,
          url: `${SITE_URL}/about-me`,
          name: "About Abolfazl Jamshidi",
          description: ABOUT_DESCRIPTION,
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: PERSON.name,
            alternateName: PERSON.handle,
            url: SITE_URL,
            email: PERSON.email,
            jobTitle: "React, Next.js and DevOps Engineer",
            sameAs: [PERSON.github, PERSON.linkedin, PERSON.medium],
            knowsAbout: [
              "React",
              "Next.js",
              "TypeScript",
              "Frontend Architecture",
              "DevOps Engineering",
              "Docker",
              "GitLab CI",
              "Linux",
              "Kubernetes",
            ],
          },
        }}
      />
      <Container className="pt-[clamp(40px,5vw,72px)]">
        <PageHeader
          page="about"
          title="React and DevOps engineer in Tehran."
          intro="I build production frontend systems with React, Next.js, TypeScript, TanStack Query, design systems, Docker, GitLab CI, Linux, and Kubernetes-aware delivery workflows."
        />
        <AboutIntro />
        <ExperienceList />
        <SkillsGrid />
        <Timeline />
      </Container>
    </>
  );
}
