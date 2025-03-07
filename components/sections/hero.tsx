"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center space-y-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-primary">Gyrro</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">Software Developer | Innovator | Tech Enthusiast</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

