"use client";

import React, { useEffect, useState } from "react";
import { BriefcaseBusiness, Clock3, Code2, FileText, Home, Mail, Radio, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "home", icon: Home },
  { name: "About", href: "about", icon: UserRound },
  { name: "Path", href: "timeline", icon: Clock3 },
  { name: "Projects", href: "projects", icon: BriefcaseBusiness },
  { name: "Skills", href: "skills", icon: Code2 },
  { name: "Resume", href: "resume", icon: FileText },
];

export const PortfolioNavbar = () => {
  const [activeId, setActiveId] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(pathname === "/now" ? "now" : "home");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (const item of [...navItems, { name: "Contact", href: "contact", icon: Mail }]) {
        const section = document.getElementById(item.href);
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveId(item.href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.dispatchEvent(new Event("portfolio-route-transition"));
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3">
      <div className="flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-xl border border-border bg-background/88 p-1.5 shadow-lg backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.href;

          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`dock-button ${isActive ? "dock-button-active" : ""}`}
              aria-label={`Go to ${item.name}`}
              title={item.name}
            >
              <Icon size={18} />
              <span className="hidden text-xs font-bold sm:inline">{item.name}</span>
            </button>
          );
        })}
        <div className="mx-1 h-6 w-px shrink-0 bg-border" />
        <button
          onClick={() => {
            if (pathname !== "/now") {
              window.dispatchEvent(new Event("portfolio-route-transition"));
            }
            router.push("/now");
          }}
          className={`dock-button ${activeId === "now" ? "dock-button-active" : ""}`}
          aria-label="Go to Now"
          title="Now"
        >
          <Radio size={18} />
          <span className="hidden text-xs font-bold sm:inline">Now</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`dock-button ${activeId === "contact" ? "dock-button-active" : "bg-primary text-primary-foreground hover:opacity-90"}`}
          aria-label="Go to contact"
          title="Contact"
        >
          <Mail size={18} />
          <span className="hidden text-xs font-bold sm:inline">Contact</span>
        </button>
      </div>
    </nav>
  );
};
