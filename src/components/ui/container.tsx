import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Centered page container with the site's max content width and responsive
 * gutters. Header, footer and every page route through this so their edges
 * align and content never stretches too wide on large displays.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-[clamp(20px,4vw,52px)]", className)}>
      {children}
    </div>
  );
}
