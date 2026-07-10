import type { ReactNode } from "react";

interface SectionHeadProps {
  /** Section number, e.g. "01". */
  n: string;
  title: string;
  /** Optional content pinned to the right of the rule. */
  right?: ReactNode;
}

/** A numbered section header: `(01) — TITLE ————————————` with optional right slot. */
export function SectionHead({ n, title, right }: SectionHeadProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs font-semibold text-accent">({n})</span>
      <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[2px] text-dim">
        {title}
      </span>
      <span className="h-px flex-1 bg-line" />
      {right}
    </div>
  );
}
