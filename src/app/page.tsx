"use client";

// TEMPORARY — P0 foundations check. Verifies fonts, design tokens, accent
// colors, animation tokens and live theme switching. Replaced by the real
// home page in P2.

import { useTheme } from "@/hooks/use-theme";
import type { AccentName } from "@/types";

const TOKENS = [
  "bg",
  "bg-soft",
  "surface",
  "border",
  "line",
  "accent",
] as const;

const ACCENTS: AccentName[] = ["mint", "amber", "violet", "sky", "rose"];

export default function FoundationsCheck() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-12 px-6 py-20">
      <header className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-dim">
          <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
          P0 · Foundations
        </div>
        <button
          onClick={toggleTheme}
          className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wide text-text transition hover:border-accent"
        >
          Theme: {theme}
        </button>
      </header>

      <section className="flex flex-col gap-4">
        <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-text">
          I build things that work.
        </h1>
        <p className="max-w-prose font-sans text-lg leading-relaxed text-dim">
          The design system is wired up: display, sans, and mono families load
          via <span className="text-text">next/font</span>, and every color is a
          theme-aware token. Toggle the theme — it persists and never flashes.
        </p>
        <code className="font-mono text-sm text-accent">
          const stack = [&quot;Next.js&quot;, &quot;React&quot;, &quot;Tailwind v4&quot;];
        </code>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono text-xs uppercase tracking-widest text-faint">
          Semantic tokens
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {TOKENS.map((token) => (
            <div key={token} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-lg border border-line"
                style={{ background: `var(--${token})` }}
              />
              <span className="font-mono text-[10px] text-dim">{token}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono text-xs uppercase tracking-widest text-faint">
          Project accents
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {ACCENTS.map((accent) => (
            <div key={accent} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-lg"
                style={{ background: `var(--accent-${accent})` }}
              />
              <span className="font-mono text-[10px] text-dim">{accent}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
