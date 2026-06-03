"use client";

import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { BLOGS } from "@/data";

/** Searchable list of posts. */
export function BlogList() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const posts = BLOGS.filter(
    (post) =>
      !term || `${post.title} ${post.tag} ${post.excerpt}`.toLowerCase().includes(term),
  );

  return (
    <>
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

      <div className="mt-9 border-t border-line">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 70}>
            <Link
              href={`/blogs/${post.id}`}
              className="group grid grid-cols-1 gap-2 border-b border-line py-7 no-underline min-[640px]:grid-cols-[120px_1fr_auto] min-[640px]:items-baseline min-[640px]:gap-[clamp(16px,3vw,32px)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.5px] text-dim">
                {post.date}
              </span>
              <div>
                <span className="inline-block rounded-[3px] border border-border px-[7px] py-0.5 font-mono text-[10px] uppercase tracking-[1px] text-accent">
                  {post.tag}
                </span>
                <div className="mt-2.5 font-display text-[clamp(22px,3vw,30px)] font-semibold leading-[1.15] tracking-[-0.6px] text-text decoration-[1.5px] underline-offset-[5px] group-hover:underline">
                  {post.title}
                </div>
                <div className="mt-2 max-w-[640px] font-sans text-[14.5px] leading-[1.55] text-dim">
                  {post.excerpt}
                </div>
                <div className="mt-3 flex gap-3.5 font-mono text-[11px] text-faint">
                  <span>{post.views.toLocaleString("en-US")} views</span>
                  <span>♥ {post.likes}</span>
                  <span>{post.read}</span>
                </div>
              </div>
              <span className="hidden font-mono text-[13px] text-dim min-[640px]:inline">→</span>
            </Link>
          </Reveal>
        ))}
        {posts.length === 0 ? (
          <div className="py-10 font-sans text-[15px] text-dim">No posts match “{query}”.</div>
        ) : null}
      </div>
    </>
  );
}
