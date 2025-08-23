"use client";

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsShowcase = () => {
  const projects = [
    {
      title: "Flood Prediction Website",
      description: "A Weather Flood Prediction website that takes live weather data as parameter .",
      technologies: ["API", "HTML", "CSS", "JS", "FAST API", "Python"],
      image: "/placeholder-project-2.jpg",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/sandy4242/Weather-Flood-Predictor"
    },
    {
      title: "Task Management App with ISAR DB", 
      description: "A Simple and Modern Todo App using ISAR DB.",
      technologies: ["Flutter", "Dart", "ISAR DB", "BLoC"],
      image: "/placeholder-project-1.jpg",
      liveUrl: "https://taskmaster-app.com",
      githubUrl: "https://github.com/sandy4242/TodoApp-w-IsarDB"
    },
    {
      title: "DataBase Management Systems",
      description: "A Database Management System which utilizes Python Faker to generate real-like data.",
      technologies: ["MySql", "GIT", "SCHEMA", "Python", "3NF"],
      image: "/placeholder-project-3.jpg",
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/sandy4242/DataBase"
    },
    {
      title: "Anonn Bloging Platform",
      description: "A anonymous blogging platform where users can share their thoughts without revealing their identity.",
      technologies: ["Next.js", "Tailwind CSS", "Vanta.js", "Supabase", "Three.js"],
      image: "/public/WhatsApp Image 2025-08-23 at 21.59.05_46ca1d01.jpg",
      liveUrl: "https://ui-library-docs.com",
      githubUrl: "https://github.com/sandy4242/anon_blog"
    }
  ];

  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10 ">
                <h3 className="text-xl font-semibold text-[#18181B] mb-3 group-hover:text-[#10B981] transition-colors duration-300  ">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-badge px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {/* <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-link text-[#10B981] hover:text-[#0f9f75] font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-link text-[#10B981] hover:text-[#0f9f75] font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sandy4242"
            className="text-link inline-flex items-center text-[#10B981] hover:text-[#0f9f75] font-medium text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};