import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ThemeScript } from "@/components/theme/theme-script";
import { PERSON } from "@/data";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: `${PERSON.name} — Front-end Developer & DevOps Intern`,
  description: PERSON.shortBlurb,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: the no-flash script sets data-theme before React hydrates.
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
