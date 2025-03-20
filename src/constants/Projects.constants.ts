import { StaticImageData } from "next/image";
import { ALL_PROJECTS } from "./content";

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
  slug?: string;
  isDraft?: boolean;
};

export const PROJECTS_DATA: TProjectProps[] = ALL_PROJECTS?.map(
  (projectItem, index) => ({
    id: index,
    title: projectItem?.title,
    description: projectItem?.summary,
    src: projectItem?.image,
    tags: projectItem?.tags,
    isDraft: projectItem?.isDraft,
    siteLink: projectItem?.ogUrl,
    slug: projectItem?.slug,
  }),
);
