import Image from "next/image";

import { cn } from "@/lib/cn";

interface ImagePlaceholderProps {
  /** Caption shown in the empty slot. */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 9". */
  aspect?: string;
  /** Optional public/static image path. Falls back to the placeholder label when absent. */
  src?: string;
  alt?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  quality?: 75 | 100;
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
}

/**
 * Styled imagery slot. Renders a real image when `src` is provided, otherwise
 * keeps the designed placeholder state.
 */
export function ImagePlaceholder({
  label,
  aspect = "4 / 3",
  src,
  alt,
  sizes = "(min-width: 880px) 420px, calc(100vw - 40px)",
  loading = "lazy",
  quality = 100,
  fit = "cover",
  className,
  imageClassName,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-soft",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes={sizes}
          loading={loading}
          quality={quality}
          className={cn(
            fit === "cover" ? "object-cover" : "object-contain",
            imageClassName,
          )}
        />
      ) : (
        <span className="px-4 text-center font-mono text-[11px] uppercase tracking-[1px] text-faint">
          {label}
        </span>
      )}
    </div>
  );
}
