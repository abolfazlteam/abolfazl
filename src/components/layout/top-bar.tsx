"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useSearch } from "@/components/search/search-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Icon } from "@/components/ui/icon";
import { NAV_LINKS, pathForPage } from "@/data";
import { cn } from "@/lib/cn";
import type { PageId } from "@/types";

function isActivePath(pathname: string, id: PageId): boolean {
  const path = pathForPage(id);
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function TopBar() {
  const pathname = usePathname();
  const { open: openSearch } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-[clamp(20px,4vw,52px)] py-3.5">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-[11px] no-underline">
          <span className="flex size-[26px] items-center justify-center rounded-md bg-accent font-display text-base font-extrabold text-accent-ink">
            A
          </span>
          <span className="font-display text-base font-bold tracking-tight text-text">
            Abolfazl<span className="text-faint">.dev</span>
          </span>
        </Link>

        <nav className="flex items-center gap-[clamp(8px,1.5vw,22px)]">
          <span className="hidden items-center gap-[clamp(8px,1.5vw,22px)] md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.id);
              return (
                <Link
                  key={link.id}
                  href={pathForPage(link.id)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-1 py-1.5 font-mono text-xs uppercase tracking-wide no-underline transition-colors",
                    active ? "text-text" : "text-dim hover:text-text",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1 size-[5px] rounded-full bg-accent transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </span>

          <button
            type="button"
            onClick={openSearch}
            aria-label="Search"
            title="Search — ⌘K"
            className="inline-flex cursor-pointer items-center gap-[7px] rounded-full border border-border bg-surface px-2.5 py-1.5 text-dim transition hover:brightness-105"
          >
            <Icon name="search" size={14} strokeWidth={2.2} />
            <span className="hidden font-mono text-[10.5px] tracking-wide sm:inline">⌘K</span>
          </button>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface text-text md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={18} strokeWidth={2.2} />
          </button>
        </nav>
      </div>

      {menuOpen ? (
        <div className="flex flex-col border-t border-border px-[clamp(20px,4vw,52px)] pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.id);
            return (
              <Link
                key={link.id}
                href={pathForPage(link.id)}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-border-soft py-3.5 font-display text-xl font-semibold tracking-tight no-underline",
                  active ? "text-accent" : "text-text",
                )}
              >
                {link.label}
                <span className="font-mono text-[11px] text-faint">{link.n}</span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
