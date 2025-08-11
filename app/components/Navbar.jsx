// components/Navbar.js
// This component defines your website's navigation bar.

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets"; // Assumes you have an assets.js file in a common assets directory

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(); // Ref for controlling the mobile side menu

  // Function to open the mobile menu
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)"; // Opens by moving left
    }
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)"; // Closes by moving right
    }
  };

  // Effect to handle scroll-based styling for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50); // Set isScroll to true if scrolled down more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  // Function to smoothly scroll to the About Us section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll behavior
      closeMenu(); // Close mobile menu after clicking
    }
  };

  // Function to smoothly scroll to the Services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  // Function to smoothly scroll to the Packages section
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  // Function to smoothly scroll to the Our Team section
  const scrollToTeam = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };


  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300`}
        style={{
          // Dynamic background and backdrop filter based on scroll and dark mode
          backgroundColor: isScroll
            ? isDarkMode
              ? "#1a1a1a" // Changed to solid dark color when scrolled in dark mode
              : "#ffffff" // Changed to solid white color when scrolled in light mode
            : "transparent",
          backdropFilter: isScroll ? "blur(10px)" : "none", // Blur effect on scroll
        }}
      >
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Zentra Tech Logo"
            width={112}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Center - Desktop Menu */}
        {/* Changed `px-10 py-2 rounded-full` to provide spacing around the centered items */}
        <ul className="items-center justify-center flex-grow hidden gap-10 md:flex"> {/* Added flex-grow and justify-center */}
          <li>
            <Link
              href="/"
              className="font-sans text-xl font-medium text-gray-300 cursor-pointer hover:text-gray-400"
            >
              Home
            </Link>
          </li>
          <li>
            {/* Button for About Us, triggers smooth scroll */}
            <button
              onClick={scrollToAbout}
              className="font-sans text-xl font-medium text-gray-300 cursor-pointer hover:text-gray-400 focus:outline-none"
              type="button"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={scrollToServices}
              className="font-sans text-xl font-medium text-gray-300 cursor-pointer hover:text-gray-400 focus:outline-none"
              type="button"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={scrollToPackages}
              className="font-sans text-xl font-medium text-gray-300 cursor-pointer hover:text-gray-400 focus:outline-none"
              type="button"
            >
              Packages
            </button>
          </li>
          <li>
            <button
              onClick={scrollToTeam}
              className="font-sans text-xl font-medium text-gray-300 cursor-pointer hover:text-gray-400 focus:outline-none"
              type="button"
            >
              Our Team
            </button>
          </li>
        </ul>

        {/* Right - Actions (Dark Mode Toggle, Contact Us Button, Mobile Menu Button) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle Dark Mode"
            className="cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              width={24}
              height={24}
            />
          </button>

          {/* Contact Us Button (hidden on small screens) */}
          <Link
            href="/contact"
            className="items-center hidden gap-3 px-6 py-2 font-sans text-gray-300 duration-300 border border-gray-500 rounded-full cursor-pointer lg:flex dark:border-white/50 dark:hover:bg-darkHover hover:text-gray-400"
          >
            Contact Us
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              width={12}
              height={12}
            />
          </Link>

          {/* Mobile Menu Button (visible on small screens) */}
          <button className="block cursor-pointer md:hidden" onClick={openMenu} aria-label="Open Menu">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Menu (initially off-screen) */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 text-gray-300 transition duration-500 bg-gray-900 md:hidden -right-64 bg-opacity-90"
          style={{ transform: "translateX(16rem)" }} // Ensures it starts off-screen
        >
          {/* Close button for mobile menu */}
          <div className="absolute cursor-pointer right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          {/* Mobile menu items */}
          <li>
            <Link className="font-sans text-xl font-medium cursor-pointer" href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToAbout}
              className="w-full font-sans text-xl font-medium text-left cursor-pointer"
              type="button"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={scrollToServices}
              className="w-full font-sans text-xl font-medium text-left cursor-pointer"
              type="button"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={scrollToPackages}
              className="w-full font-sans text-xl font-medium text-left cursor-pointer"
              type="button"
            >
              Packages
            </button>
          </li>
          <li>
            <button
              onClick={scrollToTeam}
              className="w-full font-sans text-xl font-medium text-left cursor-pointer"
              type="button"
            >
              Our Team
            </button>
          </li>
          <li>
            <Link className="font-sans text-xl font-medium cursor-pointer" href="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
