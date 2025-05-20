"use client"

import { Separator } from "./ui/separator";
import { InfiniteLoopVideo } from "./InfiniteLoopVideo";
import { FadeInSection } from "./ui/FadeInSection";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "Highlighting my transition from a licensed electrician with extensive hands-on experience to a software developer with a robust academic foundation in computer science.";

// Add job titles for ATS compatibility
const jobTitles = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Web Developer"
];

const skillSets = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    title: "Backend Development",
    skills: [
      "Git", // Assuming Git fits better here or in DevOps, adjust if needed
      "Node.js",
      "Next.js",
      "REST APIs",
      "Testing"
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Hostinger", // Assuming Hostinger fits here, adjust if needed
      "CSS Animations", // Assuming CSS Animations fits here, adjust if needed
      "State Management", // Assuming State Management fits here, adjust if needed
      "Web Development", // This is a broad term, consider refining or placing elsewhere
      "UI/UX" // Assuming UI/UX fits here, adjust if needed
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Teamwork",
      "Problem-solving",
      "Adaptability",
      "Time management",
      "Critical thinking",
      "Conflict resolution",
      "Accountability"
    ]
  }
];

export function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSkillSet, setCurrentSkillSet] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillSet((prev) => (prev + 1) % skillSets.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen py-40 px-6 md:px-16 relative bg-primary/3 dark:bg-primary/15">
      <div className="max-w-6xl mx-auto space-y-32">
        <div className="relative">
          <FadeInSection delay={0}>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Get To Know</h5>
            <h2 className="section-title font-bold mb-12">ABOUT</h2>
          </FadeInSection>

          {/* Job Titles for ATS */}
          <FadeInSection delay={0.1}>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Professional Titles:</h3>
              <div className="flex flex-wrap gap-2">
                {jobTitles.map((title, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Main About content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeInSection delay={0.2}>
              <div className="relative z-10">
                <div className="relative min-h-[120px]">
                  <div className="flex flex-wrap gap-2">
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        className="text-lg inline-block"
                        animate={isVideoPlaying ? {
                          x: [
                            0,
                            Math.random() * 200 - 100,
                            Math.random() * 200 - 100,
                            0
                          ],
                          y: [
                            0,
                            Math.random() * 200 - 100,
                            Math.random() * 200 - 100,
                            0
                          ],
                          rotate: [
                            0,
                            Math.random() * 360 - 180,
                            Math.random() * 360 - 180,
                            0
                          ],
                          scale: [1, 1.2, 1.2, 1],
                          opacity: [1, 0.8, 0.8, 1],
                          color: ["inherit", "var(--primary)", "var(--primary)", "inherit"],
                        } : {
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          opacity: 1,
                          color: "inherit",
                        }}
                        transition={{
                          duration: 2,
                          times: [0, 0.3, 0.7, 1],
                          ease: "easeInOut",
                          delay: index * 0.02,
                        }}
                      >
                        {word}{" "}
                      </motion.span>
                    ))}
                  </div>
                  
                  <AnimatePresence>
                    {isVideoPlaying && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-primary/20 rounded-lg"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Video Section - Positioned below the About grid */}
                <div className="mt-16">
                  <InfiniteLoopVideo
                    src="/videos/about-video.mp4"
                    className="w-full aspect-video rounded-lg shadow-lg"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                  
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="relative z-10">
                <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">My</h5>
                <h3 className="text-3xl font-bold mb-6">STORY</h3>

                <div className="bg-card rounded-lg p-6">
                  <p className="mb-4">
                    Established in my career as a licensed electrician at Baptist Health South Florida, I discovered
                    my passion for technology and software development.
                  </p>
                  <p className="mb-4">
                    While maintaining my role as an electrician, I pursued a Bachelor's degree in Computer Science
                    at Florida International University.
                  </p>
                  <p>
                    Driven by a mission to build exceptional digital experiences, I've developed skills in Java,
                    Python, JavaScript, and various web technologies, launching my career as a Software
                    Developer at Amazing Minds Therapy.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

        <Separator className="bg-neutral-800" />

        <FadeInSection delay={0.6}>
          <div className="relative z-10">
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Professional</h5>
            <h3 className="text-3xl font-bold mb-10">EXPERIENCE</h3>

            {/* Career Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Current Role - Right side on desktop */}
              <div className="relative mb-12 md:mb-24">
                <div className="md:ml-auto md:pl-12 md:w-1/2 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-[-30px] top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="bg-card rounded-lg p-6 border border-neutral-800 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                      <div>
                        <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary mb-2">
                          Current Role
                        </div>
                        <h4 className="text-xl font-medium">Frontend Developer</h4>
                        <h5 className="text-primary font-medium">Amazing Minds Therapy</h5>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Remote
                        </div>
                      </div>
                      <div className="text-muted-foreground mt-1 md:mt-0">
                        <span className="inline-flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Present (Part-Time)
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4 relative z-10">
                      <p className="text-muted-foreground">
                        Part-time Frontend Developer responsible for developing, deploying, and maintaining the company's web presence using JavaScript, React, TypeScript, and Hostinger hosting.
                      </p>
                    </div>
                    
                    <div className="space-y-3 relative z-10">
                      <h6 className="font-medium text-sm text-white/80">Key Responsibilities & Achievements:</h6>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Developed responsive website with React and TypeScript, implementing responsive design with breakpoints at 1060px</li>
                        <li>Implemented custom UI components and interactive elements, enhancing user engagement</li>
                        <li>Managed website hosting and deployment on Hostinger, ensuring 99.9% uptime</li>
                        <li>Ensured cross-browser compatibility and performance optimization, reducing page load time by 40%</li>
                        <li>Collaborated with stakeholders to gather requirements and implement iterative improvements</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-neutral-800 relative z-10">
                      <h6 className="font-medium text-sm text-white/80 mb-2">Technical Skills:</h6>
                      <div className="flex flex-wrap gap-2 min-h-[32px]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentSkillSet}
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                          >
                            {skillSets[currentSkillSet].skills.map((skill) => (
                              <motion.span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 rounded text-xs text-primary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    <p className="text-muted-foreground mt-4 text-sm italic relative z-10">
                      This part-time role has allowed me to create and deploy a professional web presence for a therapy practice, handling both development and hosting responsibilities.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Previous Role - Left side on desktop */}
              <div className="relative mb-12 md:mb-24">
                <div className="md:mr-auto md:pr-12 md:w-1/2 md:text-right relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:right-[-30px] top-0 w-4 h-4 rounded-full bg-neutral-800 transform -translate-x-1/2 md:translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="bg-card rounded-lg p-6 border border-neutral-800 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-800/20 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-neutral-800/20 rounded-full transform -translate-x-12 translate-y-12"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                      <div className="md:order-2 md:text-right">
                        <div className="inline-block bg-neutral-800 px-3 py-1 rounded-full text-xs font-medium text-white mb-2">
                          Previous Role
                        </div>
                        <h4 className="text-xl font-medium">Licensed Electrician</h4>
                        <h5 className="text-primary font-medium">Baptist Health South Florida</h5>
                        <div className="flex items-center justify-end text-sm text-muted-foreground mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Miami, FL
                        </div>
                      </div>
                      <div className="text-muted-foreground mt-1 md:mt-0 md:order-1">
                        <span className="inline-flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          March 2020 - Present
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4 relative z-10">
                      <p className="text-muted-foreground">
                        Licensed electrician responsible for maintaining critical electrical systems in a healthcare environment, ensuring uninterrupted power supply for medical equipment and patient care.
                      </p>
                    </div>
                    
                    <div className="space-y-3 relative z-10">
                      <h6 className="font-medium text-sm text-white/80">Key Responsibilities & Achievements:</h6>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Maintained 100% compliance with NFPA 110 and 99 standards for emergency power systems</li>
                        <li>Implemented preventive maintenance protocols that reduced system failures by 45%</li>
                        <li>Diagnosed and resolved complex electrical issues with 98% first-time resolution rate</li>
                        <li>Conducted regular inspections and testing of critical power infrastructure</li>
                        <li>Collaborated with engineering teams to optimize power distribution systems</li>
                        <li>Documented all maintenance activities and system changes in compliance with regulatory requirements</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-neutral-800 relative z-10">
                      <h6 className="font-medium text-sm text-white/80 mb-2">Certifications & Skills:</h6>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-white">Electrical Journeyman License</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-white">NFPA 110</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-white">NFPA 99</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-white">Emergency Power Systems</span>
                        <span className="px-2 py-1 bg-neutral-800 rounded text-xs text-white">Preventive Maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Career Transition - Center on desktop */}
              <div className="relative">
                <div className="mx-auto w-full md:w-1/2 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="bg-card rounded-lg p-6 border border-neutral-800 relative overflow-hidden mt-8">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                    
                    <div className="text-center mb-4 relative z-10">
                      <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary mb-2">
                        Career Transition
                      </div>
                      <h4 className="text-xl font-medium">From Electrical to Software Development</h4>
                    </div>
                    
                    <div className="mb-4 relative z-10">
                      <p className="text-muted-foreground text-center">
                        Leveraging problem-solving skills and attention to detail from electrical work, I transitioned to software development. My background in maintaining critical systems and ensuring reliability directly translates to creating robust, user-friendly applications.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                      <div className="bg-card/50 rounded-lg p-4 border border-neutral-800">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3 mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h5 className="font-medium text-sm text-center mb-1">Problem Solving</h5>
                        <p className="text-muted-foreground text-xs text-center">
                          Diagnosing and resolving complex technical issues
                        </p>
                      </div>
                      
                      <div className="bg-card/50 rounded-lg p-4 border border-neutral-800">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3 mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h5 className="font-medium text-sm text-center mb-1">System Reliability</h5>
                        <p className="text-muted-foreground text-xs text-center">
                          Ensuring uptime and performance in critical systems
                        </p>
                      </div>
                      
                      <div className="bg-card/50 rounded-lg p-4 border border-neutral-800">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3 mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h5 className="font-medium text-sm text-center mb-1">Team Collaboration</h5>
                        <p className="text-muted-foreground text-xs text-center">
                          Working effectively with diverse teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
