"use client";

import { useState, useRef, useEffect } from "react";
import IconArrowDownCircle from "@/assets/icons/ArrowDownCircle";
import BlogSeriesLink from "./BlogSeriesLink";
import { alexandria } from "@/app/fonts";
import textEllipsisFormatter from "@/utils/text-ellipsis";

interface IBlogSeriesProps {
  seriesLinks: {
    title: string;
    link?: string;
    isCurrent?: boolean;
    episode: number;
  }[];
}

const BlogSeries: React.FC<IBlogSeriesProps> = ({ seriesLinks }) => {
  const [isSeriesBoxOpen, setIsSeriesBoxOpen] = useState(false);
  const [listHeight, setListHeight] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  // get the article series that isCurrent is set to true
  const currentArticleOfSeries = seriesLinks?.find((link) => link?.isCurrent);
  // total articles series length
  const totalArticlesInSeries = seriesLinks?.length;

  const handleOpenSeriesBox = () => {
    setIsSeriesBoxOpen(!isSeriesBoxOpen);
  };

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.scrollHeight);
    }
  }, [isSeriesBoxOpen]);

  return (
    <div className="rounded-10 bg-tertiary-bg px-2 py-4 transition-all delay-150 duration-150 ease-linear md:pl-6 md:pr-8">
      <div
        className={`flex justify-between ${isSeriesBoxOpen && "border-b border-[#ABB2BF] pb-6 pt-4"} cursor-pointer transition-all delay-150 duration-150 ease-linear`}
        onClick={handleOpenSeriesBox}
        onKeyDown={handleOpenSeriesBox}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-col space-y-6">
          <span
            className={`${alexandria.className} text-caption2 font-medium capitalize text-[#626872] dark:text-[#ABB2BF] md:text-body2`}
          >
            series
          </span>
          <span
            className={`${alexandria.className} text-caption2 font-medium md:text-caption1`}
          >
            {textEllipsisFormatter(currentArticleOfSeries?.title as string, 30)}{" "}
            |{" "}
            <span className="text-[#626872] dark:text-[#ABB2BF]">
              {currentArticleOfSeries?.episode} of {totalArticlesInSeries}
            </span>
          </span>
        </div>

        <div className="flex justify-center md:items-center">
          <IconArrowDownCircle
            viewBox="0 0 54 54"
            className={`h-8 w-8 cursor-pointer transition-all duration-150 ease-linear md:h-12 md:w-12 [&_path]:stroke-[#626872] dark:[&_path]:stroke-[#ABB2BF] ${isSeriesBoxOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      {/* list items links */}
      <ul
        ref={listRef}
        style={{
          maxHeight: isSeriesBoxOpen ? `${listHeight}px` : "0",
        }}
        className={`space-y-6 overflow-hidden pt-6 transition-all duration-500 ease-linear ${
          isSeriesBoxOpen ? "opacity-100 delay-150" : "opacity-0"
        }`}
      >
        {seriesLinks?.map((link) => (
          <BlogSeriesLink key={link?.title} href={link?.link}>
            {link?.title}
          </BlogSeriesLink>
        ))}
      </ul>
    </div>
  );
};

export default BlogSeries;
