import type { AccentName } from "@/types";

/** The two supported color schemes. Dark is the default. */
export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "dark";

/** Dispatched on <window> when the theme changes within the current tab. */
export const THEME_CHANGE_EVENT = "themechange";

export const isTheme = (value: unknown): value is Theme =>
  value === "dark" || value === "light";

/** Resolve a project accent name to its theme-aware CSS variable. */
export const accentVar = (accent: AccentName): string => `var(--accent-${accent})`;

/**
 * The live theme, read from the document. The no-flash script and `applyTheme`
 * keep `data-theme` authoritative, so this never disagrees with what's painted.
 * Browser-only.
 */
export function getCurrentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return isTheme(attr) ? attr : DEFAULT_THEME;
}

/** Apply a theme to the document, persist it, and notify listeners. Browser-only. */
export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable (private mode, etc.) — theme still applies for the session */
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

/**
 * Inline, render-blocking script that sets `data-theme` on <html> before the
 * first paint, preventing a flash of the wrong theme.
 */
export const NO_FLASH_THEME_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});document.documentElement.dataset.theme=(t==="light"||t==="dark")?t:${JSON.stringify(
  DEFAULT_THEME,
)};}catch(e){document.documentElement.dataset.theme=${JSON.stringify(DEFAULT_THEME)};}})();`;
