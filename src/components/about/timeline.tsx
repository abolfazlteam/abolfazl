import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { TIMELINE } from "@/data";

export function Timeline() {
  return (
    <section className="mt-[clamp(64px,8vw,104px)]">
      <Reveal>
        <SectionHead n="05" title="How I got here" />
      </Reveal>
      <div className="border-t border-line">
        {TIMELINE.map((entry, i) => (
          <Reveal key={`${entry.when}-${entry.what}`} delay={i * 60}>
            <div className="grid grid-cols-1 gap-1 border-b border-line py-[22px] min-[560px]:grid-cols-[170px_1fr] min-[560px]:items-baseline min-[560px]:gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.5px] text-dim">
                {entry.when}
              </span>
              <div>
                <div className="font-display text-[22px] font-semibold tracking-[-0.5px] text-text">
                  {entry.what}
                </div>
                <div className="mt-1 max-w-[640px] font-sans text-[14.5px] leading-[1.6] text-dim">
                  {entry.why}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-10">
          <Button variant="primary" href="/contact">
            Let&apos;s work together →
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
