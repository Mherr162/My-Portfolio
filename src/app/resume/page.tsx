"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the PDF
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen pt-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/"
            className="text-sm hover:text-white/80 transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <a 
            href="/resume.pdf" 
            download="Michel_Herrera_Resume.pdf"
            className="text-sm hover:text-white/80 transition-colors"
          >
            Download PDF
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-neutral-900 rounded-lg overflow-hidden shadow-xl"
        >
          {isLoading ? (
            <div className="w-full h-[800px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
            </div>
          ) : (
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px]"
              title="Resume"
            />
          )}
        </motion.div>
      </div>
    </main>
  );
} 