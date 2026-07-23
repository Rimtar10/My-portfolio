interface PlaceholderImageProps {
  label: string;
  className?: string;
  variant?: "portrait" | "tile" | "screenshot";
}

/**
 * Elegant stand-in for real photography/screenshots (brief's Open Items:
 * portrait, project screenshots, Beyond Code photos are all "to be supplied
 * later"). Swap by dropping a real image in `public/images/` and replacing
 * the component usage with a plain <img>.
 */
export function PlaceholderImage({
  label,
  className = "",
  variant = "tile",
}: PlaceholderImageProps) {
  const patterns: Record<string, string> = {
    portrait:
      "radial-gradient(circle at 30% 20%, rgba(193,91,61,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(217,164,65,0.3), transparent 50%), linear-gradient(160deg, #EFE6D6 0%, #E4D6BE 100%)",
    tile: "radial-gradient(circle at 70% 30%, rgba(184,107,119,0.28), transparent 55%), linear-gradient(150deg, #EFE6D6 0%, #DCCBAE 100%)",
    screenshot:
      "linear-gradient(135deg, rgba(47,72,88,0.12), rgba(193,91,61,0.12)), linear-gradient(150deg, #F3ECDF, #E4D6BE)",
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundImage: patterns[variant] }}
    >
      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply [background-image:repeating-linear-gradient(45deg,#2A2622_0,#2A2622_1px,transparent_1px,transparent_10px)]" />
      <span className="eyebrow relative z-10 px-4 text-center opacity-70">
        {label}
      </span>
    </div>
  );
}
