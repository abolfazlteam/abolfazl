"use client";

import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

import { useIsClient } from "@/hooks/use-is-client";
import { accentSoft, accentVar } from "@/lib/theme";
import type { Project } from "@/types";

interface ProjectListItemProps {
  project: Project;
  index: number;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

interface ProjectHoverPreviewProps {
  project: Project | null;
  position: { x: number; y: number };
}

export function ProjectListItem({
  project,
  index,
  onHoverStart,
  onHoverEnd,
}: ProjectListItemProps) {
  const [hovered, setHovered] = useState(false);
  const accent = accentVar(project.accent);

  return (
    <Link
      href={`/projects/${project.id}`}
      onMouseEnter={() => {
        setHovered(true);
        onHoverStart?.();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHoverEnd?.();
      }}
      className="relative grid grid-cols-[26px_1fr_auto] items-center gap-[clamp(12px,2vw,28px)] border-b border-line py-[clamp(20px,2.4vw,30px)] no-underline transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:pl-5 min-[560px]:grid-cols-[56px_1fr_auto_auto]"
    >
      <span
        className="font-mono text-[13px] transition-colors duration-[250ms]"
        style={{ color: hovered ? accent : "var(--faint)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-wrap items-baseline gap-4">
        <span
          className="font-display text-[clamp(26px,3.4vw,40px)] font-bold leading-none tracking-[-1px] transition-colors duration-[250ms]"
          style={{ color: hovered ? accent : "var(--text)" }}
        >
          {project.name}
        </span>
        <span className="font-sans text-sm text-dim">{project.blurb.split(".")[0]}.</span>
      </div>
      <div className="hidden gap-1.5 min-[880px]:flex">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="whitespace-nowrap rounded-[3px] border border-border px-2 py-[3px] font-mono text-[10.5px] text-dim"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="hidden font-mono text-xs text-dim min-[560px]:block">
        {project.context}
      </span>
    </Link>
  );
}

export function ProjectHoverPreview({ project, position }: ProjectHoverPreviewProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[180px] w-[280px] overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
      style={{
        left: position.x,
        top: position.y,
        opacity: project ? 1 : 0,
        transform: `translate(28px, -50%) scale(${project ? 1 : 0.8}) rotate(${project ? -3 : 0}deg)`,
        transition: "opacity 0.25s ease, transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
      }}
    >
      {project ? (
        <div
          className="absolute inset-0 flex flex-col justify-between p-[18px]"
          style={{
            background: `linear-gradient(140deg, ${accentVar(project.accent)}, ${accentSoft(project.accent, 67)})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 11px)",
            }}
          />
          <div className="relative flex justify-between font-mono text-[10px] uppercase tracking-[1px] text-white/90">
            <span>{project.tag}</span>
            <span>{project.context}</span>
          </div>
          <div className="relative">
            <div className="font-display text-3xl font-bold leading-none tracking-[-0.8px] text-white">
              {project.name}
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-white/90">
              {project.metric} · click to open →
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ProjectListItemWithPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isClient = useIsClient();

  return (
    <div
      className="relative"
      onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
    >
      <ProjectListItem
        project={project}
        index={index}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
      />
      {isClient ? (
        createPortal(
          <ProjectHoverPreview project={active ? project : null} position={pos} />,
          document.body,
        )
      ) : null}
    </div>
  );
}
