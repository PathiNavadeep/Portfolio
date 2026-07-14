import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    place: "CMR Engineering College, Hyderabad",
    degree: "B.Tech — Computer Science Engineering (AI & ML)",
    detail: "CGPA: 7.68 · Expected Graduation 2027",
    period: "Sep 2023 — Present",
  },
  {
    place: "TMR Junior College, Hyderabad",
    degree: "Intermediate (Class XII)",
    detail: "Score: 90%",
    period: "2021 — 2023",
  },
  {
    place: "TMR School, Choutuppal",
    degree: "SSC (Class X)",
    detail: "CGPA: 10.0",
    period: "2021",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="04 · Journey"
      title={<>Education <span className="text-gradient">Timeline</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Node */}
              <div className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center md:left-1/2">
                <span className="absolute h-6 w-6 animate-ping rounded-full bg-neon/30" />
                <span className="relative h-3 w-3 rounded-full bg-neon glow-sm" />
              </div>

              <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="glass-strong neon-border inline-block w-full rounded-2xl p-5 text-left">
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon">
                    <GraduationCap size={14} /> {it.period}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{it.place}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.degree}</p>
                  <p className="mt-2 font-mono text-sm text-neon">{it.detail}</p>
                </div>
              </div>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
