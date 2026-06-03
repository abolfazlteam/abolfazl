import type { Comment, CommentsByContentId } from "@/types";

/**
 * Seed comments, keyed by the content id they belong to (project or post).
 * Front-end mock only — new comments live in component state for now.
 */
export const COMMENTS: CommentsByContentId = {
  "react-18-loading-ux": [
    {
      name: "Sara K.",
      when: "2 days ago",
      text: "The layout-accurate skeleton point finally made it click for me. Thanks!",
      likes: 6,
    },
    {
      name: "dev_mehran",
      when: "5 days ago",
      text: "Been streaming the shell for months but never tried selective hydration priority. Trying this today.",
      likes: 3,
    },
  ],
  "ci-without-cargo": [
    {
      name: "Omid R.",
      when: "1 week ago",
      text: "The lockfile cache key alone shaved 3 minutes for us. Wild how often this is missed.",
      likes: 9,
    },
  ],
  "vim-six-months": [
    {
      name: "Lena",
      when: "3 days ago",
      text: "'Tools are tools' — needed to hear this before I lost another weekend in Lua.",
      likes: 12,
    },
  ],
  ledger: [
    {
      name: "freelance_jo",
      when: "4 days ago",
      text: "Offline-first bookkeeping is exactly what I've wanted. Is there a waitlist?",
      likes: 5,
    },
  ],
  stagehand: [
    {
      name: "ops_dan",
      when: "1 week ago",
      text: "One-click rollback that posts back to the channel is chef's kiss.",
      likes: 7,
    },
  ],
};

/** Seed comments for a given content id (empty array if none). */
export const getCommentsFor = (id: string): Comment[] => COMMENTS[id] ?? [];
