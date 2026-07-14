import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "Problem Solver",
  "AI Enthusiast",
  "Machine Learning Explorer",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[i % roles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = cur.slice(0, text.length + 1);
        setText(next);
        if (next === cur) setTimeout(() => setDel(true), 1400);
      } else {
        const next = cur.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="font-mono text-neon">
      {text}
      <span className="caret ml-0.5 inline-block h-5 w-[2px] -mb-0.5 bg-neon" />
    </span>
  );
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
              </span>
              Available for opportunities · 2026 Graduate
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Navadeep
              <br />
              <span className="text-gradient">Pathi.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              <span className="text-foreground">Full Stack Developer</span>
              <span className="mx-2 text-neon/60">/</span>
              <span className="text-foreground">Java Developer</span>
            </p>

            <p className="mt-2 font-display text-2xl text-foreground/90 md:text-3xl">
              Building <span className="text-gradient">Future</span> with Code.
            </p>

            <div className="mt-8 flex h-8 items-center gap-2 text-base md:text-lg">
              <span className="text-muted-foreground">{">"}</span>
              <Typewriter />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="neon-border inline-flex items-center gap-2 rounded-xl bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface"
              >
                <Download size={16} /> Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-neon/40 hover:text-foreground"
              >
                <Mail size={16} /> Contact
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-neon">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-neon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pathinavadeep420@gmail.com" className="transition hover:text-neon">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right - Animated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* Rotating rings */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-neon/20" />
            <div className="absolute inset-6 animate-spin-slow rounded-full border border-violet/20" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            <div className="absolute inset-12 rounded-full border border-cyan/10" />

            {/* Center glass orb */}
            <div className="absolute inset-16 grid place-items-center">
              <div className="glass-strong neon-border relative h-full w-full animate-pulse-glow rounded-full">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <Sparkles className="mx-auto text-neon" size={32} />
                    <div className="mt-3 font-mono text-xs text-muted-foreground">{"<dev />"}</div>
                    <div className="mt-1 font-display text-3xl font-bold text-gradient">NP</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      v.2026
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            {[
              { label: "Java", top: "5%", left: "10%", delay: 0 },
              { label: "React", top: "12%", right: "8%", delay: 0.4 },
              { label: "Python", bottom: "10%", left: "5%", delay: 0.8 },
              { label: "ML", bottom: "8%", right: "12%", delay: 1.2 },
              { label: "Flask", top: "48%", left: "-4%", delay: 1.6 },
              { label: "SQL", top: "48%", right: "-4%", delay: 2 },
            ].map((c) => (
              <div
                key={c.label}
                className="absolute"
                style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom, animationDelay: `${c.delay}s` }}
              >
                <div className="animate-float glass rounded-lg px-3 py-1 font-mono text-xs text-foreground glow-sm">
                  {c.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
