// import { Rammetto_One } from "next/font/google";
import dynamic from "next/dynamic";
import AboutMeHeroSection from "../_components/AboutMeHeroSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
// import { rammettoOne } from "../fonts";

const DynamicConnectionSection = dynamic(
  () => import("../_components/ConnectionListSection"),
  { ssr: false },
);

// const rammettoOne = Rammetto_One({
//   subsets: ["latin"],
//   weight: ["400"],
//   preload: true,
// });

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
      <DynamicConnectionSection />
      <Section>
        <SectionHeader
          title="work"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Egestas purus
          viverra accumsan"
        />
      </Section>
    </main>
  );
};

export default Page;
