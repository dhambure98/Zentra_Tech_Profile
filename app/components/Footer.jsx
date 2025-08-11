// components/Footer.jsx
// This component provides a creative footer section with copyright, legal links,
// social icons, and an interactive "Back to Top" button.

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image for Next.js optimized images
import { assets } from "@/assets/assets"; // Ensure assets is imported here

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year
  const [showBackToTop, setShowBackToTop] = useState(false); // State for back-to-top button visibility

  // Effect to handle scroll for "Back to Top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`relative py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="flex flex-col items-center justify-between gap-8 mx-auto max-w-7xl md:flex-row">
        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Zentra Tech Logo"
              width={100}
              height={36}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}
          >
            © {currentYear} Zentra Tech Solutions. All Rights Reserved.
          </motion.p>
        </div>

        {/* Right Section: Legal Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 text-sm md:justify-end"
        >
          <a href="/terms-of-services" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
            Terms of Services
          </a>
          <a href="/privacy-policy" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
            Privacy Policy
          </a>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed z-40 p-3 text-white transition-colors duration-300 bg-blue-600 rounded-full shadow-lg cursor-pointer bottom-8 right-8 hover:bg-blue-700"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
