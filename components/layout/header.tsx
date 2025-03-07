"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    const sectionIds = [
      "about",
      "experience",
      "certifications",
      "tech-stack",
      "contact",
    ];

    const handleScroll = () => {
      let currentSection = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.3 &&
            rect.bottom >= window.innerHeight * 0.3
          ) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll(); // Run on mount
    const unsubscribe = scrollY.onChange(handleScroll); // Listen for scroll changes

    return () => unsubscribe(); // Cleanup listener
  }, [scrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-white"
        >
          Gyrro Acquiat
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6"
        >
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "certifications", label: "Certifications" },
            { id: "tech-stack", label: "Tech Stack" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                activeSection === id
                  ? "text-primary font-semibold"
                  : "text-white hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-4"
        >
          <a
            href="https://github.com/gyrroa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ken-gyrro-acquiat-b94096140/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
