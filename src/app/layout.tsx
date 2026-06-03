import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { TopBar } from "@/components/layout/top-bar";
import { SearchProvider } from "@/components/search/search-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { PERSON } from "@/data";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

const SITE_URL = "https://iabolfazl.dev";
const TAGLINE = `${PERSON.name} — Front-end Developer & DevOps Intern`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TAGLINE,
    template: `%s · ${PERSON.name}`,
  },
  description: PERSON.shortBlurb,
  openGraph: {
    title: TAGLINE,
    description: PERSON.shortBlurb,
    url: SITE_URL,
    siteName: PERSON.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TAGLINE,
    description: PERSON.shortBlurb,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: the no-flash script sets data-theme before React hydrates.
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col font-sans">
        {/* Without JS, scroll-reveal elements never run their observer — keep them visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ThemeScript />
        <SearchProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
