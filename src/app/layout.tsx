import "./globals.css";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/ThemeProvider";
import { alexandria } from "./fonts";
import Navigation from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Abolfazl Jamshidi",
  description: "A Front-end Engineer keen on React, Next.JS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.className} bg-bgColor`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <NextTopLoader
            color="#43D9AD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #43D9AD,0 0 5px #43D9AD"
            zIndex={1600}
            showAtBottom={false}
          />
          <Navigation />

          <div className="relative mx-auto max-w-[800px]">
            {children}

            {/* Toolbar links */}
          </div>

          {/* Footer */}
        </ThemeProvider>
      </body>
    </html>
  );
}
