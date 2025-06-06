"use client";

import { FadeInSection } from "./ui/FadeInSection";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Movie Tracker",
    description: "A modern React application that helps users discover and track movies. Built with React 19 and Vite, it features movie search, detailed information, streaming availability, and favorites management. The app integrates with TMDB API and showcases responsive design principles for cross-device compatibility.",
    technologies: ["React", "Vite", "TMDB API", "React Router DOM", "JavaScript"],
    image: "/projects/Movie-Tracker.png",
    link: "https://react-app-green-nine.vercel.app/",
    sourceCode: "https://github.com/Mherr162/React-App.git",
    highlights: [
      "Implemented real-time movie search with TMDB API integration",
      "Built responsive UI with modern React practices",
      "Added favorites management system with local storage",
      "Optimized performance with React 19 features"
    ]
  },
  {
    id: 2,
    title: "CoinBase Trading Bot",
    description: "A modern React application that automates cryptocurrency trading on CoinBase. Built with React and TypeScript, it features real-time market data retrieval, automated trade execution, and robust error handling. The app integrates with the CoinBase API and uses environment variables for secure configuration. Note: User login functionality is currently under development.",
    technologies: ["React", "TypeScript", "CoinBase API", "Node.js"],
    image: "/projects/CBTradingBot.png",
    link: "https://coin-base-trading-bot-neon.vercel.app/",
    sourceCode: "https://github.com/Mherr162/CoinBase_Trading-Bot.git",
    highlights: [
      "Integrated real-time market data and trading with the CoinBase API",
      "Developed a modular, type-safe codebase using React and TypeScript",
      "Implemented reliable API communication with custom retry logic",
      "Secured sensitive data using .env configuration",
      "Designed the architecture to support future enhancements, including user authentication"
    ]
  },
  {
    id: 3,
    title: "Amazing Minds Therapy Website",
    description: "Professional, user-friendly website for Amazing Minds Therapy using WordPress with customized themes and plugins aligned with business branding.",
    technologies: ["React", "Typescript", "Tailwind CSS", "VITE", "Hostinger"],
    image: "/projects/Amazing-Minds-Therapy.png",
    link: "null",
    sourceCode: null,
    highlights: [
      "Developed a modern web application for a therapy practice using React, TypeScript, and Vite",
      "Built responsive UI components using Radix UI and shadcn/ui",
      "Implemented form handling and validation with React Hook Form and Zod",
      "Optimized application performance and maintained code quality with TypeScript and ESLint",
      "Collaborated with stakeholders to implement features improving client engagement"
    ],
    note: "Note: The website is still under development."
  }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  // Ensure activeProject is within valid bounds
  const currentProject = projects[activeProject] || projects[0];
  
  return (
    <>
      <section
        id="projects"
        className="py-8 px-6 md:px-16 relative bg-primary/3 dark:bg-primary/15"
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
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full items-stretch">
            {/* Sticky Card (left) */}
            <aside className="hidden md:flex md:w-1/2 lg:w-2/5 flex-col items-center sticky top-32 h-fit self-start">
              <FadeInSection key={activeProject}>
                <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border p-6 md:p-10 flex flex-col items-center transition-all duration-500 animate-fade-in">
                  <div className="relative w-full aspect-video mb-4">
                    {projects[activeProject].image ? (
                      <Image
                        src={projects[activeProject].image}
                        alt={projects[activeProject].title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl">
                        <span className="text-muted-foreground text-sm">No image available</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">{projects[activeProject].title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center mb-2">
                    {projects[activeProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-4 py-1 text-sm text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </aside>
            {/* Descriptions (right) */}
            <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-10">
              {projects.map((project, idx) => (
                <section
                  key={project.id}
                  tabIndex={0}
                  className={`group transition-shadow duration-200 bg-card rounded-2xl border shadow-lg p-6 md:p-10 focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer ${activeProject === idx ? 'ring-2 ring-primary/40' : ''}`}
                  onClick={() => setActiveProject(idx)}
                  onFocus={() => setActiveProject(idx)}
                  onMouseEnter={() => setActiveProject(idx)}
                >
                  {/* Mobile card preview above description */}
                  <div className="md:hidden mb-4">
                    <div className="relative w-full aspect-video mb-2">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-xl"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl">
                          <span className="text-muted-foreground text-sm">No image available</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-center">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-4 py-1 text-xs text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line">{project.description}</p>
                    <div>
                      <h4 className="font-medium text-lg md:text-2xl mb-2">Key Highlights:</h4>
                      <ul className="list-disc list-inside space-y-2 md:space-y-4 text-muted-foreground text-base md:text-xl">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="leading-relaxed">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-6 pt-4">
                      {project.link !== "null" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline text-lg md:text-xl font-medium"
                        >
                          View Website →
                        </a>
                      )}
                      {project.sourceCode && (
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline text-lg md:text-xl font-medium"
                        >
                          Source Code →
                        </a>
                      )}
                      {project.note && (
                        <p className="text-muted-foreground text-base"><em>{project.note}</em></p>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
