import Gallery from "./Gallery";
import Image from "next/image";
import { ABOLFAZL_FIRST_IMAGE, ABOLFAZL_SECOND_IMAGE } from "@/constants";
import { rammettoOne } from "@/app/fonts";

const AboutMeHeroSection = () => {
  return (
    <section className="mt-0 space-y-10 sm:mt-14 md:mt-14">
      <header>
        <h1
          className={`text-xl font-bold leading-10 text-text-secondary lg:text-2xl ${rammettoOne.className} `}
        >
          I'm Abolfazl
        </h1>
        <span
          className="pt-3 text-sm text-text-secondary lg:text-base"
          data-testid="about-me-subtitle"
        >
          Just a quick glimpse
        </span>
      </header>

      <div className="mb-8 flex items-center justify-center md:hidden">
        <figure className="relative left-0 top-0 block h-[240px] w-[270px] -rotate-6 self-center overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:h-[240px] md:w-[320px] md:hover:left-24">
          <Image
            src={ABOLFAZL_FIRST_IMAGE}
            alt="Abolfazl's image"
            width={300}
            height={300}
            priority
            decoding="sync"
            quality={75}
            sizes="(max-width: 500px) 50vw, (max-width: 750px) 33vw, (max-width: 995px) 25vw, (max-width: 1125px) 22vw, (max-width: 1280px) 21vw, 33vw"
            className="h-full w-full object-cover object-top"
          />
        </figure>
        <figure className="relative -left-6 top-4 block h-[255px] w-[250px] rotate-[7.39deg] select-none overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-14 md:top-8 md:h-[250px] md:w-[230px] md:hover:left-16">
          <Image
            src={ABOLFAZL_SECOND_IMAGE}
            alt="Abolfazl's image"
            width={300}
            height={300}
            priority
            decoding="sync"
            quality={75}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 26vw, (max-width: 1560px) 14vw, 15vw"
            className="h-full w-full object-cover object-top"
          />
        </figure>
      </div>

      {/* images gallery */}
      <section className="hidden md:block">
        <Gallery />
      </section>

      {/* description */}
      <p className="text-base font-light leading-6 md:text-lg">
        Hey, I'm Abolfazl. I have been developing software for{" "}
        <strong>4 years</strong> and currently work as a frontend developer at
        Pardis Technology Park. In addition to coding, I like exploring and
        writing about <strong>technology</strong>,{" "}
        <strong>self-development</strong> and <strong>lifestyle</strong>.
      </p>
      <p className="text-base font-light leading-6 md:text-lg">
        While I'm not at my desk, I am probably lifting weights, riding my
        motorcycle, or exploring peace in nature/camping.
      </p>
    </section>
  );
};

export default AboutMeHeroSection;
