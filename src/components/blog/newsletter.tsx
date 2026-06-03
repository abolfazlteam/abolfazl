"use client";

import { useState, type FormEvent } from "react";

/** Newsletter sign-up — front-end mock (no real subscription). */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-[clamp(24px,3vw,34px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-20 size-[280px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 13%, transparent), transparent 65%)",
        }}
      />
      <div className="relative">
        <div className="font-mono text-[10px] uppercase tracking-[2px] text-accent">● Newsletter</div>
        <h3 className="mt-3 font-display text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.8px] text-text">
          No spam. Just the occasional good idea.
        </h3>
        <p className="mt-2.5 max-w-[460px] font-sans text-[15px] leading-[1.6] text-dim">
          A short email when I publish something worth your time — front-end, DevOps, and the odd
          lesson learned the hard way.
        </p>
        {done ? (
          <div className="mt-5 font-display text-lg font-semibold text-accent">
            You&apos;re in ✓ — talk soon.
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 flex flex-wrap gap-2.5">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              required
              placeholder="you@email.com"
              className="min-w-[220px] flex-1 rounded-lg border-[1.5px] border-line bg-bg px-4 py-[13px] font-sans text-[15px] text-text outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg border-0 bg-accent px-[22px] py-[13px] font-mono text-[13px] font-semibold uppercase tracking-[0.5px] text-accent-ink transition hover:brightness-105"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
