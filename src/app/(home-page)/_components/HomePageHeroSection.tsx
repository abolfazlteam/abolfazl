import { Rammetto_One } from "next/font/google";
import HeroImage from "./HeroImage";
// import { rammettoOne } from "../fonts";

const rammettoOne = Rammetto_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

const HomePageHeroSection = () => {
  return (
    <section className="flex h-full max-h-[650px] flex-col items-center gap-6 sm:mt-20 sm:max-h-[380px] sm:flex-row md:gap-8">
      <article className="flex w-full flex-col gap-4 md:gap-8">
        <header className={`${rammettoOne.className}`}>
          <h1 className="text-xl leading-8 md:text-[1.6rem] lg:text-[1.9rem] lg:leading-[3.4rem]">
            Abolfazl
          </h1>
          <p className="text-lg leading-8 text-primary md:text-[1.5rem] lg:text-[1.8rem] lg:leading-[3rem]">
            Front-end Developer
          </p>
        </header>

        <p className="text-base leading-8 md:leading-6 lg:text-lg">
          I'm a frontend developer, optimist, and supportive team player. I love
          creating and presenting content about JavaScript, TypeScript, React,
          Next.js and more. In addition, I love doing new and exciting things
          beyond the screen like riding a bike or spending my time in nature.
        </p>
      </article>

      <HeroImage />
    </section>
  );
};

export default HomePageHeroSection;
