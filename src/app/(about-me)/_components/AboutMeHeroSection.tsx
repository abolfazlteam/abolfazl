import { Rammetto_One } from "next/font/google";
import Gallery from "./Gallery";
import Image from "next/image";
// import { rammettoOne } from "../fonts";
import myImage from "../../../../public/images/me.jpeg";

const rammettoOne = Rammetto_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

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
            src={myImage}
            alt=""
            width={300}
            height={300}
            priority
            decoding="sync"
            // sizes="(max-width: 500px) 50vw, (max-width: 750px) 33vw, (max-width: 995px) 25vw, (max-width: 1125px) 22vw, (max-width: 1280px) 21vw, 33vw"
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <figure className="relative -left-6 top-4 block h-[255px] w-[190px] rotate-[7.39deg] select-none overflow-hidden rounded-20 transition-all duration-150 ease-in-out hover:z-10 md:left-14 md:top-8 md:h-[250px] md:w-[230px] md:hover:left-16">
          <Image
            src={myImage}
            alt=""
            width={300}
            height={300}
            priority
            decoding="sync"
            // sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 26vw, (max-width: 1560px) 14vw, 15vw"
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>

      {/* images gallery */}
      <section className="hidden md:block">
        <Gallery />
      </section>

      {/* description */}
      <p className="text-base font-light leading-6 md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
        porta lorem mollis. Morbi tristique senectus et netus. Mattis
        pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et
        molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed
        ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at
        consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
        enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et
        molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna.
        Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim
        blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat
        in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed.
        Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
      </p>
    </section>
  );
};

export default AboutMeHeroSection;
