/* eslint-disable @typescript-eslint/ban-ts-comment */
import IconCloseCircle from "@/assets/icons/CloseCircle";
import NavLink from "./NavLink";
import { INavLinksProps } from "@/constants/Navigation.constants";
import useClickOutside from "@/hooks/useClickOutside";
import { createPortal } from "react-dom";

interface INavListProps {
  links: INavLinksProps[];
  onCloseMenu: () => void;
  isMenuOpen: boolean;
}

const MobileNavList: React.FC<INavListProps> = ({
  links,
  isMenuOpen,
  onCloseMenu,
}) => {
  const { ref } = useClickOutside(onCloseMenu);

  return createPortal(
    <ul
      // @ts-ignore
      ref={ref}
      className={`absolute left-4 top-[140px] z-40 flex w-[95%] flex-col gap-y-8 rounded-10 bg-bgColor pb-6 pl-6 pr-4 pt-4 transition-all duration-300 ease-linear ${isMenuOpen ? "visible z-40 gap-y-8 opacity-100" : "invisible -z-30 scale-0 opacity-0"}`}
      data-testid="mobile-navigation"
    >
      <div className="flex items-center justify-end sm:hidden">
        <IconCloseCircle
          className="cursor-pointer stroke-[#ABB2BF]"
          onClick={onCloseMenu}
          data-testid="mobile-navigation-close-btn"
        />
      </div>

      {links.map((link) => (
        <li key={link.id}>
          <NavLink href={link.href}>{link.title}</NavLink>
        </li>
      ))}
    </ul>,
    document.body,
  );
};

export default MobileNavList;
