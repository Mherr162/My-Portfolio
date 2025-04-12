"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

interface VideoBreakEffectProps {
  isActive: boolean
  className?: string
}

interface Piece {
  id: number
  x: number
  y: number
  width: number
  height: number
  delay: number
}

export function VideoBreakEffect({ isActive, className = "" }: VideoBreakEffectProps) {
  const [pieces, setPieces] = useState<Piece[]>([])
  const controls = useAnimation()

  useEffect(() => {
    // Create a grid of pieces
    const newPieces: Piece[] = []
    const rows = 4
    const cols = 4
    const pieceWidth = 100 / cols
    const pieceHeight = 100 / rows

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newPieces.push({
          id: i * cols + j,
          x: j * pieceWidth,
          y: i * pieceHeight,
          width: pieceWidth,
          height: pieceHeight,
          delay: (i * cols + j) * 0.05 // Stagger the animation
        })
      }
    }

    setPieces(newPieces)
  }, [])

  useEffect(() => {
    if (isActive) {
      // Break animation
      controls.start({
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      })
    } else {
      // Reassemble animation
      controls.start({
        transition: {
          duration: 1.5,
          ease: "easeInOut"
        }
      })
    }
  }, [isActive, controls])

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute bg-black/50 backdrop-blur-sm"
          style={{
            width: `${piece.width}%`,
            height: `${piece.height}%`,
            left: `${piece.x}%`,
            top: `${piece.y}%`,
          }}
          animate={{
            x: isActive 
              ? Math.random() * 100 - 50 + piece.x 
              : piece.x,
            y: isActive 
              ? Math.random() * 100 - 50 + piece.y 
              : piece.y,
            rotate: isActive ? Math.random() * 360 : 0,
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.5, 0.8, 0.5] : 0.5
          }}
          transition={{
            duration: 1,
            delay: piece.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
} 