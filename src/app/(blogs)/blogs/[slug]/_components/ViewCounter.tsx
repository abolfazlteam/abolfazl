/* eslint-disable no-irregular-whitespace */
"use client";

import { getBlogViewsCount } from "@/http-services/view-counter";
import { useEffect, useState } from "react";

interface IViewCounterProps {
  slug: string;
}

const ViewCounter: React.FC<IViewCounterProps> = ({ slug }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      const data = await getBlogViewsCount(slug);

      setViews(data?.views);
      setIsLoading(false);
    };

    fetcher();
  }, [slug]);

  return (
    <p className="space-x-2">
      {isLoading && !views ? (
        <span>...</span>
      ) : (
        <span className="text-xs tracking-wide md:text-caption2">
          {views} views
        </span>
      )}
    </p>
  );
};

export default ViewCounter;
