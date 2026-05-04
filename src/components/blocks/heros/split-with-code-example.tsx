"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const stats = [
  ["04", "featured projects"],
  ["08+", "core technologies"],
  ["2026", "Flutter developer intern"],
];

export default function SplitWithCodeExample() {
  return (
    <div className="section-inner grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground hover:border-primary"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          Open to opportunities
        </a>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[0.96] text-foreground sm:text-7xl">
          Sandeep Sarkar
        </h1>

        <div className="mt-5 h-9 text-xl font-semibold text-primary sm:text-2xl">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1800,
              "Flutter Developer",
              1800,
              "Rust Developer",
              1800,
              "UI-focused Builder",
              1800,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </div>

        <p className="section-copy mt-6 max-w-2xl text-lg">
          I build clean web and mobile experiences with Next.js, Flutter, and database systems. My focus is simple interfaces, useful products, and code that stays understandable after the first launch.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground hover:opacity-90"
          >
            View Work
            <ArrowDown size={16} />
          </a>
          <a href="mailto:sandeepsarkar316@gmail.com" className="control-button" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/sandy4242" target="_blank" rel="noopener noreferrer" className="control-button" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sandeep-sarkar-cse/" target="_blank" rel="noopener noreferrer" className="control-button" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="minimal-card overflow-hidden"
      >
        <div className="border-b border-border px-5 py-4">
          <p className="text-sm font-semibold text-muted-foreground">Current stack</p>
        </div>
        <div className="grid divide-y divide-border">
          {["Next.js + Tailwind", "Flutter + Dart", "FastAPI + Python", "MySQL + PostgreSQL"].map((item) => (
            <div key={item} className="flex items-center justify-between px-5 py-4">
              <span className="font-medium text-foreground">{item}</span>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 border-t border-border">
          {stats.map(([value, label]) => (
            <div key={label} className="p-5">
              <p className="font-heading text-2xl font-bold text-foreground">{value}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
