"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";

import { AnimatedNumber } from "@/components/ui/animated-number";
import { Icon } from "@/components/ui/icon";
import { getCommentsFor } from "@/data";
import { cn } from "@/lib/cn";
import type { Comment } from "@/types";

interface CommentState extends Comment {
  id: string;
  canDelete: boolean;
}

interface StoredCommentResponse {
  comments?: CommentState[];
}

interface CreatedCommentResponse {
  comment?: CommentState;
}

const OWNER_TOKEN_KEY = "comment-owner-token";

function getCommentOwnerToken(): string {
  const current = window.localStorage.getItem(OWNER_TOKEN_KEY);
  if (current) return current;

  const token = window.crypto.randomUUID();
  window.localStorage.setItem(OWNER_TOKEN_KEY, token);
  return token;
}

function commentsUrl(contentId: string, commentId?: string): string {
  const base = `/api/comments/${encodeURIComponent(contentId)}`;
  return commentId ? `${base}/${encodeURIComponent(commentId)}` : base;
}

/** Comment thread backed by Mongo, with static starter comments as fallback context. */
export function Comments({ contentId }: { contentId: string }) {
  const seedComments = useMemo<CommentState[]>(
    () =>
      getCommentsFor(contentId).map((comment, index) => ({
        ...comment,
        id: `seed-${contentId}-${index}`,
        canDelete: false,
      })),
    [contentId],
  );
  const [storedComments, setStoredComments] = useState<CommentState[]>([]);
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});
  const [likeDeltas, setLikeDeltas] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const list = useMemo(
    () => [...storedComments, ...seedComments],
    [seedComments, storedComments],
  );

  useEffect(() => {
    let active = true;

    async function loadComments() {
      setIsLoading(true);
      setMessage(null);

      try {
        const response = await fetch(commentsUrl(contentId), {
          cache: "no-store",
          headers: {
            "x-comment-owner-token": getCommentOwnerToken(),
          },
        });

        if (!response.ok) throw new Error("Failed to load comments.");

        const data = (await response.json()) as StoredCommentResponse;
        if (active) {
          setStoredComments(data.comments ?? []);
        }
      } catch {
        if (active) {
          setMessage("Could not load saved comments right now.");
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadComments();

    return () => {
      active = false;
    };
  }, [contentId]);

  const add = async (event: FormEvent) => {
    event.preventDefault();
    const body = text.trim();
    if (!body || isSaving) return;

    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch(commentsUrl(contentId), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-comment-owner-token": getCommentOwnerToken(),
        },
        body: JSON.stringify({
          name,
          text: body,
        }),
      });

      if (!response.ok) throw new Error("Failed to save comment.");

      const data = (await response.json()) as CreatedCommentResponse;
      const createdComment = data.comment;
      if (createdComment) {
        setStoredComments((prev) => [createdComment, ...prev]);
      }
      setName("");
      setText("");
    } catch {
      setMessage("Could not save your comment. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const remove = async (commentId: string) => {
    if (deletingId) return;

    setDeletingId(commentId);
    setMessage(null);

    try {
      const response = await fetch(commentsUrl(contentId, commentId), {
        method: "DELETE",
        headers: {
          "x-comment-owner-token": getCommentOwnerToken(),
        },
      });

      if (!response.ok) throw new Error("Failed to delete comment.");

      setStoredComments((prev) => prev.filter((comment) => comment.id !== commentId));
    } catch {
      setMessage("Could not delete that comment.");
    } finally {
      setDeletingId(null);
    }
  };

  const toggleLike = (commentId: string) => {
    setLikedComments((prev) => {
      const nextLiked = !prev[commentId];

      setLikeDeltas((current) => ({
        ...current,
        [commentId]: nextLiked ? 1 : 0,
      }));

      return {
        ...prev,
        [commentId]: nextLiked,
      };
    });
  };

  return (
    <section className="mt-[clamp(48px,6vw,80px)]">
      <div className="mb-[26px] flex items-center gap-3.5">
        <h2 className="font-display text-[clamp(22px,3vw,28px)] font-bold tracking-[-0.6px] text-text">
          Comments
        </h2>
        <span className="font-mono text-xs text-accent">
          {isLoading ? (
            <span className="inline-flex items-center gap-1.5" aria-label="Loading comments count">
              (
              <span className="h-3 w-5 animate-pulse rounded-full bg-accent/30" />
              )
            </span>
          ) : (
            <>
              (<AnimatedNumber value={list.length} />)
            </>
          )}
        </span>
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
          maxLength={80}
        />
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={3}
          placeholder="Add to the conversation..."
          className="resize-y border-0 bg-transparent py-2 font-sans text-[15px] text-text outline-none"
          maxLength={1200}
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-faint">
            {message ?? (isLoading ? "Loading saved comments..." : "Your browser can delete comments it posted.")}
          </p>
          <button
            type="submit"
            disabled={isSaving || !text.trim()}
            className="cursor-pointer rounded-lg border-0 bg-accent px-[18px] py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.5px] text-accent-ink transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isSaving ? "Posting..." : "Post comment"}
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-5">
        {list.map((comment) => {
          const liked = likedComments[comment.id] ?? false;
          const likes = comment.likes + (likeDeltas[comment.id] ?? 0);

          return (
            <article key={comment.id} className="flex gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-soft font-display text-base font-bold text-accent">
                {(comment.name[0] ?? "?").toUpperCase()}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="font-display text-[15px] font-semibold text-text">{comment.name}</span>
                  <span className="font-mono text-[11px] text-faint">{comment.when}</span>
                  {comment.canDelete && (
                    <button
                      type="button"
                      onClick={() => remove(comment.id)}
                      disabled={deletingId === comment.id}
                      className="cursor-pointer border-0 bg-transparent font-mono text-[11px] text-faint transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === comment.id ? "Deleting..." : "Delete"}
                    </button>
                  )}
                </div>
                <p className="my-[5px] whitespace-pre-line font-sans text-[15px] leading-[1.55] text-text">
                  {comment.text}
                </p>
                <button
                  type="button"
                  onClick={() => toggleLike(comment.id)}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent font-mono text-xs",
                    liked ? "text-accent" : "text-faint",
                  )}
                >
                  <Icon name="heart" size={13} fill={liked ? "currentColor" : "none"} />{" "}
                  <AnimatedNumber value={likes} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
