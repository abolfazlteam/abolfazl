import type { ReactNode } from "react";

/**
 * A template re-mounts on every navigation, so this wrapper replays its
 * entrance animation each time — giving every route a fade + slide-in.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
