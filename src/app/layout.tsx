import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/ThemeProvider";

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
    <html lang="en" className="light">
      <body className={""}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <NextTopLoader
            color="#7127ba"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #7127ba,0 0 5px #7127ba"
            zIndex={1600}
            showAtBottom={false}
          />
          <div className="relative mx-auto max-w-[800px]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
