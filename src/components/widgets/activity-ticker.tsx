"use client";

import { useEffect, useState } from "react";

import { ACTIVITY } from "@/data";
import { cn } from "@/lib/cn";

const ROW_HEIGHT = 22;

/** Vertically rotating project evidence feed. */
export function ActivityTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % ACTIVITY.length),
      3000,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-4 px-5 py-4">
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[2px] text-dim">
          ● Project evidence
        </span>
        <div className="h-[22px] flex-1 overflow-hidden">
          <div
            className="transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            style={{ transform: `translateY(${-index * ROW_HEIGHT}px)` }}
          >
            {ACTIVITY.map((item, idx) => (
              <div
                key={idx}
                className="flex h-[22px] items-center gap-2.5 overflow-hidden whitespace-nowrap font-mono text-[12.5px] text-text"
                title={`${item.source} · verified ${item.verifiedAt}`}
              >
                <span
                  className={cn(
                    "rounded-[3px] px-[7px] py-0.5 text-[9px] uppercase tracking-[1px]",
                    item.kind === "solo"
                      ? "bg-accent text-accent-ink"
                      : "border border-border bg-bg-soft text-dim",
                  )}
                >
                  {item.kind}
                </span>
                <span className="text-dim">{item.repo}</span>
                <span className="overflow-hidden text-ellipsis">{item.msg}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="whitespace-nowrap font-mono text-[11px] text-faint">
          {ACTIVITY[index].evidence}
        </span>
      </div>
    </div>
  );
}
