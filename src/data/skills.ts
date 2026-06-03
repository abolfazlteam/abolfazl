import type { Skill, SkillGroups } from "@/types";

export const SKILLS: SkillGroups = {
  frontend: [
    { name: "React", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "JavaScript", level: 5 },
    { name: "Tailwind", level: 5 },
    { name: "SCSS / Sass", level: 5 },
    { name: "HTML / CSS", level: 5 },
    { name: "React Query", level: 4 },
    { name: "React Native (Expo)", level: 3 },
    { name: "NativeWind", level: 3 },
  ],
  testing: [
    { name: "Jest", level: 4 },
    { name: "Vitest", level: 4 },
    { name: "RTL", level: 4 },
    { name: "Cypress", level: 3 },
  ],
  devops: [
    { name: "Docker", level: 3, learning: true },
    { name: "GitLab CI", level: 3, learning: true },
    { name: "CI/CD", level: 3, learning: true },
    { name: "Linux", level: 2, learning: true },
    { name: "Kubernetes", level: 2, learning: true },
    { name: "Vim", level: 3 },
  ],
  tools: [
    { name: "Git", level: 5 },
    { name: "GitHub", level: 5 },
    { name: "GitLab", level: 4 },
    { name: "Node.js", level: 3 },
  ],
};

/** Flattened skill list — handy for the home-page marquee. */
export const ALL_SKILLS: Skill[] = Object.values(SKILLS).flat();
