"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const DEFAULT_GA_MEASUREMENT_ID = "G-BF6HH1FC70";
const CLIENT_GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID ?? DEFAULT_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (
      command: "config",
      measurementId: string,
      config?: Record<string, unknown>,
    ) => void;
  }
}

function RouteAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const isInitialPath = useRef(true);

  useEffect(() => {
    if (!pathname) return;

    if (isInitialPath.current) {
      isInitialPath.current = false;
      return;
    }

    if (typeof window.gtag !== "function") return;

    window.gtag("config", measurementId, {
      page_path: `${pathname}${window.location.search}`,
      page_title: document.title,
    });
  }, [measurementId, pathname]);

  return null;
}

export function GoogleAnalytics({ measurementId = CLIENT_GA_MEASUREMENT_ID }: { measurementId?: string }) {
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${JSON.stringify(measurementId)}, {
              page_path: window.location.pathname + window.location.search,
              page_title: document.title
            });
          `,
        }}
      />
      <RouteAnalytics measurementId={measurementId} />
    </>
  );
}
