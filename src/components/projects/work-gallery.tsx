"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS } from "@/data";
import { cn } from "@/lib/cn";

const FILTERS = ["all", "portal", "platform", "auth", "marketplace", "mobile"] as const;
type Filter = (typeof FILTERS)[number];

/** Filterable card grid for the Work page. */
export function WorkGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const projects = PROJECTS.filter(
    (project) => filter === "all" || project.tag.toLowerCase().includes(filter),
  );

  return (
    <>
      <Reveal delay={180}>
        <div className="mt-9 flex w-full flex-wrap gap-1 rounded-lg border border-border bg-bg-soft p-1 min-[620px]:w-fit">
          {FILTERS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={cn(
                "cursor-pointer rounded-md px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.5px] transition-colors",
                filter === value
                  ? "bg-surface text-text shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                  : "bg-transparent text-dim",
              )}
            >
              {value}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-[18px]">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={120 + i * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
