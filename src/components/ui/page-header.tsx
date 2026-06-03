import { NAV_LINKS } from "@/data";
import { Reveal } from "@/components/ui/reveal";
import type { PageId } from "@/types";

interface PageHeaderProps {
  /** Drives the `(0n) — Label` eyebrow from the nav data. */
  page: PageId;
  title: string;
  intro?: string;
}

/** Shared sub-page header: mono eyebrow, oversized display title, optional intro. */
export function PageHeader({ page, title, intro }: PageHeaderProps) {
  const link = NAV_LINKS.find((item) => item.id === page);
  const eyebrow = link ? `(${link.n}) — ${link.label}` : "";

  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[2px] text-accent">{eyebrow}</p>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="mt-3.5 font-display text-[clamp(44px,7vw,92px)] font-bold leading-[0.95] tracking-[-0.04em] text-text">
          {title}
        </h1>
      </Reveal>
      {intro ? (
        <Reveal delay={120}>
          <p className="mt-[22px] max-w-[540px] font-sans text-[17px] leading-relaxed text-dim">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
