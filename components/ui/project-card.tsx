"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink: string;
    codeLink: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-gray-800/50 border-gray-700 h-full flex flex-col hover:border-primary transition-colors">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={400}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-white">{project.title}</CardTitle>
          <CardDescription className="text-gray-300">
            {project.description}
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-700">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent> */}
        <CardFooter className="flex justify-between gap-4">
          {project.title === "Technology & Internet Addiction Awareness" && (
            <Button variant="outline" asChild className="flex-1">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View
              </a>
            </Button>
          )}
          {/* <Button variant="outline" asChild className="flex-1">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          </Button> */}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
