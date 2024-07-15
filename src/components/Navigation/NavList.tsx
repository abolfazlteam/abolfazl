/* eslint-disable @typescript-eslint/ban-ts-comment */
import { INavLinksProps } from "@/constants/Navigation.constants";
import NavLink from "./NavLink";
import IconCloseCircle from "@/assets/icons/CloseCircle";
import useClickOutside from "@/hooks/useClickOutside";

interface INavListProps {
  links: INavLinksProps[];
  onCloseMenu: () => void;
  isMenuOpen: boolean;
}

const NavList: React.FC<INavListProps> = ({
  links,
  isMenuOpen,
  onCloseMenu,
}) => {
  const { ref } = useClickOutside(onCloseMenu);

  return (
    <>
      <ul
        // @ts-ignore
        ref={ref}
        className={`order-2 flex justify-center gap-x-11 sm:relative sm:top-0 sm:z-0 sm:mx-0 sm:flex sm:w-max sm:flex-row sm:items-center sm:p-0 md:py-6 lg:px-13 ${isMenuOpen ? "absolute left-4 top-[160px] !z-50 w-[95%] flex-col gap-y-8 rounded-10 bg-bgColor pb-6 pl-6 pr-4 pt-4 transition-all duration-300 ease-linear" : "hidden"}`}
      >
        <div className="flex items-center justify-end sm:hidden">
          <IconCloseCircle
            className="cursor-pointer stroke-[#ABB2BF]"
            onClick={onCloseMenu}
          />
        </div>

        {links.map((link) => (
          <li key={link.id}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavList;
