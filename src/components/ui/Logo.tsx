"use client";

import IconLogo from "@/assets/icons/Logo";
import { useTheme } from "next-themes";
import Link from "next/link";

const Logo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link href={"/"} className="flex items-center gap-1">
      {resolvedTheme === "light" ? (
        <IconLogo className="[&_path]:fill-dark h-[50px] w-[50px]" />
      ) : (
        <IconLogo className="h-[50px] w-[50px] [&_path]:fill-white" />
      )}
      <p className="text-caption1 font-bold capitalize">Abolfazl</p>
    </Link>
  );
};

export default Logo;
