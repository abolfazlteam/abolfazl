import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Self-hosted Google fonts, exposed as CSS variables.
 *
 * These raw family variables are mapped to the semantic design-system tokens
 * (`--font-display` / `--font-sans` / `--font-mono`) in `globals.css`, so
 * components only ever reference the semantic names.
 */

/** Display — bold grotesk used for headings. */
export const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

/** Body / UI sans. */
export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Mono — labels, code, numbers. */
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

/** Combined `className` for the <html> element, wiring up all font variables. */
export const fontVariables = [
  fontDisplay.variable,
  fontSans.variable,
  fontMono.variable,
].join(" ");
