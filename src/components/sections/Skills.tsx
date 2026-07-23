import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillBar } from "../ui/SkillBar";
import { Reveal } from "../ui/Reveal";
import { Starfield } from "../ui/Starfield";

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-bg-base py-16 sm:py-24"
    >
      <Starfield count={95} />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                  cat.id === activeId
                    ? "border-terracotta bg-terracotta text-bg-base"
                    : "border-border-soft text-ink-muted hover:border-terracotta/50 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2"
            >
              {active.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
