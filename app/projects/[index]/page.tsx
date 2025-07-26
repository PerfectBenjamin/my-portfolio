import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectGallery from "./project-gallery";

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

// Generate static params for all project indices
export function generateStaticParams() {
  return projects.map((_, index) => ({
    index: index.toString(),
  }));
}

// Type for Next.js dynamic route params
interface ProjectDetailsPageProps {
  params: { index: string };
}

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { index } = params;
  const project = projects[Number(index)];

  if (!project) return notFound();

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

      <ProjectGallery images={project.images} />

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
    </div>
  );
}
