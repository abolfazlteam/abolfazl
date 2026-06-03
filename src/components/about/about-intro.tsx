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
            I started where a lot of people start — making buttons line up. Then I got hooked on
            the part nobody claps for: the app that doesn&apos;t break, the form that doesn&apos;t
            lose your work, the deploy that goes out quietly on a Friday and nobody notices because
            nothing went wrong.
          </p>
          <p className="m-0">
            I work part-time on the front-end for a SaaS team — React, Next.js, a design system,
            and a build pipeline I&apos;ve slowly stopped being scared of. I&apos;m a fast learner —
            I pick up tools because something <span className="font-semibold text-accent">needs</span>{" "}
            doing, not to pad a résumé.
          </p>
          <p className="m-0">
            The newest chapter is DevOps. I&apos;m interning, which is a polite phrase for
            &quot;learning in public and Googling a lot.&quot; Docker, GitLab CI/CD, Linux,
            Kubernetes — I&apos;m early, I know it, and I&apos;d rather tell you that than pretend.
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
