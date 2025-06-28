"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface IMobileNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MobileNavigationDrawer: React.FC<IMobileNavigationDrawerProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return createPortal(
    <>
      <motion.aside
        initial={false}
        animate={isOpen ? "open" : "close"}
        onClick={onClose}
        variants={{
          open: { x: 0 },
          close: { x: "-100%" },
        }}
        className="rounded-l-16 fixed left-0 top-0 z-40 h-full w-4/5 max-w-xs overflow-y-auto bg-bgColor shadow-lg md:hidden"
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.aside>
    </>,
    document.body,
  );
};

export default MobileNavigationDrawer;
