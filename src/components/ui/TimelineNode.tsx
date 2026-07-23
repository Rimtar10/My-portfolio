import type { ExperienceEntry } from "../../data/types";
import { Reveal } from "./Reveal";

export function TimelineNode({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05} className="relative pl-10 sm:pl-14">
      <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-terracotta bg-card-bg sm:left-0" />
      <div className="rounded-2xl border border-border-soft bg-card-bg p-5 shadow-[0_1px_2px_rgba(42,38,34,0.04)] sm:p-6">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-[18px] font-semibold text-ink">
            {entry.role}
          </h3>
          {entry.dates && (
            <span className="text-[13px] text-ink-muted">{entry.dates}</span>
          )}
        </div>
        <div className="mb-2 flex items-center gap-2 text-[14px] text-terracotta-dark">
          <span>{entry.org}</span>
          {entry.kind === "academy" && (
            <span className="eyebrow rounded-full bg-ochre/20 px-2 py-0.5 text-[10px] text-ink-muted">
              Academy / Training
            </span>
          )}
        </div>
        <p className="text-[15px] leading-relaxed text-ink-muted">
          {entry.description}
        </p>
      </div>
    </Reveal>
  );
}
