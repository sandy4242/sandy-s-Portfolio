"use client";

import React, { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "about" },
  { name: "Path", href: "timeline" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Resume", href: "resume" },
];

export const PortfolioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
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

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition ${
        scrolled ? "border-border bg-background/88 backdrop-blur-xl" : "border-transparent bg-background/65 backdrop-blur"
      }`}
    >
      <div className="section-inner">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="font-heading text-lg font-semibold text-foreground"
          >
            Sandeep Sarkar
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-2 inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mail size={16} />
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="control-button md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="grid gap-1 border-t border-border py-3 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-md px-2 py-2 text-left text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-1 rounded-md bg-primary px-3 py-2 text-left text-sm font-semibold text-primary-foreground"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
