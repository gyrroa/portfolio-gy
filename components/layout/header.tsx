"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-white"
        >
          John Doe
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6"
        >
          <Link href="#about" className="text-white hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#experience" className="text-white hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#certifications" className="text-white hover:text-primary transition-colors">
            Certifications
          </Link>
          <Link href="#tech-stack" className="text-white hover:text-primary transition-colors">
            Tech Stack
          </Link>
          <Link href="#contact" className="text-white hover:text-primary transition-colors">
            Contact
          </Link>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
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
  )
}

