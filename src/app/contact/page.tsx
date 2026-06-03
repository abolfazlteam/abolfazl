import { PageHeader } from "@/components/ui/page-header";

// P1 skeleton — form and contact links land in P6.
export const unstable_instant = { prefetch: "static" };

export default function ContactPage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="contact"
        title="Let's talk."
        intro="Hiring, freelance, a question, or just want to argue tabs vs spaces — I'm genuinely happy to hear from you."
      />
    </div>
  );
}
