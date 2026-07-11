"use client";

import { useEffect, useState } from "react";

import { AnimatedNumber } from "@/components/ui/animated-number";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

interface LikeButtonProps {
  initial: number;
  big?: boolean;
  contentId?: string;
  loading?: boolean;
  onCountChange?: (count: number) => void;
}

/** Like toggle. Persists to Mongo when `contentId` is provided. */
export function LikeButton({
  initial,
  big = false,
  contentId,
  loading = false,
  onCountChange,
}: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [countOverride, setCountOverride] = useState<number | null>(null);
  const [pending, setPending] = useState(false);
  const count = countOverride ?? initial;

  useEffect(() => {
    if (!contentId) return;

    const timeout = window.setTimeout(() => {
      setLiked(window.localStorage.getItem(`liked:${contentId}`) === "true");
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [contentId]);

  const toggleLike = async () => {
    const nextLiked = !liked;
    const delta = nextLiked ? 1 : -1;
    const optimisticCount = Math.max(0, count + delta);

    setLiked(nextLiked);
    setCountOverride(optimisticCount);

    if (!contentId) {
      onCountChange?.(optimisticCount);
      return;
    }

    window.localStorage.setItem(`liked:${contentId}`, String(nextLiked));
    setPending(true);

    try {
      const response = await fetch(`/api/blog-stats/${encodeURIComponent(contentId)}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delta }),
      });

      if (!response.ok) throw new Error("Failed to update like count.");

      const data = (await response.json()) as { likes?: number };
      if (typeof data.likes === "number") {
        setCountOverride(data.likes);
        onCountChange?.(data.likes);
      }
    } catch {
      const rolledBackCount = Math.max(0, optimisticCount - delta);
      setLiked(liked);
      setCountOverride(rolledBackCount);
      window.localStorage.setItem(`liked:${contentId}`, String(liked));
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-pressed={liked}
      aria-busy={loading || pending}
      disabled={loading || pending}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-[1.5px] font-mono text-xs font-semibold transition-all duration-200",
        big ? "px-4 py-[9px]" : "px-3 py-1.5",
        liked ? "border-accent bg-accent text-accent-ink" : "border-line bg-transparent text-text",
      )}
    >
      <span className={cn("transition-transform duration-200", liked ? "scale-[1.15]" : "scale-100")}>
        <Icon name="heart" size={big ? 16 : 14} fill={liked ? "currentColor" : "none"} />
      </span>
      {loading ? (
        <span className="h-3 w-5 animate-pulse rounded-full bg-current/30" />
      ) : (
        <AnimatedNumber value={count} />
      )}
    </button>
  );
}
