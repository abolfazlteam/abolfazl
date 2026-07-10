export const SITE_URL = "https://iabolfazl.dev";

export const SITE_KEYWORDS = [
  "Abolfazl Jamshidi",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "JavaScript Developer",
  "Frontend Engineer",
  "DevOps Engineer",
  "React and DevOps Engineer",
  "React portfolio",
  "Next.js portfolio",
  "DevOps portfolio",
  "Tehran frontend developer",
  "Iran frontend developer",
  "frontend architecture",
  "React performance",
  "Docker Engineer",
  "GitLab CI Engineer",
  "Linux Engineer",
  "Kubernetes Engineer",
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
