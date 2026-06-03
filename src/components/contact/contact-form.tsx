"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

const FIELD_CLASS =
  "w-full resize-y border-0 border-b-[1.5px] border-line bg-transparent py-3 font-display text-[22px] font-medium tracking-[-0.3px] text-text outline-none transition-colors focus:border-accent";

function Field({
  label,
  placeholder,
  rows,
}: {
  label: string;
  placeholder: string;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-[5px]">
      <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-faint">{label}</span>
      {rows ? (
        <textarea rows={rows} placeholder={placeholder} className={FIELD_CLASS} />
      ) : (
        <input placeholder={placeholder} className={FIELD_CLASS} />
      )}
    </label>
  );
}

/** Contact form — front-end mock (no submission backend). */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <Field label="Your name" placeholder="who's saying hi?" />
      <Field label="Email" placeholder="where do I reply?" />
      <Field label="Message" placeholder="tell me a little about it…" rows={5} />
      <div className="flex items-center gap-3.5">
        <Button type="submit" variant="primary">
          {sent ? "Sent — talk soon ✓" : "Send it →"}
        </Button>
      </div>
    </form>
  );
}
