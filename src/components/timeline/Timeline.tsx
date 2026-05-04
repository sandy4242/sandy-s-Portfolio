"use client";

import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "myRide",
    type: "Part-time",
    period: "Apr 2026 - Present",
    location: "Remote",
    description: "Building and maintaining product features across the application stack.",
    skills: ["Full Stack", "Product Development", "Remote"],
    kind: "work",
  },
  {
    role: "Flutter Developer",
    company: "Fiel",
    type: "Internship",
    period: "Jan 2026 - Present",
    location: "India - Remote",
    description:
      "Developing a service-based application for clients and service providers using MVC architecture, Postman, Node.js, MongoDB, and REST APIs.",
    skills: ["Flutter", "Mobile Development", "Postman API", "REST API"],
    kind: "work",
  },
  {
    role: "Contributor",
    company: "GirlScript Summer of Code",
    type: "Full-time",
    period: "Sep 2025 - Present",
    location: "India - Remote",
    description: "Contributing to open-source projects while improving collaboration, code review, and mobile application development skills.",
    skills: ["Open Source", "Mobile App Development", "Collaboration"],
    kind: "work",
  },
  {
    role: "Application Developer Intern",
    company: "Volcan Vision & Automation Pvt Ltd",
    type: "Internship",
    period: "Aug 2025 - Present",
    location: "Remote",
    description:
      "Developed and deployed a supply chain management system with role-specific dashboards, real-time alerts, data management, and responsive UI workflows.",
    skills: ["Flutter", "Supabase", "Firebase", "UI/UX"],
    kind: "work",
  },
  {
    role: "Intern - SQL Developer",
    company: "Elevate Labs",
    type: "Internship",
    period: "2025",
    location: "Remote",
    description: "Worked on database management and optimized SQL and PostgreSQL queries for better performance.",
    skills: ["MySQL", "PostgreSQL", "Git"],
    kind: "work",
  },
  {
    role: "Flutter Bootcamp",
    company: "Udemy",
    type: "Course",
    period: "2025",
    location: "Online",
    description: "Built mobile applications using Flutter and Dart with a focus on state management.",
    skills: ["Flutter", "Dart", "Firebase"],
    kind: "learning",
  },
  {
    role: "Data Science Bootcamp",
    company: "GeeksforGeeks",
    type: "Course",
    period: "2025",
    location: "Online",
    description: "Practiced data science concepts through hands-on work with NLP and web scraping.",
    skills: ["Python", "Machine Learning", "Pandas"],
    kind: "learning",
  },
  {
    role: "Data Structures & Algorithms",
    company: "Self Learning",
    type: "Self-paced",
    period: "2024",
    location: "Online",
    description: "Solved logic problems with C and C++ while strengthening core data structures.",
    skills: ["Data Structures", "Algorithms", "C++"],
    kind: "learning",
  },
  {
    role: "Frontend Development",
    company: "Self Learning",
    type: "Self-paced",
    period: "2023",
    location: "Online",
    description: "Started with HTML, CSS, and JavaScript, then moved into React interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    kind: "learning",
  },
];

export default function Timeline() {
  return (
    <div className="section-inner">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Path</p>
          <h2 className="section-title">Experience and learning.</h2>
        </div>
        <p className="section-copy max-w-xl">
          Slide through recent roles, internships, open-source work, courses, and self-learning milestones.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
        <div className="timeline-scroll -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 pt-1">
          {experiences.map((exp, index) => {
            const Icon = exp.kind === "work" ? BriefcaseBusiness : GraduationCap;

            return (
              <motion.article
                key={`${exp.role}-${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true, margin: "-80px" }}
                className="minimal-card relative min-h-[23rem] w-[82vw] shrink-0 snap-start p-5 sm:w-[25rem]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                    <Icon size={20} />
                  </span>
                  <span className="rounded-md border border-border px-2 py-1 text-xs font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm font-bold text-primary">{exp.period}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight text-foreground">
                  {exp.role}
                </h3>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">
                  {exp.company} <span className="text-border">/</span> {exp.type}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase text-muted-foreground">{exp.location}</p>

                <p className="section-copy mt-5 text-sm">{exp.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}

          <div className="flex w-16 shrink-0 snap-start items-center justify-center text-primary">
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
