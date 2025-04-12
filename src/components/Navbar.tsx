"use client"

import Link from "next/link";
import { ThemeToggle } from "./ui/ThemeToggle";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Star component for the space effect
const Star = ({ delay, duration, size, x, y, speed }: { delay: number; duration: number; size: number; x: number; y: number; speed: number }) => (
  <motion.div
    className="absolute bg-white/20 rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 0.8, 0],
      y: [0, -100],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Line component for the space effect
const SpaceLine = ({ delay, duration, x, y, length, angle }: { delay: number; duration: number; x: number; y: number; length: number; angle: number }) => (
  <motion.div
    className="absolute bg-gradient-to-r from-white/20 to-transparent"
    style={{
      width: length,
      height: 1,
      left: `${x}%`,
      top: `${y}%`,
      transform: `rotate(${angle}deg)`,
    }}
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{
      opacity: [0, 0.5, 0],
      scaleX: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Rain drop component
const RainDrop = ({ delay, duration, x, speed }: { delay: number; duration: number; x: number; speed: number }) => (
  <motion.div
    className="absolute w-[1px] h-[12px] bg-white/15"
    style={{
      left: `${x}%`,
      top: "-12px",
    }}
    initial={{ y: -12, opacity: 0 }}
    animate={{
      y: ["-12px", "100vh"],
      opacity: [0, 0.2, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Cloud component
const Cloud = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: number; y: number; size: number }) => (
  <motion.div
    className="absolute"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size * 0.6,
    }}
    initial={{ opacity: 0, x: -100 }}
    animate={{
      opacity: [0, 0.15, 0],
      x: ["-100%", "200%"],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {/* Main cloud body */}
    <div className="absolute inset-0 bg-white/10 rounded-full" />
    
    {/* Cloud puffs - varying sizes and positions */}
    <div className="absolute -top-1/3 -left-1/4 w-2/3 h-2/3 bg-white/10 rounded-full blur-sm" />
    <div className="absolute -top-1/3 -right-1/4 w-2/3 h-2/3 bg-white/10 rounded-full blur-sm" />
    <div className="absolute -bottom-1/3 left-1/4 w-2/3 h-2/3 bg-white/10 rounded-full blur-sm" />
    <div className="absolute -bottom-1/3 right-1/4 w-2/3 h-2/3 bg-white/10 rounded-full blur-sm" />
    
    {/* Additional cloud details */}
    <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-white/8 rounded-full blur-md" />
    <div className="absolute -top-1/4 right-1/4 w-1/2 h-1/2 bg-white/8 rounded-full blur-md" />
    <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-white/8 rounded-full blur-md" />
    <div className="absolute -bottom-1/4 right-1/4 w-1/2 h-1/2 bg-white/8 rounded-full blur-md" />
    
    {/* Cloud highlights */}
    <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-white/5 rounded-full blur-lg" />
    <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-white/5 rounded-full blur-lg" />
    
    {/* Cloud shadows */}
    <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-white/3 rounded-full blur-xl" />
    <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-white/3 rounded-full blur-xl" />
    
    {/* Overall cloud texture */}
    <div className="absolute inset-0 bg-white/5 rounded-full blur-md" />
  </motion.div>
);

// Floating particle component
const Particle = ({ delay, duration, x, y, size, color }: { delay: number; duration: number; x: number; y: number; size: number; color: string }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: color,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 0.6, 0],
      y: [0, -100],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Light effect component
const LightEffect = ({ isLight }: { isLight: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" />
      </div>
    );
  }

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="fixed inset-0"
        style={{
          opacity: 0,
          backgroundImage: `radial-gradient(circle at center, rgba(255, 240, 200, 0.95) 0%, rgba(255, 240, 200, 0.8) 30%, rgba(255, 240, 200, 0.5) 50%, rgba(255, 240, 200, 0) 80%)`,
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/30 rounded-full"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { theme } = useTheme();
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);
  const [lines, setLines] = useState<Array<{ id: number; x: number; y: number; length: number; angle: number }>>([]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate stars and lines
  useEffect(() => {
    const newStars = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      speed: 2 + Math.random() * 3,
    }));
    setStars(newStars);

    const newLines = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      length: 20 + Math.random() * 30,
      angle: Math.random() * 360,
    }));
    setLines(newLines);
  }, []);

  return (
    <>
      <LightEffect isLight={theme === "light"} />
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Space background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Stars */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {stars.map((star) => (
                  <Star
                    key={star.id}
                    delay={star.id * 0.5}
                    duration={star.speed}
                    size={star.size}
                    x={star.x}
                    y={star.y}
                    speed={star.speed}
                  />
                ))}
              </div>

              {/* Space lines */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {lines.map((line) => (
                  <SpaceLine
                    key={line.id}
                    delay={line.id * 0.8}
                    duration={3 + Math.random() * 2}
                    x={line.x}
                    y={line.y}
                    length={line.length}
                    angle={line.angle}
                  />
                ))}
              </div>
              
              {/* Logo text */}
              <motion.div
                className="relative font-bold text-2xl tracking-tight"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.span
                  className="text-primary relative"
                  animate={{
                    x: isHovered ? [0, -5, 0] : 0,
                    rotate: isHovered ? [0, -10, 0] : 0,
                    scale: isHovered ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  MH
                  <motion.div
                    className="absolute -inset-1 bg-primary/20 rounded-full blur-sm"
                    animate={{
                      scale: isHovered ? [1, 1.5, 1] : 1,
                      opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
                <motion.span
                  className="text-white/90 relative"
                  animate={{
                    x: isHovered ? [0, 5, 0] : 0,
                    rotate: isHovered ? [0, 10, 0] : 0,
                    scale: isHovered ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {" "}Portfolio
                  <motion.div
                    className="absolute -inset-1 bg-white/10 rounded-full blur-sm"
                    animate={{
                      scale: isHovered ? [1, 1.5, 1] : 1,
                      opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#hero" className="text-sm md:text-base hover:text-white/80 transition-colors">
            HOME
          </Link>
          <Link href="#about" className="text-sm md:text-base hover:text-white/80 transition-colors">
            ABOUT
          </Link>
          <Link href="#projects" className="text-sm md:text-base hover:text-white/80 transition-colors">
            MY WORKS
          </Link>
          <Link href="#volunteering" className="text-sm md:text-base hover:text-white/80 transition-colors">
            VOLUNTEERING
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="text-sm md:text-base hover:text-white/80 transition-colors">
              RESOURCES
            </button>
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2"
                >
                  <div className="flex flex-col gap-3">
                    <Link 
                      href="https://www.linkedin.com/in/michel-herrera-760aa1288" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white/80 transition-colors"
                    >
                      LinkedIn
                    </Link>
                    <Link 
                      href="https://github.com/mherr162" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white/80 transition-colors"
                    >
                      GitHub
                    </Link>
                    <Link 
                      href="/resume" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white/80 transition-colors"
                    >
                      Resume
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="#contact" className="text-sm md:text-base hover:text-white/80 transition-colors">
            GET IN TOUCH
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
