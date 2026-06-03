import Link from "next/link";

import { Hero } from "@/components/home/hero";
import { ProjectCard } from "@/components/projects/project-card";
import { WorkList } from "@/components/projects/work-list";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { ActivityTicker } from "@/components/widgets/activity-ticker";
import { Marquee } from "@/components/widgets/marquee";
import { PROJECTS } from "@/data";

export const unstable_instant = { prefetch: "static" };

export default function HomePage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)]">
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
          {PROJECTS.slice(0, 3).map((project, i) => (
            <Reveal key={project.id} delay={80 + i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-[clamp(56px,7vw,88px)]">
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
          <WorkList />
        </Reveal>
      </section>

      <section className="mt-[clamp(56px,7vw,88px)]">
        <Reveal>
          <SectionHead n="03" title="Toolbox & signal" />
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
    </div>
  );
}
