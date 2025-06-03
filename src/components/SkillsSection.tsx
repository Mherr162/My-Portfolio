"use client"

import { FadeInSection } from "./ui/FadeInSection";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Map skills to their logo files
const skillLogos: Record<string, string> = {
  "React.js": "/logos/React.png",
  "Next.js": "/logos/Nextjs.png",
  "TypeScript": "/logos/TypeScript.png",
  "JavaScript": "/logos/JavaScript.png",
  "HTML5": "/logos/HTML5.png",
  "CSS3": "/logos/CSS3.png",
  "Tailwind CSS": "/logos/Tailwind CSS.png",
  "Node.js": "/logos/nodejs.png",
  "React Router": "/logos/reactrouter.svg",
  "Git": "/logos/Git.png",
  "GitHub": "/logos/GitHub.png",
  "Docker": "/logos/Docker.png",
  "AWS": "/logos/AWS.png",
  "Vercel": "/logos/Vercel.png",
  "MySQL": "/logos/MySQL.png",
  "Python": "/logos/Python.png",
  "Django": "/logos/Django.png",
  "Java": "/logos/Java.png",
  "jQuery": "/logos/jQuery.png",
  "NPM": "/logos/NPM.png",
  "JSON": "/logos/JSON.png",
  "Vite.js": "/logos/Vite.js.png",
  "Postman": "/logos/Postman.png",
  "Visual Studio": "/logos/Visual Studio.png",
  "GitHub Actions": "/logos/GitHub Actions.png",
  "GitHub Codespaces": "/logos/GitHub Codespaces.png",
  "GitLab": "/logos/gitlab.png",
  "Linux": "/logos/Linux.png",
  "JetBrains": "/logos/JetBrains.png",
  "Eclipse": "/logos/Eclipse.png",
  "TMDB": "/logos/TMDB.png",
  "Slack": "/logos/Slack.png"
};

// Define skill categories with detailed skills
const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
      "Tailwind CSS", "jQuery", "Vite.js", "JSON", "React Router", "Responsive Design", "UI/UX Design", "Web Accessibility"
    ]
  },
  {
    name: "Backend Development",
    skills: [
      "Node.js", "Django", "Python", "Java", "RESTful APIs", "MySQL"
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git", "GitHub", "GitHub Actions", "GitHub Codespaces", "GitLab" , "Docker", "AWS", "Vercel", 
      "Linux", "NPM", "Postman", "Visual Studio", "JetBrains", "Eclipse", "Debugging"
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      "Problem Solving", "Team Collaboration", "Communication", "Project Management", 
      "Agile Methodologies", "Time Management", "Adaptability", "Critical Thinking"
    ]
  }
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalDuration = 5000; // 5 seconds per category

  const nextCategory = useCallback(() => {
    setActiveCategory((prev) => (prev + 1) % skillCategories.length);
  }, []);

  const previousCategory = () => {
    setActiveCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen py-40 px-6 md:px-16 relative bg-primary/3 dark:bg-primary/15"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto">
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">My Expertise</h5>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Skills</h2>
        
        {/* Category Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={previousCategory}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Previous category"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="flex gap-2 flex-wrap">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(index);
                  setIsPaused(true);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === activeCategory 
                    ? "bg-primary text-primary-foreground scale-105" 
                    : "bg-primary/10 hover:bg-primary/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <button
            onClick={nextCategory}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Next category"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-primary/10 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: intervalDuration / 1000,
              ease: "linear",
              repeat: 0
            }}
            onAnimationComplete={() => {
              if (!isPaused) {
                nextCategory();
              }
            }}
            key={activeCategory}
          />
        </div>

        {/* Skills Display */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <FadeInSection delay={0.1}>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">{skillCategories[activeCategory].name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillCategories[activeCategory].skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skillLogos[skill] ? (
                          <div className="relative w-5 h-5 flex-shrink-0">
                            <Image 
                              src={skillLogos[skill]} 
                              alt={`${skill} logo`} 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        ) : null}
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

