"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechCategoryProps {
  title: string;
  items: { name: string; url: string; logo: string }[];
}

export default function TechCategory({ title, items }: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary transition-colors"
    >
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors p-2 rounded-lg"
          >
            <Image src={item.logo} alt={item.name} width={20} height={20} />
            <span className="text-white text-sm">{item.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
