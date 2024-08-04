"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import getRelativeCoordinates from "@/utils/getRelativeCoordinates";
import { useInView } from "framer-motion";
import { IBlogItemProps } from "./BlogItem.types";
import { alexandria } from "@/app/fonts";
import textEllipsisFormatter from "@/utils/text-ellipsis";
import formatPublishedDateHandler from "@/utils/date";
import BlogItemHoverImage from "./BlogItemImageHover";
import ViewCounter from "../blogs/[slug]/_components/ViewCounter";

const BlogItem: React.FC<IBlogItemProps> = ({
  shouldHaveAnimation = false,
  animationDirection = "right",
  data,
}) => {
  const { slug, image, title, summary, publishedAt } = data;

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
        href={`/blogs/${slug}`}
        className={`flex w-full max-w-[800px] flex-col gap-6 rounded-10 bg-gray-7 px-6 pb-4 pt-6 shadow-sm transition-all duration-300 ease-linear group-hover:shadow-lg max-md:group-hover:-translate-y-2 ${alexandria.className}`}
      >
        {/* date */}
        <span className="text-sm font-light leading-6 text-text-secondary md:text-base">
          {formatPublishedDateHandler(publishedAt)}
        </span>
        <h2
          ref={headingRef}
          className="relative text-lg font-semibold leading-9 text-text-secondary md:text-xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShowImage(false)}
        >
          {title}
          {/* image */}
          {showImage && (
            <BlogItemHoverImage
              src={image}
              height={imageHeight}
              width={imageWidth}
              offset={imageOffset}
              mousePosition={mousePosition}
            />
          )}
        </h2>

        <p className="text-base font-light leading-6 text-text-secondary md:text-lg">
          {textEllipsisFormatter(summary, 200)}
        </p>

        <div className="mt-2 flex items-center gap-11 font-light text-text-secondary">
          <ViewCounter slug={slug} />
          <span className="text-xs leading-6 md:text-sm">225,228 likes</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogItem;
