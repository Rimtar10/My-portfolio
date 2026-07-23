import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, GITHUB_PROFILE } from "../../data/projects";
import type { ProjectTag } from "../../data/types";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Starfield } from "../ui/Starfield";

const filters: Array<ProjectTag | "All"> = [
  "All",
  "Full Stack",
  "AI / ML",
  "Mobile",
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectTag | "All">("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-bg-alt py-16 sm:py-24"
    >
      <Starfield />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                f === filter
                  ? "border-terracotta bg-terracotta text-bg-base"
                  : "border-border-soft text-ink-muted hover:border-terracotta/50 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-flow-row-dense">
          {visible.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}

          <Reveal>
            <motion.a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="flex h-full min-h-[160px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-soft bg-transparent p-6 text-center transition-colors hover:border-terracotta"
            >
              <ArrowUpRight className="text-terracotta" size={22} />
              <span className="font-medium text-ink">See more on GitHub</span>
              <span className="text-[13px] text-ink-muted">
                github.com/Rimtar10
              </span>
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
