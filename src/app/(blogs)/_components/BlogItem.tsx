"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import blogHoverImage from "../../../../public/images/blog-hover-img.png";
import getRelativeCoordinates from "@/utils/getRelativeCoordinates";
import { useInView } from "framer-motion";
import { IBlogItemProps } from "./BlogItem.types";
import { alexandria } from "@/app/fonts";

const BlogItem: React.FC<IBlogItemProps> = ({
  shouldHaveAnimation = false,
  animationDirection = "right",
}) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 240, y: -324 });

  // useInView ref
  const blogItemRef = useRef(null);
  const isInView = useInView(blogItemRef, {
    once: true,
  });

  // heading hover ref
  const headingRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setShowImage(true);
    const position = getRelativeCoordinates(
      e,
      headingRef.current as unknown as HTMLHeadingElement,
    );

    setMousePosition(position);
  };

  const imageWidth = 300;
  const imageHeight = 150;
  const imageOffset = 164;

  return (
    <article
      className={`group rounded-10 transition-all duration-300 ease-in-out ${shouldHaveAnimation ? (isInView ? "translate-x-0 opacity-100" : `${animationDirection === "left" ? "-translate-x-40" : "translate-x-40"} opacity-0`) : "translate-x-0 opacity-100"}`}
      ref={blogItemRef}
    >
      <Link
        href={"/blogs/1"}
        className={`flex w-full max-w-[800px] flex-col gap-6 rounded-10 bg-gray-7 px-6 pb-4 pt-6 shadow-sm transition-all duration-300 ease-linear group-hover:shadow-lg max-md:group-hover:-translate-y-2 ${alexandria.className}`}
      >
        {/* date */}
        <span className="text-sm font-light leading-6 text-text-secondary md:text-base">
          Aug 24, 2022
        </span>
        <h2
          ref={headingRef}
          className="relative text-lg font-semibold leading-9 text-text-secondary md:text-xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShowImage(false)}
        >
          Build-Time Syntax Highlighting: Zero Client-Side JS, Support for 100+
          Languages and Any VSCode Theme
          {/* image */}
          {showImage && (
            <Image
              src={blogHoverImage}
              style={{
                top: mousePosition.y / imageHeight - imageOffset,
                left: mousePosition.x - imageWidth / 2,
              }}
              width={imageWidth}
              height={imageHeight}
              className={`absolute -top-[10rem] transition-all duration-100 ease-linear`}
              alt="image of blog"
              placeholder="blur"
            />
          )}
        </h2>

        <p className="text-base font-light leading-6 text-text-secondary md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque...
        </p>

        <div className="mt-2 flex items-center gap-11 font-light text-text-secondary">
          <span className="text-xs leading-6 md:text-sm">21,189 views</span>
          <span className="text-xs leading-6 md:text-sm">225,228 likes</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogItem;
