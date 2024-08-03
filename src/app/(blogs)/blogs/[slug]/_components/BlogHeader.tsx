/* eslint-disable no-irregular-whitespace */
import IconHeart from "@/assets/icons/HeartIcon";
import ShareButton from "@/components/ui/ShareButton";
// import ShareButton from "@/components/ui/ShareButton";
import { isLikeArticleFeatureReleased } from "@/constants/FeatureFlag.constants";
// import formatPublishedDateHandler from "@/utils/date";

// interface IBlogHeaderProps {
//   title: string;
//   publishedAt: string;
//   shareLink: string;
//   readTime: number;
// }

const BlogHeader = () => {
  return (
    <header className="mb-11 mt-12 space-y-2 md:mb-12 md:mt-14 md:space-y-5">
      <span className="text-body2 text-gray-4">Aug 24, 2022</span>

      <h1 className="text-body2 font-semibold text-heading md:text-xl">
        Build-Time Syntax Highlighting: Zero Client-Side JS, Support for
        Languages and Any VSCode Theme
      </h1>

      <div className="flex items-center justify-between py-2 md:py-4">
        <div className="flex items-center gap-8">
          <p className="space-x-2">
            <span className="text-xs tracking-wide md:text-caption2">
              21,189 views
            </span>
          </p>
          <p className="space-x-2">
            <span className="text-xs tracking-wide md:text-caption2">
              225,228 likes
            </span>
          </p>
          <p className="space-x-2">
            <span className="text-xs tracking-wide md:text-caption2">
              {/* ${readTime > 1 ? "Mins" : "Min"} */}
              {`2 Mins`}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-9">
          <ShareButton url={"/sdd"} />
          {isLikeArticleFeatureReleased && (
            <IconHeart
              viewBox="0 0 32 32"
              className="h-6 w-6 cursor-pointer md:h-8 md:w-8 [&_path]:stroke-text-primary"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
