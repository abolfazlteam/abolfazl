"use client";

import IconLink from "@/assets/icons/LinkIcon";
import { TProjectProps } from "@/constants/Projects.constants";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

type TTinderProjectCardProps = TProjectProps & {
  rotate?: number;
  width?: number;
  height?: number;
  index?: number;
};

const TinderProjectCard: React.FC<TTinderProjectCardProps> = ({
  height,
  width,
  index = 1,
  rotate = 10,
  src,
  title,
}) => {
  return (
    <motion.article
      className="absolute -translate-x-1/2 -translate-y-1/2 shadow-2xl will-change-transform"
      style={{
        perspective: "1000px",
        rotate: `${rotate}deg`,
        zIndex: index,
        width: `${width}px`,
        height: `${height}px`,
      }}
      initial={{
        rotate: `${rotate}deg`,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
        width,
        height,
        scale: 0.8,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
          delay: index * 0.12,
        },
        opacity: {
          duration: 0.5,
          ease: [0.23, 0.64, 0.13, 0.99],
        },
        scale: { duration: 0.2 },
      }}
      animate={{ y: 0, opacity: 1, x: 0 }}
      drag={"x"}
      whileTap={{ scale: 0.9, cursor: "grabbing" }}
      whileDrag={{ scale: 0.9, cursor: "grabbing" }}
    >
      <article
        style={{ width: `${width}px`, height: `${height}px`, zIndex: index }}
        className={`group relative cursor-pointer overflow-hidden rounded-10 shadow-lg`}
      >
        <Image
          src={src}
          fill
          className="z-0 h-full w-full object-cover object-center"
          alt="project title"
        />

        <div className="absolute h-full w-full bg-tinder-project-card-hover"></div>

        <div className="absolute left-0 top-0 z-[2] flex h-full w-full flex-col justify-end space-y-6 px-4 pb-10 pt-[41px]">
          <h4>
            <Link
              href={"/projects"}
              className="flex items-center justify-between text-2xl font-extrabold capitalize text-white"
            >
              {title}
              <IconLink className="[&_path]:stroke-white" />
            </Link>
          </h4>
        </div>
      </article>
    </motion.article>
  );
};

export default TinderProjectCard;
