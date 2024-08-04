/* eslint-disable no-irregular-whitespace */
import IconHeart from "@/assets/icons/HeartIcon";
import ShareButton from "@/components/ui/ShareButton";
import { isLikeArticleFeatureReleased } from "@/constants/FeatureFlag.constants";
import ViewCounter from "./ViewCounter";
import formatPublishedDateHandler from "@/utils/date";

interface IBlogHeaderProps {
  title: string;
  publishedAt: string;
  shareLink: string;
  slug: string;
  readTime?: number;
}

const BlogHeader: React.FC<IBlogHeaderProps> = ({
  publishedAt,
  shareLink,
  title,
  slug,
}) => {
  return (
    <header className="mb-11 mt-12 space-y-2 md:mb-12 md:mt-14 md:space-y-5">
      <span className="text-body2 text-gray-4">
        {formatPublishedDateHandler(publishedAt)}
      </span>

      <h1 className="text-body2 font-semibold text-heading md:text-xl">
        {title}
      </h1>

      <div className="flex items-center justify-between py-2 md:py-4">
        <div className="flex items-center gap-8">
          <ViewCounter shouldIncrement slug={slug} />
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
          <ShareButton url={shareLink} />
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
