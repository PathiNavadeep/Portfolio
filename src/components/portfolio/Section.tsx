import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neon">
            <span className="h-px w-8 bg-neon/50" /> {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
