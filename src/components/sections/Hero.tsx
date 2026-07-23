import { motion, type Variants } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Starfield } from "../ui/Starfield";
import { GradientBlob } from "../three/GradientBlob";
import { HeroScene } from "../three/HeroScene";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const chips: Array<{
  label: string;
  className: string;
  float: { y: [number, number]; duration: number; delay: number };
}> = [
  {
    label: "Python",
    className: "left-[2%] top-[10%]",
    float: { y: [0, -10], duration: 4.2, delay: 0 },
  },
  {
    label: "React",
    className: "right-[4%] top-[6%]",
    float: { y: [0, 8], duration: 3.6, delay: 0.4 },
  },
  {
    label: "PyTorch",
    className: "left-[-2%] top-[52%]",
    float: { y: [0, 9], duration: 4.6, delay: 0.8 },
  },
  {
    label: "TypeScript",
    className: "right-[-2%] top-[46%]",
    float: { y: [0, -8], duration: 3.9, delay: 0.2 },
  },
  {
    label: "Java",
    className: "left-[6%] bottom-[4%]",
    float: { y: [0, -7], duration: 4.1, delay: 0.6 },
  },
  {
    label: "Node.js",
    className: "right-[8%] bottom-[8%]",
    float: { y: [0, 7], duration: 3.4, delay: 1 },
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88svh] items-center overflow-hidden bg-bg-base pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(42,38,34,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <GradientBlob />
      <Starfield count={190} />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 order-2 lg:order-1"
        >
          <motion.p
            variants={item}
            className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft bg-card-bg/70 px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Software &amp; AI Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[52px] leading-[1.05] font-semibold text-ink sm:text-[64px] lg:text-[80px]"
          >
            Rim Tarhini
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-muted sm:text-[18px]"
          >
            I design and build software and AI systems end to end, from
            research pipelines to production.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects" variant="filled">
              View projects
            </Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
            <Button
              href="/Rim-Tarhini-Resume.pdf"
              download="Rim-Tarhini-Resume.pdf"
              variant="outline"
              icon={<Download size={15} />}
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative order-1 z-10 aspect-square w-full max-w-[300px] justify-self-center sm:max-w-[420px] lg:order-2 lg:max-w-[600px] lg:justify-self-end"
        >
          <HeroScene />

          {chips.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: chip.float.y,
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.9 + i * 0.12 },
                scale: { duration: 0.6, delay: 0.9 + i * 0.12 },
                y: {
                  duration: chip.float.duration,
                  delay: chip.float.delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className={`eyebrow absolute z-20 hidden rounded-full border border-border-soft bg-card-bg/90 px-3 py-1.5 text-ink-muted shadow-[0_4px_14px_rgba(42,38,34,0.08)] sm:block ${chip.className}`}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
