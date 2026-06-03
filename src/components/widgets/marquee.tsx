import { ALL_SKILLS } from "@/data";

/** Infinite, hover-pausable marquee of the full skill set. */
export function Marquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const items = [...ALL_SKILLS, ...ALL_SKILLS];

  return (
    // Literal arbitrary classes (no interpolation) so Tailwind can detect them.
    <div className="overflow-hidden [-webkit-mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
      <div className="flex w-max gap-3.5 animate-marquee hover:[animation-play-state:paused]">
        {items.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap font-display text-2xl font-semibold tracking-[-0.5px]"
            style={{ color: skill.learning ? "var(--accent)" : "var(--text)" }}
          >
            {skill.name}
            <span className="font-normal text-faint">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
