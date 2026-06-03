"use client";

import Link from "next/link";

import { useTilt } from "@/hooks/use-tilt";
import { accentSoft, accentVar } from "@/lib/theme";
import type { Project } from "@/types";

/** Elevated, cursor-tilting project card linking to its detail page. */
export function ProjectCard({ project }: { project: Project }) {
  const ref = useTilt<HTMLAnchorElement>(5);

  return (
    <Link
      ref={ref}
      href={`/work/${project.id}`}
      className="block overflow-hidden rounded-[14px] border border-border bg-surface no-underline transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:shadow-[0_22px_54px_rgba(0,0,0,0.22)]"
    >
      <div
        className="relative h-[150px] overflow-hidden"
        style={{ background: `linear-gradient(140deg, ${accentVar(project.accent)}, ${accentSoft(project.accent, 73)})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 13px)",
          }}
        />
        <div className="absolute left-4 right-4 top-3.5 flex justify-between font-mono text-[10px] uppercase tracking-[1px] text-white/90">
          <span>{project.tag}</span>
          <span className="rounded-full bg-black/20 px-[7px] py-0.5">{project.metric}</span>
        </div>
        <span className="absolute bottom-3.5 left-[18px] font-display text-4xl font-bold leading-none tracking-[-1.2px] text-white">
          {project.name}
        </span>
      </div>
      <div className="p-[22px]">
        <p className="m-0 font-sans text-[14.5px] leading-[1.6] text-dim">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="whitespace-nowrap rounded-[3px] border border-border px-[9px] py-[3px] font-mono text-[10.5px] text-dim"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
