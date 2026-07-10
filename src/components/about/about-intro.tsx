import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { StatusPanel } from "@/components/widgets/status-panel";

/** Bio paragraphs alongside a portrait placeholder and the status panel. */
export function AboutIntro() {
  return (
    <div className="mt-12 grid grid-cols-1 items-start gap-[clamp(32px,5vw,64px)] min-[880px]:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <Reveal delay={120}>
        <div className="flex max-w-[620px] flex-col gap-[18px] font-sans text-lg leading-[1.72] text-text">
          <p className="m-0">
            I&apos;m a React, Next.js, TypeScript, and DevOps engineer based in Tehran, Iran. My
            strongest work sits inside production products: support systems, service portals, job
            marketplaces, authentication flows, internal dashboards, and reusable frontend
            platforms.
          </p>
          <p className="m-0">
            I care about the parts that make frontend engineering durable: typed APIs, predictable
            forms, reusable components, URL-driven state, cache-aware data fetching, accessible UI
            structure, and pages that search engines and real users can both understand.
          </p>
          <p className="m-0">
            The newest chapter is DevOps engineering: Docker, GitLab CI/CD, Linux, and Kubernetes
            workflows that help me reason about the full delivery path: build it, ship it, observe
            it, and fix it when reality starts asking questions.
          </p>
          <p className="m-0 font-display text-[26px] font-semibold leading-[1.35] tracking-[-0.5px] text-text">
            What I&apos;m really chasing: ship it, watch it run, and be the person who can fix both
            ends.
          </p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col gap-[18px]">
          <ImagePlaceholder
            label="Drop a photo of you"
            aspect="4 / 5"
            className="rounded-[14px]"
          />
          <StatusPanel />
        </div>
      </Reveal>
    </div>
  );
}
