"use client";
import { useEffect, useState } from "react";

export const useMatchMedia = (mediaQuery: string): boolean => {
  const [isMatching, setIsMatching] = useState<boolean>(false);

  useEffect(() => {
    if (window !== undefined) {
      const watcher = window.matchMedia(mediaQuery);

      setIsMatching(watcher.matches);

      // listening for changes
      const listener = (matches: MediaQueryListEventInit) => {
        setIsMatching(matches.matches as boolean);
      };

      if (watcher.addEventListener) {
        watcher.addEventListener("change", listener);
      } else {
        watcher.removeEventListener("change", listener);
      }

      return () => {
        return watcher.removeEventListener("change", listener);
      };
    }
  }, [mediaQuery]);

  return isMatching;
};
