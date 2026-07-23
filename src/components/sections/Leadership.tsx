import {
  Sparkles,
  Cpu,
  Globe2,
  Code2,
  PartyPopper,
  Rocket,
  Users,
  Bot,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { leadership } from "../../data/leadership";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Starfield } from "../ui/Starfield";

// Explicit map (rather than `import * as Icons`) so bundlers can
// tree-shake every unused icon out of the ~4,000-icon lucide-react set.
const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Cpu,
  Globe2,
  Code2,
  PartyPopper,
  Rocket,
  Users,
  Bot,
  GraduationCap,
};

export function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-bg-base py-16 sm:py-24"
    >
      <Starfield count={120} />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Leadership & Community"
          title="Beyond the day job"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title + item.org} delay={(i % 3) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border-soft bg-card-bg p-5 transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(42,38,34,0.08)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ochre/15 text-terracotta-dark">
                    {Icon ? <Icon size={19} /> : null}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">
                      {item.org}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
