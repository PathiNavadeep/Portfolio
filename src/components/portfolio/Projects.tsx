import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Sprout, HeartPulse, Music, BookOpen, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  accent: string;
  url: string;
};

const projects: Project[] = [
  {
    icon: Sprout,
    title: "Smart Farming",
    description:
      "AI-based crop recommendation system using ML to predict suitable crops from soil and climate data. Built a Flask web app delivering real-time predictions and decision support for farmers.",
    tech: ["Python", "Flask", "Scikit-Learn", "ML", "MySQL"],
    accent: "from-emerald-400/30 to-cyan-400/20",
    url: "https://github.com/PathiNavadeep/Smart-Farming-",
  },
  {
    icon: HeartPulse,
    title: "Pregnancy Companion — Safe Mom",
    description:
      "Healthcare platform for expectant mothers with due date tracking, trimester monitoring, nutrition guidance, fetal development insights, wellness tips, and integrated healthcare chat support.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Healthcare APIs"],
    accent: "from-pink-400/30 to-violet-400/20",
    url: "https://github.com/PathiNavadeep/Pregnancy-Companion--safe-mom",
  },
  {
    icon: Music,
    title: "Mood-Based Music Recommendation",
    description:
      "Emotion-aware music recommender suggesting playlists from mood selection and text input, with adaptive themes and a dynamic user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "from-violet-400/30 to-blue-400/20",
    url: "https://github.com/PathiNavadeep/Mood-Based-Music-Recommedation-System-",
  },
  {
    icon: BookOpen,
    title: "Textbook Quality Assessment",
    description:
      "ML + NLP system that evaluates educational textbooks using readability, grammar quality, vocabulary richness, and topic coverage to classify overall content quality.",
    tech: ["Python", "NLP", "Machine Learning", "Data Analytics"],
    accent: "from-amber-400/25 to-orange-400/15",
    url: "https://github.com/PathiNavadeep/Textbook-Quality-Assessment-System",
  },
];

const upcoming = [
  "E-Commerce Web Application",
  "Task Management System",
  "AI Career Assistant",
  "Advanced Portfolio Website",
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Work"
      title={<>Featured <span className="text-gradient">Projects</span></>}
      subtitle="Selected builds spanning agriculture, healthcare, music, and education."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group glass-strong neon-border relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1.5"
          >
            <div className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`} />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-neon/10 text-neon transition-all group-hover:bg-neon/20 group-hover:glow-sm">
                  <p.icon size={22} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neon transition-all hover:gap-2.5"
              >
                Case study <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Upcoming */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <Sparkles size={14} className="text-neon" /> In the pipeline
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((u) => (
            <div
              key={u}
              className="glass rounded-xl border-dashed px-4 py-4 text-sm text-muted-foreground transition-all hover:border-neon/40 hover:text-foreground"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-neon/70">coming soon</div>
              <div className="mt-1 font-medium">{u}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
