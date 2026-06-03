"use client";

import type { CSSProperties, ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  /** Initial downward offset in px. */
  y?: number;
  className?: string;
  style?: CSSProperties;
}

/** Fades + slides its children in once they scroll into view. */
export function Reveal({ children, delay = 0, y = 14, className, style }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        opacity: inView ? 1 : 0,
        transition: `transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms, opacity 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
