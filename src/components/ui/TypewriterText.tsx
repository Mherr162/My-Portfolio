"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  // Function to create interactive letter component
  const InteractiveLetter = ({ char, index }: { char: string; index: number }) => {
    const letterRef = useRef<HTMLSpanElement>(null)
    const springConfig = { damping: 15, stiffness: 150 }
    
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const distance = useTransform(
      [mouseX, mouseY],
      (latest) => {
        if (!letterRef.current) return 0
        const rect = letterRef.current.getBoundingClientRect()
        const letterX = rect.left + rect.width / 2
        const letterY = rect.top + rect.height / 2
        const [mx, my] = latest as [number, number]
        return Math.sqrt(Math.pow(mx - letterX, 2) + Math.pow(my - letterY, 2))
      }
    )

    const scale = useTransform(distance, [0, 100], [1.2, 1])
    const rotate = useTransform(distance, [0, 100], [0, 360])
    
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)
    const springScale = useSpring(scale, springConfig)
    const springRotate = useSpring(rotate, springConfig)

    return (
      <motion.span
        ref={letterRef}
        className="inline-block"
        style={{
          x: springX,
          y: springY,
          scale: springScale,
          rotate: springRotate,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.3,
          delay: index * 0.05,
          ease: "easeOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        {char}
      </motion.span>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {displayText.split("").map((char, index) => (
        <InteractiveLetter key={index} char={char} index={index} />
      ))}
    </motion.div>
  )
} 