import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Starfield } from "../ui/Starfield";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg-base py-16 sm:py-24"
    >
      <Starfield count={190} />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow="About" title="A bit about how I got here" />

        <div className="mt-10 grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="space-y-5 text-[17px] leading-relaxed text-ink-muted">
              <p>
                I'm a Computer Science graduate from Antonine University,
                now working as a Software Engineer at{" "}
                <span className="font-medium text-ink">GUADA.ai</span>,
                where I design and build software and AI systems across
                client industries.
              </p>
              <p>
                I also work as a research assistant at{" "}
                <span className="font-medium text-ink">GeoAI</span>, where
                we focus on remote sensing and satellite imagery. Alongside
                that, I lead the AI Society as President, serve as Secretary
                of the IEEE Student Branch, and earlier completed a Temenos
                T24 training academy at{" "}
                <span className="font-medium text-ink">Banker Way</span>.
              </p>
              <p>
                Outside of all that, the same patience for getting one
                detail right carries into everything else I make.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2 lg:-mt-20">
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border-2 border-terracotta"
                aria-hidden
              />
              <img
                src="/images/portrait.jpg"
                alt="Rim Tarhini"
                className="relative aspect-[4/5] w-full rounded-[28px] border border-border-soft object-cover object-top shadow-[0_8px_24px_rgba(42,38,34,0.08)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
