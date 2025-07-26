"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MobileQuickActions } from "@/components/mobile-quick-actions";
import { useTouchGestures } from "@/hooks/use-touch-gestures";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [quickActionsPosition, setQuickActionsPosition] = useState({
    x: 0,
    y: 0,
  });
  const { ref, isVisible } = useScrollAnimation();

  const heroGestureRef = useTouchGestures({
    onLongPress: () => {
      setQuickActionsPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setShowQuickActions(true);
    },
    onDoubleTap: () => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={(node) => {
        ref.current = node;
        heroGestureRef.current = node;
      }}
      className={`min-h-screen flex items-center justify-center px-4 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.08) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm mt-16 professional-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-primary professional-text">
              Available for opportunities
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight professional-text whitespace-nowrap">
              <span className="text-foreground">Perfect Benjamin-Maji</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-light professional">
              Fullstack Developer & Digital Architect
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed professional-text">
              Passionate about creating exceptional digital experiences with
              modern technologies. Specializing in scalable web and mobile
              applications and innovative solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 professional-border professional-text"
          >
            <Link href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-border text-foreground hover:bg-secondary transition-all duration-300 professional-border professional-text bg-transparent"
          >
            <Link href="#projects">
              <Download className="w-4 h-4 mr-2" />
              View Projects
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          {[
            {
              href: "https://github.com/PerfectBenjamin",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/perfectbenjamin",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:perfectmaji98@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }, index) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 professional-border professional-text"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isVisible
                  ? "fadeInUp 0.6s ease-out forwards"
                  : "none",
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>

        <div className="pt-12">
          <Link
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-all duration-300 group professional-text"
          >
            <ArrowDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
      <MobileQuickActions
        isVisible={showQuickActions}
        onClose={() => setShowQuickActions(false)}
        position={quickActionsPosition}
      />
    </section>
  );
}
