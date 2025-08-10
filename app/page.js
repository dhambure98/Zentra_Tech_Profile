// pages/index.js
// This is your main page component, assembling all sections and managing theme state.

"use client"; // This directive is crucial for client-side components in Next.js 13+

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";     // Path to your Navbar component
import Header from "./components/Header";       // Path to your Header component
import AboutUs from "./components/About";     // Corrected: Path to your AboutUs component
import Services from "./components/Services";   // Import the Services component
import Packages from "./components/Packages";   // Import the Packages component
import OurTeam from "./components/OurTeam";     // Import the new OurTeam component

export default function Home() {
  // State to manage the current theme mode (true for dark, false for light)
  // FIX: Initialize to 'false' (light mode) as a safe default for server rendering.
  // The useEffect will then correctly determine the user's actual preference on the client.
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect to initialize dark mode based on user's local storage preference
  // or system's preferred color scheme on initial load.
  useEffect(() => {
    if (
      typeof window !== "undefined" && // Ensure window object is available (client-side)
      (localStorage.theme === "dark" || // Check if theme is explicitly set to 'dark' in localStorage
        (!("theme" in localStorage) && // Or if no theme is set, check system preference
          window.matchMedia("(prefers-color-scheme: dark)").matches))
    ) {
      setIsDarkMode(true); // Set dark mode
      document.documentElement.classList.add("dark"); // Add 'dark' class to html element
    } else {
      setIsDarkMode(false); // Set light mode
      document.documentElement.classList.remove("dark"); // Remove 'dark' class
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // useEffect to update local storage and html element class whenever isDarkMode changes.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // Add 'dark' class
      localStorage.theme = "dark"; // Save preference
    } else {
      document.documentElement.classList.remove("dark"); // Remove 'dark' class
      localStorage.theme = "light"; // Save preference
    }
  }, [isDarkMode]); // Re-run when isDarkMode state changes

  return (
    <>
      {/* Navbar component, passing theme state and setter for toggle functionality */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} text-white transition-colors duration-300`}>
        {/* Header section - your hero component */}
        <Header isDarkMode={isDarkMode} /> {/* Pass isDarkMode to Header */}
        {/* About Us section - includes the 'about' ID for scrolling */}
        <AboutUs isDarkMode={isDarkMode} /> {/* Pass isDarkMode to AboutUs */}
        {/* Services section - displaying all your offerings */}
        <Services isDarkMode={isDarkMode} /> {/* Add the Services component */}
        {/* Packages section - displaying pricing plans */}
        <Packages isDarkMode={isDarkMode} /> {/* Add the Packages component here */}
        {/* Our Team section - displaying your team members */}
        <OurTeam isDarkMode={isDarkMode} /> {/* Add the new OurTeam component here */}
        {/* Add other sections here if needed */}
      </main>
    </>
  );
}
