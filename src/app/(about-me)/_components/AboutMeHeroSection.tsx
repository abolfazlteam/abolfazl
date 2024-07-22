import { Rammetto_One } from "next/font/google";
// import { rammettoOne } from "../fonts";

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

      {/* images gallery here like b-r.io */}
      <div className="border border-red-500"></div>

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
