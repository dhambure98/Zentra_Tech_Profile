// components/Footer.jsx
// This component provides a creative, multi-column footer section
// inspired by imigap.com, with copyright, legal links, social icons,
// and an interactive "Back to Top" button.

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image for Next.js optimized images
import Link from "next/link"; // Import Link for Next.js navigation
import { assets } from "@/assets/assets"; // Ensure assets is imported here

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year
  const [showBackToTop, setShowBackToTop] = useState(false); // State for back-to-top button visibility

  // Effect to handle scroll for "Back to Top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 300px
      if (typeof window !== "undefined" && window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll); // Cleanup
      }
    };
  }, []);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={`relative py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-950 text-gray-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}>
      <div className="grid grid-cols-1 gap-8 pb-8 mx-auto border-b max-w-7xl md:grid-cols-2 lg:grid-cols-4 border-gray-700/50">

        {/* Column 1: Logo and About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <Link href="/" className="mb-4 cursor-pointer">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Zentra Tech Logo"
              width={120}
              height={45}
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
            Zentra Tech Solutions specializes in delivering cutting-edge software solutions that empower businesses to thrive in the digital era.
          </p>
          <div className="flex mt-6 space-x-4">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
              {/* Facebook Icon SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
              {/* LinkedIn Icon SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
              {/* Instagram Icon SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.333 4.148c.846 0 1.53.684 1.53 1.53s-.684 1.53-1.53 1.53-1.53-.684-1.53-1.53.684-1.53 1.53-1.53zm-2.001 2.372a4.445 4.445 0 00-4.444 4.444c0 2.454 1.99 4.444 4.444 4.444 2.454 0 4.444-1.99 4.444-4.444 0-2.454-1.99-4.444-4.444-4.444zM12 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
              {/* WhatsApp Icon SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2C6.51 2 2 6.57 2 12.04c0 1.96.54 3.8 1.48 5.4l-1.51 5.51 5.64-1.46c1.55.85 3.32 1.3 5.13 1.3 5.53 0 10.04-4.57 10.04-10.1S17.57 2 12.04 2zM17.47 15.34c-.14.23-.84.53-.9.6c-.07.07-.15.1-.3.12s-.27.02-.4.04c-.14.02-.31.02-.47-.04-.15-.06-.35-.11-.5-.17-.15-.06-.33-.14-.5-.22-.15-.08-.3-.17-.45-.25-.33-.2-.67-.48-.96-.8-.29-.31-.5-.65-.67-.98s-.24-.7-.24-1.07c0-.28.1-.53.18-.7.09-.17.2-.38.27-.47.07-.09.15-.17.25-.26s.22-.18.3-.23.18-.1.25-.11c.07-.02.15-.02.2-.02.04 0 .09-.01.14-.01s.11-.02.17-.02c.07 0 .15.01.22.03s.16.06.22.09c.07.03.14.08.19.12.07.05.12.11.17.16s.1.1.17.19c.07.07.13.17.18.25s.1.18.14.26c.05.08.08.16.1.25s.04.18.04.28c0 .28-.08.53-.17.7-.09.17-.2.38-.27.47-.07.09-.15.17-.25.26s-.22.18-.3.23-.18.1-.25.11z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h4 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Home</Link></li>
            <li><Link href="/about" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>About Us</Link></li>
            <li><Link href="/contact" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Contact Us</Link></li>
            <li><Link href="/privacy-policy" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-services" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Terms of Services</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h4 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services#seo" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>SEO</Link></li>
            <li><Link href="/services#uiux" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>UI/UX Design</Link></li>
            <li><Link href="/services#web-design" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Web Design</Link></li>
            <li><Link href="/services#web-dev" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Web Development</Link></li>
            <li><Link href="/services#software-dev" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Software Development</Link></li>
            <li><Link href="/services#digital-marketing" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>Digital Marketing</Link></li>
          </ul>
        </motion.div>

        {/* Column 4: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h4 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@zentratech.com" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>info@zentratech.com</a></li>
            <li>Phone: <a href="tel:+94712345678" className={`${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>+94 71 234 5678</a></li>
            <li>Address: Haipathota, Hikkaduwa.</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom section: Copyright and Back to Top */}
      <div className="flex flex-col items-center justify-between pt-8 text-sm md:flex-row">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0 text-center md:text-left`}
        >
          © {currentYear} Zentra Tech Solutions. All Rights Reserved.
        </motion.p>

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
      </div>
    </footer>
  );
};

export default Footer;
