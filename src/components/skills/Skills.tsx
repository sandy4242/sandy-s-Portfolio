"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiFramer, SiFastapi, SiPostgresql, SiGit, SiVercel,
  SiDart,
  SiFlutter,
  SiMysql,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = {
  "Frontend": [
    { name: "Next.js", level: 75, icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "DART", level: 70, icon: <SiDart className="text-pink-500" /> },
    { name: "Flutter", level: 80, icon: <SiFlutter className="text-blue-500" /> },
  ],
  "Programming": [
    { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", level: 70, icon: <SiTypescript className="text-blue-500" /> },
    { name: "C++", level: 80, icon: <SiCplusplus className="text-blue-500" /> },
    { name: "Python", level: 70, icon: <SiPython className="text-blue-500" /> },
  ],
  "Backend / Tools": [
    { name: "FastAPI", level: 80, icon: <SiFastapi className="text-green-500" /> },
    { name: "MySQL", level: 87, icon: <SiMysql className="text-blue-500" /> },
    { name: "PostgreSQL", level: 75, icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Git", level: 90, icon: <SiGit className="text-orange-500" /> },
    { name: "Vercel", level: 85, icon: <SiVercel className="text-black dark:text-white" /> },
  ],
};

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section id="skills" className="justify-center text-center	min-h-screen max-w-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white  p-19">
          Skills & Tools
        </h2>

        {Object.entries(categories).map(([category, skills], idx) => {
          const isOpen = openCategory === category;
          return (
            <div key={idx} className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text- [#10B981]"
              >
                {category}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-4 space-y-6"
              >
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1 items-center">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-3 rounded-full bg-[#10B981] dark:bg-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
