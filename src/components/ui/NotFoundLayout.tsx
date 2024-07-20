"use client";

import IconNotFoundDark from "@/assets/icons/NotFoundDark";
import IconNotFoundLight from "@/assets/icons/NotFoundLight";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NotFoundLayout = () => {
  const { resolvedTheme } = useTheme();
  const [initialIcon, setInitialIcon] = useState<"light" | "dark">("light");

  useEffect(() => {
    setInitialIcon("dark");

    // remove ellipse class from the body and rectangular
    document.body.classList.remove("ellipse");
    document.querySelector(".container")?.classList.remove("container");
  }, []);

  return (
    <div className="flex items-center justify-center px-4 pt-4 md:gap-y-16 md:pt-24">
      {resolvedTheme === "light" || initialIcon === "light" ? (
        <IconNotFoundLight />
      ) : (
        <IconNotFoundDark />
      )}
    </div>
  );
};

export default NotFoundLayout;
