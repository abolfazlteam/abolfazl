import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { EXPERIENCE, EXPERIENCE_INTRO } from "@/data";
import { accentVar } from "@/lib/theme";

export function ExperienceList() {
  return (
    <section className="mt-[clamp(64px,8vw,104px)]">
      <Reveal>
        <SectionHead n="01" title="Work experience" />
      </Reveal>
      <Reveal delay={60}>
        <p className="m-0 max-w-[760px] font-sans text-[16.5px] leading-[1.65] text-dim">
          {EXPERIENCE_INTRO}
        </p>
      </Reveal>

      <div className="mt-9 border-t border-line">
        {EXPERIENCE.map((job, i) => {
          const accent = accentVar(job.accent);
          return (
            <Reveal key={job.company} delay={80 + i * 70}>
              <div className="grid grid-cols-[48px_1fr] items-start gap-[clamp(14px,2vw,28px)] border-b border-line py-[26px] min-[880px]:grid-cols-[52px_1fr_auto]">
                <ImagePlaceholder
                  label={job.company[0]}
                  aspect="1 / 1"
                  src={job.logoSrc}
                  alt={`${job.company} logo`}
                  className="size-12 rounded-[10px]"
                  fit="contain"
                  sizes="48px"
                />
                <div>
                  <div className="font-display text-[clamp(19px,2.4vw,24px)] font-semibold leading-tight tracking-[-0.4px] text-text">
                    {job.role}{" "}
                    <span style={{ color: accent }}>· {job.company}</span>
                  </div>
                  <div className="mt-[5px] font-mono text-xs text-dim">
                    {job.location} · {job.mode}
                  </div>
                  <ul className="m-0 mt-3.5 flex list-none flex-col gap-2 p-0">
                    {job.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 font-sans text-[14.5px] leading-[1.55] text-text"
                      >
                        <span
                          className="mt-px shrink-0"
                          style={{ color: accent }}
                        >
                          —
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="col-start-2 mt-1 whitespace-nowrap font-mono text-xs tracking-[0.5px] text-dim min-[880px]:col-start-auto min-[880px]:mt-0 min-[880px]:text-right">
                  {job.period}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
