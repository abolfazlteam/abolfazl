import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { TopBar } from "@/components/layout/top-bar";
import { SearchProvider } from "@/components/search/search-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { PERSON } from "@/data";
import { fontVariables } from "@/lib/fonts";
import { SITE_KEYWORDS, SITE_URL } from "@/lib/seo";

import "./globals.css";

const TAGLINE = `${PERSON.name} | React & Next.js Frontend Developer`;
const SITE_DESCRIPTION =
  "Portfolio of Abolfazl Jamshidi, a React, Next.js, and TypeScript frontend developer in Tehran building production dashboards, portals, marketplaces, authentication flows, and frontend architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TAGLINE,
    template: `%s · ${PERSON.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: "Abolfazl.dev",
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  keywords: SITE_KEYWORDS,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: TAGLINE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: PERSON.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TAGLINE,
    description: SITE_DESCRIPTION,
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: PERSON.name,
            alternateName: PERSON.handle,
            url: SITE_URL,
            email: PERSON.email,
            jobTitle: "React and Next.js Frontend Developer",
            description: SITE_DESCRIPTION,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tehran",
              addressCountry: "IR",
            },
            knowsAbout: [
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Frontend Architecture",
              "TanStack Query",
              "Design Systems",
              "Docker",
              "GitLab CI",
            ],
            sameAs: [PERSON.github, PERSON.linkedin, PERSON.medium],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Abolfazl.dev",
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: PERSON.name,
              url: SITE_URL,
            },
          }}
        />
        <SearchProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
