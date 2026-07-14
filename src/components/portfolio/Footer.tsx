import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © 2026 <span className="text-foreground">Navadeep Pathi</span>. Built with passion,
          innovation, and <span className="text-neon">code</span>.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-neon">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-neon">
            <Linkedin size={18} />
          </a>
          <a href="mailto:pathinavadeep420@gmail.com" className="transition hover:text-neon">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
