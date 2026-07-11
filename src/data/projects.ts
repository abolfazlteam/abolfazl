import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ritmica",
    name: "Ritmica",
    tag: "Mobile · Productivity",
    context: "Personal product",
    blurb:
      "A full-stack habit, task, analytics, notification, and AI feedback app built with Expo React Native and a NestJS/PostgreSQL backend.",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
    ],
    accent: "rose",
    metric: "Phase 9 complete",
    likes: 142,
    role: "Full-stack product owner",
    timeline: "Personal mobile product",
    link: "#",
    overview:
      "Ritmica is a mobile productivity app for iOS and Android that combines habit tracking, task management, task-to-habit linking, analytics, push notifications, profile management, AI-based feedback, light and dark themes, and multilingual support. The product pairs an Expo React Native client with a NestJS backend, PostgreSQL data model, Prisma ORM, JWT authentication, refresh-token rotation, Argon2 password hashing, and production readiness documentation.",
    highlights: [
      "Designed and implemented the product architecture across an Expo React Native mobile app and NestJS API, keeping mobile screens, backend contracts, validation, authentication, and persisted user-owned resources aligned.",
      "Built the habit and task systems around real product behavior: pinned habits, weekly/monthly/unlimited completion views, task-to-habit linking, subtasks, archive/delete flows, swipe actions, and completion-state synchronization.",
      "Implemented analytics and AI feedback surfaces that summarize habit progress, task completion, streaks, linked-task performance, and readiness states into practical productivity insights rather than raw charts alone.",
      "Prepared the app for production with push notifications, secure native token storage, profile photo handling, theme persistence, i18n/RTL support, backend tests, Prisma validation, deployment notes, and a manual QA checklist.",
    ],
    gallery: [
      {
        id: "ritmica-home",
        label: "Ritmica home screen with pinned habits and activity chart",
        src: "/projects/ritmica/home.png",
        aspect: "9 / 16",
        imageClassName: "object-top",
      },
      {
        id: "ritmica-tasks",
        label:
          "Task list with swipe actions, completion progress, and linked habits",
        src: "/projects/ritmica/tasks.png",
        aspect: "9 / 16",
        imageClassName: "object-top",
      },
      {
        id: "ritmica-analysis",
        label: "Analysis screen with habit, task, and completion charts",
        src: "/projects/ritmica/analysis.png",
        aspect: "9 / 16",
        imageClassName: "object-top",
      },
      {
        id: "ritmica-splash",
        label: "Branded animated splash and onboarding direction",
        src: "/projects/ritmica/splash.png",
        aspect: "9 / 16",
      },
    ],
  },
  {
    id: "ticket-system",
    name: "Goyar Ticket System",
    tag: "Portal · Support",
    context: "Company product",
    blurb:
      "A multi-role support platform with RBAC, chat-style tickets, media attachments, voice messages, reports, and admin modules.",
    stack: ["Next.js", "TypeScript", "TanStack Query", "RBAC", "PWA", "Docker"],
    accent: "violet",
    metric: "282 commits",
    likes: 186,
    role: "Broad frontend ownership",
    timeline: "Company project",
    link: "#",
    overview:
      "Goyar is a multi-role support platform for clients, experts, managers, and contact users. The product combines ticket lists, chat-style conversations, file and voice attachments, role-based access control, profiles, reports, FAQs, and administrative modules. Repository evidence points to broad frontend ownership across architecture, auth, RBAC, ticketing, media flows, tests, PWA setup, Docker, and CI.",
    highlights: [
      "Owned the majority of frontend development for a multi-role ticket management platform, building role-specific panels, protected routing, permission-aware navigation, and action-level access so clients, experts, and managers could work safely in one product.",
      "Designed a centralized RBAC model that aligned route access, sidebar visibility, and UI permissions, reducing the risk of inconsistent authorization behavior across the frontend.",
      "Built chat-style ticket workflows with optimistic message sending, previous-message loading, attachment coordination, and scroll preservation so support conversations stayed reliable under asynchronous network conditions.",
      "Implemented browser-based voice messaging and reusable file-upload flows with recording, conversion, progress, cancellation, and failure handling, giving users richer support communication without duplicating media logic across features.",
    ],
    gallery: [
      {
        id: "ticket-chat",
        label: "Ticket conversation and message composer",
        aspect: "16 / 10",
      },
      { id: "ticket-rbac", label: "Role-based panel and sidebar states" },
      { id: "ticket-voice", label: "Attachment and voice-message workflow" },
    ],
  },
  {
    id: "iran-map-platform",
    name: "Iran Map Platform",
    tag: "Platform · Maps",
    context: "Internal SDK",
    blurb:
      "A reusable React/MapLibre SDK plus self-hosted vector-tile asset server for Iran-focused internal products.",
    stack: ["React", "TypeScript", "MapLibre", "Vector Tiles", "Nginx", "tsup"],
    accent: "sky",
    metric: "solo build",
    likes: 164,
    role: "End-to-end frontend platform ownership",
    timeline: "Internal platform project",
    link: "#",
    overview:
      "Iran Map Platform turns a difficult geospatial stack into reusable frontend infrastructure. It packages a React/MapLibre map component with core types, themes, markers, controls, coordinate helpers, SDK documentation, and an nginx-backed static asset server for tiles, glyphs, sprites, styles, and RTL support.",
    highlights: [
      "Owned an internal Iran map platform from SDK design through asset serving, giving product teams a reusable way to add consistent maps without rebuilding tile, style, glyph, sprite, and marker behavior in each application.",
      "Designed a browser-safe React wrapper around MapLibre lifecycle management, handling client-only loading, cleanup, marker synchronization, and layer controls so map features could work reliably inside Next.js applications.",
      "Built the self-hosted vector map asset pipeline for tiles, sprites, glyphs, and style files, moving cache, compression, and CORS concerns into the server layer so map rendering remained dependable across consuming apps.",
      "Defined typed public APIs for coordinates, markers, themes, controls, and layer visibility, hiding geospatial edge cases like coordinate-order mismatches behind safer developer-facing abstractions.",
    ],
    gallery: [
      {
        id: "iran-map-sdk",
        label: "React map SDK component states",
        aspect: "16 / 10",
      },
      {
        id: "iran-map-assets",
        label: "Vector tile, glyph, sprite, and style asset server",
      },
      { id: "iran-map-docs", label: "SDK docs and package usage examples" },
    ],
  },
  {
    id: "svc-front",
    name: "SVC Front",
    tag: "Portal · Services",
    context: "Large service portal",
    blurb:
      "A large multi-module service portal with reusable forms, uploaders, tables, tracking, membership, and service discovery.",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "Storybook",
      "Docker",
    ],
    accent: "mint",
    metric: "491 commits",
    likes: 152,
    role: "Major frontend contributor",
    timeline: "Shared company project",
    link: "#",
    overview:
      "SVC Front is a broad service application portal for companies, entrepreneurs, legal applicants, and natural applicants. It supports public service discovery, auth and tracking flows, membership, consulting, incubator, entrepreneurship events, additional-information modules, reusable tables, file uploads, and a Storybook-backed component layer.",
    highlights: [
      "Contributed heavily to a large service portal by building reusable form, table, upload, and status patterns so many business modules could ship consistently instead of becoming isolated one-off implementations.",
      "Led shared component-system work with Storybook-backed primitives and form controllers, helping multiple product areas reuse the same interaction patterns across membership, consulting, tracking, and additional-information workflows.",
      "Built reusable data-table behavior for backend-driven lists, pagination, query state, and module metadata so operational modules could share predictable table behavior while still supporting domain-specific data.",
      "Implemented reusable upload infrastructure with validation, progress, cancellation, concurrency control, and authenticated requests so file-heavy service workflows had consistent failure-aware behavior.",
    ],
    gallery: [
      {
        id: "svc-dashboard",
        label: "Service workflow dashboard and module table",
        aspect: "16 / 10",
      },
      { id: "svc-uploader", label: "Reusable uploader states and validation" },
      { id: "svc-storybook", label: "Storybook-backed UI primitives" },
    ],
  },
  {
    id: "myco",
    name: "MyCo Company Portal",
    tag: "Portal · Business",
    context: "Company self-service",
    blurb:
      "An authenticated company portal for profile data, performance appraisal, annual fee payments, tax relief, tickets, and uploads.",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "MinIO",
      "Storybook",
    ],
    accent: "amber",
    metric: "246 commits",
    likes: 131,
    role: "Significant frontend contributor",
    timeline: "Shared company project",
    link: "#",
    overview:
      "MyCo is a company self-service portal for organizational users who manage profile data, submit performance-appraisal and tax-relief information, pay annual fees, upload documents, and communicate through tickets. The strongest frontend work is around payment branching, SSO, large-file upload infrastructure, and many backend-driven business forms.",
    highlights: [
      "Contributed major frontend work to a company self-service portal, turning complex annual-fee, tax-relief, performance-appraisal, profile, ticketing, and document workflows into reusable authenticated product flows.",
      "Built a presigned upload workflow with validation, progress, abort, failure states, and finalize handling so large or sensitive documents could be uploaded directly to storage without blocking business forms.",
      "Implemented annual-fee payment flows that branch between cash, cheque, custom, and cheque-custom methods, mapping changing form state and backend validation into clear user-facing errors.",
      "Integrated SSO verification and token routing for a statically exported app, allowing users to enter the portal through centralized authentication while keeping frontend deployment simple.",
    ],
    gallery: [
      {
        id: "myco-payments",
        label: "Annual fee payment method branching",
        aspect: "16 / 10",
      },
      { id: "myco-upload", label: "Presigned upload progress and file states" },
      { id: "myco-profile", label: "Company profile and appraisal modules" },
    ],
  },
  {
    id: "techpark-sso",
    name: "Techpark SSO",
    tag: "Auth · SSO",
    context: "Focused auth app",
    blurb:
      "A focused SSO interaction frontend for password login, OTP login, consent, callbacks, and password update flows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "OTP UX",
      "Docker",
      "GitLab CI",
    ],
    accent: "rose",
    metric: "solo build",
    likes: 118,
    role: "Frontend owner",
    timeline: "Authentication project",
    link: "#",
    overview:
      "Techpark SSO is the human-facing interaction layer for an identity-provider flow. It handles password login, phone OTP login, OTP verification, password set/change, consent, callback result states, expired interactions, and deployment packaging while respecting browser redirect behavior.",
    highlights: [
      "Owned the frontend implementation for SSO interaction flows, covering password login, OTP login, verification, consent, callback, and password-update states so users could complete authentication journeys even when identity-provider state changed.",
      "Chose native top-level form POST for redirect-heavy identity-provider actions where fetch would break across cross-domain redirect and CORS boundaries, preserving protocol-compatible browser navigation.",
      "Built interaction-state loading and UI mode resolution from backend details, handling expired, denied, failed, and missing states so authentication screens could recover from refreshes and partial flows.",
      "Implemented a robust OTP experience with paste handling, keyboard navigation, numeric guards, resend countdown, and configurable length so the most sensitive input step stayed reliable and user-friendly.",
    ],
    gallery: [
      {
        id: "sso-login",
        label: "Password and OTP login states",
        aspect: "16 / 10",
      },
      { id: "sso-otp", label: "OTP input, resend, and validation states" },
      {
        id: "sso-callback",
        label: "Consent, callback, and error recovery screens",
      },
    ],
  },
  {
    id: "sadaf-front",
    name: "SADAF Front",
    tag: "Marketplace · Jobs",
    context: "Public + panels",
    blurb:
      "A job marketplace with public job and company discovery plus authenticated applicant and employer dashboards.",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "React Hook Form",
      "Leaflet",
      "SEO",
    ],
    accent: "violet",
    metric: "169 commits",
    likes: 127,
    role: "Major frontend contributor",
    timeline: "Shared company project",
    link: "#",
    overview:
      "SADAF Front is a job marketplace with public jobs, companies, events, news, FAQ and content pages, plus protected applicant and company panels. The project combines public search and SEO concerns with dense employer workflows, applicant resumes, map-based location selection, and authenticated dashboard behavior.",
    highlights: [
      "Contributed to a job marketplace frontend spanning public discovery and private employer/applicant dashboards, connecting SEO-friendly job and company pages with authenticated operational workflows.",
      "Implemented URL-driven search, filters, and pagination for public job listings so users could share, revisit, and navigate marketplace results without losing state.",
      "Built complex employer job-ad creation flows backed by backend taxonomies, debounced suggestions, publish and draft modes, conditional fields, and validation mapping so companies could create accurate listings.",
      "Developed resume review workflows with status changes, rejection reasons, bookmarks, downloads, share links, notifications, and cache updates, helping employers move applicants through the hiring process inside the dashboard.",
    ],
    gallery: [
      {
        id: "sadaf-search",
        label: "Public job search, filters, and pagination",
        aspect: "16 / 10",
      },
      { id: "sadaf-job-form", label: "Employer job-ad creation flow" },
      { id: "sadaf-resume", label: "Resume review and status workflow" },
    ],
  },
  {
    id: "rahsa",
    name: "Rahsa Portal",
    tag: "Portal · Scheduling",
    context: "Internal dashboard",
    blurb:
      "An internal employee and servicer portal with meeting-room scheduling, dashboard widgets, media, holidays, and role-gated routes.",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Jalali Dates",
    ],
    accent: "sky",
    metric: "57 commits",
    likes: 104,
    role: "Feature contributor",
    timeline: "Shared company project",
    link: "#",
    overview:
      "Rahsa is an internal portal for employees and servicers. Its strongest portfolio story is the scheduling surface: a meeting-room calendar, dense creation/edit flows, participants and conflict handling, timezone fixes, Jalali/Gregorian holiday logic, and dashboard media experiences.",
    highlights: [
      "Contributed to an internal employee and servicer portal with role-gated routes, dashboard modules, meeting scheduling, documents, media, and operational tables so different user groups could work from a shared frontend.",
      "Built meeting-room calendar behavior with a time-slot grid, computed booking spans, unavailable buffers, loading states, and draggable navigation so users could understand room availability at a glance.",
      "Implemented meeting creation and editing workflows with participants, guests, reminders, serving options, conflict warnings, validation, and refetching so scheduling changes stayed accurate after mutations.",
      "Solved Jalali/Gregorian holiday and timezone edge cases in calendar views, mapping recurring and ranged holidays so date-sensitive dashboard behavior matched local user expectations.",
    ],
    gallery: [
      {
        id: "rahsa-calendar",
        label: "Meeting-room calendar grid",
        aspect: "16 / 10",
      },
      {
        id: "rahsa-meeting-modal",
        label: "Meeting create/edit modal and conflicts",
      },
      { id: "rahsa-media", label: "Dashboard media player and gallery" },
    ],
  },
];

/** Lookup a project by its id (used by `/projects/[slug]`). */
export const getProjectById = (id: string): Project | undefined =>
  PROJECTS.find((project) => project.id === id);
