// components/OurTeam.jsx
// This component displays the "Our Team" section with team member profiles.

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image for Next.js optimized images

const teamMembers = [
  {
    name: "AKILA DHAMBURE",
    role: "WEB DEVELOPER",
    image: "/team/akila.png", // Placeholder image path, replace with actual
    social: {
      facebook: "https://facebook.com/akila",
      linkedin: "https://linkedin.com/in/akila",
      instagram: "https://instagram.com/akila",
      whatsapp: "https://wa.me/yournumber", // Replace with actual WhatsApp link
    },
  },
  {
    name: "PAMITH AMARATHUNGA",
    role: "WEB DEVELOPER",
    image: "/team/pamith.png", // Placeholder image path, replace with actual
    social: {
      facebook: "https://facebook.com/pamith",
      linkedin: "https://linkedin.com/in/pamith",
      instagram: "https://instagram.com/pamith",
      whatsapp: "https://wa.me/yournumber", // Replace with actual WhatsApp link
    },
  },
  {
    name: "VININDU THAMARA",
    role: "WEB DEVELOPER",
    image: "/team/vinindu.png", // Placeholder image path, replace with actual
    social: {
      facebook: "https://facebook.com/vinindu",
      linkedin: "https://linkedin.com/in/vinindu",
      instagram: "https://instagram.com/vinindu",
      whatsapp: "https://wa.me/yournumber", // Replace with actual WhatsApp link
    },
  },
];

const OurTeam = ({ isDarkMode }) => {
  return (
    <section id="team" className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${isDarkMode ? 'gradient-splash-dark' : 'bg-gray-100'}`}>
      {/* "OUR TEAM" button */}
      <motion.button
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-2 mb-16 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg cursor-pointer hover:bg-blue-700"
      >
        OUR TEAM
      </motion.button>

      {/* Grid for team member cards */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }} // Slight upward movement on hover
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} shadow-lg text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer`} // Removed blue border, adjusted to gray
          >
            {/* Team member image */}
            {/* Removed the blue border from this div */}
            <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                objectFit="cover"
                className="rounded-full"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/000000/FFFFFF?text=Team"; }} // Placeholder on error
              />
            </div>

            {/* Team member name */}
            <h3 className={`font-sans text-xl sm:text-2xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              {member.name}
            </h3>
            {/* Team member role */}
            <p className={`text-base sm:text-lg font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {member.role}
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
                {/* Facebook Icon SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
                {/* LinkedIn Icon SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
                {/* Instagram Icon SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.333 4.148c.846 0 1.53.684 1.53 1.53s-.684 1.53-1.53 1.53-1.53-.684-1.53-1.53.684-1.53 1.53-1.53zm-2.001 2.372a4.445 4.445 0 00-4.444 4.444c0 2.454 1.99 4.444 4.444 4.444 2.454 0 4.444-1.99 4.444-4.444 0-2.454-1.99-4.444-4.444-4.444zM12 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={member.social.whatsapp} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 cursor-pointer`}>
                {/* WhatsApp Icon SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2C6.51 2 2 6.57 2 12.04c0 1.96.54 3.8 1.48 5.4l-1.51 5.51 5.64-1.46c1.55.85 3.32 1.3 5.13 1.3 5.53 0 10.04-4.57 10.04-10.1S17.57 2 12.04 2zM17.47 15.34c-.14.23-.84.53-.9.6c-.07.07-.15.1-.3.12s-.27.02-.4.04c-.14.02-.31.02-.47-.04-.15-.06-.35-.11-.5-.17-.15-.06-.33-.14-.5-.22-.15-.08-.3-.17-.45-.25-.33-.2-.67-.48-.96-.8-.29-.31-.5-.65-.67-.98s-.24-.7-.24-1.07c0-.28.1-.53.18-.7.09-.17.2-.38.27-.47.07-.09.15-.17.25-.26s.22-.18.3-.23.18-.1.25-.11c.07-.02.15-.02.2-.02.04 0 .09-.01.14-.01s.11-.02.17-.02c.07 0 .15.01.22.03s.16.06.22.09c.07.03.14.08.19.12.07.05.12.11.17.16s.1.1.17.19c.07.07.13.17.18.25s.1.18.14.26c.05.08.08.16.1.25s.04.18.04.28c0 .28-.08.53-.17.7-.09.17-.2.38-.27.47-.07.09-.15.17-.25.26s-.22.18-.3.23-.18.1-.25.11z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
