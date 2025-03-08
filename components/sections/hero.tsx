"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as THREE from "three";

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    console.log("Canvas ref:", canvasRef.current);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const neptuneTexture = textureLoader.load(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5m6I1cNvdxJo1hMYBzgmMzcD1viyiItRiyg&s",
      () => console.log("Texture loaded successfully"),
      undefined,
      (err) => console.error("Texture loading error:", err)
    );

    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: neptuneTexture,
      emissive: 0x222222,
      roughness: 0.3,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.0025;
      sphere.rotation.x += 0.0025;
      renderer.render(scene, camera);
    };
    animate();

    const handleMouseMove = (event) => {
      const xFactor = (event.clientX / window.innerWidth - 0.5) * 0.2;
      const yFactor = -(event.clientY / window.innerHeight - 0.5) * 0.2;
      sphere.position.x = xFactor;
      sphere.position.y = yFactor;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white p-4 overflow-hidden">
      <div ref={canvasRef} className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center space-y-6 max-w-3xl relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I'm{" "}
          <motion.span
            className="text-primary"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Gyrro
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          Software Developer | Innovator | Tech Enthusiast
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#about">Learn More</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
