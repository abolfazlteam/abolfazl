/**
 * Domain types for all site content.
 *
 * These are the single source of truth shared by the typed data layer
 * (`src/data`) and the components that render it. Keep them presentation-free:
 * colors live in the design system as accent *names*, not hex values.
 */

/** Per-project accent identity. Resolves to a `--accent-<name>` CSS variable. */
export type AccentName = "mint" | "amber" | "violet" | "sky" | "rose";

/** Skill proficiency, 1 (learning) – 5 (expert). */
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

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
  level: SkillLevel;
  /** Currently being learned — rendered as a badge instead of a level. */
  learning?: boolean;
}

export type SkillCategory = "frontend" | "testing" | "devops" | "tools";
export type SkillGroups = Record<SkillCategory, Skill[]>;

export interface Project {
  id: string;
  name: string;
  /** e.g. "Web · SaaS" — first token doubles as the coarse filter category. */
  tag: string;
  year: string;
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
  /** Image-slot ids for the detail gallery (placeholders for now). */
  gallery: string[];
}

export interface CodeSnippet {
  lang: string;
  text: string;
}

export interface BlogSection {
  id: string;
  /** Heading — also the table-of-contents label. */
  h: string;
  body: string[];
  code?: CodeSnippet;
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
  /** Image-slot id for the cover (placeholder for now). */
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
  /** Two-digit section number, e.g. "00". */
  n: string;
}
