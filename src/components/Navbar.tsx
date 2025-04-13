"use client"

import Link from "next/link";
import { ThemeToggle } from "./ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "volunteering", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || "hero";
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1920px] mx-auto relative px-3 py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-8 top-1/3 -translate-y-1/2 z-10"
        >
          <Link href="#hero" className="group relative block">
            <div className="relative overflow-hidden rounded-lg p-1 -m-1">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="font-bold text-xl tracking-tight flex items-center gap-1">
                  <motion.span 
                    className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent relative"
                    animate={{
                      backgroundPosition: isHovered ? ["0% 0%", "100% 0%"] : "0% 0%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    MH
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-white/90 via-white/80 to-white/70 bg-clip-text text-transparent relative"
                    animate={{
                      backgroundPosition: isHovered ? ["0% 0%", "100% 0%"] : "0% 0%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                      delay: 0.1,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    Portfolio
                  </motion.span>
                </span>
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-1 right-1 h-[1px] bg-gradient-to-r from-primary/50 via-white/30 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center gap-2 px-3 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg"
          >
            <div className="flex items-center gap-2">
              {[
                { href: "#hero", label: "HOME" },
                { href: "#about", label: "ABOUT" },
                { href: "#projects", label: "MY WORKS" },
                { href: "#volunteering", label: "VOLUNTEERING" }
              ].map((item) => (
                <div key={item.href} className="relative group">
                  <div 
                    className={`absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 
                      ${activeSection === item.href.slice(1) ? "bg-white shadow-[0_0_8px_3px_rgba(255,255,255,0.3)]" : "bg-transparent"}`} 
                  />
                  <Link 
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                      ${activeSection === item.href.slice(1) 
                        ? "text-white bg-white/10" 
                        : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              <div className="relative group">
                <button 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-full"
                >
                  RESOURCES
                </button>
                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-4 bg-black/20 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg min-w-[140px]"
                    >
                      <div className="flex flex-col gap-1">
                        {[
                          { href: "https://www.linkedin.com/in/michel-herrera-760aa1288", label: "LinkedIn" },
                          { href: "https://github.com/mherr162", label: "GitHub" },
                          { href: "/resume", label: "Resume" }
                        ].map((item) => (
                          <Link 
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-5 w-[1px] bg-white/10 mx-2" />

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Link 
                  href="#contact"
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                    ${activeSection === "contact" 
                      ? "text-white bg-white/20" 
                      : "text-white/90 bg-white/10 hover:bg-white/15"}`}
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </motion.nav>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-8 top-1/3 -translate-y-1/2 flex items-center gap-4 z-10">
          {/* Resume Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-4 w-4" />
            <span>Resume</span>
          </motion.a>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
