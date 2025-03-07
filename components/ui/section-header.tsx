"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  icon: ReactNode
  title: string
}

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
        {icon}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="w-24 h-1 bg-primary mt-4 rounded-full"></div>
    </motion.div>
  )
}

