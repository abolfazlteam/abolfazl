import Link from "next/link";

import { Comments } from "@/components/comments/comments";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { LikeButton } from "@/components/ui/like-button";
import { SectionHead } from "@/components/ui/section-head";
import { PERSON, PROJECTS } from "@/data";
import { accentSoft, accentVar } from "@/lib/theme";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import type { Project } from "@/types";

export function ProjectDetail({ project }: { project: Project }) {
  const accent = accentVar(project.accent);
  const index = PROJECTS.findIndex((item) => item.id === project.id);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const url = absoluteUrl(`/projects/${project.id}`);

  return (
    <Container className="pt-[clamp(28px,4vw,48px)]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: `${project.name} Frontend Case Study`,
          headline: `${project.name} Frontend Case Study`,
          description: project.blurb,
          url,
          creator: {
            "@type": "Person",
            name: PERSON.name,
            url: SITE_URL,
          },
          about: project.tag,
          keywords: [project.name, project.tag, ...project.stack, "frontend case study"],
          programmingLanguage: project.stack,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        }}
      />
      <Link
        href="/projects"
        className="mb-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[1px] text-dim no-underline transition-opacity hover:opacity-60"
      >
        <Icon name="back" size={15} /> All work
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div
            className="font-mono text-xs uppercase tracking-[1px]"
            style={{ color: accent }}
          >
            {project.tag} · {project.context}
          </div>
          <h1 className="mt-3 font-display text-[clamp(44px,7vw,96px)] font-bold leading-[0.92] tracking-[-0.04em] text-text">
            {project.name}
          </h1>
        </div>
        <div className="flex items-center gap-2.5 pt-2">
          {project.link === "#" ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-[18px] py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.5px] text-accent-ink">
              Case study
            </span>
          ) : (
            <a
              href={project.link}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-[18px] py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.5px] text-accent-ink no-underline transition hover:brightness-105"
            >
              Live <Icon name="arrow" size={14} />
            </a>
          )}
          <LikeButton initial={project.likes} big />
        </div>
      </div>

      {/* Hero band */}
      <div
        className="relative mt-7 h-[clamp(220px,32vw,380px)] overflow-hidden rounded-[18px]"
        style={{ background: `linear-gradient(140deg, ${accent}, ${accentSoft(project.accent, 67)})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 14px)",
          }}
        />
        <span className="absolute right-6 top-5 rounded-full bg-black/20 px-2.5 py-1 font-mono text-xs uppercase tracking-[1px] text-white/90">
          {project.metric}
        </span>
      </div>

      <div className="mt-11 grid grid-cols-1 items-start gap-[clamp(32px,5vw,64px)] min-[980px]:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div>
          <SectionHead n="01" title="Overview" />
          <p className="m-0 max-w-[660px] font-sans text-lg leading-[1.7] text-text">
            {project.overview}
          </p>

          <div className="mt-10">
            <SectionHead n="02" title="Highlights" />
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3.5 font-sans text-base leading-[1.6] text-text">
                  <span className="shrink-0 font-mono text-[13px]" style={{ color: accent }}>
                    0{i + 1}
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Meta card */}
        <div className="flex flex-col gap-4 rounded-[14px] border border-border bg-surface p-[22px]">
          {(
            [
              ["Role", project.role],
              ["Timeline", project.timeline],
              ["Context", project.context],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-faint">{label}</div>
              <div className="mt-1 font-sans text-[15px] text-text">{value}</div>
            </div>
          ))}
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[1.5px] text-faint">Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="whitespace-nowrap rounded border border-border px-[9px] py-1 font-mono text-[11px] text-dim"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-[clamp(48px,6vw,80px)]">
        <SectionHead
          n="03"
          title="Gallery"
          right={
            <span className="font-mono text-[10px] uppercase tracking-[1px] text-faint">
              image placeholders
            </span>
          }
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
          {project.gallery.map((item, i) => (
            <ImagePlaceholder
              key={item.id}
              label={item.label}
              aspect={item.aspect ?? (i === 0 ? "16 / 10" : "4 / 3")}
              className="rounded-[12px]"
            />
          ))}
        </div>
      </div>

      <div className="mt-[clamp(48px,6vw,80px)]">
        <Comments contentId={project.id} />
      </div>

      {/* Next project */}
      <Link
        href={`/projects/${next.id}`}
        className="mt-[clamp(40px,5vw,64px)] flex items-center justify-between gap-4 border-t border-line py-7 no-underline transition-[padding-left] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:pl-2"
      >
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[1px] text-faint">Next project</div>
          <div className="mt-1.5 font-display text-[clamp(28px,4vw,48px)] font-bold tracking-[-1px] text-text">
            {next.name}
          </div>
        </div>
        <Icon name="arrow" size={28} style={{ color: accentVar(next.accent) }} />
      </Link>
    </Container>
  );
}
