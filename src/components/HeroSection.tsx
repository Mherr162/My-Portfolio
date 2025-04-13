"use client"

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { SplineModel } from "./SplineModel";
import { TypewriterText } from "./ui/TypewriterText";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [key, setKey] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number; type: 'line' | 'dot' }>>([]);

  // Split text into individual characters for animation
  const constText = "const";
  const developerText = "developer";
  const equalsText = "=";
  const nameText = "name";
  const colonText = ":";
  const quoteText = '"';
  const nameValueText = "MICHEL HERRERA";
  const typeText = "type";
  const roleText = "Software Engineer";
  const imageText = "image";
  const imageValueText = "me.jpeg";
  const secretKeyText = "🔑";
  const componentText = "<Software&nbsp;Engineer/>";

  const developer = {
    name: "MICHEL HERRERA",
    type: "Software Engineer",
    image: "me.jpeg"
  };

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isClient]);

  // Reset animation when component mounts or section comes into view
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setKey(prev => prev + 1);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-50px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isClient]);

  // Initialize background elements
  useEffect(() => {
    if (!isClient) return;

    const newElements = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 6,
      speed: 4 + Math.random() * 6,
      type: (Math.random() > 0.5 ? 'line' : 'dot') as 'line' | 'dot'
    }));
    setElements(newElements);
  }, [isClient]);

  // Function to create interactive letter component
  const InteractiveLetter = ({ char, index, delay, className = "" }: { char: string; index: number; delay: number; className?: string }) => {
    if (!isClient) {
      return <span className={className}>{char}</span>;
    }

    const letterRef = useRef<HTMLSpanElement>(null);
    const springConfig = { damping: 15, stiffness: 150 };
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const distance = useTransform(
      [mouseX, mouseY],
      (latest) => {
        if (!letterRef.current) return 0;
        const rect = letterRef.current.getBoundingClientRect();
        const letterX = rect.left + rect.width / 2;
        const letterY = rect.top + rect.height / 2;
        const [mx, my] = latest as [number, number];
        return Math.sqrt(Math.pow(mx - letterX, 2) + Math.pow(my - letterY, 2));
      }
    );

    const scale = useTransform(distance, [0, 100], [1.2, 1]);
    const rotate = useTransform(distance, [0, 100], [0, 360]);
    
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
    const springScale = useSpring(scale, springConfig);
    const springRotate = useSpring(rotate, springConfig);

    return (
      <motion.span
        ref={letterRef}
        className={`inline-block ${className}`}
        style={{
          x: springX,
          y: springY,
          scale: springScale,
          rotate: springRotate,
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay,
          ease: "easeOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        {char}
      </motion.span>
    );
  };

  // Background element component
  const BackgroundElement = ({ element }: { element: { id: number; x: number; y: number; size: number; speed: number; type: 'line' | 'dot' } }) => {
    const [randomOffset] = useState(() => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 40 - 20
    }));

    return (
      <motion.div
        className={`absolute ${element.type === 'dot' ? 'bg-white/30 rounded-full' : 'bg-white/20'}`}
        style={{
          width: element.type === 'dot' ? element.size : element.size * 3,
          height: element.type === 'dot' ? element.size : 2,
          left: `${element.x}%`,
          top: `${element.y}%`,
        }}
        initial={false}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.4, 0.8],
          y: [0, -300],
          x: element.type === 'line' ? [0, randomOffset.x] : [0, randomOffset.y],
          rotate: element.type === 'line' ? [0, 180, 360, 540] : 0,
        }}
        transition={{
          duration: 1.5 + element.speed,
          repeat: Infinity,
          ease: "linear",
          delay: element.id * 0.005
        }}
      />
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-primary/3 dark:bg-primary/15 pt-40"
    >
      {/* Interactive background */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {elements.map((element) => (
            <BackgroundElement key={element.id} element={element} />
          ))}
        </div>
      )}

      {/* Code display */}
      <motion.div 
        key={key}
        className="absolute top-12 xs:top-16 sm:top-20 md:top-24 lg:top-28 left-2 xs:left-4 sm:left-6 md:left-8 text-left z-20 w-full max-w-[90%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]"
        initial={false}
        animate={isClient ? { opacity: 1 } : false}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.div 
            className="font-mono text-sm text-white/80 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {constText.split("").map((char, index) => (
              <InteractiveLetter
                key={`const-${index}`}
                char={char}
                index={index}
                delay={index * 0.2}
                className="text-white"
              />
            ))}
            <InteractiveLetter
              char=" "
              index={0}
              delay={1.0}
              className="text-white/90 mx-1"
            />
            {developerText.split("").map((char, index) => (
              <InteractiveLetter
                key={`developer-${index}`}
                char={char}
                index={index}
                delay={1.2 + index * 0.2}
                className="text-white/90"
              />
            ))}
            <InteractiveLetter
              char="&nbsp;="
              index={0}
              delay={2.8}
              className="text-white/70"
            />
          </motion.div>
          
          <motion.div 
            className="font-mono text-2xl font-bold text-white mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {"{"}
          </motion.div>

          <motion.div 
            className="font-mono text-sm text-white/80 mt-2 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {nameText.split("").map((char, index) => (
              <InteractiveLetter
                key={`name-${index}`}
                char={char}
                index={index}
                delay={3.0 + index * 0.2}
                className="text-white/90"
              />
            ))}
            <InteractiveLetter
              char=":"
              index={0}
              delay={3.8}
              className="text-white/70 mx-1"
            />
            <InteractiveLetter
              char='"'
              index={0}
              delay={4.0}
              className="text-white/90"
            />
            {nameValueText.split("").map((char, index) => (
              <InteractiveLetter
                key={`nameValue-${index}`}
                char={char}
                index={index}
                delay={4.2 + index * 0.15}
                className={char === " " ? "mx-1" : "text-white"}
              />
            ))}
            <InteractiveLetter
              char='"'
              index={0}
              delay={5.8}
              className="text-white/90"
            />
            <InteractiveLetter
              char=";"
              index={0}
              delay={6.0}
              className="text-white/70"
            />
          </motion.div>

          <motion.div 
            className="font-mono text-sm text-white/80 mt-2 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {typeText.split("").map((char, index) => (
              <InteractiveLetter
                key={`type-${index}`}
                char={char}
                index={index}
                delay={6.2 + index * 0.2}
                className="text-white/90"
              />
            ))}
            <InteractiveLetter
              char=":"
              index={0}
              delay={7.0}
              className="text-white/70 mx-1"
            />
            <InteractiveLetter
              char='"'
              index={0}
              delay={7.2}
              className="text-white/90"
            />
            {roleText.split("").map((char, index) => (
              <InteractiveLetter
                key={`role-${index}`}
                char={char}
                index={index}
                delay={7.4 + index * 0.15}
                className={char === " " ? "mx-1" : "text-white"}
              />
            ))}
            <InteractiveLetter
              char='"'
              index={0}
              delay={8.8}
              className="text-white/90"
            />
            <InteractiveLetter
              char=";"
              index={0}
              delay={9.0}
              className="text-white/70"
            />
          </motion.div>

          {/* Image property */}
          <motion.div 
            className="font-mono text-sm text-white/80 mt-2 ml-4 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              {imageText.split("").map((char, index) => (
                <InteractiveLetter
                  key={`image-${index}`}
                  char={char}
                  index={index}
                  delay={9.2 + index * 0.2}
                  className="text-white/90"
                />
              ))}
              <InteractiveLetter
                char=":"
                index={0}
                delay={10.0}
                className="text-white/70 mx-1"
              />
            </div>
            <motion.div
              className="relative h-24 w-24 overflow-hidden rounded-full ml-1 cursor-pointer group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 10.4 }}
              onClick={() => setIsImageModalOpen(true)}
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/90 via-primary/60 to-primary/90 animate-gradient-x" />
              
              {/* Inner border with gradient */}
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-black/90 to-black/70" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image container with hover effect */}
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image
                  src={`/my-photo/${developer.image}`}
                  alt={developer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            <InteractiveLetter
              char=";"
              index={0}
              delay={12.0}
              className="text-white/70 ml-1"
            />
          </motion.div>

          <motion.div 
            className="font-mono text-2xl font-bold text-white mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {"}"}
          </motion.div>
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-square rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/40 via-white/20 to-white/40 blur-md opacity-70" />
              
              {/* Inner border with gradient */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-black/90 to-black/70" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              
              {/* Image container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src={`/my-photo/${developer.image}`}
                  alt={developer.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-all duration-300 hover:scale-110"
                onClick={() => setIsImageModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spline 3D model container */}
      <SplineModel />

      {/* Content positioned above the 3D model */}
      <div className="text-center z-10 max-w-4xl relative">
        <div className="space-y-4">
          <FadeInSection delay={0.3}>
            <TypewriterText
              text="<Software&nbsp;Engineer/>"
              className="hero-title font-bold"
              delay={0.5}
            />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

