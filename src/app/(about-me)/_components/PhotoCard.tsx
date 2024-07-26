"use client";

import useMousePosition from "@/hooks/usemouseposition";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, ReactNode, useRef } from "react";

type TPhotoCardProps = {
  src: string | StaticImageData;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: "right" | "left";
  filename?: string;
  meta?: ReactNode;
};

const PhotoCard: React.FC<TPhotoCardProps> = ({
  src,
  width,
  height,
  left,
  index,
  rotate,
  flipDirection = "left",
  filename,
  meta,
}) => {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-2xl overflow-hidden";

  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = 600 / 2;

  return (
    <motion.div
      className={`absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative h-full w-full rounded-2xl shadow-md will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={""}
            width={width}
            height={height}
            className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl object-cover object-top"
            priority
            quality={80}
            decoding="sync"
            placeholder="blur"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 26vw, (max-width: 1560px) 14vw, 15vw"
          />
        </div>
        {/* the image back side */}
        <div
          className={clsx(
            shared,
            "flex items-center overflow-hidden rounded-2xl bg-[#FFFAF2]",
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <motion.div
            className={clsx(
              "relative flex h-full w-full items-center overflow-hidden",
            )}
            ref={ref}
            whileHover="hover"
          >
            <motion.div
              className="pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity"
              style={
                {
                  "--x": `${x ? x - offset : -offset}px`,
                  "--y": `${y ? y - offset : -offset}px`,
                  width: 600,
                  height: 600,
                  background:
                    "radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)",
                } as CSSProperties
              }
              variants={{
                hover: {
                  opacity: 50 / 100,
                },
              }}
            >
              <span className="absolute h-[500px] rotate-[-20deg] bg-red-500 bg-[length:280px]" />

              <div className="z-[1] px-6">
                <div className={clsx("flex flex-col gap-1 uppercase")}>
                  <p className="text-sm text-text-secondary">{fileName}</p>
                  {meta && <p>{meta}</p>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoCard;
