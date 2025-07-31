"use client";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animationVariants";

const experiences = [
    {
    role: "Intern - SQL Developer",
    company: "Elevate Labs",
    year: "2025",
    description: "Worked on Database Management and SQL & PostgreSQL queries.",
    skills: ["MySQL", "PostgreSQL", "Git"],
  },
  {
    role: "Flutter Bootcamp",
    company: "Udemy",
    year: "2025",
    description: "Developed Apps using Flutter and Dart.",
    skills: ["Flutter", "Dart", "Firebase","OOP", "State Management"],
  },
  
  {
    role: "Data Science Bootcamp" ,
    company: "GeeksforGeeks",
    year: "2025",
    description: "Learned Data Science concepts and applied them in projects.",
    skills: ["Python","Data Science", "Machine Learning","Pandas", "NumPy", "Matplotlib","NLP","Web Scraping","Image Processing"],
  },
  {
    role: "Data Structures and Algorithms using C",
    company: "Self Learning",
    year: "2024",
    description: "Learned Data Structures and Algorithms using C.",
    skills: ["Data Structures", "Algorithms", "C"],
  },
  {
    role: "Oops using C++",
    company: "Self Learning",
    year: "2024",
    description: "Learned Object-Oriented Programming concepts using C++.",
    skills: ["Object-Oriented Programming", "C++"],
  },
  
  {
    role: "Student",
    company: "Self Learning",
    year: "2023",
    description: "Learned HTML, CSS, JS and started exploring React.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="min-h-screen flex items-center justify-center text-center ">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white "
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-12  ">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="pl-6 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 [#10B981] rounded-full left-[-7px] top-2" />
              
              <h3 className="text-xl font-semibold text-[#10B981]">
                {exp.role} @ {exp.company}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.year}
              </span>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-3 grid-cols-2 gap-2 mt-3 w-full max-w-md">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#10B981] dark:bg-indigo-800 text-black dark:text-black px-4 py-2 skill-badge text-sm rounded-full shadow-emerald-glow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}