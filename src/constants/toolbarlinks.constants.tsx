import GithubIcon from "@/assets/icons/GithubIcon";
import IconLinkedIn from "@/assets/icons/LinkedIcon";
import IconMedium from "@/assets/icons/MediumIcon";
import { ReactNode } from "react";

export interface IToolbarLinkItemProps {
  href: string;
  icon: ReactNode;
  ariaLabel: string;
}

export const toolbarLinks: IToolbarLinkItemProps[] = [
  {
    href: "https://github.com/abolfazlcodes",
    ariaLabel: "github profile",
    icon: (
      <GithubIcon className="transition-all duration-300 ease-in [&_path]:fill-gray-2 group-hover:[&_path]:fill-primary" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/abolfazl-jmashidi/",
    ariaLabel: "linkedin profile",
    icon: (
      <IconLinkedIn className="transition-all duration-300 ease-in [&_path]:fill-gray-2 [&_path]:stroke-none group-hover:[&_path]:fill-primary" />
    ),
  },
  {
    href: "https://abolfazlcodes.medium.com/",
    ariaLabel: "medium profile",
    icon: (
      <IconMedium className="h-6 w-6 transition-all duration-300 ease-in [&_path]:fill-gray-2 group-hover:[&_path]:fill-primary" />
    ),
  },
];
