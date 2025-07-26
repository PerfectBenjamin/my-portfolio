"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Server,
  Database,
  Cloud,
  Wrench,
  Smartphone,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % skillCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        "React JS",
        "Next JS",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind",
        "TypeScript",
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node JS", "Express JS"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "Deployment & Cloud",
      icon: Cloud,
      skills: ["Google Cloud", "Vercel", "Netlify"],
    },
    {
      title: "Tools & Design",
      icon: Wrench,
      skills: ["Git", "VS Code", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 px-4 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground professional-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto professional-text">
            The technologies and tools I use to build exceptional digital
            experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 professional-border"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: isVisible
                  ? "flipInY 0.8s ease-out forwards"
                  : "none",
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 p-1.5 group-hover:scale-110 transition-transform duration-300 professional-border">
                    {(() => {
                      const Icon = category.icon;
                      return <Icon className="w-5 h-5 text-primary" />;
                    })()}
                  </div>
                  <CardTitle className="text-lg text-foreground professional-text">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`transition-all duration-300 hover:scale-105 bg-secondary text-foreground border border-border professional-text professional-border ${
                        hoveredCategory === index
                          ? "bg-primary/20 border-primary/40 text-primary"
                          : ""
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
