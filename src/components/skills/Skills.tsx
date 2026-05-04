"use client";

import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiDart,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const categories = {
  Frontend: [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React", icon: <SiReact /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Dart", icon: <SiDart /> },
  ],
  Programming: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
  ],
  "Backend & Tools": [
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Vercel", icon: <SiVercel /> },
  ],
};

export default function Skills() {
  return (
    <div className="section-inner">
      <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Tools I use.</h2>
        </div>
        <p className="section-copy">
          A practical stack for building interfaces, APIs, mobile apps, and database-backed products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {Object.entries(categories).map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="minimal-card p-5"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground">{category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground"
                >
                  <span className="text-primary">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
