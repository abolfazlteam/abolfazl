import dynamic from "next/dynamic";
import HomePageHeroSection from "./_components/HomePageHeroSection";

import Header from "@/components/ui/Header";
import Section from "@/components/ui/Section";
import BlogsList from "../(blogs)/_components/BlogsList";
import { Metadata } from "next";
import Slider from "@/components/ui/Slider";

const DynamicProjectList = dynamic(
  () => import("../(projects)/_components/ProjectsList"),
  {
    ssr: false,
  },
);

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
        <section className="hidden md:block">
          <DynamicProjectList />
        </section>

        <section className="block md:hidden">
          <Slider />
        </section>
      </Section>
    </main>
  );
};

export default Page;
