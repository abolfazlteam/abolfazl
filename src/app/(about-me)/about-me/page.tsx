// import { Rammetto_One } from "next/font/google";
import dynamic from "next/dynamic";
import AboutMeHeroSection from "../_components/AboutMeHeroSection";
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
    </main>
  );
};

export default Page;
