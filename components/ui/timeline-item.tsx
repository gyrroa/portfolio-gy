"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

interface TimelineItemProps {
  title: string
  company: string
  period: string
  description: string
}

export default function TimelineItem({ title, company, period, description }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10"
    >
      <div className="md:col-span-1 flex items-center md:justify-end">
        <div className="flex items-center text-primary">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="text-sm">{period}</span>
        </div>
      </div>

      <div className="md:col-span-4 relative pb-8">
        <div className="absolute top-0 left-0 md:left-[-35px] h-full w-0.5 bg-gray-700 hidden md:block"></div>
        <div className="absolute top-0 left-[-8px] md:left-[-39px] w-4 h-4 rounded-full bg-primary"></div>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary transition-colors">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-primary">{company}</p>
          <p className="mt-3 text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

