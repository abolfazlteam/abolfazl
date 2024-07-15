export interface INavLinksProps {
  id: number;
  title: string;
  href: string;
}

export const NAVIGATION_LINKS: INavLinksProps[] = [
  {
    id: 1,
    title: "home",
    href: "/",
  },
  {
    id: 2,
    title: "about-me",
    href: "/about-me",
  },
  {
    id: 3,
    title: "blogs",
    href: "/blogs",
  },
  {
    id: 4,
    title: "projects",
    href: "/projects",
  },
];
