import { INavLinksProps } from "@/constants/Navigation.constants";
import NavLink from "./NavLink";

interface INavListProps {
  links: INavLinksProps[];
}

const NavList: React.FC<INavListProps> = ({ links }) => {
  return (
    <ul
      className={`order-2 flex justify-center gap-x-11 transition-all duration-300 ease-linear sm:visible sm:relative sm:top-0 sm:z-0 sm:mx-0 sm:flex sm:w-max sm:flex-row sm:items-center sm:p-0 sm:opacity-100 md:py-6 lg:px-13`}
    >
      {links.map((link) => (
        <li key={link.id}>
          <NavLink href={link.href}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
