import { cn } from "@/lib/cn";

interface ImagePlaceholderProps {
  /** Caption shown in the empty slot. */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 9". */
  aspect?: string;
  className?: string;
}

/**
 * Styled stand-in for imagery (portrait, gallery, blog covers). Real images
 * drop in later via next/image; for now these mirror the design's empty slots.
 */
export function ImagePlaceholder({ label, aspect = "4 / 3", className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border border-border bg-bg-soft",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <span className="px-4 text-center font-mono text-[11px] uppercase tracking-[1px] text-faint">
        {label}
      </span>
    </div>
  );
}
