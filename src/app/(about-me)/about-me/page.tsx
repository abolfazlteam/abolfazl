// import { Rammetto_One } from "next/font/google";
import AboutMeHeroSection from "../_components/AboutMeHeroSection";
// import { rammettoOne } from "../fonts";

// const rammettoOne = Rammetto_One({
//   subsets: ["latin"],
//   weight: ["400"],
//   preload: true,
// });

const Page = () => {
  return (
    <main className="min-h-svh">
      <AboutMeHeroSection />
    </main>
  );
};

export default Page;
