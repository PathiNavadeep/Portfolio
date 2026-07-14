import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { name: "Salesforce Certified Agentforce Specialist", date: "Dec 2025", issuer: "Salesforce" },
  { name: "Google Cloud Career Launchpad — Data Analytics", date: "Feb 2026", issuer: "Google Cloud" },
  { name: "IIT Bombay Spoken Tutorial — C, C++, Python, Git", date: "—", issuer: "IIT Bombay" },
  { name: "AI Foundation Certification", date: "—", issuer: "Hexart" },
  { name: "AI Advanced Certification", date: "—", issuer: "Hexart" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="06 · Credentials"
      title={<>Certifications & <span className="text-gradient">Badges</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group glass neon-border relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-surface/60"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-neon/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground glow-sm">
                  <Award size={18} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{c.date}</span>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neon/80">
                {c.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
