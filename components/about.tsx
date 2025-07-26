"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Zap,
  Award,
  Users,
  Brain,
  Rocket,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Award, label: "Years Experience", value: "2+" },
    { icon: Users, label: "Projects Completed", value: "5+" },
    { icon: Brain, label: "Technologies Mastered", value: "15+" },
    { icon: Rocket, label: "Happy Clients", value: "5+" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript",
      gradient: "from-primary/20 to-primary/10",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Express.js, MongoDB",
      gradient: "from-primary/20 to-primary/10",
    },
    {
      icon: Globe,
      title: "Cloud Architecture",
      description: "Google Cloud, Vercel, MongoDB Atlas",
      gradient: "from-primary/20 to-primary/10",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Scalability & Best Practices",
      gradient: "from-primary/20 to-primary/10",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground professional-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed professional-text">
            Passionate fullstack developer with 2+ years of experience building
            applications that make a difference
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 professional-border"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isVisible
                  ? "slideInUp 0.6s ease-out forwards"
                  : "none",
              }}
            >
              <CardContent className="p-4 text-center">
                <div className="relative">
                  {(() => {
                    const Icon = stat.icon;
                    return (
                      <Icon className="w-6 h-6 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                    );
                  })()}
                </div>
                <div className="text-xl font-bold mb-1 text-foreground professional-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground professional-text">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground professional-text">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed professional-text">
                My adventure in web development began with curiosity about how
                digital experiences come to life. Today, I specialize in
                creating full-stack applications that blend beautiful design
                with robust functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed professional-text">
                I believe in writing clean, maintainable code and staying ahead
                of industry trends. When I'm not coding, you'll find me
                exploring emerging technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solver",
                "Team Player",
                "Innovation Driven",
                "Quality Focused",
              ].map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-secondary text-foreground rounded-md border border-border professional-text professional-border"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 professional-border"
                style={{
                  animationDelay: `${(index + 4) * 0.1}s`,
                  animation: isVisible
                    ? "slideInUp 0.6s ease-out forwards"
                    : "none",
                }}
              >
                <CardContent className="p-4 text-center relative">
                  <div className="relative z-10">
                    <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-primary/20 p-2 group-hover:scale-110 transition-transform duration-300 professional-border">
                      {(() => {
                        const Icon = highlight.icon;
                        return <Icon className="w-6 h-6 text-primary" />;
                      })()}
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground professional-text">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground professional-text">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
