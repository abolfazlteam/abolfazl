import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ledger",
    name: "Ledger",
    tag: "Web · SaaS",
    year: "2025",
    blurb:
      "A double-entry bookkeeping tool for indie freelancers. Built end-to-end — offline-first, sub-100ms interactions.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    accent: "mint",
    metric: "12k MAU",
    likes: 134,
    role: "Solo — design, front-end & infra",
    timeline: "Jan – Sep 2025",
    link: "#",
    overview:
      "Ledger is a double-entry bookkeeping app for freelancers who find QuickBooks heavy and spreadsheets scary. It's offline-first: every action writes to a local store first and syncs in the background, so the UI never waits on the network. I built the whole thing — the data model, the sync engine, the design system, and the Docker/CI setup that ships it.",
    highlights: [
      "Offline-first architecture with a custom optimistic-update layer; every interaction lands in under 100ms.",
      "A double-entry engine that guarantees the books always balance, validated by ~400 unit tests.",
      "Dockerised deploys through GitLab CI with database migrations gated behind a manual approval step.",
    ],
    gallery: ["proj-ledger-1", "proj-ledger-2", "proj-ledger-3"],
  },
  {
    id: "stagehand",
    name: "Stagehand",
    tag: "DevOps · Internal",
    year: "2025",
    blurb:
      "GitLab CI/CD dashboard with deploy-rollback. Replaces a Slack thread + tribal knowledge with one screen.",
    stack: ["Docker", "GitLab CI", "React", "Node"],
    accent: "amber",
    metric: "-43% MTTR",
    likes: 88,
    role: "Front-end + light backend",
    timeline: "Mar – Jun 2025",
    link: "#",
    overview:
      "Before Stagehand, knowing what was deployed where meant scrolling a Slack channel and asking the one person who remembered. Stagehand puts every environment, every pipeline and a one-click rollback on a single screen. It reads the GitLab API and a thin Node service, and it cut our mean-time-to-recovery by 43%.",
    highlights: [
      "Live pipeline + environment board polling the GitLab API, with optimistic status updates.",
      "One-click rollback that re-triggers the last green deploy and posts the result back to the channel.",
      "Built as an intern project; adopted by the whole team within a month.",
    ],
    gallery: ["proj-stagehand-1", "proj-stagehand-2"],
  },
  {
    id: "kanji",
    name: "Kanji.fm",
    tag: "Mobile · Personal",
    year: "2024",
    blurb:
      "Spaced-repetition Japanese radical trainer. Native Expo build, custom SRS scheduler, ships at 60fps on a 2018 phone.",
    stack: ["Expo", "React Native", "NativeWind", "SQLite"],
    accent: "violet",
    metric: "App Store 4.8",
    likes: 201,
    role: "Solo — everything",
    timeline: "2024",
    link: "#",
    overview:
      "Kanji.fm teaches the building blocks of Japanese kanji using spaced repetition. I wanted something that felt instant on an old phone, so I wrote a custom SRS scheduler over SQLite and kept the render path lean enough to hold 60fps on a 2018 device.",
    highlights: [
      "Custom spaced-repetition scheduler stored locally in SQLite — fully offline.",
      "Gesture-driven review flow tuned to stay at 60fps on low-end hardware.",
      "4.8★ on the App Store across ~600 ratings.",
    ],
    gallery: ["proj-kanji-1", "proj-kanji-2", "proj-kanji-3"],
  },
  {
    id: "lighthouse",
    name: "Lighthouse",
    tag: "Web · Open Source",
    year: "2024",
    blurb:
      "Headless analytics SDK with a 4kb runtime and a self-hosted collector. Pipes everything through ClickHouse.",
    stack: ["TypeScript", "Docker", "ClickHouse"],
    accent: "sky",
    metric: "1.2k ★",
    likes: 156,
    role: "Maintainer",
    timeline: "2024 – present",
    link: "#",
    overview:
      "Lighthouse is a privacy-friendly, self-hostable analytics SDK. The browser runtime is 4kb, the collector is a single Docker container, and everything lands in ClickHouse so you own your data. It's open source and sitting at 1.2k stars.",
    highlights: [
      "4kb tree-shakeable runtime with a typed event API.",
      "Single-container collector; docker compose up and you're collecting.",
      "ClickHouse schema tuned for fast funnel + retention queries.",
    ],
    gallery: ["proj-lighthouse-1", "proj-lighthouse-2"],
  },
  {
    id: "pageboy",
    name: "Pageboy",
    tag: "Web · Tool",
    year: "2024",
    blurb:
      "Page-by-page visual diff for design reviews. Plugs into PR previews and posts annotated screenshots back.",
    stack: ["React", "Playwright", "GitHub Actions"],
    accent: "rose",
    metric: "team tool",
    likes: 64,
    role: "Solo — internal tool",
    timeline: "2024",
    link: "#",
    overview:
      "Pageboy catches the visual regressions code review misses. On every PR it spins up the preview, walks the key pages with Playwright, diffs them against main, and posts annotated screenshots back to the PR. It turned 'looks fine to me' into something we could actually see.",
    highlights: [
      "Playwright crawler that screenshots a configurable set of routes per PR.",
      "Pixel diffing with smart thresholds to ignore anti-aliasing noise.",
      "Runs entirely in GitHub Actions; comments inline on the PR.",
    ],
    gallery: ["proj-pageboy-1", "proj-pageboy-2"],
  },
  {
    id: "quiet",
    name: "Quiet",
    tag: "Web · Personal",
    year: "2023",
    blurb:
      "Minimal writing surface. No menus, no autosave indicators, no AI. Just a cursor and a word count.",
    stack: ["React", "IndexedDB"],
    accent: "mint",
    metric: "personal",
    likes: 92,
    role: "Solo — a weekend that grew",
    timeline: "2023",
    link: "#",
    overview:
      "Quiet is a writing surface with everything removed. No menus, no toolbars, no autosave spinner, no AI suggestions — just a cursor, your words, and a small word count that fades when you type. It saves to IndexedDB so your work survives a refresh without ever telling you it did.",
    highlights: [
      "Zero-chrome editor; UI fades away while you write.",
      "Local-only persistence via IndexedDB — nothing leaves your machine.",
      "Loads in well under a second, even cold.",
    ],
    gallery: ["proj-quiet-1", "proj-quiet-2"],
  },
];

/** Lookup a project by its id (used by `/work/[slug]`). */
export const getProjectById = (id: string): Project | undefined =>
  PROJECTS.find((project) => project.id === id);
