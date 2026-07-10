import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { CERTIFICATIONS } from "@/data";
import { accentSoft, accentVar } from "@/lib/theme";

export function CertificationsList() {
  return (
    <section className="mt-[clamp(64px,8vw,104px)]">
      <Reveal>
        <SectionHead
          n="02"
          title="Licenses & certifications"
          right={
            <span className="font-mono text-[10px] uppercase tracking-[1px] text-faint">
              {CERTIFICATIONS.length} credentials
            </span>
          }
        />
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
        {CERTIFICATIONS.map((certificate, index) => {
          const accent = accentVar(certificate.accent);

          return (
            <Reveal key={certificate.credentialId} delay={index * 70}>
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-xl border border-border bg-surface p-5 text-text no-underline transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_22px_54px_rgba(0,0,0,0.2)]"
              >
                <div className="flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-faint">
                        {certificate.issuer}
                      </div>
                      <h3 className="mt-2 font-display text-[clamp(20px,2.2vw,24px)] font-semibold leading-tight tracking-[-0.5px] text-text">
                        {certificate.title}
                      </h3>
                    </div>
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition group-hover:border-accent"
                      style={{
                        color: accent,
                        background: accentSoft(certificate.accent, 90),
                      }}
                    >
                      <Icon name="arrow" size={16} />
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="font-mono text-xs text-dim">
                      {certificate.issued}
                    </div>
                    <div className="mt-2 break-all font-mono text-[11px] leading-[1.55] text-faint">
                      Credential ID {certificate.credentialId}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-border px-2 py-1 font-mono text-[10px] text-dim"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
