"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "timeline", "projects", "skills", "resume", "contact"];

export default function ScrollSpy() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {sections.map((id) =>
        activeId === id ? (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            className="h-3 w-3 rounded-full bg-primary"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label={`Scroll to ${id}`}
          />
        ) : (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40 hover:bg-primary"
            aria-label={`Scroll to ${id}`}
          />
        )
      )}
    </div>
  );
}
