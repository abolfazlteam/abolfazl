import { Metadata } from "next";
import dynamic from "next/dynamic";

import { allBlogs } from "contentlayer/generated";

import HomePageHeroSection from "./_components/HomePageHeroSection";
import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogsList from "../(blogs)/_components/BlogsList";
import { mergeSortHandler } from "@/utils/index.utils";

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

export const metadata: Metadata = {
  title: "Abolfazl Jamshidi - Frontend Engineer - Content Creator",
  description: `Hey there! Here, I share my insights on technology tools, my experience using tools and life updates. I'm a frontend developer, optimist, and supportive team player. I love creating and presenting content about JavaScript, TypeScript, React, Next.js and more.`,
  authors: { name: "Abolfazl Jamshidi", url: "http://iabolfazl.dev" },
  keywords: [
    "frontend",
    "software engineering",
    "abolfazl jamshidi",
    "developer",
    "personal portfolio",
    "engineer",
    "front-end portfolio",
    "skilled frontend developer",
    "content creator",
  ],
  alternates: {
    canonical: "https://iabolfazl.dev",
  },
  openGraph: {
    title: "Abolfazl Jamshidi - Frontend Engineer - Content Creator",
    description: `Hey there! Here, I share my insights on technology tools, my experience using tools and life updates. I'm a frontend developer, optimist, and supportive team player. I love creating and presenting content about JavaScript, TypeScript, React, Next.js and more.`,
    url: "http://iabolfazl.dev",
    type: "website",
    images: "https://iabolfazl.dev/images/me-1.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Abolfazl Jamshidi",
    title: "Abolfazl Jamshidi - Frontend Engineer - Content Creator",
    description: `Hey there! Here, I share my insights on technology tools, my experience using tools and life updates. I'm a frontend developer, optimist, and supportive team player. I love creating and presenting content about JavaScript, TypeScript, React, Next.js and more.`,
    images: ["https://iabolfazl.dev/images/me-1.jpg"],
    site: "http://iabolfazl.dev",
  },
};

const Page = () => {
  const homePageFilteredBlogs = allBlogs?.filter(
    (item) => item?.featured && !item?.isDraft,
  );
  const reverseSortedBlogs = mergeSortHandler(homePageFilteredBlogs);

  return (
    <main className="min-h-svh">
      <HomePageHeroSection />

      <Section>
        <Header title="latest projects" href="/projects" />
        <section className="hidden md:block">
          <DynamicProjectList />
        </section>

        <section className="block md:hidden">
          <DynamicTinderProjectList />
        </section>
      </Section>

      <Section>
        <Header title="latest blogs" href="/blogs" />
        <BlogsList blogs={reverseSortedBlogs} />
      </Section>
    </main>
  );
};

export default Page;
