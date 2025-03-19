"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import { isSearchSystemReleased } from "@/constants/FeatureFlag.constants";
import { useState } from "react";
import IconArrowDown from "@/assets/icons/ArrowDown";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import MobileNavList from "./MobileNavList";
import SearchModal from "../ui/SearchModal";
import Logo from "../ui/Logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const shouldShowMobileNavigation = useMatchMedia("(max-width:640px)");

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const handleOpenSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);

  return (
    <>
      <header className="bg-white/30 md:py relative top-0 z-20 px-4 py-2 backdrop-blur-md md:sticky md:px-0">
        <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between pt-10 sm:pt-0">
          <Logo />

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
            {isSearchSystemReleased && (
              <button
                onClick={handleOpenSearchModal}
                className="cursor-pointer transition-all duration-300 ease-linear hover:scale-90"
              >
                <SearchIcon
                  viewBox="0 0 24 24"
                  className={`h-6 w-6 cursor-pointer [&_path]:stroke-text-primary`}
                  aria-hidden="true"
                />
                <span className="sr-only">search</span>
              </button>
            )}
            <ThemeSwitcher />
          </div>
        </nav>

        {showSearchModal && isSearchSystemReleased && (
          <SearchModal
            isOpen={showSearchModal}
            onClose={handleCloseSearchModal}
          />
        )}

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
      {(shouldShowMobileNavigation || showSearchModal) && (
        <div
          className={`fixed left-0 top-0 z-[15] h-full w-full bg-[#00000066] backdrop-blur-sm transition-all duration-300 ease-linear ${isMenuOpen || showSearchModal ? "visible opacity-100" : "invisible opacity-0"}`}
        ></div>
      )}
    </>
  );
};

export default Navigation;
