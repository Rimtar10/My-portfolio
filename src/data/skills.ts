import type { SkillCategory } from "./types";

/**
 * Tiers below are Rim's own ratings, mapped from the percentages she gave
 * onto the brief's 4 snapped tiers (Familiar 40% / Proficient 65% /
 * Advanced 85% / Expert 100%) by nearest match. Two are still flagged as
 * unconfirmed — see the inline notes.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java", tier: "advanced" }, // 90%
      { name: "Python", tier: "advanced" }, // 90%
      { name: "JavaScript / TypeScript", tier: "advanced" }, // 85%
      { name: "PHP", tier: "advanced" }, // 80%
      { name: "C++", tier: "proficient" }, // Mid, per Rim
      { name: "C#", tier: "advanced" }, // 82%
      // C removed — Rim doesn't count it as a real skill.
    ],
  },
  {
    id: "web-mobile",
    label: "Web & Mobile",
    skills: [
      { name: "React", tier: "advanced" }, // 80
      { name: "Next.js", tier: "advanced" }, // 86
      { name: "Node.js / Express", tier: "advanced" }, // 84
      { name: "Flutter / Dart", tier: "proficient" }, // 71
      { name: "React Native", tier: "advanced" }, // 79
      { name: "Laravel", tier: "proficient" }, // 74
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      // PyTorch: not clearly rated in Rim's list — confirm before shipping.
      { name: "PyTorch", tier: "advanced" },
      { name: "TensorFlow / Keras", tier: "advanced" }, // 80
      { name: "Scikit-learn", tier: "advanced" }, // 85
      { name: "Computer Vision (YOLO / OpenCV)", tier: "advanced" }, // 79
      { name: "NLP", tier: "proficient" }, // Mid, per Rim
      { name: "Generative AI", tier: "proficient" }, // Mid, per Rim
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", tier: "advanced" }, // 90
      { name: "MySQL", tier: "advanced" }, // 80
      { name: "MongoDB", tier: "proficient" }, // 74
      { name: "PL/SQL", tier: "advanced" }, // 79
    ],
  },
  // Cloud & DevOps category removed per Rim's request.
];
