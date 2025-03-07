"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"
import Image from "next/image"
import SectionHeader from "@/components/ui/section-header"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeader icon={<User />} title="About Me" />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Who am I?</h3>
            <p className="text-gray-300">
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications. I
              specialize in creating responsive, user-friendly interfaces with modern technologies.
            </p>
            <p className="text-gray-300">
              My journey in tech began when I built my first website at 15. Since then, I've been constantly learning
              and improving my skills to stay at the forefront of web development.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="John Doe"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

