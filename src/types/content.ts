/**
 * Domain types for all site content.
 *
 * These are the single source of truth shared by the typed data layer
 * (`src/data`) and the components that render it. Keep them presentation-free:
 * colors live in the design system as accent *names*, not hex values.
 */

/** Per-project accent identity. Resolves to a `--accent-<name>` CSS variable. */
export type AccentName = "mint" | "amber" | "violet" | "sky" | "rose";

/** Top-level navigable pages. */
export type PageId = "home" | "work" | "about" | "writing" | "contact";

export interface Person {
  name: string;
  handle: string;
  role: string;
  /** Long-form intro. */
  blurb: string;
  /** One-liner used in compact spots. */
  shortBlurb: string;
  email: string;
  github: string;
  medium: string;
  linkedin: string;
  location: string;
}

export interface Skill {
  name: string;
  /** Currently being learned — rendered as a badge. */
  learning?: boolean;
}

export type SkillCategory = "frontend" | "testing" | "devops" | "tools";
export type SkillGroups = Record<SkillCategory, Skill[]>;

export interface ProjectGalleryItem {
  /** Stable slot id for future real screenshots. */
  id: string;
  /** Placeholder caption shown until a screenshot is added. */
  label: string;
  aspect?: string;
}

export interface Project {
  id: string;
  name: string;
  /** e.g. "Web · SaaS" — first token doubles as the coarse filter category. */
  tag: string;
  /** Compact context shown in lists, e.g. "Internal platform". */
  context: string;
  blurb: string;
  stack: string[];
  accent: AccentName;
  /** Headline stat, e.g. "12k MAU". */
  metric: string;
  likes: number;
  role: string;
  timeline: string;
  link: string;
  overview: string;
  highlights: string[];
  /** Image slots for the detail gallery (placeholders for now). */
  gallery: ProjectGalleryItem[];
}

export interface CodeSnippet {
  lang: string;
  text: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  fit?: "cover" | "contain";
}

export interface BlogSection {
  id: string;
  /** Heading — also the table-of-contents label. */
  h: string;
  body: string[];
  code?: CodeSnippet;
  images?: BlogImage[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  /** Reading time, e.g. "11 min". */
  read: string;
  tag: string;
  views: number;
  likes: number;
  /** Public image path for the cover. */
  hero: string;
  excerpt: string;
  sections: BlogSection[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  mode: string;
  period: string;
  accent: AccentName;
  /** Image-slot id for the company logo (placeholder for now). */
  logo: string;
  achievements: string[];
}

export interface Comment {
  name: string;
  when: string;
  text: string;
  likes: number;
}

/** Seed comments keyed by the content id they belong to (project or post). */
export type CommentsByContentId = Record<string, Comment[]>;

export type ActivityKind = "push" | "deploy" | "pr" | "star";

export interface Activity {
  kind: ActivityKind;
  repo: string;
  msg: string;
  when: string;
  /** Language/badge hint, e.g. "ts", "ok", "—". */
  lang: string;
}

export interface NavLink {
  id: PageId;
  label: string;
  /** URL path. Decoupled from `id` to preserve the previously-indexed routes. */
  path: string;
  /** Two-digit section number, e.g. "00". */
  n: string;
}

export interface TimelineEntry {
  /** Time span, e.g. "2024 — now". */
  when: string;
  what: string;
  why: string;
}
