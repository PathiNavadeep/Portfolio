import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, Target } from "lucide-react";

const items = [
  {
    title: "AICTE × Microsoft Azure AI Virtual Internship",
    date: "June 2025",
    bullets: [
      "Learned Artificial Intelligence concepts and Azure AI services.",
      "Explored real-world AI applications and cloud technologies.",
    ],
  },
  {
    title: "Deloitte Data Analytics Job Simulation — Forage",
    date: "July 2025",
    bullets: [
      "Performed data cleaning and analysis on business datasets.",
      "Generated insights through visualization and reporting in Excel and Python.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="05 · Experience"
      title={<>Training & <span className="text-gradient">Goals</span></>}
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass neon-border rounded-2xl p-6 transition-all hover:bg-surface/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon/10 text-neon">
                    <Briefcase size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{it.title}</h3>
                </div>
                <span className="shrink-0 rounded-md bg-surface px-2 py-1 font-mono text-xs text-neon">
                  {it.date}
                </span>
              </div>
              <ul className="mt-4 space-y-2 pl-1">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong neon-border relative overflow-hidden rounded-3xl p-7"
        >
          <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-violet/15 blur-3xl" />
          <Target className="text-neon" size={28} />
          <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Career Goal</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Seeking opportunities as a{" "}
            <span className="text-foreground">Full Stack Developer</span> or{" "}
            <span className="text-foreground">Java Developer</span> where I can contribute, learn,
            and grow by building impactful software solutions while gaining hands-on industry
            experience.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {["Build", "Learn", "Ship"].map((w) => (
              <div key={w} className="rounded-xl bg-neon/5 px-2 py-3 font-mono text-xs uppercase tracking-widest text-neon">
                {w}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
