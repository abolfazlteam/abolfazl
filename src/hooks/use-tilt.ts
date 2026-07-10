"use client";

import { useEffect, useRef } from "react";

/** Tilts the element in 3D toward the cursor while hovered. */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 6) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
    };
    const reset = () => {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [max]);

  return ref;
}
