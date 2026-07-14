import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      // active section
      let cur = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 120) cur = l.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
              scrolled ? "glass-strong" : "glass"
            }`}
          >
            <button onClick={() => go("home")} className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)] font-mono text-sm font-bold text-primary-foreground glow-sm">
                NP
              </div>
              <span className="font-display text-sm font-semibold tracking-wide text-foreground/90">
                navadeep<span className="text-neon">.dev</span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-[image:var(--gradient-primary)] opacity-20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <button
              onClick={() => go("contact")}
              className="hidden rounded-lg border border-neon/40 bg-neon/10 px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-neon/20 hover:glow-sm md:inline-flex"
            >
              Hire Me
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-foreground md:hidden"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong mt-2 rounded-2xl p-2 md:hidden"
            >
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`block w-full rounded-lg px-4 py-2 text-left text-sm ${
                    active === l.id ? "bg-neon/15 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Scroll progress */}
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-[image:var(--gradient-primary)] transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
