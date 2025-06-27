import NavLink from "./NavLink";
import { INavLinksProps } from "@/constants/Navigation.constants";
import { motion } from "motion/react";

interface INavListProps {
  isOpen: boolean;
  links: INavLinksProps[];
  onCloseMenu: () => void;
}

const MobileNavList: React.FC<INavListProps> = ({
  links,
  onCloseMenu,
  isOpen,
}) => {
  return (
    <motion.ul
      className={`!z-[41] flex w-full flex-col gap-y-8 rounded-10 bg-bgColor pb-6 pl-6 pr-4 pt-4 transition-all duration-300 ease-linear`}
      animate={isOpen ? "open" : "close"}
      data-testid="mobile-navigation"
      variants={{
        open: {
          width: "100%",
        },
        close: {
          width: 0,
        },
      }}
      transition={{
        duration: 0.7,
        staggerChildren: 0.05,
        delayChildren: isOpen ? 0.3 : 0,
        ease: [0.08, 0.65, 0.53, 0.96],
      }}
    >
      {links.map((link) => (
        <motion.li
          key={`/${link}`}
          variants={{
            open: {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            },
            close: {
              scale: 0.5,
              opacity: 0,
              filter: "blur(10px)",
            },
          }}
        >
          <button
            data-testid="mobile-navigation-close-btn"
            onClick={onCloseMenu}
          >
            <NavLink href={link.href}>{link.title}</NavLink>
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MobileNavList;
