"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

interface LikeButtonProps {
  initial: number;
  big?: boolean;
}

/** Front-end-only like toggle (no persistence). */
export function LikeButton({ initial, big = false }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const count = initial + (liked ? 1 : 0);

  return (
    <button
      type="button"
      onClick={() => setLiked((value) => !value)}
      aria-pressed={liked}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-[1.5px] font-mono text-xs font-semibold transition-all duration-200",
        big ? "px-4 py-[9px]" : "px-3 py-1.5",
        liked ? "border-accent bg-accent text-accent-ink" : "border-line bg-transparent text-text",
      )}
    >
      <span className={cn("transition-transform duration-200", liked ? "scale-[1.15]" : "scale-100")}>
        <Icon name="heart" size={big ? 16 : 14} fill={liked ? "currentColor" : "none"} />
      </span>
      {count}
    </button>
  );
}
