"use client"

import { Award } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import CertificationCard from "@/components/ui/certification-card"

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black/80 to-black/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeader icon={<Award />} title="Certifications" />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificationCard
            title="AWS Certified Solutions Architect"
            issuer="Amazon Web Services"
            date="2022"
            link="#"
          />

          <CertificationCard title="Professional React Developer" issuer="Meta" date="2021" link="#" />

          <CertificationCard title="Google UX Design Professional" issuer="Google" date="2020" link="#" />

          <CertificationCard title="MongoDB Certified Developer" issuer="MongoDB University" date="2019" link="#" />

          <CertificationCard title="Certified Scrum Master" issuer="Scrum Alliance" date="2018" link="#" />

          <CertificationCard
            title="JavaScript Algorithms & Data Structures"
            issuer="freeCodeCamp"
            date="2017"
            link="#"
          />
        </div>
      </div>
    </section>
  )
}

