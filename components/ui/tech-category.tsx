"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TechCategoryProps {
  title: string
  items: string[]
}

export default function TechCategory({ title, items }: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
    >
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge key={index} variant="secondary" className="bg-gray-700 hover:bg-gray-600 transition-colors">
            {item}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

