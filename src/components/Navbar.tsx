"use client"

import Link from "next/link";
import { ThemeToggle } from "./ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1250) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const navigationItems = [
    { href: "#hero", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#projects", label: "MY WORKS" },
    { href: "#volunteering", label: "VOLUNTEERING" }
  ];

  const resourceItems = [
    { href: "https://www.linkedin.com/in/michel-herrera-760aa1288", label: "LinkedIn" },
    { href: "https://github.com/mherr162", label: "GitHub" },
    { href: "/resume", label: "Resume" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile Header Bar (< 800px) */}
      <div className="md:hidden bg-black/20 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Logo */}
          <Link href="#hero" className="flex items-center gap-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              MH
            </span>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-white/90 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto relative px-3 py-3 md:block hidden">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-4 sm:left-8 top-1/3 -translate-y-1/2 z-10"
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
                    className="hidden sm:inline bg-gradient-to-r from-white/90 via-white/80 to-white/70 bg-clip-text text-transparent relative"
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

        {/* Desktop Navigation (1250px+) */}
        <div className="hidden xl:flex justify-center">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center gap-2 px-3 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg"
          >
            <div className="flex items-center gap-2">
              {navigationItems.map((item) => (
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
                        {resourceItems.map((item) => (
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

        {/* Tablet Navigation (800px - 1250px) */}
        <div className="hidden md:flex xl:hidden justify-center">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center gap-2 px-3 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg"
          >
            <div className="flex items-center gap-2">
              {navigationItems.slice(0, 3).map((item) => (
                <div key={item.href} className="relative group">
                  <div 
                    className={`absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 
                      ${activeSection === item.href.slice(1) ? "bg-white shadow-[0_0_8px_3px_rgba(255,255,255,0.3)]" : "bg-transparent"}`} 
                  />
                  <Link 
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full
                      ${activeSection === item.href.slice(1) 
                        ? "text-white bg-white/10" 
                        : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              <div className="h-5 w-[1px] bg-white/10 mx-2" />

              <div className="flex items-center gap-2">
                <Link 
                  href="#contact"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full
                    ${activeSection === "contact" 
                      ? "text-white bg-white/20" 
                      : "text-white/90 bg-white/10 hover:bg-white/15"}`}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </motion.nav>
        </div>

        {/* Desktop Right Side Actions */}
        <div className="hidden xl:flex absolute right-8 top-1/3 -translate-y-1/2 items-center gap-4 z-10">
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-x-0 top-[57px] bg-black/95 backdrop-blur-xl border-t border-white/5 z-40 max-h-[calc(100vh-57px)] overflow-y-auto pb-safe"
          >
            <nav className="divide-y divide-white/5">
              {/* Main Navigation */}
              <div className="py-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 transition-all duration-300
                      ${activeSection === item.href.slice(1)
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <ChevronRight className="h-5 w-5 opacity-50" />
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="py-2">
                <div className="px-4 py-2 text-sm font-medium text-white/50 uppercase">
                  Resources
                </div>
                {resourceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <ChevronRight className="h-5 w-5 opacity-50" />
                  </Link>
                ))}
              </div>

              {/* Contact & Resume */}
              <div className="p-4 space-y-3">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 text-base font-medium text-white bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300"
                >
                  GET IN TOUCH
                </Link>

                <motion.a
                  href="/resume.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground rounded-lg text-base font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
