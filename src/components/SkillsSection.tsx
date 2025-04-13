'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection } from './ui/FadeInSection';

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    // Programming Languages
    { id: 1, name: "Java", logoPath: "/logos/Java.png", category: "Programming", color: "#FF6B6B", size: 1.2, x: 0.2, y: 0.3 },
    { id: 2, name: "Python", logoPath: "/logos/Python.png", category: "Programming", color: "#4ECDC4", size: 1.1, x: 0.8, y: 0.2 },
    { id: 3, name: "JavaScript", logoPath: "/logos/JavaScript.png", category: "Programming", color: "#FFD93D", size: 1.3, x: 0.5, y: 0.7 },
    { id: 4, name: "TypeScript", logoPath: "/logos/TypeScript.png", category: "Programming", color: "#45B7D1", size: 1.1, x: 0.3, y: 0.6 },
    { id: 5, name: "JSON", logoPath: "/logos/JSON.png", category: "Programming", color: "#F7DF1E", size: 1.0, x: 0.7, y: 0.5 },
    
    // Frontend Technologies
    { id: 6, name: "HTML5", logoPath: "/logos/HTML5.png", category: "Frontend", color: "#E34F26", size: 1.2, x: 0.1, y: 0.4 },
    { id: 7, name: "CSS3", logoPath: "/logos/CSS3.png", category: "Frontend", color: "#1572B6", size: 1.1, x: 0.9, y: 0.3 },
    { id: 8, name: "React", logoPath: "/logos/React.png", category: "Frontend", color: "#61DAFB", size: 1.4, x: 0.4, y: 0.8 },
    { id: 9, name: "Next.js", logoPath: "/logos/Nextjs.png", category: "Frontend", color: "#000000", size: 1.2, x: 0.6, y: 0.9 },
    { id: 10, name: "Tailwind CSS", logoPath: "/logos/Tailwind CSS.png", category: "Frontend", color: "#38B2AC", size: 1.1, x: 0.2, y: 0.7 },
    { id: 11, name: "jQuery", logoPath: "/logos/jQuery.png", category: "Frontend", color: "#0769AD", size: 1.0, x: 0.8, y: 0.6 },
    { id: 12, name: "Vite.js", logoPath: "/logos/Vite.js.png", category: "Frontend", color: "#646CFF", size: 1.1, x: 0.5, y: 0.2 },
    
    // Backend Technologies
    { id: 13, name: "Node.js", logoPath: "/logos/nodejs.png", category: "Backend", color: "#339933", size: 1.3, x: 0.7, y: 0.8 },
    { id: 14, name: "Django", logoPath: "/logos/Django.png", category: "Backend", color: "#092E20", size: 1.1, x: 0.3, y: 0.9 },
    { id: 15, name: "MySQL", logoPath: "/logos/MySQL.png", category: "Backend", color: "#4479A1", size: 1.2, x: 0.9, y: 0.7 },
    
    // DevOps & Cloud
    { id: 16, name: "Docker", logoPath: "/logos/Docker.png", category: "DevOps", color: "#2496ED", size: 1.2, x: 0.1, y: 0.6 },
    { id: 17, name: "AWS", logoPath: "/logos/AWS.png", category: "DevOps", color: "#FF9900", size: 1.3, x: 0.6, y: 0.1 },
    { id: 18, name: "Git", logoPath: "/logos/Git.png", category: "DevOps", color: "#F05032", size: 1.1, x: 0.4, y: 0.5 },
    { id: 19, name: "GitHub", logoPath: "/logos/GitHub.png", category: "DevOps", color: "#181717", size: 1.2, x: 0.8, y: 0.4 },
    { id: 20, name: "GitHub Actions", logoPath: "/logos/GitHub Actions.png", category: "DevOps", color: "#2088FF", size: 1.1, x: 0.2, y: 0.1 },
    { id: 21, name: "GitHub Codespaces", logoPath: "/logos/GitHub Codespaces.png", category: "DevOps", color: "#2F2F2F", size: 1.0, x: 0.7, y: 0.3 },
    { id: 22, name: "Linux", logoPath: "/logos/Linux.png", category: "DevOps", color: "#FCC624", size: 1.2, x: 0.5, y: 0.4 },
    { id: 23, name: "Vercel", logoPath: "/logos/Vercel.png", category: "DevOps", color: "#000000", size: 1.1, x: 0.9, y: 0.9 },
    
    // Development Tools
    { id: 24, name: "NPM", logoPath: "/logos/NPM.png", category: "Tools", color: "#CB3837", size: 1.0, x: 0.1, y: 0.8, height: 0.6 },
    { id: 25, name: "Postman", logoPath: "/logos/Postman.png", category: "Tools", color: "#FF6C37", size: 1.1, x: 0.3, y: 0.5, height: 0.7 },
    { id: 26, name: "Slack", logoPath: "/logos/Slack.png", category: "Tools", color: "#4A154B", size: 1.0, x: 0.6, y: 0.6, height: 0.5 },
    { id: 27, name: "Eclipse", logoPath: "/logos/Eclipse.png", category: "Tools", color: "#2C2255", size: 1.1, x: 0.8, y: 0.8, height: 0.7 },
    { id: 28, name: "JetBrains", logoPath: "/logos/JetBrains.png", category: "Tools", color: "#000000", size: 1.2, x: 0.2, y: 0.2, height: 0.8 },
    { id: 29, name: "Visual Studio", logoPath: "/logos/Visual Studio.png", category: "Tools", color: "#5C2D91", size: 1.1, x: 0.7, y: 0.7, height: 0.7 }
  ];

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Draw constellation lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between skills
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < skills.length; i++) {
        for (let j = i + 1; j < skills.length; j++) {
          const skill1 = skills[i];
          const skill2 = skills[j];
          
          // Calculate distance between skills
          const dx = skill1.x - skill2.x;
          const dy = skill1.y - skill2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect skills that are close to each other
          if (distance < 0.3) {
            const x1 = skill1.x * canvas.width;
            const y1 = skill1.y * canvas.height;
            const x2 = skill2.x * canvas.width;
            const y2 = skill2.y * canvas.height;
            
            // Draw line with animation
            const alpha = 0.1 + Math.sin(time * 2 + i * 0.1) * 0.05;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [skills, time]);

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="min-h-screen py-32 px-6 md:px-16 relative bg-primary/5 dark:bg-primary/10">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">My Expertise</h5>
        <h2 className="section-title font-bold mb-12">SKILLS</h2>

        {/* Skills Constellation */}
        <div 
          ref={containerRef}
          className="relative h-[600px] w-full"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              transition: 'background-position 0.1s ease-out'
            }} />
          </div>

          {/* Constellation Canvas */}
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 z-0"
          />

          {/* Skill Stars */}
          <div className="absolute inset-0 z-10">
            {skills.map((skill) => {
              // Calculate position with subtle animation
              const x = skill.x * 100;
              const y = skill.y * 100;
              const scale = activeSkill === skill.id ? 1.5 : 1;
              const glow = activeSkill === skill.id ? 1 : 0.5 + Math.sin(time * 2 + skill.id * 0.1) * 0.2;
              
              return (
                <motion.div
                  key={skill.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: activeSkill === skill.id ? 10 : 1,
                  }}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setActiveSkill(skill.id === activeSkill ? null : skill.id)}
                >
                  {/* Star */}
                  <div
                    className="relative"
                    style={{
                      width: 60 * skill.size,
                      height: 60 * skill.size,
                    }}
                  >
                    {/* Star Glow */}
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}${Math.floor(glow * 100)} 0%, transparent 70%)`,
                        boxShadow: `0 0 ${20 * glow}px ${skill.color}${Math.floor(glow * 100)}`,
                        animation: `pulse ${2 + skill.id % 3}s infinite alternate`
                      }}
                    />
                    
                    {/* Star Icon */}
                    <div 
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${skill.color}40, ${skill.color}20)`,
                        boxShadow: `0 0 15px ${skill.color}30`
                      }}
                    >
                      <img
                        src={skill.logoPath}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                        crossOrigin="anonymous"
                      />
                    </div>
                    
                    {/* Star Name */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="text-xs font-medium text-white">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Skill Details */}
          <AnimatePresence>
            {activeSkill && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent z-20"
              >
                <div className="max-w-md mx-auto text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {skills.find(s => s.id === activeSkill)?.name}
                  </h3>
                  <p className="text-neutral-400">
                    {skills.find(s => s.id === activeSkill)?.category}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8">CERTIFICATIONS</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Foundations of Cyber Operations</h4>
              <p className="text-muted-foreground mb-4">MITRE</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Technical Interview Prep</h4>
              <p className="text-muted-foreground mb-4">CodePath</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">AWS Cloud Foundation</h4>
              <p className="text-muted-foreground mb-4">Amazon Academy</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Python Developer</h4>
              <p className="text-muted-foreground mb-4">Sololearn</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Electrical Journeyman License</h4>
              <p className="text-muted-foreground mb-4">Broward County, Florida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
