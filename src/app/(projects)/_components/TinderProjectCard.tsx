"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Tag from "./Tag";

type TTinderProjectCardProps = {
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
        className={`group relative cursor-pointer overflow-hidden rounded-10`}
      >
        <Image
          src={"/images/sample-project-img.png"}
          fill
          className="z-0 h-full w-full object-cover object-center"
          alt="project title"
        />

        <div className="absolute left-0 top-full z-[2] h-full w-full space-y-6 bg-project-card-hover px-4 pb-3 pt-[41px] transition-all duration-200 ease-in-out group-hover:top-0">
          <div className="space-y-3">
            <h4 className="text-lg font-extrabold capitalize text-white">
              React query
            </h4>
            <p className="text-base leading-6 text-white">
              Simplifies the use of React Query by offering a...
            </p>
          </div>
          {/* tags */}
          <div className="flex flex-wrap items-center gap-2">
            <Tag>typescript</Tag>
            <Tag>javascript</Tag>
            <Tag>vite</Tag>
          </div>
        </div>
      </article>
    </motion.article>
  );
};

export default TinderProjectCard;
