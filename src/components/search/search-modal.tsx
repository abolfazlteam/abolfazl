"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { BLOGS, PROJECTS } from "@/data";
import { accentSoft, accentVar } from "@/lib/theme";

const RESULT_CLASS =
  "flex w-full cursor-pointer items-center gap-3.5 rounded-[10px] px-3 py-[11px] text-left transition-colors hover:bg-[rgba(125,125,125,0.10)]";
const GROUP_CLASS = "px-3 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[1.5px] text-faint";

export function SearchModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => inputRef.current?.focus(), 60);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, []);

  const term = query.trim().toLowerCase();
  const projects = PROJECTS.filter(
    (p) => !term || `${p.name} ${p.tag} ${p.blurb} ${p.stack.join(" ")}`.toLowerCase().includes(term),
  );
  const posts = BLOGS.filter(
    (b) => !term || `${b.title} ${b.tag} ${b.excerpt}`.toLowerCase().includes(term),
  );
  const empty = projects.length === 0 && posts.length === 0;

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-5 pb-5 pt-[12vh] backdrop-blur-md"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search projects and writing"
        className="w-[min(640px,100%)] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
      >
        <div className="flex items-center gap-3 border-b border-border px-[18px] py-4">
          <Icon name="search" size={18} strokeWidth={2.2} className="text-dim" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects & writing…"
            className="flex-1 border-0 bg-transparent font-sans text-[17px] text-text outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-md border border-border bg-bg-soft px-2 py-1 font-mono text-[11px] text-faint"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto px-2.5 pb-3.5 pt-2.5">
          {empty ? (
            <div className="px-3.5 py-8 text-center font-sans text-[15px] text-dim">
              Nothing matches “{query}”.
            </div>
          ) : null}

          {projects.length > 0 ? <div className={GROUP_CLASS}>Projects</div> : null}
          {projects.map((project) => (
            <button key={project.id} type="button" onClick={() => go(`/projects/${project.id}`)} className={RESULT_CLASS}>
              <span
                className="size-[38px] shrink-0 rounded-lg"
                style={{ background: `linear-gradient(140deg, ${accentVar(project.accent)}, ${accentSoft(project.accent, 67)})` }}
              />
              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-semibold text-text">{project.name}</span>
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-sans text-[13px] text-dim">
                  {project.blurb}
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[1px] text-faint">
                {project.tag.split(" ")[0]}
              </span>
            </button>
          ))}

          {posts.length > 0 ? <div className={GROUP_CLASS}>Writing</div> : null}
          {posts.map((post) => (
            <button key={post.id} type="button" onClick={() => go(`/blogs/${post.id}`)} className={RESULT_CLASS}>
              <span className="flex size-[38px] shrink-0 items-center justify-center rounded-lg border border-border bg-bg-soft font-mono text-[10px] text-accent">
                {post.tag.slice(0, 3)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-display text-[15px] font-semibold text-text">
                  {post.title}
                </span>
                <span className="block font-mono text-[11px] text-faint">
                  {post.date} · {post.read}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
