import { PageHeader } from "@/components/ui/page-header";

// P1 skeleton — search and post list land in P5.
export const unstable_instant = { prefetch: "static" };

export default function WritingPage() {
  return (
    <PageHeader
      page="writing"
      title="Notes to my past self"
      intro="If something cost me half a Saturday to figure out, I write it down so the next person (often future me) doesn't lose theirs."
    />
  );
}
