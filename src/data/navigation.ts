import type { NavLink, PageId } from "@/types";

/** Primary navigation, in order. `n` is the mono section number shown in the UI. */
export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Index", n: "00" },
  { id: "work", label: "Work", n: "01" },
  { id: "about", label: "About", n: "02" },
  { id: "writing", label: "Writing", n: "03" },
  { id: "contact", label: "Contact", n: "04" },
];

/** Route path for a page id. `home` is the site root. */
export const pathForPage = (id: PageId): string => (id === "home" ? "/" : `/${id}`);
