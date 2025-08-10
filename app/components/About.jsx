"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center gradient-splash-dark">
      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6 text-5xl font-bold text-transparent sm:text-6xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text drop-shadow-lg"
      >
        About Company
      </motion.h2>

      {/* Subtitle */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 text-2xl font-semibold text-gray-200 sm:text-3xl"
      >
        Zentra Tech Solutions
      </motion.h3>

      {/* First Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-4 text-lg leading-relaxed text-gray-300 sm:text-xl"
      >
        At <span className="font-bold text-white">Zentra Tech Solutions</span>, we specialize in delivering
        cutting-edge software solutions that empower businesses to thrive in the digital era. Founded in 2025,
        we are committed to innovation, excellence, and collaboration. Our expertise spans custom software
        development, web design, and UX/UI — all tailored to meet your unique goals.
      </motion.p>

      {/* Second Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl"
      >
        Our mission is to empower businesses with tailored solutions that drive growth and digital transformation,
        helping clients of all sizes thrive in an ever-evolving digital world.
      </motion.p>
    </section>
  );
};

export default AboutUs;
