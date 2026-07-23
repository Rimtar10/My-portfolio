import { motion } from "framer-motion";
import { TIER_LABEL, TIER_WIDTH, type Skill } from "../../data/types";

export function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const width = TIER_WIDTH[skill.tier];

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-[15px] text-ink">{skill.name}</span>
        <span className="text-[12px] text-ink-muted">
          {TIER_LABEL[skill.tier]}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-border-soft/60">
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #D9A441 0%, #D9A441 70%, #C15B3D 100%)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}
