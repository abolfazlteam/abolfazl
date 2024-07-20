import HomePageHeroSection from "./_components/HomePageHeroSection";

import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogsList from "../(blogs)/_components/BlogsList";
import { Metadata } from "next";
import ProjectsList from "../(projects)/_components/ProjectsList";
// import { rammettoOne } from "../fonts";

// import { Rammetto_One, Alexandria } from "next/font/google";

// const rammettoOne = Rammetto_One({
//   subsets: ["latin"],
//   weight: ["400"],
//   preload: false,
// });

// const alexandria = Alexandria({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   preload: false,
// });

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
        <ProjectsList />
      </Section>
    </main>
  );
};

export default Page;
