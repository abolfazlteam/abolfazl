import { PageHeader } from "@/components/ui/page-header";

// P1 skeleton — form and contact links land in P6.
export const unstable_instant = { prefetch: "static" };

export default function ContactPage() {
  return (
    <PageHeader
      page="contact"
      title="Let's talk."
      intro="Hiring, freelance, a question, or just want to argue tabs vs spaces — I'm genuinely happy to hear from you."
    />
  );
}
