"use client";

import { Code } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import TechCategory from "@/components/ui/tech-category";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-black/70 to-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <SectionHeader icon={<Code />} title="Tech Stack" />

        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TechCategory
              title="Frontend"
              items={[
                {
                  name: "React",
                  url: "https://react.dev/",
                  logo: "/logos/react.svg",
                },
                {
                  name: "Next.js",
                  url: "https://nextjs.org/",
                  logo: "/logos/nextjs.svg",
                },
                {
                  name: "TypeScript",
                  url: "https://www.typescriptlang.org/",
                  logo: "/logos/typescript.svg",
                },
                {
                  name: "Tailwind CSS",
                  url: "https://tailwindcss.com/",
                  logo: "/logos/tailwind.svg",
                },
                {
                  name: "Three.js",
                  url: "https://threejs.org/",
                  logo: "/logos/threejs.svg",
                },
              ]}
            />
            <TechCategory
              title="Backend"
              items={[
                {
                  name: "Node.js",
                  url: "https://nodejs.org/",
                  logo: "/logos/nodejs.svg",
                },
                {
                  name: "Python",
                  url: "https://www.python.org/",
                  logo: "/logos/python.svg",
                },
                {
                  name: "C#",
                  url: "https://www.w3schools.com/cs/index.php",
                  logo: "/logos/csharp.svg",
                },
                {
                  name: "SQL",
                  url: "https://www.w3schools.com/sql/",
                  logo: "/logos/sql.svg",
                },
              ]}
            />
            <TechCategory
              title="Database"
              items={[
                {
                  name: "MySQL",
                  url: "https://www.mysql.com/",
                  logo: "/logos/mysql.svg",
                },
                {
                  name: "Firebase",
                  url: "https://firebase.google.com/",
                  logo: "/logos/firebase.svg",
                },
              ]}
            />
            <TechCategory
              title="Tools"
              items={[
                {
                  name: "Git",
                  url: "https://git-scm.com/",
                  logo: "/logos/git.svg",
                },
                {
                  name: "VS Code",
                  url: "https://code.visualstudio.com/",
                  logo: "/logos/vscode.svg",
                },
                {
                  name: "Figma",
                  url: "https://www.figma.com/",
                  logo: "/logos/figma.svg",
                },
                {
                  name: "Google Colab",
                  url: "https://colab.research.google.com/",
                  logo: "/logos/colab.svg",
                },
                {
                  name: "Eclipse",
                  url: "https://www.eclipse.org/",
                  logo: "/logos/eclipse.svg",
                },
                {
                  name: "PyCharm",
                  url: "https://www.jetbrains.com/pycharm/",
                  logo: "/logos/pycharm.svg",
                },
                {
                  name: "NetBeans",
                  url: "https://netbeans.apache.org/",
                  logo: "/logos/netbeans.svg",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
