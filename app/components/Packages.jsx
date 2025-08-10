// components/Packages.jsx
// This component displays the "Our Packages" section with animated pricing cards.

"use client";

import React from "react";
import { motion } from "framer-motion";

const packageData = [
  {
    title: "STARTER PACKAGE",
    price: "35,000 LKR / ONE YEAR",
    description: "IDEAL FOR SMALL BUSINESSES AND STARTUPS.",
    features: [
      "BASIC SEO SETUP",
      "RESPONSIVE UI/UX DESIGN",
      "BASIC WEB DEVELOPMENT",
      "HOSTING AND DOMAIN SETUP",
      "1 ROUND OF REVISIONS",
    ],
    isPremium: false,
  },
  {
    title: "GROWTH PACKAGE",
    price: "50,000 LKR / ONE YEAR",
    description: "FOR GROWING BUSINESSES LOOKING FOR A COMPETITIVE EDGE.",
    features: [
      "ADVANCED SEO SERVICES",
      "CUSTOM UI/UX DESIGN",
      "WEB DESIGN WITH E-COMMERCE",
      "DYNAMIC WEB DEVELOPMENT",
      "2 ROUNDS OF REVISIONS",
    ],
    isPremium: false,
  },
  {
    title: "PREMIUM PACKAGE",
    price: "85,000 LKR / ONE YEAR",
    description: "BEST FOR ENTERPRISES OR THOSE REQUIRING COMPLEX SYSTEMS.",
    features: [
      "COMPLETE SEO MANAGEMENT",
      "FULLY CUSTOMIZED UI/UX DESIGN",
      "ADVANCED WEB DEVELOPMENT",
      "COMPREHENSIVE SOFTWARE DEVELOPMENT",
      "UNLIMITED REVISIONS",
    ],
    isPremium: true,
  },
  {
    title: "ENTERPRISE PLAN",
    price: "CUSTOM PRICING",
    description: "EVERYTHING IN PRO PLAN",
    features: [
      "FULLY CUSTOM WEB SOLUTION",
      "API & DATABASE INTEGRATION",
      "AI & AUTOMATION FEATURES",
      "1 YEAR PRIORITY SUPPORT",
      "DOMAIN & HOSTING INCLUDED",
    ],
    isPremium: false, // Enterprise plan also has special styling, but not the 'premium' badge in the UI
  },
];

const Packages = ({ isDarkMode }) => {
  return (
    <section id="packages" className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${isDarkMode ? 'gradient-splash-dark' : 'bg-gray-100'}`}>
      {/* "OUR PACKAGES" button */}
      <motion.button
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-2 mb-16 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg cursor-pointer hover:bg-blue-700" // Added cursor-pointer
      >
        OUR PACKAGES
      </motion.button>

      {/* Grid for package cards */}
      <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {packageData.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }} // Added hover animation: slight upward movement
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-6 rounded-xl border-2 ${
              pkg.isPremium
                ? 'bg-blue-700 border-blue-700 text-white' // Premium package specific styling
                : isDarkMode
                ? 'bg-gray-800 border-blue-600 text-gray-200' // Dark mode default package styling
                : 'bg-white border-blue-300 text-gray-800' // Light mode default package styling
            } shadow-lg text-left transform hover:scale-105 transition-transform duration-300 cursor-pointer`} // Added cursor-pointer
          >
            {/* Premium label for the Premium Package */}
            {pkg.isPremium && (
              <span className="absolute px-3 py-1 text-xs font-bold text-gray-900 uppercase bg-yellow-400 rounded-full shadow-md -top-3 right-4">
                PREMIUM
              </span>
            )}

            {/* Package Title */}
            <h3 className={`font-sans text-xl sm:text-2xl font-bold mb-2 ${pkg.isPremium ? 'text-white' : (isDarkMode ? 'text-blue-400' : 'text-blue-700')}`}>
              {pkg.title}
            </h3>
            {/* Package Price/Custom Pricing */}
            <p className={`text-base sm:text-lg font-semibold mb-1 ${pkg.isPremium ? 'text-white' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')}`}>
              {pkg.price}
            </p>
            {/* Package Description */}
            <p className={`text-sm mb-4 ${pkg.isPremium ? 'text-blue-100' : (isDarkMode ? 'text-gray-400' : 'text-gray-500')}`}>
              {pkg.description}
            </p>

            <div className={`w-full h-px my-4 ${pkg.isPremium ? 'bg-blue-500' : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')}`}></div>

            {/* Package Features */}
            <ul className="space-y-2 text-base list-disc list-inside">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={`${pkg.isPremium ? 'text-blue-100' : (isDarkMode ? 'text-gray-300' : 'text-gray-700')}`}>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
