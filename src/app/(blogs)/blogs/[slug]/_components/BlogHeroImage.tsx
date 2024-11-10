// import { alexandria } from "@/app/fonts";
import { Markdown } from "contentlayer/core";
import Image from "next/image";
// import { twMerge } from "tailwind-merge";

interface IBlogHeroImageProps {
  src: string;
  caption?: Markdown;
  alt?: string;
}

const BlogHeroImage: React.FC<IBlogHeroImageProps> = ({ src, alt }) => {
  return (
    <>
      <figure className="relative h-[350px] w-full overflow-hidden rounded-10 sm:h-[400px]">
        <Image
          src={src}
          alt={`${alt} article image`}
          // alt={`article image`}
          fill
          className="mx-auto h-full w-full object-cover object-center"
          style={{ "--index": 2 } as React.CSSProperties}
          priority
          quality={100}
        />
        {/* {caption && (
          <figcaption
            className={twMerge(
              "mx-auto my-2 max-w-md text-center text-xs font-medium leading-tight text-text-primary",
              "mx-auto w-full max-w-[700px] px-6",
              alexandria.className,
            )}
          >
            {caption?.html}fdf
          </figcaption>
        )} */}
      </figure>
      <div className="h-16" />
    </>
  );
};

export default BlogHeroImage;
