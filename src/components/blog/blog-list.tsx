"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

import { BlogStatsInline } from "@/components/blog/blog-stats";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { BLOGS } from "@/data";
import { useIsClient } from "@/hooks/use-is-client";

interface BlogListProps {
  limit?: number;
  showSearch?: boolean;
}

/** Searchable list of posts. */
export function BlogList({ limit, showSearch = true }: BlogListProps) {
  const [query, setQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const term = query.trim().toLowerCase();
  const filteredPosts = BLOGS.filter(
    (post) =>
      !term || `${post.title} ${post.tag} ${post.excerpt}`.toLowerCase().includes(term),
  );
  const posts = typeof limit === "number" ? filteredPosts.slice(0, limit) : filteredPosts;
  const active = posts.find((post) => post.id === hoveredId) ?? null;
  const isClient = useIsClient();

  const preview = (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[180px] w-[280px] overflow-hidden rounded-xl border border-white/10 bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: active ? 1 : 0,
        transform: `translate(28px, -50%) scale(${active ? 1 : 0.8}) rotate(${active ? -3 : 0}deg)`,
        transition: "opacity 0.25s ease, transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
      }}
    >
      {active ? (
        <>
          <Image
            src={active.hero}
            alt=""
            fill
            sizes="280px"
            className="object-cover"
            unoptimized={active.hero.endsWith(".gif")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-[18px]">
            <div className="font-mono text-[10px] uppercase tracking-[1px] text-white/80">
              {active.tag} · {active.read}
            </div>
            <div className="mt-1.5 line-clamp-2 font-display text-[23px] font-bold leading-none tracking-[-0.7px] text-white">
              {active.title}
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-white/90">click to read →</div>
          </div>
        </>
      ) : null}
    </div>
  );

  return (
    <>
      {showSearch ? (
        <Reveal delay={160}>
          <div className="mt-[30px] flex max-w-[420px] items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3.5 py-[11px]">
            <Icon name="search" size={15} strokeWidth={2.2} className="text-faint" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts…"
              className="w-full border-0 bg-transparent font-sans text-sm text-text outline-none"
            />
          </div>
        </Reveal>
      ) : null}

      <div
        className={showSearch ? "mt-9 border-t border-line" : "border-t border-line"}
        onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
      >
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 70}>
            <Link
              href={`/blogs/${post.id}`}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() =>
                setHoveredId((current) => (current === post.id ? null : current))
              }
              className="group grid grid-cols-1 gap-2 border-b border-line py-7 no-underline transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:pl-5 min-[640px]:grid-cols-[120px_1fr_auto] min-[640px]:items-baseline min-[640px]:gap-[clamp(16px,3vw,32px)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.5px] text-dim">
                {post.date}
              </span>
              <div>
                <span className="inline-block rounded-[3px] border border-border px-[7px] py-0.5 font-mono text-[10px] uppercase tracking-[1px] text-accent">
                  {post.tag}
                </span>
                <div className="mt-2.5 font-display text-[clamp(22px,3vw,30px)] font-semibold leading-[1.15] tracking-[-0.6px] text-text decoration-[1.5px] underline-offset-[5px] transition-colors duration-[250ms] group-hover:text-accent group-hover:underline">
                  {post.title}
                </div>
                <div className="mt-2 max-w-[640px] font-sans text-[14.5px] leading-[1.55] text-dim">
                  {post.excerpt}
                </div>
                <BlogStatsInline
                  slug={post.id}
                  initialViews={post.views}
                  initialLikes={post.likes}
                  read={post.read}
                />
              </div>
              <span className="hidden font-mono text-[13px] text-dim min-[640px]:inline">→</span>
            </Link>
          </Reveal>
        ))}
        {posts.length === 0 ? (
          <div className="py-10 font-sans text-[15px] text-dim">No posts match “{query}”.</div>
        ) : null}
      </div>

      {isClient ? createPortal(preview, document.body) : null}
    </>
  );
}
