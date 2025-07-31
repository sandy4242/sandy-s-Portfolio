"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = ["home", "about","timeline", "projects", "skills" ,"resume","contact"];

export default function ScrollSpy() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of SECTIONS) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-4">
      {SECTIONS.map((id) =>
        activeId === id ? (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            className="w-4 h-4 rounded-full bg-[#10B981] shadow-md"
            animate={{ scale: [1, 1.3, 1], boxShadow: "0 0 10px black" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label={`Scroll to ${id}`}
          />
        ) : (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="w-3 h-3 rounded-full bg-gray-400 opacity-50 hover:opacity-100 transition-all"
            aria-label={`Scroll to ${id}`}
          />
        )
      )}
    </div>
  );
}
