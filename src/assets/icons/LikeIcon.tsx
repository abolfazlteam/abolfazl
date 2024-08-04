import React from "react";
import { SVGProps } from "react";

type LikeIconProps = {
  likes: number;
};

const HEART_PATH =
  "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";
const WAVE_PATH_ONE =
  "M0 425L18.8 434.8C37.7 444.7 75.3 464.3 112.8 468.5C150.3 472.7 187.7 461.3 225.2 449C262.7 436.7 300.3 423.3 337.8 416.5C375.3 409.7 412.7 409.3 450.2 419.5C487.7 429.7 525.3 450.3 562.8 463.3C600.3 476.3 637.7 481.7 675.2 471.5C712.7 461.3 750.3 435.7 787.8 432.7C825.3 429.7 862.7 449.3 881.3 459.2L900 469L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z";
const WAVE_PATH_TWO =
  "M0 514L18.8 504.3C37.7 494.7 75.3 475.3 112.8 463.5C150.3 451.7 187.7 447.3 225.2 460.5C262.7 473.7 300.3 504.3 337.8 511.7C375.3 519 412.7 503 450.2 492.5C487.7 482 525.3 477 562.8 471C600.3 465 637.7 458 675.2 460.8C712.7 463.7 750.3 476.3 787.8 474.8C825.3 473.3 862.7 457.7 881.3 449.8L900 442L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z";
const WAVE_PATH_THREE =
  "M0 529L18.8 535C37.7 541 75.3 553 112.8 560.5C150.3 568 187.7 571 225.2 565.7C262.7 560.3 300.3 546.7 337.8 535.8C375.3 525 412.7 517 450.2 517.7C487.7 518.3 525.3 527.7 562.8 535C600.3 542.3 637.7 547.7 675.2 554.5C712.7 561.3 750.3 569.7 787.8 560.3C825.3 551 862.7 524 881.3 510.5L900 497L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z";
const translateYVariants: { [key in string]: string } = {
  "0": "translate-y-[20px]",
  "1": "translate-y-[16px]",
  "2": "translate-y-[14px]",
  "3": "translate-y-[12px]",
  "4": "translate-y-[10px]",
  "5": "translate-y-[8px]",
  "6": "translate-y-[6px]",
  "7": "translate-y-[4px]",
  "8": "translate-y-[2px]",
  "9": "translate-y-[0px]",
  "10": "-translate-y-[2px]",
};

type TLikeIconProps = LikeIconProps & SVGProps<SVGSVGElement>;

function LikeIcon({ likes, ...props }: TLikeIconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <clipPath id="clipped">
          <path d={HEART_PATH} />
        </clipPath>
      </defs>
      <g clipPath="url(#clipped)">
        <g
          className={`transition-transform duration-500 ease-out ${translateYVariants[String(likes)]} `}
        >
          <svg viewBox="0 0 900 900" overflow="hidden">
            <path
              d={WAVE_PATH_ONE}
              fill="#94dbc6"
              transform="translate(0,-350)"
            ></path>
            <path
              d={WAVE_PATH_TWO}
              fill="#7be4c4"
              transform="translate(0,-350)"
            ></path>
            <path
              d={WAVE_PATH_THREE}
              fill="#43d9ad"
              transform="translate(0,-350)"
            ></path>
            <rect
              className={`h-full w-full fill-current text-[#43d9ad]`}
              transform="translate(0,200)"
            />
          </svg>
        </g>
      </g>
      {/* 
        Added another layer of heart path, but with transparent background
        and border. This ensures the heart outline is visible even when the
        filler is positioned offscreen.
      */}
      <path
        d={HEART_PATH}
        className="fill-transparent stroke-zinc-600"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default LikeIcon;
