"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const PortfolioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Resume", href: "resume" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-md border-b border-white/20"
          : "bg-white/5 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-black hover:text-[#10B981] transition duration-300 logo text"
            >
              Sandeep
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-black skill-badge px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-[#10B981] text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#10B981]shadow-md"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#10B981] transition duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[500px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="mx-auto px-4 pt-2 pb-4 space-y-2 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsOpen(false); // close menu after click
                }}
                className="block w-full text-left px-4 py-2 text-black hover:text-[#10B981] hover:bg-white/10 rounded-lg transition-all"
              >

                {item.name}
                <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
            </svg>
              </button>          
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false); 
              }}
              className="w-full px-6 py-3 mt-2 text-white bg-[#10B981] hover:bg-[#10B981] transition rounded-full shadow-md hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
