import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p
        className="eyebrow mb-3"
        style={tone === "inverted" ? { color: "#B7C6CE" } : undefined}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-[28px] sm:text-[32px] font-semibold ${
          tone === "inverted" ? "text-bg-alt" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
