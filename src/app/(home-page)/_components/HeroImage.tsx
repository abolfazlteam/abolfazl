"use client";

import { ABOLFAZL_FIRST_IMAGE } from "@/constants";
import { throttle } from "@/utils/index.utils";
import Image from "next/image";
import { MouseEvent, useCallback, useState } from "react";

const HeroImage = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();

      const x = e.clientX - box.left;
      const y = e.clientY - box.top;

      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    [],
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <figure
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      // We use the transform property to applies 3D transformation to the card. In our case, we applied a rotation transformation to the card:
      // rotateX(${rotate.x}deg) rotateY(${rotate.y}deg): These functions rotate the element around the X-axis and Y-axis, respectively. The rotation angles are determined by the rotate state, which is updated when the mouse moves over the element.
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
      className="hero-image relative -order-1 h-[344px] w-full max-w-[344px] rounded-10 after:rounded-10 sm:order-1 md:max-h-[386px] md:max-w-[384px]"
    >
      <Image
        src={ABOLFAZL_FIRST_IMAGE}
        fill
        priority
        decoding="sync"
        quality={90}
        alt="abolfazl is here"
        placeholder="blur"
        className="h-full w-full rounded-10 object-cover object-top"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 26vw, (max-width: 1560px) 14vw, 15vw"
      />
    </figure>
  );
};

export default HeroImage;
