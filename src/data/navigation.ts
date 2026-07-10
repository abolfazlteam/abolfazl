import type { NavLink, PageId } from "@/types";

/**
 * Primary navigation, in order. `n` is the mono section number shown in the UI.
 * Paths intentionally match the previously-deployed site (`/projects`, `/blogs`,
 * `/about-me`) so existing search rankings / inbound links are preserved.
 */
export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Index", path: "/", n: "00" },
  { id: "work", label: "Work", path: "/projects", n: "01" },
  { id: "about", label: "About", path: "/about-me", n: "02" },
  { id: "writing", label: "Writing", path: "/blogs", n: "03" },
  { id: "contact", label: "Contact", path: "/contact", n: "04" },
];

const PATH_BY_ID = new Map<PageId, string>(NAV_LINKS.map((link) => [link.id, link.path]));

/** Route path for a page id. */
export const pathForPage = (id: PageId): string => PATH_BY_ID.get(id) ?? "/";
