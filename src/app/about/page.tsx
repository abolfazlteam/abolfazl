import { PageHeader } from "@/components/ui/page-header";

// P1 skeleton — bio, experience, skills and timeline land in P4.
export const unstable_instant = { prefetch: "static" };

export default function AboutPage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <PageHeader page="about" title="Hi, I'm Abolfazl." />
    </div>
  );
}
