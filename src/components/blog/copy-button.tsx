"use client";

import { useState } from "react";

import { cn } from "@/lib/cn";

/** Copies the given text to the clipboard with brief "copied" feedback. */
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "cursor-pointer border-0 bg-transparent font-mono text-[11px]",
        copied ? "text-accent" : "text-faint",
      )}
    >
      {copied ? "copied ✓" : "copy"}
    </button>
  );
}
