// components/Contact.jsx
// This component displays the "Contact Us" section with contact information and social links.

"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = ({ isDarkMode }) => {
  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      {/* "CONTACT US" button */}
      <motion.button
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-2 mb-16 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg cursor-pointer hover:bg-blue-700"
      >
        CONTACT US
      </motion.button>

      {/* Descriptive Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className={`max-w-3xl mx-auto mb-16 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        Feel Free To Reach Out Through The Contact Form Or Find Our Contact Information Below. Your Feedback, Questions, And Suggestions Are Important To Us As We Strive To Provide Exceptional Service To Our Engineering Community.
      </motion.p>

      <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto text-lg md:grid-cols-2 md:gap-y-12">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email:</p>
          <a href="mailto:info@zentratech.com" className={`mt-2 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-800'} transition-colors duration-200 cursor-pointer`}>
            info@zentratech.com
          </a>
        </motion.div>

        {/* Contact Number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Number:</p>
          <a href="tel:+94712345678" className={`mt-2 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-800'} transition-colors duration-200 cursor-pointer`}>
            +94 71 234 5678
          </a>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center col-span-1 md:col-span-2"
        >
          <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Address:</p>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Haipathota, Hikkaduwa.
          </p>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16 space-x-6"
      >
        <p className={`font-semibold text-lg absolute -mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Social Media Links</p>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
          {/* Facebook Icon SVG */}
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
          {/* LinkedIn Icon SVG */}
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
          {/* Instagram Icon SVG */}
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.333 4.148c.846 0 1.53.684 1.53 1.53s-.684 1.53-1.53 1.53-1.53-.684-1.53-1.53.684-1.53 1.53-1.53zm-2.001 2.372a4.445 4.445 0 00-4.444 4.444c0 2.454 1.99 4.444 4.444 4.444 2.454 0 4.444-1.99 4.444-4.444 0-2.454-1.99-4.444-4.444-4.444zM12 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
          {/* WhatsApp Icon SVG */}
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2C6.51 2 2 6.57 2 12.04c0 1.96.54 3.8 1.48 5.4l-1.51 5.51 5.64-1.46c1.55.85 3.32 1.3 5.13 1.3 5.53 0 10.04-4.57 10.04-10.1S17.57 2 12.04 2zM17.47 15.34c-.14.23-.84.53-.9.6c-.07.07-.15.1-.3.12s-.27.02-.4.04c-.14.02-.31.02-.47-.04-.15-.06-.35-.11-.5-.17-.15-.06-.33-.14-.5-.22-.15-.08-.3-.17-.45-.25-.33-.2-.67-.48-.96-.8-.29-.31-.5-.65-.67-.98s-.24-.7-.24-1.07c0-.28.1-.53.18-.7.09-.17.2-.38.27-.47.07-.09.15-.17.25-.26s.22-.18.3-.23.18-.1.25-.11c.07-.02.15-.02.2-.02.04 0 .09-.01.14-.01s.11-.02.17-.02c.07 0 .15.01.22.03s.16.06.22.09c.07.03.14.08.19.12.07.05.12.11.17.16s.1.1.17.19c.07.07.13.17.18.25s.1.18.14.26c.05.08.08.16.1.25s.04.18.04.28c0 .28-.08.53-.17.7-.09.17-.2.38-.27.47-.07.09-.15.17-.25.26s-.22.18-.3.23-.18.1-.25.11z"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
