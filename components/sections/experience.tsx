"use client"

import { Briefcase } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import TimelineItem from "@/components/ui/timeline-item"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black/70 to-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeader icon={<Briefcase />} title="Experience" />

        <div className="mt-12 space-y-8">
          {/* <TimelineItem
            title="Senior Frontend Developer"
            company="Tech Innovations Inc."
            period="2021 - Present"
            description="Lead the frontend development team in building a SaaS platform using React, TypeScript, and GraphQL. Implemented CI/CD pipelines and improved performance by 40%."
          />

          <TimelineItem
            title="Full Stack Developer"
            company="Digital Solutions Ltd."
            period="2018 - 2021"
            description="Developed and maintained multiple web applications using the MERN stack. Collaborated with designers to implement responsive UI/UX designs and integrated third-party APIs."
          />

          <TimelineItem
            title="Junior Web Developer"
            company="WebCraft Agency"
            period="2016 - 2018"
            description="Created responsive websites for clients across various industries. Worked with WordPress, HTML, CSS, and JavaScript to deliver custom solutions."
          /> */}
        </div>
      </div>
    </section>
  )
}

