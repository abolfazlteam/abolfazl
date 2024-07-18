import Image from "next/image";
import { Rammetto_One } from "next/font/google";
// import { rammettoOne } from "../fonts";

const rammettoOne = Rammetto_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
});

const HomePageHeroSection = () => {
  return (
    <section className="flex h-full max-h-[650px] flex-col items-center gap-6 sm:mt-20 sm:max-h-[380px] sm:flex-row md:gap-8">
      <article className="flex w-full flex-col gap-4 md:gap-8">
        <header className={`${rammettoOne.className}`}>
          <h1 className="text-xl leading-8 lg:text-[1.9rem] lg:leading-[3.4rem]">
            Abolfazl Jamshidi
          </h1>
          <p className="text-lg leading-8 text-primary lg:text-[1.8rem] lg:leading-[3rem]">
            Front-end developer
          </p>
        </header>

        <p className="text-base leading-6 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Egestas purus viverra accumsan
        </p>
      </article>

      <figure className="relative -order-1 h-full max-h-[344px] w-full max-w-[344px] overflow-hidden rounded-10 sm:order-1 md:max-h-[386px] md:max-w-[384px]">
        <Image
          src={"/images/hero-img.png"}
          fill
          priority
          decoding="sync"
          quality={90}
          alt="abolfazl is here"
          className="h-full w-full object-cover object-center"
        />
      </figure>
    </section>
  );
};

export default HomePageHeroSection;
