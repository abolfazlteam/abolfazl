"use client";

import Image from "next/image";
import { useState } from "react";

interface IBlogItemHoverImageProps {
  src: string;
  mousePosition: { x: number; y: number };
  height: number;
  width: number;
  offset: number;
}

const BlogItemHoverImage: React.FC<IBlogItemHoverImageProps> = ({
  src,
  mousePosition,
  height,
  width,
  offset,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && (
        <div className="absolute z-10 h-full w-full animate-pulse rounded-[inherit] bg-gray-100"></div>
      )}

      <Image
        src={src}
        style={{
          top: mousePosition.y / height - offset,
          left: mousePosition.x - width / 2,
          visibility: loading ? "hidden" : "visible",
        }}
        width={width}
        height={height}
        className={`absolute -top-[10rem] rounded-10 transition-all duration-100 ease-linear`}
        alt="image of blog"
        onLoad={() => {
          setLoading(false);
        }}
      />
    </>
  );
};

export default BlogItemHoverImage;
