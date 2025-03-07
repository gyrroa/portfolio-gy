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
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Three.js",
              ]}
            />
            <TechCategory
              title="Backend"
              items={["Node.js", "Express", "Python"]}
            />
            <TechCategory title="Database" items={["MySQL", "Firebase"]} />
            {/* <TechCategory title="DevOps" items={["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Vercel"]} /> */}
            <TechCategory title="Tools" items={["Git", "VS Code", "Figma"]} />
            {/* <TechCategory title="Mobile" items={["React Native", "Flutter", "Ionic", "Capacitor"]} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
