"use client";

import { Award } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import CertificationCard from "@/components/ui/certification-card";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-black/80 to-black/70 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <SectionHeader icon={<Award />} title="Certifications" />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificationCard
            title="Tools for Data Science"
            issuer="IBM"
            date="2024"
            link="https://coursera.org/share/6e4bcca2146c60331d2d0a4b755ec5cc"
          />

          <CertificationCard
            title="Programming for Everybody (Getting Started with Python)"
            issuer="University of Michigan"
            date="2023"
            link="https://coursera.org/share/2df754badae5ef3ccf18a2bcbe6af5eb"
          />

          <CertificationCard
            title="Data Science Methodology"
            issuer="IBM"
            date="2024"
            link="https://coursera.org/share/8d05711a1e138986fb9d600718b1ff0e"
          />

          <CertificationCard
            title="Advanced Algorithms and Complexity"
            issuer="University of California San Diego"
            date="2024"
            link="https://coursera.org/share/8e6e32fa541105eefaaa21b35687d5c4"
          />

          <CertificationCard
            title="What is Data Science?"
            issuer="IBM"
            date="2024"
            link="https://coursera.org/share/6d9c00d4225f322e533873646e92201e"
          />

          <CertificationCard
            title="Start the UX Design Process: Empathize, Define, and Ideate"
            issuer="IBM"
            date="2024"
            link="https://coursera.org/share/ac78f4d0dbdabef90101ca4081d969a7"
          />

          <CertificationCard
            title="Data Structures"
            issuer="University of California San Diego"
            date="2023"
            link="https://coursera.org/share/8a5c6f0f80e195903cfa5a711bfd8fa3"
          />

          <CertificationCard
            title="Databases and SQL for Data Science with Python"
            issuer="IBM"
            date="2024"
            link="https://coursera.org/share/dfc14867178b0b9b7fb4efd1da1ced2d"
          />

          <CertificationCard
            title="Introduction to Java"
            issuer="IBM"
            date="2023"
            link="https://coursera.org/share/bd4df1252fa3510987f75d3857e72e68"
          />

          <CertificationCard
            title="Beginning Custom Projects with Raspberry Pi"
            issuer="Johns Hopkins University"
            date="2024"
            link="https://coursera.org/share/fd04246bd51bd90cfea0ba24238385b0"
          />

          <CertificationCard
            title="Introduction to Data Science"
            issuer="IBM"
            date="2024"
            link="https://coursera.org/share/30188900a881cf3b5152f63e0ab2d90c"
          />

          <CertificationCard
            title="Introduction to Network Routing"
            issuer="Linkedin"
            date="2022"
            link="https://www.linkedin.com/learning/certificates/afd86f0d7361bc43e3f410d941328e649df1ae1db69e54f41c4a79f34ce1cc6e?trk=share_certificate"
          />
        </div>
      </div>
    </section>
  );
}
