"use client";

import { Folder } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  // Sample project data
  const projects = [
    {
      title: "Security Guards Payroll & Records System",
      description:
        "This system simplifies the management of security guards' records and payroll for the Federal Security Agency. It enables authorized personnel to efficiently handle guard information, assignments, attendance, and payroll. The system supports quick searches by name or ID and allows for seamless CRUD operations.",
      image: "projects/federaland.png?",
      technologies: ["Java", "Eclipse"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "TART: Text Analysis and Retrieval Tool",
      description:
        "TART utilizes an Inverted Index for efficient text retrieval and term analysis, along with Linked Lists for dynamic text document management. These data structures enhance the tool’s performance, enabling fast and accurate text analysis and file handling across various text-based documents.",
      image: "projects/tart.png?",
      technologies: ["Java", "Eclipse"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/johndoe/ai-content-generator",
    },
    {
      title: "SharpC: Internet Café Management System",
      description:
        "SharpC is an internet café management program that enables owners to monitor PC usage, manage user registrations, and track overall user statistics and café performance.",
      image: "projects/sharpc.png",
      technologies: ["React", "Firebase", "Material UI", "Chart.js", "Auth0"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/johndoe/task-dashboard",
    },
    {
      title: "Federaland Security Agency Monitoring System",
      description:
        "The Federaland Security Agency Monitoring System improves upon the Security Guards Payroll & Records System by integrating real-time monitoring and efficient management of security personnel. It tracks assignments, attendance, performance, and payroll, ensuring compliance with regulations. Authorized personnel can manage guard information, perform quick searches, and execute CRUD operations, all powered by a secure MySQL database.",
      image: "projects/federaland2.png",
      technologies: ["React", "Firebase", "Material UI", "Chart.js", "Auth0"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/johndoe/task-dashboard",
    },
    {
      title: "AcademiX – an all-in-one student platform (Prototype)",
      description:
        "AcademiX is an all-in-one platform that helps students manage homework, deadlines, and collaborate with peers. It offers gamified study tools, quizzes, and on-demand tutoring for personalized learning, all in one dynamic platform.",
      image: "projects/academix.png",
      technologies: ["React", "Firebase", "Material UI", "Chart.js", "Auth0"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/johndoe/task-dashboard",
    },
    {
      title: "Technology & Internet Addiction Awareness",
      description:
        "Technology addiction is a dependency caused by emotional, psychological, social, and biological factors, leading to an inability to control technology use. It affects people of all ages exposed to technology and the internet.",
      image: "projects/tiaa.png",
      technologies: ["React", "Firebase", "Material UI", "Chart.js", "Auth0"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/johndoe/task-dashboard",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeader icon={<Folder />} title="Projects" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
