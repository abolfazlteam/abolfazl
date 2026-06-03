import type { Experience } from "@/types";

export const EXPERIENCE_INTRO =
  "With nearly 4 years as a front-end engineer, I specialise in technologies like React, Next.js, JavaScript and TypeScript. I'm comfortable building reusable components with clean structure, and I lean toward simple, useful solutions — I believe simplicity is the key to almost everything. I care about delivering things that scale and staying current with where the craft is going.";

export const EXPERIENCE: Experience[] = [
  {
    company: "Pardis Technology Park",
    role: "Frontend Developer",
    location: "Tehran, Iran",
    mode: "Remote",
    period: "2023 — Present",
    accent: "mint",
    logo: "exp-pardis-logo",
    achievements: [
      "Lead front-end on internal SaaS products with React, Next.js & TypeScript.",
      "Built and maintain a shared component library adopted across multiple teams.",
      "Introduced Docker-based preview deploys and GitLab CI checks.",
    ],
  },
  {
    company: "Mizban",
    role: "Frontend Developer",
    location: "Tehran, Iran",
    mode: "Hybrid",
    period: "2021 — 2023",
    accent: "amber",
    logo: "exp-mizban-logo",
    achievements: [
      "Shipped customer-facing dashboards with React and React Query.",
      "Raised confidence on critical flows with Jest, RTL and Cypress.",
      "Mentored two junior developers on clean code and review habits.",
    ],
  },
];
