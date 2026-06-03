"use client";

import { useClock } from "@/hooks/use-clock";

/** The live, ticking part of the status panel — a dynamic hole behind Suspense. */
export function LiveClock() {
  const clock = useClock(3.5);
  return (
    <span
      className="inline-flex items-center gap-[7px] font-mono text-xs text-text"
      suppressHydrationWarning
    >
      <span className="size-[7px] rounded-full bg-accent animate-pulse-dot" />
      {clock.hh}:{clock.mm}
      <span className="text-faint">:{clock.ss}</span> Tehran
    </span>
  );
}
