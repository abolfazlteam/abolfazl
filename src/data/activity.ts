import type { Activity } from "@/types";

/** Static project signals, newest first (stable order). */
export const ACTIVITY: Activity[] = [
  { kind: "push", repo: "ticket-system", msg: "RBAC, ticket chat, uploads, voice messages", when: "282 commits", lang: "tsx" },
  { kind: "push", repo: "iran-map-platform", msg: "React/MapLibre SDK and self-hosted vector tiles", when: "solo build", lang: "ts" },
  { kind: "pr", repo: "svc-front", msg: "tables, uploaders, RHF controls, service workflows", when: "491 commits", lang: "tsx" },
  { kind: "pr", repo: "myco", msg: "presigned uploads, SSO, payments, appraisal modules", when: "246 commits", lang: "tsx" },
  { kind: "deploy", repo: "techpark-sso", msg: "native form-post SSO flows and OTP UX", when: "solo build", lang: "ok" },
  { kind: "pr", repo: "sadaf-front", msg: "job search, SEO, employer forms, resume review", when: "169 commits", lang: "tsx" },
  { kind: "pr", repo: "rahsa", msg: "meeting calendar, holidays, media player", when: "57 commits", lang: "tsx" },
];
