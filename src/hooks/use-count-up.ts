"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpOptions {
  duration?: number;
  enabled?: boolean;
  animateOnMount?: boolean;
}

/** Animate numeric counters with an ease-in curve: slow first, faster near the end. */
export function useCountUp(
  value: number,
  { duration = 850, enabled = true, animateOnMount = true }: CountUpOptions = {},
) {
  const target = Number.isFinite(value) ? Math.max(0, value) : 0;
  const initialValue = enabled && animateOnMount ? 0 : target;
  const [displayValue, setDisplayValue] = useState(initialValue);
  const previousValue = useRef(initialValue);

  useEffect(() => {
    if (!enabled) {
      previousValue.current = target;
      const frame = requestAnimationFrame(() => setDisplayValue(target));
      return () => cancelAnimationFrame(frame);
    }

    const from = previousValue.current;
    const delta = target - from;

    if (delta === 0) {
      return;
    }

    const startedAt = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = progress ** 2.4;
      const nextValue = Math.round(from + delta * eased);

      setDisplayValue(Math.max(0, nextValue));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
        return;
      }

      previousValue.current = target;
      setDisplayValue(target);
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [duration, enabled, target]);

  return displayValue;
}
