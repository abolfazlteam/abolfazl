import Link from "next/link";
import type { ReactNode } from "react";

import { NAV_LINKS, PERSON, pathForPage } from "@/data";

const LINK_CLASS = "font-sans text-sm text-text no-underline transition-opacity hover:opacity-60";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-3.5 font-mono text-[10px] uppercase tracking-[1.5px] text-faint">{title}</h2>
      <div className="flex flex-col gap-[9px]">{children}</div>
    </div>
  );
}

const SOCIAL_LINKS = [
  { label: "GitHub →", href: PERSON.github },
  { label: "Medium →", href: PERSON.medium },
  { label: "LinkedIn →", href: PERSON.linkedin },
] as const;

export function Footer() {
  return (
    <footer className="mt-[clamp(64px,8vw,104px)] border-t border-border px-[clamp(20px,4vw,52px)] pb-[52px] pt-[clamp(56px,7vw,88px)]">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="font-display text-[clamp(32px,4.5vw,52px)] font-bold leading-[0.98] tracking-[-0.04em] text-text">
            Let&apos;s build something
            <br />
            worth keeping.
          </p>
          <Link
            href="/contact"
            className="mt-[22px] inline-block font-mono text-[13px] uppercase tracking-wide text-accent no-underline transition-opacity hover:opacity-60"
          >
            Start a conversation →
          </Link>
        </div>

        <FooterColumn title="Pages">
          {NAV_LINKS.map((link) => (
            <Link key={link.id} href={pathForPage(link.id)} className={LINK_CLASS}>
              {link.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Elsewhere">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={LINK_CLASS}
            >
              {social.label}
            </a>
          ))}
          <a href={`mailto:${PERSON.email}`} className={LINK_CLASS}>
            Email →
          </a>
        </FooterColumn>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-faint">
        <span>© 2026 {PERSON.name} · Built &amp; deployed by hand</span>
        <span className="inline-flex items-center gap-[7px]">
          <span className="size-[7px] rounded-full bg-accent animate-pulse-dot" /> available for work
        </span>
      </div>
    </footer>
  );
}
