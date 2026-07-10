"use client";

import { useCallback, useSyncExternalStore } from "react";

import {
  applyTheme,
  DEFAULT_THEME,
  getCurrentTheme,
  isTheme,
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

function subscribe(onChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    // Cross-tab: mirror another tab's choice onto this document, then notify.
    if (event.key === THEME_STORAGE_KEY && isTheme(event.newValue)) {
      document.documentElement.dataset.theme = event.newValue;
    }
    onChange();
  };
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export interface UseThemeResult {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Reads and controls the color theme. Backed by the document's `data-theme`
 * attribute via `useSyncExternalStore`, so it is SSR-safe (server snapshot is
 * the default) and needs no provider.
 */
export function useTheme(): UseThemeResult {
  const theme = useSyncExternalStore(
    subscribe,
    getCurrentTheme,
    () => DEFAULT_THEME,
  );

  const setTheme = useCallback((next: Theme) => applyTheme(next), []);

  const toggleTheme = useCallback(() => {
    applyTheme(getCurrentTheme() === "dark" ? "light" : "dark");
  }, []);

  return { theme, setTheme, toggleTheme };
}
