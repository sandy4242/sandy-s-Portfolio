"use client";

import { Code2, Database, ExternalLink, Github, LayoutTemplate, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Flood Prediction Website",
    description: "Weather flood prediction platform that uses live weather parameters to forecast potential flooding events.",
    technologies: ["FastAPI", "Python", "HTML/CSS/JS", "Weather API"],
    icon: MonitorPlay,
    githubUrl: "https://github.com/sandy4242/Weather-Flood-Predictor",
  },
  {
    title: "Task Management App",
    description: "Modern local-first task management app using ISAR DB for fast and reliable mobile storage.",
    technologies: ["Flutter", "Dart", "ISAR DB", "BLoC"],
    icon: LayoutTemplate,
    githubUrl: "https://github.com/sandy4242/TodoApp-w-IsarDB",
  },
  {
    title: "Database Management System",
    description: "Normalized database project with Python Faker data generation and structured relational modeling.",
    technologies: ["MySQL", "Python", "3NF Schema", "Git"],
    icon: Database,
    githubUrl: "https://github.com/sandy4242/DataBase",
  },
  {
    title: "Anon Blogging Platform",
    description: "Anonymous blogging platform for sharing ideas with a privacy-focused publishing flow.",
    technologies: ["Next.js", "Tailwind", "Supabase", "Three.js"],
    icon: Code2,
    githubUrl: "https://github.com/sandy4242/anon_blog",
  },
];

export const ProjectsShowcase = () => {
  return (
    <div className="section-inner">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Selected work.</h2>
        </div>
        <p className="section-copy max-w-xl">
          A focused set of mobile, web, backend, and database projects that show how I think through product structure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="minimal-card group p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="control-button"
                  aria-label={`${project.title} source`}
                >
                  <Github size={18} />
                </a>
              </div>

              <h3 className="mt-7 font-heading text-2xl font-semibold text-foreground group-hover:text-primary">
                {project.title}
              </h3>
              <p className="section-copy mt-3 text-sm">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-border px-2 py-1 text-xs font-semibold text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8">
        <a
          href="https://github.com/sandy4242"
          className="accent-link inline-flex items-center gap-2 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub profile
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
};
