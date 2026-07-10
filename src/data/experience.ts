import type { Experience } from "@/types";

export const EXPERIENCE_INTRO =
  "With 4+ years as a front-end engineer, I specialize in React, Next.js, JavaScript, and TypeScript. I like turning complex product workflows into clear interfaces, reusable systems, and production-ready frontend architecture.";

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
      "Delivered frontend work across support ticketing, SSO, company portals, service workflows, job marketplace features, internal scheduling, and a reusable Iran map platform.",
      "Built reusable systems for RBAC, form controllers, backend-driven tables, file uploads, HTTP/error handling, Storybook primitives, and MapLibre SDK APIs.",
      "Implemented complex user flows including chat and voice messages, presigned document uploads, payment branching, OTP authentication, URL-driven search, meeting-room calendars, and geospatial map rendering.",
      "Contributed to production readiness with typed TypeScript patterns, TanStack Query cache workflows, Vitest coverage thresholds, PWA support, Docker builds, and GitLab CI configuration.",
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
