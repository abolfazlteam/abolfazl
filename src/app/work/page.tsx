import { PageHeader } from "@/components/ui/page-header";

// P1 skeleton — filters, card grid and work index land in P3.
export const unstable_instant = { prefetch: "static" };

export default function WorkPage() {
  return (
    <PageHeader
      page="work"
      title="Things I've made"
      intro="Some shipped to real customers, some shipped only to me at 2am. I learned something from every one — usually the hard way."
    />
  );
}
