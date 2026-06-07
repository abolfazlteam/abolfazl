import { LiveClock } from "@/components/widgets/live-clock";

const STATUS_ROWS: [label: string, value: string][] = [
  ["Open to", "full-time & freelance — front-end / junior DevOps"],
  ["Building", "a CI dashboard that kills a Slack thread"],
  ["Learning", "Kubernetes, by breaking the staging cluster"],
  ["Stack", "React · Next · TypeScript · Docker · GitLab CI"],
];

/** "Right now" panel with a live Tehran clock. Used on the home hero and About. */
export function StatusPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border-soft bg-bg-soft px-[18px] py-3.5">
        <span className="font-mono text-[10px] uppercase tracking-[2px] text-dim">Status</span>
        <LiveClock />
      </div>
      <div className="flex flex-col gap-3 px-[18px] py-4">
        {STATUS_ROWS.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[74px_1fr] items-baseline gap-3.5">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.5px] text-faint">{label}</span>
            <span className="font-sans text-[13.5px] leading-[1.45] text-text">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
