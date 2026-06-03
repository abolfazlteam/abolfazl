"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  /** When set, renders a Link instead of a <button>. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  className?: string;
  "aria-label"?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-ink",
  secondary: "border-[1.5px] border-line bg-transparent text-text",
};

const BASE_CLASSES =
  "inline-flex cursor-pointer items-center justify-center rounded px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-wide no-underline transition-[filter,background-color,color,border-color] duration-200 hover:brightness-105";

/**
 * Magnetic call-to-action. Renders a Link when `href` is set, otherwise a
 * button. The magnetic pull lives on the wrapper so both variants get it.
 */
export function Button({
  children,
  variant = "secondary",
  href,
  onClick,
  type = "button",
  className,
  ...rest
}: ButtonProps) {
  const ref = useMagnetic<HTMLSpanElement>(0.2);
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);

  return (
    <span
      ref={ref}
      className="inline-block transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
    >
      {href ? (
        <Link href={href} className={classes} onClick={onClick} {...rest}>
          {children}
        </Link>
      ) : (
        <button type={type} className={classes} onClick={onClick} {...rest}>
          {children}
        </button>
      )}
    </span>
  );
}
