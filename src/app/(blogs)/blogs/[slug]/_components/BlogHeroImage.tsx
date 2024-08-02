import Image from "next/image";

interface IBlogHeroImageProps {
  src: string;
}

const BlogHeroImage: React.FC<IBlogHeroImageProps> = ({ src }) => {
  return (
    <>
      <figure className="relative h-[350px] w-full overflow-hidden rounded-10 sm:h-[400px]">
        <Image
          src={src}
          // alt={`${article.title} article image`}
          alt={`article image`}
          fill
          className="mx-auto h-full w-full object-cover object-center"
          style={{ "--index": 2 } as React.CSSProperties}
          priority
          quality={100}
        />
      </figure>
      <div className="h-16" />
    </>
  );
};

export default BlogHeroImage;
