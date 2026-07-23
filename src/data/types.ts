export type SkillTier = "familiar" | "proficient" | "advanced" | "expert";

export const TIER_LABEL: Record<SkillTier, string> = {
  familiar: "Familiar",
  proficient: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

export const TIER_WIDTH: Record<SkillTier, number> = {
  familiar: 40,
  proficient: 65,
  advanced: 85,
  expert: 100,
};

export interface Skill {
  name: string;
  tier: SkillTier;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  dates: string;
  description: string;
  kind?: "role" | "academy";
}

export type ProjectTag = "Full Stack" | "AI / ML" | "Mobile";

export interface Project {
  name: string;
  repo: string;
  tech: string[];
  summary: string;
  description: string;
  tags: ProjectTag[];
  featured?: boolean;
  demo?: string;
}

export interface LeadershipItem {
  title: string;
  org: string;
  icon: string;
}
