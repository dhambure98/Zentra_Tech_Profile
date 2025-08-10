// components/AboutUs.js
// This component presents the "About Company" section with animations.

"use client";

import React from "react";
import { motion } from "framer-motion"; // For smooth animations

const AboutUs = () => {
  return (
    // Section with ID 'about' for navigation, centered content, and dark gradient background
    <section id="about" className="flex flex-col items-center justify-center min-h-screen px-6 text-center gradient-splash-dark">
      {/* "About Company" button/heading - changed from h2 to button */}
      <motion.button
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Animation triggers once when in view
        className="px-6 py-2 mb-8 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
      >
        ABOUT COMPANY
      </motion.button>

      {/* Subtitle "Zentra Tech Solutions" with animation */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 text-2xl font-semibold text-gray-200 sm:text-3xl"
      >
        Zentra Tech Solutions
      </motion.h3>

      {/* First Paragraph with animation */}
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

      {/* Second Paragraph with animation */}
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
