"use client";

import Image from "next/image";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import "./responsive-gallery.css";

const projects = [
  {
    title:
      "Cooperative Management System Admin Panel: Case Study of Nile University of Nigeria",
    description:
      "A comprehensive cooperative management system admin panel with user authentication, payment processing, and admin dashboard. Features real-time inventory management and analytics.",
    image: "/Images/CMS1.png",
    images: [
      "/Images/CMS1.png",
      "/Images/CMS2.png",
      "/Images/CMS3.png",
      "/Images/CMS4.png",
      "/Images/CMS5.png",
    ],
    technologies: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Eventure",
    description:
      "Eventure is a software for creating and managing events. It allows users to create events, generate tickets and manage RSVPs. It is built with role-based access control, allowing different types of users such as Admins, Organizers, and Attendees to interact with the system according to their responsibilities.",
    image: "/Images/Eventure1.png",
    images: [
      "/Images/Eventure1.png",
      "/Images/Eventure2.png",
      "/Images/Eventure3.png",
      "/Images/Eventure4.png",
      "/Images/Eventure5.png",
    ],
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

// Type for Next.js dynamic route params
interface ProjectDetailsPageProps {
  params: Promise<{ index: string }>;
}

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { index } = use(params);
  const project = projects[Number(index)];

  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);

  if (!project) return notFound();

  // Gallery: main image + 4 placeholders, or use project.images if available
  const galleryImages = project.images?.length
    ? project.images
    : [
        project.image || "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500&2",
        "/placeholder.svg?height=300&width=500&3",
        "/placeholder.svg?height=300&width=500&4",
        "/placeholder.svg?height=300&width=500&5",
      ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-foreground text-center">
        {project.title}
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-center">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-secondary text-foreground border border-border text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-10">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl group hover:scale-105 transition-transform duration-300 cursor-pointer responsive-gallery-image"
            onClick={() => setFullscreenIdx(idx)}
            style={{ minHeight: 0, minWidth: 0, height: "320px" }}
          >
            <Image
              src={src}
              alt={`Project image ${idx + 1}`}
              width={1280}
              height={720}
              className="object-cover group-hover:brightness-90 transition-all duration-300"
              // fill removed, using width/height for responsive
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
      {/* <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded bg-card border border-border text-foreground hover:bg-secondary transition"
        >
          View Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Live Demo
        </a>
      </div> */}

      {/* Fullscreen Modal */}
      {fullscreenIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setFullscreenIdx(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-8 right-8 text-white text-3xl font-bold z-10 bg-black/60 rounded-full px-4 py-2 hover:bg-black/80 transition"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenIdx(null);
              }}
              aria-label="Close fullscreen"
            >
              &times;
            </button>
            <div className="relative w-[90vw] h-[80vh] max-w-5xl max-h-[80vh]">
              <Image
                src={galleryImages[fullscreenIdx]}
                alt={`Project image fullscreen ${fullscreenIdx + 1}`}
                // fill removed, using width/height for responsive
                width={1280}
                height={720}
                className="object-contain rounded-xl shadow-2xl"
                priority
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
