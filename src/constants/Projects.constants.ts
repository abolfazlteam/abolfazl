import { StaticImageData } from "next/image";
import { ARMAN_PORTFOLIO, PROJECT_TEST_IMAGE, SADAF_PROJECT } from ".";

export type TProjectProps = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  src: string | StaticImageData;
  siteLink?: string;
  repoLink?: string;
};

export const PROJECTS_DATA: TProjectProps[] = [
  {
    id: 1,
    title: "sadaf job seeking platform",
    description: "",
    src: SADAF_PROJECT,
    tags: ["react", "next.js", "typescript", "tailwind"],
    siteLink: "",
  },
  {
    id: 2,
    title: "Arman's Portfolio",
    description:
      "It's a personal branding website for Arman Ahmadi based - a backend engineer.",
    src: ARMAN_PORTFOLIO,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "",
  },
  {
    id: 3,
    title: "Tech Park Website",
    description: "This is the offical redesign of the Pardis Technology Park.",
    src: PROJECT_TEST_IMAGE,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
  {
    id: 4,
    title: "My Company",
    description:
      "This project is an admin panel for companies inside Pardis Technology Park which can do everything related to their bureaucracy",
    src: PROJECT_TEST_IMAGE,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
  {
    id: 5,
    title: "Wild Oasis",
    description: "",
    src: PROJECT_TEST_IMAGE,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
  {
    id: 6,
    title: "Norway Tourism",
    description: "",
    src: PROJECT_TEST_IMAGE,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
];
