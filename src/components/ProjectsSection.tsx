"use client"

import { ProjectCard } from "./ui/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Movie Tracker",
    description: "A modern React application that helps users discover and track movies. Built with React 19 and Vite, it features movie search, detailed information, streaming availability, and favorites management. The app integrates with TMDB API and showcases responsive design principles for cross-device compatibility.",
    technologies: ["React", "Vite", "TMDB API", "React Router DOM", "JavaScript"],
    image: "/projects/Movie-Tracker.png",
    link: "https://react-app-green-nine.vercel.app/"
  },
  {
    id: 2,
    title: "Amazing Minds Therapy Website",
    description: "Professional, user-friendly website for Amazing Minds Therapy using WordPress with customized themes and plugins aligned with business branding.",
    technologies: ["WordPress", "Web Design", "SEO", "Custom Themes"],
    image: "/projects/Amazing-Minds-Therapy.png",
    link: "https://amazingmindstherapy.com/"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-16 relative bg-primary/3 dark:bg-primary/15">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="section-title font-bold">MY WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative z-10">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
