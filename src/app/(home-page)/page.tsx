// import { Metadata } from "next";
import dynamic from "next/dynamic";

import HomePageHeroSection from "./_components/HomePageHeroSection";
import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogsList from "../(blogs)/_components/BlogsList";

const DynamicProjectList = dynamic(
  () => import("../(projects)/_components/ProjectsList"),
  {
    ssr: false,
  },
);

const DynamicTinderProjectList = dynamic(
  () => import("../(projects)/_components/TinderProjectsWrapper"),
  {
    ssr: false,
  },
);

// export const metadata: Metadata = {
//   title: "Abolfazl Jamshidi - Frontend Engineer",
//   description: `Hey there! Here, I share my insights on technology tools, my experience using tools and life updates.`,
//   authors: { name: "Abolfazl Jamshidi", url: "http://iabolfazl.dev" },
//   keywords: ["php", "software engineering", "backend"],
//   alternates: {
//     canonical: "https://iabolfazl.dev",
//   },
//   openGraph: {
//     title: "Abolfazl Jamshidi - Frontend Engineer",
//     description: `Hey there! Here, I share my insights on technology tools, my experience using tools and life updates.`,
//     images: ["https://iabolfazl.dev/images/me-1.jpg"],
//     url: "http://iabolfazl.dev",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     creator: "Abolfazl Jamshidi",
//     title: "Abolfazl Jamshidi - Frontend Engineer",
//     description: `Hey there! Here, I share my insights on technology tools, my experience using tools and life updates.`,
//     images: ["https://iabolfazl.dev/images/me-1.jpg"],
//     site: "http://iabolfazl.dev",
//   },
// };

const Page = () => {
  return (
    <main className="min-h-svh">
      <HomePageHeroSection />

      <Section>
        <Header title="latest blogs" href="/" />
        <BlogsList />
      </Section>

      <Section>
        <Header title="latest projects" />
        <section className="hidden md:block">
          <DynamicProjectList />
        </section>

        <section className="block md:hidden">
          <DynamicTinderProjectList />
        </section>
      </Section>
    </main>
  );
};

export default Page;
