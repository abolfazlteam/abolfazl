"use client";

import Image from "next/image";
import Tag from "./Tag";
import { TProjectProps } from "@/constants/Projects.constants";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Link from "next/link";

type TProjectCardProps = TProjectProps & {
  width?: number;
  height?: number;
  className?: string;
};

const ProjectCard: React.FC<TProjectCardProps> = ({
  description,
  src,
  tags,
  title,
  width = 240,
  height = 240,
  className,
  slug,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Link
      href={`/projects/${slug}`}
      className="inline-block w-full"
      style={{ maxWidth: `${width}px`, height: `${height}px` }}
    >
      <article
        style={{ maxWidth: `${width}px`, height: `${height}px` }}
        className={twMerge(
          "group relative w-full cursor-pointer overflow-hidden rounded-10 shadow-md",
          className,
        )}
      >
        {loading && (
          <div className="absolute z-10 h-full w-full animate-pulse rounded-[inherit] bg-gray-100"></div>
        )}

        <Image
          src={src}
          fill
          style={{
            visibility: loading ? "hidden" : "visible",
          }}
          className="z-0 h-full w-full object-cover"
          alt="project title"
          onLoad={() => {
            setLoading(false);
          }}
        />

        <div className="invisible absolute h-full w-full bg-project-card-hover opacity-0 duration-300 ease-linear first-letter:transition-all group-hover:visible group-hover:opacity-100"></div>

        <div className="absolute left-0 top-full z-[2] flex h-full w-full flex-col justify-end space-y-6 px-4 pb-3 pt-[41px] transition-all duration-500 ease-in-out group-hover:top-0">
          <div className="space-y-3">
            <h4 className="text-lg font-extrabold capitalize text-white">
              {title}
            </h4>
            <p className="text-base leading-6 text-white">
              {description.slice(0, 55)}...
            </p>
          </div>
          {/* tags */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
