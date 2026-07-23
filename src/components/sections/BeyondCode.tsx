import { SectionHeading } from "../ui/SectionHeading";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { Reveal } from "../ui/Reveal";
import { Starfield } from "../ui/Starfield";

// Once a real photo lands in public/images/, set its `image` path here
// (e.g. "/images/sketching.jpg") and the tile switches from the
// placeholder gradient to the actual photo automatically.
const tiles: Array<{ label: string; caption: string; image?: string }> = [
  {
    label: "Sketching",
    caption: "Where ideas start, before anything else.",
    image: "/images/sketching.jpg",
  },
  {
    label: "Clay",
    caption: "Slower, with my hands, no undo button.",
    image: "/images/clay.jpg",
  },
  {
    label: "Sports",
    caption: "Swimming, badminton, and a few others.",
    image: "/images/sports.jpg",
  },
];

export function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="relative overflow-hidden bg-bg-alt py-16 sm:py-24"
    >
      <Starfield count={340} />
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Beyond Code"
          title="What fills the rest of the time"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.1}>
              <div className="text-center">
                {tile.image ? (
                  <img
                    src={tile.image}
                    alt={tile.label}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    label={tile.label}
                    variant="tile"
                    className="aspect-square w-full rounded-2xl"
                  />
                )}
                <h3 className="mt-4 font-serif text-[18px] font-semibold text-ink">
                  {tile.label}
                </h3>
                <p className="mt-1 text-[14px] text-ink-muted">
                  {tile.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
