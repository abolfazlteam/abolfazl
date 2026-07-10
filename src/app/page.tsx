import Link from "next/link";
import type { Metadata } from "next";

import { BlogList } from "@/components/blog/blog-list";
import { Hero } from "@/components/home/hero";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ActivityTicker } from "@/components/widgets/activity-ticker";
import { Marquee } from "@/components/widgets/marquee";
import { BLOGS, PROJECTS } from "@/data";
import { SITE_KEYWORDS } from "@/lib/seo";

export const unstable_instant = { prefetch: "static" };

const HOME_ITEM_LIMIT = 7;

export const metadata: Metadata = {
  title: "React, Next.js & DevOps Engineer Portfolio",
  description:
    "Abolfazl Jamshidi is a React, Next.js, TypeScript, and DevOps engineer building production dashboards, portals, marketplaces, SSO flows, frontend architecture, Docker builds, and GitLab CI workflows.",
  keywords: SITE_KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abolfazl Jamshidi | React, Next.js & DevOps Engineer",
    description:
      "Portfolio with React, Next.js, TypeScript, dashboards, portals, marketplace work, SSO flows, DevOps workflows, and engineering case studies.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  const homeProjects = PROJECTS.slice(0, HOME_ITEM_LIMIT);

  return (
    <Container>
      <Hero />

      <section className="mt-[clamp(64px,8vw,104px)]">
        <Reveal>
          <SectionHead
            n="01"
            title="Selected work"
            right={
              <Link
                href="/projects"
                className="font-mono text-[11px] uppercase tracking-[1px] text-text no-underline transition-opacity hover:opacity-60"
              >
                All {PROJECTS.length} →
              </Link>
            }
          />
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-[18px]">
          {homeProjects.map((project, i) => (
            <Reveal key={project.id} delay={80 + i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead
            n="02"
            title="The full list"
            right={
              <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-faint">
                hover ✦
              </span>
            }
          />
        </Reveal>
        <Reveal delay={60}>
          <WorkList limit={HOME_ITEM_LIMIT} />
        </Reveal>
      </section> */}

      <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead
            n="03"
            title="Latest writing"
            right={
              <Link
                href="/blogs"
                className="font-mono text-[11px] uppercase tracking-[1px] text-text no-underline transition-opacity hover:opacity-60"
              >
                All {BLOGS.length} →
              </Link>
            }
          />
        </Reveal>
        <Reveal delay={60}>
          <BlogList limit={HOME_ITEM_LIMIT} showSearch={false} />
        </Reveal>
      </section>

      <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead n="04" title="Toolbox & signal" />
        </Reveal>
        <Reveal delay={60}>
          <Marquee />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-7">
            <ActivityTicker />
          </div>
        </Reveal>
      </section>
    </Container>
  );
}
