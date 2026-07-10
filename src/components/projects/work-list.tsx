"use client";

import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

import { useIsClient } from "@/hooks/use-is-client";
import { PROJECTS } from "@/data";
import { accentSoft, accentVar } from "@/lib/theme";

/** The full project list with a cursor-following preview tile (the centerpiece). */
export function WorkList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = PROJECTS.find((project) => project.id === hoveredId) ?? null;
  const isClient = useIsClient();

  // The tile is `position: fixed` but lives behind transformed ancestors
  // (Reveal, the page-transition template), which would otherwise become its
  // containing block. Portalling to <body> keeps it anchored to the viewport so
  // it tracks the cursor.
  const preview = (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[180px] w-[280px] overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: active ? 1 : 0,
        transform: `translate(28px, -50%) scale(${active ? 1 : 0.8}) rotate(${active ? -3 : 0}deg)`,
        transition: "opacity 0.25s ease, transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
      }}
    >
      {active ? (
        <div
          className="absolute inset-0 flex flex-col justify-between p-[18px]"
          style={{ background: `linear-gradient(140deg, ${accentVar(active.accent)}, ${accentSoft(active.accent, 67)})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 11px)",
            }}
          />
          <div className="relative flex justify-between font-mono text-[10px] uppercase tracking-[1px] text-white/90">
            <span>{active.tag}</span>
            <span>{active.context}</span>
          </div>
          <div className="relative">
            <div className="font-display text-3xl font-bold leading-none tracking-[-0.8px] text-white">
              {active.name}
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-white/90">
              {active.metric} · click to open →
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <div
      className="relative"
      onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
    >
      <div className="border-t border-line">
        {PROJECTS.map((project, i) => {
          const on = hoveredId === project.id;
          const accent = accentVar(project.accent);
          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() =>
                setHoveredId((current) => (current === project.id ? null : current))
              }
              className="relative grid grid-cols-[26px_1fr_auto] items-center gap-[clamp(12px,2vw,28px)] border-b border-line py-[clamp(20px,2.4vw,30px)] no-underline transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:pl-5 min-[560px]:grid-cols-[56px_1fr_auto_auto]"
            >
              <span
                className="font-mono text-[13px] transition-colors duration-[250ms]"
                style={{ color: on ? accent : "var(--faint)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap items-baseline gap-4">
                <span
                  className="font-display text-[clamp(26px,3.4vw,40px)] font-bold leading-none tracking-[-1px] transition-colors duration-[250ms]"
                  style={{ color: on ? accent : "var(--text)" }}
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
        })}
      </div>

      {isClient ? createPortal(preview, document.body) : null}
    </div>
  );
}
