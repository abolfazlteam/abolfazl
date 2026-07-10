"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

import { ProjectHoverPreview, ProjectListItem } from "@/components/projects/project-list-item";
import { useIsClient } from "@/hooks/use-is-client";
import { PROJECTS } from "@/data";

interface WorkListProps {
  limit?: number;
}

/** The full project list with a cursor-following preview tile (the centerpiece). */
export function WorkList({ limit }: WorkListProps) {
  const projects = typeof limit === "number" ? PROJECTS.slice(0, limit) : PROJECTS;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = projects.find((project) => project.id === hoveredId) ?? null;
  const isClient = useIsClient();

  // The tile is `position: fixed` but lives behind transformed ancestors
  // (Reveal, the page-transition template), which would otherwise become its
  // containing block. Portalling to <body> keeps it anchored to the viewport so
  // it tracks the cursor.
  const preview = <ProjectHoverPreview project={active} position={pos} />;

  return (
    <div
      className="relative"
      onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
    >
      <div className="border-t border-line">
        {projects.map((project, i) => (
          <ProjectListItem
            key={project.id}
            project={project}
            index={i}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId((current) => (current === project.id ? null : current))}
          />
        ))}
      </div>

      {isClient ? createPortal(preview, document.body) : null}
    </div>
  );
}
