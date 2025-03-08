"use client";

import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeader icon={<Send />} title="Get in Touch" />

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-gray-300">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span>gyrroacquiat007@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://www.linkedin.com/in/gyrro/"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/gyrro/
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/gyrroa"
                  className="hover:text-primary transition-colors"
                >
                  github.com/gyrroa
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Facebook className="h-5 w-5 text-primary" />
                <a
                  href="https://www.facebook.com/gyrro/"
                  className="hover:text-primary transition-colors"
                >
                  facebook.com/gyrro/
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
