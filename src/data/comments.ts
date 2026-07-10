import type { Comment, CommentsByContentId } from "@/types";

/**
 * Seed comments, keyed by the content id they belong to (project or post).
 * Mongo-backed comments are rendered before these static starter comments.
 */
export const COMMENTS: CommentsByContentId = {
  "revolutionize-loading-ux-with-react18-suspense-streaming-and-selective-hydration": [
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
  "useEffect-deep-dive-into-it": [
    {
      name: "Omid R.",
      when: "1 week ago",
      text: "The effect lifecycle explanation is the part I wish I had earlier.",
      likes: 9,
    },
  ],
  "useRef-vs-useState-when-to-use-each": [
    {
      name: "Lena",
      when: "3 days ago",
      text: "The 'does the UI depend on it?' question is a useful rule of thumb.",
      likes: 12,
    },
  ],
};

/** Seed comments for a given content id (empty array if none). */
export const getCommentsFor = (id: string): Comment[] => COMMENTS[id] ?? [];
