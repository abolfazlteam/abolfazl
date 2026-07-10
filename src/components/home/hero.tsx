import { CycleWord } from "@/components/home/cycle-word";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { StatusPanel } from "@/components/widgets/status-panel";

const HERO_WORDS = ["work.", "last.", "ship.", "scale."];

export function Hero() {
  return (
    <div className="relative pt-[clamp(40px,5vw,72px)]">
      {/* Ambient drifting glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] right-[8%] size-[460px] rounded-full blur-[20px] animate-drift"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 13%, transparent), transparent 64%)",
        }}
      />

      <div className="relative">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-wide text-dim">
            <span
              className="size-[7px] rounded-full bg-accent animate-pulse-dot"
              style={{ boxShadow: "0 0 10px var(--accent)" }}
            />
            Frontend developer · DevOps engineer
          </p>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 items-end gap-[clamp(28px,4vw,64px)] min-[880px]:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <div>
            <Reveal delay={70}>
              <h1 className="font-display text-[clamp(46px,7vw,104px)] font-bold leading-[0.96] tracking-[-0.04em] text-text">
                I build things
                <br />
                that <CycleWord words={HERO_WORDS} />
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-[500px] font-sans text-[17px] leading-[1.6] text-dim">
                I&apos;m <span className="font-semibold text-text">Abolfazl Jamshidi</span>, a
                front-end and DevOps engineer in Tehran building production dashboards, portals,
                authentication flows, frontend architecture, Docker builds, and GitLab CI workflows.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-[30px] flex flex-wrap gap-3">
                <Button variant="primary" href="/projects">
                  View work →
                </Button>
                <Button href="/contact">Get in touch</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <StatusPanel />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
