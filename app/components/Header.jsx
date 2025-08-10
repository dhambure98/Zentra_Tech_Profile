"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-6 px-4 text-center gradient-splash-dark">
      {/* Profile Image with scale animation */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile"
          width={128}
          height={128}
          className="rounded-full shadow-lg shadow-black/40"
        />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-white text-4xl sm:text-6xl lg:text-[65px] font-Ovo font-bold max-w-4xl mx-auto drop-shadow-lg"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Empowering Innovation with Zentra Tech Solutions
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="max-w-3xl mt-4 text-lg leading-relaxed text-gray-200 sm:text-xl drop-shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        At <span className="font-bold text-white">Zentra Tech Solutions</span>, 
        we craft software and web solutions that combine creativity, scalability, 
        and performance — helping businesses thrive in the digital age.
      </motion.p>

      {/* Call-to-action */}
      <motion.button
        className="px-6 py-3 mt-6 font-semibold text-black transition-transform bg-white rounded-full shadow-lg hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s Build Together
      </motion.button>
    </div>
  );
};

export default Header;
