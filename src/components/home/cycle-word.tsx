"use client";

import { useEffect, useState } from "react";

interface CycleWordProps {
  words: string[];
}

/** Cycles through words with a fade + lift, accent-colored. */
export function CycleWord({ words }: CycleWordProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, 240);
    }, 2400);
    return () => window.clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block text-accent">
      <span
        className="inline-block transition-[opacity,transform] duration-[260ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
