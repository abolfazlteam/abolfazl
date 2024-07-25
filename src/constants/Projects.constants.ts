import { StaticImageData } from "next/image";
import {
  ARMAN_PORTFOLIO,
  MY_COMPANY_PROJECT,
  PROJECT_TEST_IMAGE,
  SADAF_PROJECT,
  TECH_PARK_GIF,
} from ".";

export type TProjectProps = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  src: string | StaticImageData;
  siteLink?: string;
  repoLink?: string;
  startDate?: string;
  endDate?: string;
};

export const PROJECTS_DATA: TProjectProps[] = [
  {
    id: 1,
    title: "Arman's Portfolio",
    description:
      "It's a personal branding website for Arman Ahmadi based - a backend engineer.",
    src: ARMAN_PORTFOLIO,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "",
  },
  {
    id: 2,
    title: "sadaf job seeking platform",
    description:
      "It's a job seeking platform in which employers can post their job positions and applicant can apply. They can track their job postings or applications, etc.",
    src: SADAF_PROJECT,
    tags: ["react", "next.js", "typescript", "tailwind"],
    siteLink: "",
  },
  {
    id: 3,
    title: "Tech Park Website",
    description: "This is the offical redesign of the Pardis Technology Park.",
    src: TECH_PARK_GIF,
    tags: ["next.js", "typescript", "MDX", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
  {
    id: 4,
    title: "My Company",
    description:
      "This project is an admin panel for companies inside Pardis Technology Park which can do everything related to their bureaucracy",
    src: MY_COMPANY_PROJECT,
    tags: ["next.js", "typescript", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
  {
    id: 5,
    title: "Wild Oasis",
    description: "",
    src: PROJECT_TEST_IMAGE,
    tags: ["react", "javascript", "react query", "tailwind"],
    siteLink: "https://site.techpark.ir/fa",
  },
  {
    id: 6,
    title: "Norway Tourism",
    description: "",
    src: PROJECT_TEST_IMAGE,
    tags: ["HTML", "javascript", "sass"],
    siteLink: "https://site.techpark.ir/fa",
  },
];
