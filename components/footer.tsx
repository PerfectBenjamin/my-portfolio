import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2 text-foreground professional-text">
              Perfect Benjamin-Maji
            </h3>
            <p className="text-muted-foreground professional-text">
              Fullstack Developer - Passionate about creating exceptional web
              and mobile experiences
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/PerfectBenjamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border hover:border-primary/40 professional-border"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/perfectbenjamin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border hover:border-primary/40 professional-border"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/kng_zee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border hover:border-primary/40 professional-border"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:perfectmaji98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border hover:border-primary/40 professional-border"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground professional-text">
            &copy; 2025 Perfect Benjamin-Maji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
