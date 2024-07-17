"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import { DARK_LOGO_SVG, WHITE_LOGO_SVG } from "@/constants";
import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import Link from "next/link";
// import { isSearchSystemReleased } from "@/constants/FeatureFlag.constants";
import { useEffect, useState } from "react";
import IconArrowDown from "@/assets/icons/ArrowDown";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import MobileNavList from "./MobileNavList";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [logoImage, setLogoImage] = useState<string>(DARK_LOGO_SVG);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const shouldShowMobileNavigation = useMatchMedia("(max-width:640px)");

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setLogoImage(DARK_LOGO_SVG);
  }, []);

  return (
    <>
      <header className="relative top-0 z-20 bg-bgColor px-4 py-2 md:sticky md:px-0 md:py-1">
        <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between pt-10 sm:pt-0">
          <div className="flex items-center gap-4">
            {resolvedTheme === "light" ? (
              <Image
                src={logoImage || DARK_LOGO_SVG}
                alt="logo"
                width={40}
                height={40}
              />
            ) : (
              <Image src={WHITE_LOGO_SVG} alt="logo" width={40} height={40} />
            )}

            <p className="text-caption1 font-bold capitalize text-text-primary">
              Abolfazl
            </p>
          </div>
          {shouldShowMobileNavigation ? (
            <MobileNavList
              links={NAVIGATION_LINKS}
              isMenuOpen={isMenuOpen}
              onCloseMenu={handleCloseMenu}
            />
          ) : (
            <NavList links={NAVIGATION_LINKS} />
          )}

          <div className="flex items-center gap-x-12 sm:order-2">
            {/* {isSearchSystemReleased && ( */}
            <Link href={"/search"} className="cursor-pointer">
              <SearchIcon
                viewBox="0 0 24 24"
                className={`h-6 w-6 cursor-pointer [&_path]:stroke-text-primary`}
                aria-hidden="true"
              />
              <span className="sr-only">search</span>
            </Link>
            {/* )} */}
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation Menu Button */}
        {shouldShowMobileNavigation && (
          <button
            data-testid="mobile-navigation-open-btn"
            className="z-40 order-2 my-14 flex h-full max-h-9 w-full max-w-[105px] items-center justify-between rounded-[80px] border border-text-primary px-4 py-2 sm:hidden"
            onClick={handleOpenMenu}
          >
            <span className="text-base text-text-primary">menu</span>
            <IconArrowDown className="[&_path]:stroke-[#282c33] dark:[&_path]:stroke-white" />
          </button>
        )}
      </header>

      {/* overlay */}
      {shouldShowMobileNavigation && (
        <div
          className={`absolute left-0 top-0 z-[30] h-full w-full bg-[#00000066] backdrop-blur-sm transition-all duration-300 ease-linear ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        ></div>
      )}
    </>
  );
};

export default Navigation;
