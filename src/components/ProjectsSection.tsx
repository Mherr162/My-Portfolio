"use client"

import { FadeInSection } from "./ui/FadeInSection";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Movie Tracker",
    description: "A modern React application that helps users discover and track movies. Built with React 19 and Vite, it features movie search, detailed information, streaming availability, and favorites management. The app integrates with TMDB API and showcases responsive design principles for cross-device compatibility.",
    technologies: ["React", "Vite", "TMDB API", "React Router DOM", "JavaScript"],
    image: "/projects/Movie-Tracker.png",
    link: "https://react-app-green-nine.vercel.app/",
    sourceCode: "https://github.com/yourusername/movie-tracker",
    highlights: [
      "Implemented real-time movie search with TMDB API integration",
      "Built responsive UI with modern React practices",
      "Added favorites management system with local storage",
      "Optimized performance with React 19 features"
    ]
  },
  {
    id: 2,
    title: "Amazing Minds Therapy Website",
    description: "Professional, user-friendly website for Amazing Minds Therapy using WordPress with customized themes and plugins aligned with business branding.",
    technologies: ["WordPress", "Web Design", "SEO", "Custom Themes"],
    image: "/projects/Amazing-Minds-Therapy.png",
    link: "https://amazingmindstherapy.com/",
    sourceCode: null,
    highlights: [
      "Customized WordPress theme to match brand identity",
      "Implemented SEO best practices for better visibility",
      "Created intuitive navigation and user flow",
      "Integrated appointment booking system"
    ]
  }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  // Ensure activeProject is within valid bounds
  const currentProject = projects[activeProject] || projects[0];
  
  return (
    <section 
      id="projects" 
      className="min-h-screen py-40 px-6 md:px-16 relative bg-[url('/textures/crumpled-paper.png')] bg-repeat"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeInSection delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Featured</h5>
            <h2 className="text-5xl font-bold mb-4">CASE STUDIES</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A collection of projects showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>
        </FadeInSection>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <FadeInSection key={project.id} delay={0.2 * index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-5xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-muted-foreground text-xl leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-2xl">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-4 text-muted-foreground text-xl">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="leading-relaxed">{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-5 py-2 text-base text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8 pt-6">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline text-xl font-medium"
                    >
                      View Website →
                    </a>
                    {project.sourceCode && (
                      <a 
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline text-xl font-medium"
                      >
                        Source Code →
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                          <div className="text-muted-foreground text-sm">No image available</div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
