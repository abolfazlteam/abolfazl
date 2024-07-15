import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface INavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink: React.FC<INavLinkProps> = ({ children, href }) => {
  const path = usePathname();
  const isLinkActive = path === href;

  return (
    <Link
      href={href}
      className={`relative cursor-pointer text-caption1 transition-all duration-75 ease-linear ${isLinkActive ? "font-medium text-primary before:absolute before:top-full before:mt-2 before:inline-block before:h-[2px] before:w-full before:bg-gradient-nav-link before:shadow-navActiveLink" : "text-gray-1 hover:text-primary"} `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
