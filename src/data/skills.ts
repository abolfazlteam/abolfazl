import type { Skill, SkillGroups } from "@/types";

export const SKILLS: SkillGroups = {
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind" },
    { name: "SCSS / Sass" },
    { name: "HTML / CSS" },
    { name: "React Query" },
    { name: "React Native (Expo)" },
    { name: "NativeWind" },
  ],
  testing: [
    { name: "Jest" },
    { name: "Vitest" },
    { name: "RTL" },
    { name: "Cypress" },
  ],
  devops: [
    { name: "Docker", learning: true },
    { name: "GitLab CI", learning: true },
    { name: "CI/CD", learning: true },
    { name: "Linux", learning: true },
    { name: "Kubernetes", learning: true },
    { name: "Vim" },
  ],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitLab" },
    { name: "Node.js" },
  ],
};

/** Flattened skill list — handy for the home-page marquee. */
export const ALL_SKILLS: Skill[] = Object.values(SKILLS).flat();
