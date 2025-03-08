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

    // Load Saturn texture
    const textureLoader = new THREE.TextureLoader();
    const saturnTexture = textureLoader.load(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0763947-6f42-4d09-944f-c2d6f41c415b/dcaift0-422ad564-f7b0-4291-914f-425b9ac29a35.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwNzYzOTQ3LTZmNDItNGQwOS05NDRmLWMyZDZmNDFjNDE1YlwvZGNhaWZ0MC00MjJhZDU2NC1mN2IwLTQyOTEtOTE0Zi00MjViOWFjMjlhMzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YYTxK1xSwJxGTBIMLHsgFWiwrdd0W6UqmXy7a5CCnnk",
      () => console.log("Saturn texture loaded successfully"),
      undefined,
      (err) => console.error("Texture loading error:", err)
    );

    // Create Saturn sphere
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: saturnTexture,
      emissive: 0x222222,
      roughness: 0.3,
    });
    const saturn = new THREE.Mesh(geometry, material);
    scene.add(saturn);

    // Create a ring system container
    const ringSystem = new THREE.Group();

    // Define ring dimensions
    const innerRadius = 2;
    const outerRadius = 3.5;
    const thetaSegments = 64;

    // Create the main flat ring
    const ringGeometry = new THREE.RingGeometry(
      innerRadius,
      outerRadius,
      thetaSegments
    );

    // Fix UV mapping for the ring texture
    const pos = ringGeometry.attributes.position;
    const v3 = new THREE.Vector3();
    const ringUvs = [];

    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      ringUvs.push((v3.x / outerRadius + 1) / 2, (v3.y / outerRadius + 1) / 2);
    }

    ringGeometry.setAttribute(
      "uv",
      new THREE.Float32BufferAttribute(ringUvs, 2)
    );

    // Create ring particles that are properly aligned with the ring plane
    const particleCount = 100000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random angle
      const angle = Math.random() * Math.PI * 2;

      // Random radius between inner and outer with slight weighting
      // This creates more particles in the denser areas of the rings
      const radius =
        innerRadius +
        Math.pow(Math.random(), 1.2) * (outerRadius - innerRadius);

      // Position in ring plane (x-y plane before rotation)
      particlePositions[i * 3] = Math.cos(angle) * radius; // x
      particlePositions[i * 3 + 1] = Math.sin(angle) * radius; // y

      // Small z variation for thickness (much smaller than before)
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.03;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9F988A,
      size: 0.01,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    ringSystem.add(particles);

    // Apply the tilt to the entire ring system
    ringSystem.rotation.x = Math.PI / -2.2;
    saturn.add(ringSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-5, 5, 5);
    scene.add(directionalLight);

    // Position camera
    camera.position.z = 6;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      saturn.rotation.y += 0.0025;
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const xFactor = (event.clientX / window.innerWidth - 0.5) * 0.2;
      const yFactor = -(event.clientY / window.innerHeight - 0.5) * 0.2;
      saturn.position.x = xFactor;
      saturn.position.y = yFactor;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
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
              repeat: Number.POSITIVE_INFINITY,
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
