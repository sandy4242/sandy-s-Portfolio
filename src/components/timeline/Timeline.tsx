"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern - SQL Developer",
    company: "Elevate Labs",
    year: "2025",
    description: "Worked on database management and optimized SQL and PostgreSQL queries for better performance.",
    skills: ["MySQL", "PostgreSQL", "Git"],
  },
  {
    role: "Flutter Bootcamp",
    company: "Udemy",
    year: "2025",
    description: "Built mobile applications using Flutter and Dart with a focus on state management.",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    role: "Data Science Bootcamp",
    company: "GeeksforGeeks",
    year: "2025",
    description: "Practiced data science concepts through hands-on work with NLP and web scraping.",
    skills: ["Python", "Machine Learning", "Pandas"],
  },
  {
    role: "Data Structures & Algorithms",
    company: "Self Learning",
    year: "2024",
    description: "Solved logic problems with C and C++ while strengthening core data structures.",
    skills: ["Data Structures", "Algorithms", "C++"],
  },
  {
    role: "Frontend Development",
    company: "Self Learning",
    year: "2023",
    description: "Started with HTML, CSS, and JavaScript, then moved into React interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export default function Timeline() {
  return (
    <div className="section-inner">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="eyebrow">Path</p>
          <h2 className="section-title">Experience and learning.</h2>
          <p className="section-copy mt-5">A compact view of the work, courses, and self-learning that shaped my current stack.</p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 py-6 sm:grid-cols-[5rem_1fr]"
            >
              <p className="text-sm font-bold text-primary">{exp.year}</p>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {exp.role} <span className="text-muted-foreground">@ {exp.company}</span>
                </h3>
                <p className="section-copy mt-2 text-sm">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-border bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
