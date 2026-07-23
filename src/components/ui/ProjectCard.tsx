import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { Project } from "../../data/types";
import { Badge } from "./Badge";
import { PlaceholderImage } from "./PlaceholderImage";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./BrandIcons";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal
      delay={(index % 3) * 0.08}
      className={project.featured ? "sm:col-span-2" : ""}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-card-bg shadow-[0_1px_2px_rgba(42,38,34,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(42,38,34,0.12)]"
      >
        <PlaceholderImage
          label={`${project.name}: screenshot coming soon`}
          variant="screenshot"
          className={project.featured ? "h-56" : "h-40"}
        />

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-[19px] font-semibold text-ink">
              {project.name}
            </h3>
            <div className="flex shrink-0 gap-3 pt-1 text-ink-muted">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="transition-colors hover:text-terracotta"
              >
                <GithubIcon size={18} />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="transition-colors hover:text-terracotta"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="mb-3 text-[15px] text-ink-muted">{project.summary}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-auto flex items-center gap-1 self-start text-[13px] font-medium text-terracotta transition-colors hover:text-terracotta-dark"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={15} />
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-[14px] leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Reveal>
  );
}
