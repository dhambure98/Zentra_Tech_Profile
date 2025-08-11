// components/Services.jsx
// This component displays the "Our Services" section with animated service cards.

"use client";

import React from "react";
import { motion } from "framer-motion";

const serviceData = [
  {
    title: "SEO (Search Engine Optimization)",
    description: "Enhance your online presence and drive organic traffic to your website. Our SEO experts focus on:",
    points: [
      "Keyword Research",
      "On-Page Optimization",
      "Link Building",
      "Content Strategy",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Create user-centric designs that elevate the user experience. We specialize in:",
    points: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "Web Design",
    description: "Make a lasting impression with a visually stunning website. Our web design services include:",
    points: [
      "Responsive Design",
      "Graphic Design",
      "Branding",
      "User Interface Design",
    ],
  },
  {
    title: "Web Development",
    description: "Transform your vision into reality with cutting-edge web development services:",
    points: [
      "Front-End Development",
      "Back-End Development",
      "API Integration",
      "E-Commerce Solutions",
    ],
  },
  {
    title: "Software Development",
    description: "Streamline your business processes with innovative software solutions. We offer:",
    points: [
      "Custom Software Development",
      "Mobile App Development",
      "Enterprise Solutions",
      "Maintenance & Support",
    ],
  },
  {
    title: "Digital & Social Media Marketing",
    description: "Boost your brand, engage your audience, and drive results with our expert marketing strategies:",
    points: [
      "Social Media Management",
      "Content Creation",
      "Paid Advertising",
      "Analytics & Reporting",
    ],
  },
];

const Services = ({ isDarkMode }) => {
  return (
    <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${isDarkMode ? 'gradient-splash-dark' : 'bg-gray-100'}`}>
      {/* "OUR SERVICES" button */}
      <motion.button
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-2 mb-16 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg cursor-pointer hover:bg-blue-700" // Added cursor-pointer
      >
        OUR SERVICES
      </motion.button>

      {/* Grid for service cards */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }} // Added hover animation for a slight lift
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border-2 ${isDarkMode ? 'bg-gray-800 border-blue-600' : 'bg-white border-blue-300'} shadow-lg text-left transform hover:scale-105 transition-transform duration-300 cursor-pointer`} // Added cursor-pointer and hover transform
          >
            {/* Service title */}
            <h3 className={`font-sans text-xl sm:text-2xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}> {/* Changed font-Ovo to font-sans */}
              {service.title}
              {/* Checkmark icon */}
              <span className="inline-block ml-2">
                <svg className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </span>
            </h3>
            {/* Service description */}
            <p className={`mb-4 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {service.description}
            </p>
            {/* Service points */}
            <ul className="space-y-1 list-disc list-inside">
              {service.points.map((point, pointIndex) => (
                <li key={pointIndex} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
