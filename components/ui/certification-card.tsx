"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  link: string
}

export default function CertificationCard({ title, issuer, date, link }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary transition-colors"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-primary">{issuer}</p>
        </div>
        <Badge variant="outline" className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {date}
        </Badge>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
      >
        View Certificate
        <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    </motion.div>
  )
}

