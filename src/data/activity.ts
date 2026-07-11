import type { Activity } from "@/types";

/** Stable project evidence from repo/project analysis, not a live GitHub feed. */
export const ACTIVITY: Activity[] = [
  {
    kind: "repo",
    repo: "ticket-system",
    msg: "RBAC, ticket chat, uploads, voice messages",
    evidence: "282 commits analyzed",
    source: "Private repo analysis",
    verifiedAt: "Jul 2026",
  },
  {
    kind: "solo",
    repo: "iran-map-platform",
    msg: "React/MapLibre SDK and self-hosted vector tiles",
    evidence: "solo build",
    source: "Project analysis",
    verifiedAt: "Jul 2026",
  },
  {
    kind: "repo",
    repo: "svc-front",
    msg: "tables, uploaders, RHF controls, service workflows",
    evidence: "491 commits analyzed",
    source: "Private repo analysis",
    verifiedAt: "Jul 2026",
  },
  {
    kind: "repo",
    repo: "myco",
    msg: "presigned uploads, SSO, payments, appraisal modules",
    evidence: "246 commits analyzed",
    source: "Private repo analysis",
    verifiedAt: "Jul 2026",
  },
  {
    kind: "solo",
    repo: "techpark-sso",
    msg: "native form-post SSO flows and OTP UX",
    evidence: "solo build",
    source: "Project analysis",
    verifiedAt: "Jul 2026",
  },
  {
    kind: "repo",
    repo: "sadaf-front",
    msg: "job search, SEO, employer forms, resume review",
    evidence: "169 commits analyzed",
    source: "Private repo analysis",
    verifiedAt: "Jul 2026",
  },
  {
    kind: "repo",
    repo: "rahsa",
    msg: "meeting calendar, holidays, media player",
    evidence: "57 commits analyzed",
    source: "Private repo analysis",
    verifiedAt: "Jul 2026",
  },
];
