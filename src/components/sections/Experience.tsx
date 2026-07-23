import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineNode } from "../ui/TimelineNode";
import { Starfield } from "../ui/Starfield";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-bg-alt py-16 sm:py-24"
    >
      <Starfield />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mt-14 space-y-8">
          <div
            className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-terracotta/40 sm:left-0 sm:block"
            aria-hidden
          />
          {experience.map((entry, i) => (
            <TimelineNode key={entry.role + entry.org} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
