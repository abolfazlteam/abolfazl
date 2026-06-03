"use client";

import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/cn";

/** A pill switch that toggles light/dark. The knob sits right in dark mode. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className="relative h-6 w-10 shrink-0 cursor-pointer rounded-full border border-border bg-surface p-0"
    >
      <span
        className={cn(
          "absolute top-0.5 size-[18px] rounded-full bg-accent transition-[left] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
          isDark ? "left-[18px]" : "left-0.5",
        )}
      />
    </button>
  );
}
