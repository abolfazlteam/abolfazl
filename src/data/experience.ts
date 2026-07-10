import type { Experience } from "@/types";

export const EXPERIENCE_INTRO =
  "With 4+ years across frontend and DevOps engineering, I specialize in React, Next.js, JavaScript, TypeScript, Docker, GitLab CI, Linux, and delivery workflows. I like turning complex product workflows into clear interfaces, reusable systems, and production-ready architecture.";

export const EXPERIENCE: Experience[] = [
  {
    company: "Avina IT Solutions",
    role: "DevOps Engineer",
    location: "Tehran, Iran",
    mode: "Remote",
    period: "2026 — Present",
    accent: "mint",
    logoSrc: "/images/avina.png",
    logo: "/images/avina.png",
    achievements: [],
  },
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
    location: "Tehran Province, Iran",
    mode: "Full-time",
    period: "Sep 2021 — Sep 2023 · 2 yrs 1 mo",
    accent: "amber",
    logo: "exp-mizban-logo",
    achievements: [
      "Developed 100+ UI components with Jest and Storybook, boosting consistency and cutting development time by 35%.",
      "Led full dashboard refactor, reducing technical debt and improving onboarding by applying SOLID and DRY principles.",
      "Automated 5 key flows and fixed 5+ critical bugs with Cypress, improving UX and app stability.",
      "Introduced ESLint and Prettier standards, aligning the team on consistent syntax and reducing formatting issues.",
      "Collaborated with 3 designers to align UI expectations with frontend constraints, improving delivery speed by 10%.",
    ],
  },
];
