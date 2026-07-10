"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { PERSON } from "@/data";
import { cn } from "@/lib/cn";
import type { BlogSection } from "@/types";

const SOCIALS = [
  { name: "github", href: PERSON.github },
  { name: "linkedin", href: PERSON.linkedin },
  { name: "medium", href: PERSON.medium },
] as const;

/** Sticky table of contents with scroll-spy over the article sections. */
export function BlogToc({ sections }: { sections: BlogSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(`sec-${section.id}`))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-sec");
            if (id) setActive(id);
          }
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const goTo = (id: string) =>
    document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <aside className="sticky top-[78px] hidden self-start min-[980px]:block">
      <div className="mb-[22px] flex gap-4">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="text-dim transition-opacity hover:opacity-60"
          >
            <Icon name={social.name} />
          </a>
        ))}
      </div>
      <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[1.5px] text-faint">
        On this page
      </div>
      <nav className="flex flex-col gap-0.5 border-l border-line">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => goTo(section.id)}
            className={cn(
              "-ml-px cursor-pointer border-0 border-l-2 bg-transparent py-1.5 pl-3.5 text-left font-sans text-[13px] leading-[1.4] transition-colors",
              active === section.id
                ? "border-accent font-semibold text-text"
                : "border-transparent font-normal text-dim",
            )}
          >
            {section.h}
          </button>
        ))}
      </nav>
    </aside>
  );
}
