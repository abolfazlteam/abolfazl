import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { PERSON } from "@/data";

export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about hiring, freelance, or anything front-end / DevOps.",
};

const CONTACT_LINKS = [
  { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
  { label: "GitHub", value: "abolfazlcodes", href: PERSON.github },
  { label: "Medium", value: "@abolfazlcodes", href: PERSON.medium },
  { label: "LinkedIn", value: "abolfazl-jamshidi", href: PERSON.linkedin },
];

export default function ContactPage() {
  return (
    <div className="px-[clamp(20px,4vw,52px)] pt-[clamp(40px,5vw,72px)]">
      <PageHeader
        page="contact"
        title="Let's talk."
        intro="Hiring, freelance, a question, or just want to argue tabs vs spaces — I'm genuinely happy to hear from you."
      />

      <div className="mt-[52px] grid grid-cols-1 items-start gap-[clamp(32px,5vw,64px)] min-[880px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <Reveal delay={180}>
          <ContactForm />
        </Reveal>
        <Reveal delay={260}>
          <div className="flex flex-col gap-1">
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[1.5px] text-faint">
              or find me at
            </div>
            {CONTACT_LINKS.map((link) => {
              const external = !link.href.startsWith("mailto:");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group no-underline"
                >
                  <div className="flex items-center justify-between border-b border-line py-4 transition-[padding-left] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:pl-2.5">
                    <span className="font-mono text-xs uppercase tracking-[0.5px] text-dim">
                      {link.label}
                    </span>
                    <span className="font-display text-[22px] font-semibold tracking-[-0.4px] text-text">
                      {link.value} <span className="text-accent">→</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
