/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import { isSearchSystemReleased } from "@/constants/FeatureFlag.constants";
import { useState } from "react";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import MobileNavList from "./MobileNavList";
import SearchModal from "../ui/SearchModal";
import Logo from "../ui/Logo";
import BurgerBtn from "./BurgerBtn";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import IconCloseCircle from "@/assets/icons/CloseCircle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const shouldShowMobileNavigation = useMatchMedia("(max-width:640px)");

  const handleCloseMenu = () => setIsMenuOpen(false);

  const handleOpenSearchModal = () => setShowSearchModal(true);
  const handleCloseSearchModal = () => setShowSearchModal(false);

  return (
    <>
      <header
        data-testid="navigation-menu"
        className="bg-white/30 md:py relative top-0 z-20 px-4 py-2 backdrop-blur-md md:sticky md:px-0"
      >
        <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between pt-10 sm:pt-0">
          <Logo />

          {shouldShowMobileNavigation ? (
            <MobileNavigationDrawer
              isOpen={isMenuOpen}
              onClose={() => {
                setIsMenuOpen(false);
              }}
            >
              <IconCloseCircle
                className="absolute left-5 top-5"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />

              <div className="mt-20">
                <MobileNavList
                  isOpen={isMenuOpen}
                  links={NAVIGATION_LINKS}
                  onCloseMenu={handleCloseMenu}
                />
              </div>
            </MobileNavigationDrawer>
          ) : (
            <NavList links={NAVIGATION_LINKS} />
          )}

          <div className="flex items-center gap-x-4 sm:order-2">
            {isSearchSystemReleased && (
              <button
                onClick={handleOpenSearchModal}
                className="cursor-pointer transition-all duration-300 ease-linear hover:scale-90"
                data-testid="toggle-search-btn"
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

            {shouldShowMobileNavigation && (
              <BurgerBtn
                className="relative cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            )}
          </div>
        </nav>

        {showSearchModal && isSearchSystemReleased && (
          <SearchModal
            isOpen={showSearchModal}
            onClose={handleCloseSearchModal}
          />
        )}

        {/* Mobile Navigation Menu Button */}
        {/* {shouldShowMobileNavigation && (
          <button
            data-testid="mobile-navigation-open-btn"
            className="z-40 order-2 my-14 flex h-full max-h-9 w-full max-w-[105px] items-center justify-between rounded-[80px] border border-text-primary px-4 py-2 sm:hidden"
            onClick={handleOpenMenu}
          >
            <span className="text-base text-text-primary">menu</span>
            <IconArrowDown className="[&_path]:stroke-[#282c33] dark:[&_path]:stroke-white" />
          </button>
        )} */}
      </header>

      {/* overlay */}
      {(shouldShowMobileNavigation || showSearchModal) && (
        <div
          role="article"
          onClick={() => {
            setIsMenuOpen(false);
          }}
          data-testid="menu-overlay"
          className={`fixed left-0 top-0 z-[39] h-full w-full bg-[#00000066] backdrop-blur-sm transition-all duration-300 ease-linear ${isMenuOpen || showSearchModal ? "visible opacity-100" : "invisible opacity-0"}`}
        ></div>
      )}
    </>
  );
};

export default Navigation;
