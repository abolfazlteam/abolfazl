"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Reveals once when the element scrolls into view. Includes a short timeout
 * fallback so content is never stuck hidden if IntersectionObserver never fires.
 */
export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0.15,
  rootMargin,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Safety net: reveal shortly even if the observer never reports.
    const fallback = window.setTimeout(() => setInView(true), 40);
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
}
