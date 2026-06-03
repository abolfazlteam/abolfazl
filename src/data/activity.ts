import type { Activity } from "@/types";

/** Mocked live git activity, newest first (stable order). */
export const ACTIVITY: Activity[] = [
  { kind: "push", repo: "abolfazlcodes/ledger", msg: "fix: stale invoice totals on tab switch", when: "12m ago", lang: "ts" },
  { kind: "deploy", repo: "stagehand", msg: "production · v2.41.0", when: "1h ago", lang: "ok" },
  { kind: "pr", repo: "abolfazlcodes/lighthouse", msg: "feat: clickhouse 24.x compatibility", when: "3h ago", lang: "ts" },
  { kind: "push", repo: "abolfazlcodes/kanji.fm", msg: "perf: defer kanji bitmap upload", when: "yesterday", lang: "tsx" },
  { kind: "star", repo: "vercel/next.js", msg: "starred", when: "yesterday", lang: "—" },
  { kind: "push", repo: "abolfazlcodes/quiet", msg: "chore: tailwind 4 upgrade", when: "2d ago", lang: "tsx" },
  { kind: "deploy", repo: "ledger", msg: "preview · branch/feat-receipts", when: "2d ago", lang: "ok" },
];
