import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Freelance Software Developer",
      company: "Remote",
      period: "2024 - Present",
      description:
        "I have been working as a freelance software developer a year. I have worked on a variety of projects, from small websites to large scale applications. I have also worked with variety of technologies.",
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Paystack",
        "Cloudinary",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "NNPC Gas Marketing Limited",
      period: "2024",
      description:
        "Contributed to digital transformation initiatives at NGML by supporting system development, data management, and process automation efforts. Collaborated with cross-functional teams to improve operational workflows and ensure compliance with industry standards. Gained hands-on experience in enterprise IT systems, data analysis, and the energy sector’s regulatory environment.",
      technologies: [
        "React.js",
        "Next.js",
        "MongoDB",
        "Netlify",
        "Tailwind CSS",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "FCT Development Control",
      period: "2023",
      description:
        "At the EDMS, I played a key role in streamlining document workflows, enhancing system security, and driving digital transformation. Successfully led projects in document digitization, workflow automation, and cloud migration boosting efficiency, reducing costs, and improving user experience.",
      technologies: ["React.js", "Figma", "Tailwind CSS", "Node.js", "Express"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground professional-text">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground professional-text">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="border border-border bg-card/50 backdrop-blur-sm professional-border"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-foreground professional-text">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground professional-text">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit bg-secondary text-foreground border-border professional-text professional-border"
                  >
                    {experience.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-muted-foreground professional-text">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary text-foreground border border-border professional-text professional-border"
                    >
                      {tech}
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
