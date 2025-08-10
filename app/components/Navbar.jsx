"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300`}
        style={{
          backgroundColor: isScroll
            ? isDarkMode
              ? "rgba(0, 0, 0, 0.7)" // dark mode: translucent black
              : "rgba(128, 128, 128, 0.4)" // light mode: translucent gray
            : "transparent",
          backdropFilter: isScroll ? "blur(10px)" : "none",
        }}
      >
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Zentra Tech Logo"
            width={112}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Center - Menu */}
        <ul className="items-center hidden gap-10 px-10 py-2 rounded-full md:flex">
          <li>
            <Link
              href="/"
              className="text-xl font-medium text-gray-300 font-Ovo hover:text-gray-400"
            >
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToAbout}
              className="text-xl font-medium text-gray-300 font-Ovo hover:text-gray-400 focus:outline-none"
              type="button"
            >
              About Us
            </button>
          </li>
          <li>
            <Link
              href="/services"
              className="text-xl font-medium text-gray-300 font-Ovo hover:text-gray-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/packages"
              className="text-xl font-medium text-gray-300 font-Ovo hover:text-gray-400"
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-xl font-medium text-gray-300 font-Ovo hover:text-gray-400"
            >
              Our Team
            </Link>
          </li>
        </ul>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle Dark Mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              width={24}
              height={24}
            />
          </button>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="items-center hidden gap-3 px-6 py-2 text-gray-300 duration-300 border border-gray-500 rounded-full lg:flex font-Ovo dark:border-white/50 dark:hover:bg-darkHover hover:text-gray-400"
          >
            Contact Us
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              width={12}
              height={12}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button className="block md:hidden" onClick={openMenu} aria-label="Open Menu">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 text-gray-300 transition duration-500 bg-gray-900 md:hidden -right-64 bg-opacity-90"
          style={{ transform: "translateX(16rem)" }}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <li>
            <Link className="text-xl font-medium font-Ovo" href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToAbout}
              className="w-full text-xl font-medium text-left font-Ovo"
              type="button"
            >
              About Us
            </button>
          </li>
          <li>
            <Link className="text-xl font-medium font-Ovo" href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link className="text-xl font-medium font-Ovo" href="/packages" onClick={closeMenu}>
              Packages
            </Link>
          </li>
          <li>
            <Link className="text-xl font-medium font-Ovo" href="/team" onClick={closeMenu}>
              Our Team
            </Link>
          </li>
          <li>
            <Link className="text-xl font-medium font-Ovo" href="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
