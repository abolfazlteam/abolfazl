import type { Metadata } from "next";
import type { ReactNode } from "react";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { TopBar } from "@/components/layout/top-bar";
import { SearchProvider } from "@/components/search/search-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { PERSON } from "@/data";
import { fontVariables } from "@/lib/fonts";
import { SITE_KEYWORDS, SITE_URL } from "@/lib/seo";

import "./globals.css";

const TAGLINE = `${PERSON.name} | React, Next.js & DevOps Engineer`;
const SITE_DESCRIPTION =
  "Portfolio of Abolfazl Jamshidi, a React, Next.js, TypeScript, and DevOps engineer in Tehran building production dashboards, portals, marketplaces, authentication flows, frontend architecture, Docker builds, GitLab CI pipelines, and Kubernetes-ready delivery workflows.";
const GA_MEASUREMENT_ID =
  process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID ??
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

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
            "@id": `${SITE_URL}/#person`,
            name: PERSON.name,
            alternateName: PERSON.handle,
            url: SITE_URL,
            email: PERSON.email,
            jobTitle: "React, Next.js and DevOps Engineer",
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
              "DevOps Engineering",
              "Docker",
              "GitLab CI",
              "Linux",
              "Kubernetes",
            ],
            hasOccupation: [
              {
                "@type": "Occupation",
                name: "Frontend Developer",
                skills: "React, Next.js, TypeScript, JavaScript, frontend architecture",
              },
              {
                "@type": "Occupation",
                name: "DevOps Engineer",
                skills: "Docker, GitLab CI/CD, Linux, Kubernetes, CI/CD workflows",
              },
            ],
            sameAs: [PERSON.github, PERSON.linkedin, PERSON.medium],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
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
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <SearchProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
