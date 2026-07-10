export const SITE_URL = "https://iabolfazl.dev";

export const SITE_KEYWORDS = [
  "Abolfazl Jamshidi",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "JavaScript Developer",
  "Frontend Engineer",
  "React portfolio",
  "Next.js portfolio",
  "Tehran frontend developer",
  "Iran frontend developer",
  "frontend architecture",
  "React performance",
  "DevOps Engineer",
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
