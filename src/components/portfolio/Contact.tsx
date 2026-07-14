import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, Linkedin, Github, Send, Download, Briefcase, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:pathinavadeep420@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section
      id="contact"
      eyebrow="07 · Contact"
      title={<>Let's build <span className="text-gradient">something</span>.</>}
      subtitle="Open to internships, full-time roles, freelance work and collaborations."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "pathinavadeep420@gmail.com", href: "mailto:pathinavadeep420@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 75694 34605", href: "tel:+917569434605" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/navadeep-pathi", href: "https://www.linkedin.com/in/navadeep-pathi-7585b7326/" },
            { icon: Github, label: "GitHub", value: "github.com/PathiNavadeep", href: "https://github.com/PathiNavadeep" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group glass neon-border flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:bg-surface/60"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-neon/10 text-neon transition-all group-hover:bg-neon/20 group-hover:glow-sm">
                <c.icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm font-medium text-foreground">{c.value}</div>
              </div>
            </a>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="mailto:pathinavadeep420@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow"
            >
              <Briefcase size={15} /> Hire Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="neon-border inline-flex items-center gap-2 rounded-xl bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground"
            >
              <Download size={15} /> Resume
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong neon-border space-y-4 rounded-3xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-neon/50 focus:bg-surface/70 focus:glow-sm"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-neon/50 focus:bg-surface/70 focus:glow-sm"
                placeholder="you@company.com"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-neon/50 focus:bg-surface/70 focus:glow-sm"
              placeholder="Tell me about your project or role…"
            />
          </Field>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow"
          >
            {sent ? (
              <>
                <Check size={16} /> Message ready — opening mail…
              </>
            ) : (
              <>
                Send Message
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
