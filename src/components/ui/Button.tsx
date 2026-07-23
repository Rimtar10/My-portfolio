import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "filled" | "outline" | "outline-light";
  icon?: ReactNode;
  external?: boolean;
  download?: boolean | string;
}

export function Button({
  children,
  href,
  variant = "filled",
  icon,
  external,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200";

  const styles: Record<string, string> = {
    filled:
      "bg-terracotta text-bg-base hover:bg-terracotta-dark",
    outline:
      "border border-ink/70 text-ink hover:bg-ink hover:text-bg-base",
    "outline-light":
      "border border-bg-alt/60 text-bg-alt hover:bg-bg-alt hover:text-deep-teal",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]}`}
    >
      {children}
      {icon}
    </motion.a>
  );
}
