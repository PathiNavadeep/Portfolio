import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, MapPin, Calendar, Trophy, Zap, Users, Lightbulb, Code2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "B.Tech CSE", value: "" },
  { icon: MapPin, label: "College", value: "CMR Engineering" },
  { icon: Calendar, label: "Graduation", value: "2027" },
  { icon: Trophy, label: "CGPA", value: "7.68" },
];

const traits = [
  { icon: Zap, label: "Fast Learner" },
  { icon: Users, label: "Team Player" },
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: Code2, label: "Fresher Talent" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title={<>About <span className="text-gradient">Me</span></>}
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Hi, I'm <span className="font-semibold text-foreground">Navadeep Pathi</span>, a passionate
            Computer Science Engineering student. I enjoy building modern, scalable, and
            user-friendly software solutions that solve real-world problems.
          </p>
          <p>
            My interests lie in <span className="text-foreground">Full Stack Development</span>,{" "}
            <span className="text-foreground">Java Programming</span>, Machine Learning, and
            AI-powered applications. I've shipped projects across healthcare, agriculture,
            education, and recommendation systems — and I'm continuously sharpening my craft to
            become an industry-ready developer delivering impactful digital solutions.
          </p>

          <div className="!mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {traits.map((t) => (
              <div
                key={t.label}
                className="glass flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-foreground transition-all hover:border-neon/30"
              >
                <t.icon size={16} className="shrink-0 text-neon" />
                <span className="truncate">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong neon-border relative overflow-hidden rounded-3xl p-6"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon/10 blur-3xl" />
          <div className="mb-5 flex items-center justify-between">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              profile.json
            </div>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
            </div>
          </div>

          <div className="space-y-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-xl bg-surface/40 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <s.icon size={18} className="text-neon" />
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
                <span className="font-mono text-sm font-medium text-foreground">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-neon/20 bg-neon/5 p-4 text-center">
            <div className="font-mono text-xs uppercase tracking-widest text-neon">status</div>
            <div className="mt-1 font-display text-xl font-semibold text-foreground">
              Open to Roles
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
