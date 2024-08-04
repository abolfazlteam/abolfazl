/* eslint-disable no-irregular-whitespace */
"use client";

import { getBlogViewsCount } from "@/http-services/view-counter";
import { useEffect } from "react";

interface IViewCounterProps {
  slug: string;
}

const ViewCounter: React.FC<IViewCounterProps> = ({ slug }) => {
  console.log(slug);

  useEffect(() => {
    getBlogViewsCount(slug);
  }, [slug]);

  return (
    <p className="space-x-2">
      <span className="text-xs tracking-wide md:text-caption2">
        21,189 views
      </span>
    </p>
  );
};

export default ViewCounter;
