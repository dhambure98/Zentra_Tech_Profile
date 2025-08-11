// components/Services.jsx
// This component displays the "Our Services" section with animated service cards
// in a minimalist style, inspired by asyncdot.com.

"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing Lucide icons for a clean, modern look, similar to asyncdot.com
// Make sure you have 'lucide-react' installed: npm install lucide-react
import { Search, Layout, Globe, Code, Box, Megaphone } from 'lucide-react';


const serviceData = [
  {
    title: "SEO (Search Engine Optimization)",
    description: "Enhance your online presence and drive organic traffic to your website by focusing on keyword research, on-page optimization, link building, and a robust content strategy.",
    icon: Search, // Lucide Search icon
  },
  {
    title: "UI/UX Design",
    description: "Create user-centric designs that elevate the user experience through in-depth user research, detailed wireframing, interactive prototyping, and comprehensive usability testing.",
    icon: Layout, // Lucide Layout icon for UI/UX
  },
  {
    title: "Web Design",
    description: "Make a lasting impression with a visually stunning and functional website. Our services include responsive design, graphic design, branding, and intuitive user interface design.",
    icon: Globe, // Lucide Globe icon for Web Design
  },
  {
    title: "Web Development",
    description: "Transform your vision into reality with cutting-edge web development services including front-end, back-end development, API integration, and comprehensive e-commerce solutions.",
    icon: Code, // Lucide Code icon for Web Development
  },
  {
    title: "Software Development",
    description: "Streamline your business processes with innovative custom software solutions, mobile app development, enterprise systems, and ongoing maintenance & support.",
    icon: Box, // Lucide Box icon for Software Development
  },
  {
    title: "Digital & Social Media Marketing",
    description: "Boost your brand, engage your audience, and drive measurable results with expert social media management, compelling content creation, paid advertising, and in-depth analytics.",
    icon: Megaphone, // Lucide Megaphone icon for Digital Marketing
  },
];

const Services = ({ isDarkMode }) => {
  return (
    <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${isDarkMode ? 'bg-gray-950' : 'bg-gray-100'} transition-colors duration-300`}>
      {/* "OUR SERVICES" button */}
      <motion.button
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-2 mb-16 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg cursor-pointer hover:bg-blue-700"
      >
        OUR SERVICES
      </motion.button>

      {/* Grid for service blocks */}
      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }} // More pronounced hover lift
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center p-6 rounded-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer
                        ${isDarkMode ? 'bg-gray-800/20 border border-gray-700/50 shadow-lg' : 'bg-white/20 border border-gray-300/50 shadow-md'}
                        backdrop-blur-sm`} // Subtle translucent background and border
          >
            {/* Service Icon */}
            <div className={`mb-6 p-4 rounded-full ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-700 text-white'} shadow-md`}>
              {React.createElement(service.icon, { className: "w-8 h-8" })}
            </div>

            {/* Service Title */}
            <h3 className={`font-sans text-xl sm:text-2xl font-bold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              {service.title}
            </h3>

            {/* Service Description */}
            <p className={`mb-4 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
