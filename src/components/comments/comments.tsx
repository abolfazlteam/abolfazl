"use client";

import { useState, type FormEvent } from "react";

import { Icon } from "@/components/ui/icon";
import { getCommentsFor } from "@/data";
import { cn } from "@/lib/cn";
import type { Comment } from "@/types";

interface CommentState extends Comment {
  liked: boolean;
}

/** Comment thread seeded from data; new comments and likes are local-only (mock). */
export function Comments({ contentId }: { contentId: string }) {
  const [list, setList] = useState<CommentState[]>(() =>
    getCommentsFor(contentId).map((comment) => ({ ...comment, liked: false })),
  );
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const add = (event: FormEvent) => {
    event.preventDefault();
    const body = text.trim();
    if (!body) return;
    setList((prev) => [
      { name: name.trim() || "Anonymous", when: "just now", text: body, likes: 0, liked: false },
      ...prev,
    ]);
    setName("");
    setText("");
  };

  const toggleLike = (index: number) =>
    setList((prev) =>
      prev.map((comment, i) =>
        i === index
          ? { ...comment, liked: !comment.liked, likes: comment.likes + (comment.liked ? -1 : 1) }
          : comment,
      ),
    );

  return (
    <section className="mt-[clamp(48px,6vw,80px)]">
      <div className="mb-[26px] flex items-center gap-3.5">
        <h2 className="font-display text-[clamp(22px,3vw,28px)] font-bold tracking-[-0.6px] text-text">
          Comments
        </h2>
        <span className="font-mono text-xs text-accent">({list.length})</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <form
        onSubmit={add}
        className="mb-8 flex flex-col gap-3 rounded-xl border border-border bg-surface p-[18px]"
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name (optional)"
          className="border-0 border-b border-line bg-transparent py-2 font-sans text-[15px] text-text outline-none"
        />
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={3}
          placeholder="Add to the conversation…"
          className="resize-y border-0 bg-transparent py-2 font-sans text-[15px] text-text outline-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="cursor-pointer rounded-lg border-0 bg-accent px-[18px] py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.5px] text-accent-ink transition hover:brightness-105"
          >
            Post comment
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-5">
        {list.map((comment, index) => (
          <article key={index} className="flex gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-soft font-display text-base font-bold text-accent">
              {(comment.name[0] ?? "?").toUpperCase()}
            </span>
            <div className="flex-1">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-[15px] font-semibold text-text">{comment.name}</span>
                <span className="font-mono text-[11px] text-faint">{comment.when}</span>
              </div>
              <p className="my-[5px] font-sans text-[15px] leading-[1.55] text-text">{comment.text}</p>
              <button
                type="button"
                onClick={() => toggleLike(index)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent font-mono text-xs",
                  comment.liked ? "text-accent" : "text-faint",
                )}
              >
                <Icon name="heart" size={13} fill={comment.liked ? "currentColor" : "none"} /> {comment.likes}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
