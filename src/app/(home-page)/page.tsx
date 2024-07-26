import dynamic from "next/dynamic";
import HomePageHeroSection from "./_components/HomePageHeroSection";

import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogsList from "../(blogs)/_components/BlogsList";
import { Metadata } from "next";

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
  title: "Abolfazl Jamshidi - Frontend Engineer",
};

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
