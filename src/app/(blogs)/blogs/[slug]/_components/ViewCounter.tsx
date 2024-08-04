"use client";

import DotsLoader from "@/components/ui/DotsLoader";
import {
  getBlogViewsCount,
  updateBlogViewsCount,
} from "@/http-services/view-counter";
import { useEffect, useState } from "react";

interface IViewCounterProps {
  slug: string;
  shouldIncrement?: boolean;
}

const ViewCounter: React.FC<IViewCounterProps> = ({
  slug,
  shouldIncrement = false,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    if (shouldIncrement) {
      const fetcher = async () => {
        const data = await updateBlogViewsCount(slug);

        setViews(data?.views);
        setIsLoading(false);
      };

      fetcher();
    } else {
      const fetcher = async () => {
        const data = await getBlogViewsCount(slug);
        setViews(data?.views);
        setIsLoading(false);
      };

      fetcher();
    }
  }, [slug, shouldIncrement]);

  return (
    <div className="space-x-2">
      {isLoading && !views ? (
        <DotsLoader />
      ) : (
        <span className="text-xs tracking-wide md:text-caption2">
          {views && views > 1 ? `${views} view` : `${views} views`}
        </span>
      )}
    </div>
  );
};

export default ViewCounter;
