import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { SKILLS } from "@/data";

const LEVELS = [1, 2, 3, 4, 5] as const;

export function SkillsGrid() {
  return (
    <section className="mt-[clamp(64px,8vw,104px)]">
      <Reveal>
        <SectionHead n="04" title="Toolbox" />
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[22px]">
        {Object.entries(SKILLS).map(([group, skills], groupIndex) => (
          <Reveal key={group} delay={groupIndex * 60}>
            <div>
              <h3 className="mb-3.5 font-mono text-[10px] uppercase tracking-[1.5px] text-faint">
                {group}
              </h3>
              <div className="flex flex-col gap-[9px]">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between border-b border-border-soft pb-[9px]"
                  >
                    <span
                      className="font-sans text-[14.5px]"
                      style={{ color: skill.learning ? "var(--accent)" : "var(--text)" }}
                    >
                      {skill.name}
                    </span>
                    {skill.learning ? (
                      <span className="font-mono text-[9px] uppercase tracking-[1px] text-accent">
                        learning
                      </span>
                    ) : (
                      <div className="flex gap-[3px]">
                        {LEVELS.map((level) => (
                          <span
                            key={level}
                            className="size-[5px] rounded-[3px]"
                            style={{ background: level <= skill.level ? "var(--text)" : "var(--border)" }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
