import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PERSON } from "@/data";

// P1 shell placeholder — the full hero, work list and tickers land in P2.
export const unstable_instant = { prefetch: "static" };

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-[clamp(20px,4vw,52px)] py-[clamp(48px,8vw,96px)]">
      <Reveal>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-wide text-dim">
          <span className="size-[7px] rounded-full bg-accent animate-pulse-dot" />
          Frontend developer · DevOps intern
        </p>
      </Reveal>
      <Reveal delay={70}>
        <h1 className="mt-7 font-display text-[clamp(46px,7vw,104px)] font-bold leading-[0.96] tracking-[-0.04em] text-text">
          I build things
          <br />
          that work.
        </h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-dim">{PERSON.blurb}</p>
      </Reveal>
      <Reveal delay={220}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary" href="/work">
            View work →
          </Button>
          <Button href="/contact">Get in touch</Button>
        </div>
      </Reveal>
    </section>
  );
}
