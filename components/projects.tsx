"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTouchGestures } from "@/hooks/use-touch-gestures";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const projectGestureRef = useTouchGestures({
    onSwipeLeft: nextProject,
    onSwipeRight: prevProject,
    threshold: 50,
  });

  const projects = [
    {
      title:
        "Cooperative Management System Admin Panel: Case Study of Nile University of Nigeria",
      description:
        "A comprehensive cooperative management system admin panel with user authentication, payment processing, and admin dashboard. Features real-time inventory management and analytics.",
      image: "/Images/CMS1.png",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Eventure",
      description:
        "Eventure is a software for creating and managing events. It allows users to create events, generate tickets and manage RSVPs. It is built with role-based access control, allowing different types of users such as Admins, Organizers, and Attendees to interact with the system according to their responsibilities.",
      image: "/Images/Eventure1.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Paystack",
        "Cloudinary",
        "qrcode.react",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground professional-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto professional-text">
            A showcase of my recent work and the technologies that power them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 professional-border cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: isVisible
                  ? "slideInScale 0.8s ease-out forwards"
                  : "none",
              }}
              onClick={() => (window.location.href = `/projects/${index}`)}
            >
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredProject === index ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-foreground professional-text">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground professional-text leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-secondary text-foreground border-border hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 professional-text professional-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group/btn bg-transparent border-border text-foreground hover:bg-secondary transition-all duration-300 professional-text professional-border"
                  >
                    <Link href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 professional-text professional-border"
                  >
                    <Link href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
