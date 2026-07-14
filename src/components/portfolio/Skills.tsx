import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Code2, Globe, Server, Database, Brain, Boxes, Wrench, Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Group = { icon: LucideIcon; title: string; items: { name: string; level: number }[] };

const groups: Group[] = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    icon: Globe,
    title: "Frontend",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Java (JDBC)", level: 80 },
      { name: "REST APIs", level: 78 },
      { name: "Flask", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: [{ name: "MySQL", level: 80 }],
  },
  {
    icon: Brain,
    title: "ML & AI",
    items: [
      { name: "Machine Learning", level: 80 },
      { name: "NLP", level: 70 },
      { name: "Data Analysis", level: 78 },
      { name: "Crop Recommendation", level: 82 },
    ],
  },
  {
    icon: Boxes,
    title: "Data Structures",
    items: [
      { name: "Arrays · Strings", level: 88 },
      { name: "Linked Lists · Stacks · Queues", level: 80 },
      { name: "Trees", level: 72 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 92 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Team Collaboration", level: 88 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Stack"
      title={<>Skills & <span className="text-gradient">Toolbox</span></>}
      subtitle="The technologies, languages, and disciplines I use to build modern software."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group glass neon-border relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-surface/60"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-neon/10 text-neon transition-all group-hover:bg-neon/20 group-hover:glow-sm">
                <g.icon size={18} />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="space-y-2.5">
              {g.items.map((it) => (
                <div key={it.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">{it.name}</span>
                    <span className="font-mono text-neon">{it.level}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-surface-2/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.05 }}
                      className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
