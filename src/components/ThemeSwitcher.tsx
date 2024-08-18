/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import useClickOutside from "@/hooks/useClickOutside";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightThemeButton from "./ThemeItemButton";

interface IThemeSwitcherProps {}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme, themes } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const { ref } = useClickOutside(() => setShowMenu(false));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative flex h-8 w-8 cursor-pointer items-center gap-2 overflow-hidden"></div>
    );
  }

  const renderThemeIcon = () => {
    if (resolvedTheme === "light") {
      return (
        <>
          <SunIcon
            viewBox="0 0 24 24"
            className={`absolute -left-7 top-1/2 h-7 w-7 -translate-y-1/2 transition-all duration-200 ease-in-out [&_path]:stroke-text-primary`}
            onClick={() => setShowMenu(!showMenu)}
          />
          <span aria-label="sun icon" className="sr-only">
            sun icon
          </span>
        </>
      );
    }
    if (resolvedTheme === "dark") {
      return (
        <>
          <MoonIcon
            viewBox="0 0 24 24"
            className={`absolute -left-5 top-1/2 mt-[2px] h-6 w-6 -translate-y-1/2 transition-all duration-200 ease-in-out [&_path]:stroke-text-primary`}
            onClick={() => setShowMenu(!showMenu)}
          />
          <span aria-label="moon icon" className="sr-only">
            moon icon
          </span>
        </>
      );
    }
  };

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
    setShowMenu(false);
  };

  return (
    <div className="relative flex h-8 w-8 cursor-pointer items-center gap-2">
      {renderThemeIcon()}

      <ul
        // @ts-ignore
        ref={ref}
        className={`absolute left-0 top-10 flex w-max -translate-x-full flex-col overflow-hidden rounded-10 bg-bgColor shadow-md transition-all duration-200 ease-in-out ${showMenu ? "visible z-40 opacity-100" : "invisible -z-30 scale-0 opacity-0"}`}
      >
        {themes.map((theme) => (
          <LightThemeButton
            key={theme}
            onClick={() => handleChangeTheme(theme)}
          >
            {theme === "system" ? "automatic" : theme}
          </LightThemeButton>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
