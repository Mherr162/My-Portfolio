"use client"

import { Separator } from "./ui/separator";
import { InfiniteLoopVideo } from "./InfiniteLoopVideo";
import { FadeInSection } from "./ui/FadeInSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "Highlighting my transition from a licensed electrician with extensive hands-on experience to a software developer with a robust academic foundation in computer science.";

export function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const words = text.split(" ");

  return (
    <section id="about" className="min-h-screen py-32 px-6 md:px-16 relative">
      <div className="max-w-6xl mx-auto space-y-32">
        <div className="relative">
          <FadeInSection delay={0}>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Get To Know</h5>
            <h2 className="section-title font-bold mb-12">ABOUT</h2>
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
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Watch my journey from electrician to software developer
                  </p>
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
                    at Florida International University, completing my education in 2024.
                  </p>
                  <p>
                    Driven by a mission to build exceptional digital experiences, I've developed skills in Java,
                    Python, JavaScript, and various web technologies, launching my career as an Associate Software
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
                <h4 className="text-xl font-medium mb-2">Associate Software Developer</h4>
                <h5 className="text-muted-foreground mb-4">Amazing Minds Therapy | 2024 - Present</h5>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed and developed a professional, user-friendly website using WordPress</li>
                  <li>Customized themes and plugins to align with business branding and functionality needs</li>
                  <li>Optimized website performance, security, and SEO to improve visibility</li>
                  <li>Integrated booking systems, contact forms, and accessibility features</li>
                  <li>Collaborated with stakeholders to gather requirements and implement updates</li>
                  <li>Provided ongoing maintenance, troubleshooting, and content management support</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
                <h4 className="text-xl font-medium mb-2">Licensed Electrician</h4>
                <h5 className="text-muted-foreground mb-4">Baptist Health South Florida | 2020 - Present</h5>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Installed and tested electrical machinery and switchboard components</li>
                  <li>Performed generator testing in compliance with NFPA 110, 99 standards</li>
                  <li>Diagnosed and repaired electrical defects using testing instruments</li>
                  <li>Inspected and tested systems to ensure compliance with standards</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
