import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/ThemeProvider";
import { alexandria } from "./fonts";

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
          <div className="relative mx-auto max-w-[800px]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
