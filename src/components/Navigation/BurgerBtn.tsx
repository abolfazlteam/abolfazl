import React from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface IBurgerBtnProps {
  isOpen?: boolean;
  className?: string;
  onClick?: () => void;
}

const BurgerBtn: React.FC<IBurgerBtnProps> = ({
  isOpen,
  className,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      animate={isOpen ? "open" : "close"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu-list"
      data-testid="mobile-navigation-open-btn"
      aria-label="Burger menu"
      className={twMerge("flex w-5 flex-col items-center gap-1", className)}
    >
      <motion.span
        variants={{
          open: {
            width: "1.25rem",
            rotate: "45deg",
            y: "0.38rem",
          },
        }}
        transition={{
          type: "spring",
          damping: 6,
        }}
        className={twMerge(
          "block h-0.5 w-2.5 self-end rounded-full",
          "bg-text-primary",
        )}
      />
      <motion.span
        variants={{
          open: {
            width: 0,
            opacity: 0,
          },
        }}
        className={twMerge(
          "block h-0.5 w-5 rounded-full bg-black",
          "bg-text-primary",
        )}
      />
      <motion.span
        variants={{
          open: {
            width: "1.25rem",
            rotate: "-45deg",
            y: "-0.35rem",
          },
        }}
        transition={{
          type: "spring",
          damping: 6,
        }}
        className={twMerge(
          "block h-0.5 w-2.5 self-start rounded-full bg-black",
          "bg-text-primary",
        )}
      />
    </motion.button>
  );
};

export default BurgerBtn;
