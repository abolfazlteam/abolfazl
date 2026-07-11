"use client";

import { useCountUp } from "@/hooks/use-count-up";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  locale?: string;
}

/** Locale-formatted count-up number for stats and social counters. */
export function AnimatedNumber({
  value,
  className,
  locale = "en-US",
}: AnimatedNumberProps) {
  const displayValue = useCountUp(value);

  return (
    <span className={className}>
      {displayValue.toLocaleString(locale)}
    </span>
  );
}
