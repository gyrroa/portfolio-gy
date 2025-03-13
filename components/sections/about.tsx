"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";

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
              Hello! I'm{" "}
              <span className="font-bold text-white">Gyrro Acquiat</span>, a
              passionate software developer crafting innovative digital
              experiences.
            </p>
            <p className="text-gray-300 mt-2">
              With expertise in{" "}
              <span className="font-semibold text-white">
                C#, Java, JavaScript, TypeScript, and Python
              </span>
              , I specialize in building immersive web experiences using{" "}
              <span className="font-semibold text-white">
                React, Three.js, WebGL
              </span>
              , and modern frameworks. I merge technical precision with creative
              vision to develop solutions that are both functional and visually
              compelling.
            </p>
            <p className="text-gray-300 mt-2">
              Beyond coding, I enjoy playing{" "}
              <span className="font-semibold text-white">
                games, instruments, and walking
              </span>
              , constantly drawing inspiration from every experience.
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
                src="./profile.jpg"
                alt="Gyrro Acquiat"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
