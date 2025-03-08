"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/gyrroacquiat007@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                    required
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
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {success && (
                <p className="text-white text-center mt-2">{success}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
