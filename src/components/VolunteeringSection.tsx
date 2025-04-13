"use client"

import { ProjectCard } from "./ui/ProjectCard";
import { FadeInSection } from "./ui/FadeInSection";

export function VolunteeringSection() {
  const volunteering = [
    {
      id: 1,
      title: "Database Management and CMS",
      description: "Volunteering project for Christ Fellowship. Database structuring, data integration, and dynamic pages creation using Wix Data to display structured content.",
      technologies: ["Wix", "Database", "CMS", "Web Development"],
      image: "/projects/volunteering-placeholder.png",
      link: "https://www.cfmiami.org/sermons"
    }
  ];

  return (
    <section id="volunteering" className="py-24 px-6 md:px-16 bg-primary/3 dark:bg-primary/15">
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeInSection delay={0}>
          <h2 className="section-title font-bold">VOLUNTEERING</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteering.map((project, index) => (
            <FadeInSection key={project.id} delay={0.2 * (index + 1)}>
              <div className="relative z-10">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  technologies={project.technologies}
                />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
} 