"use client"

import { FadeInSection } from "./ui/FadeInSection";
import Image from "next/image";

export function VolunteeringSection() {
  const volunteering = [
    {
      id: 1,
      title: "Database Management and CMS",
      description: "Volunteering project for Christ Fellowship. Database structuring, data integration, and dynamic pages creation using Wix Data to display structured content.",
      technologies: ["Wix", "Database", "CMS", "Web Development"],
      image: "/projects/volunteering-placeholder.png",
      link: "https://www.cfmiami.org/sermons",
      highlights: [
        "Implemented database structure for efficient content management",
        "Created dynamic pages for sermon content display",
        "Integrated Wix Data for seamless content updates",
        "Optimized user experience for content navigation"
      ]
    }
  ];

  return (
    <section 
      id="volunteering" 
      className="min-h-screen py-40 px-6 md:px-16 relative bg-primary/3 dark:bg-primary/15"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeInSection delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Community</h5>
            <h2 className="text-5xl font-bold mb-4">VOLUNTEERING</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Contributing to the community through technology and web development expertise.
            </p>
          </div>
        </FadeInSection>
        
        <div className="space-y-24">
          {volunteering.map((project, index) => (
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
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
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