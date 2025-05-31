"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  depth?: number
  glowColor?: string
  hoverScale?: number
}

export function FloatingCard({
  children,
  className,
  depth = 20,
  glowColor = "rgba(139, 92, 246, 0.4)",
  hoverScale = 1.02,
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics
  const springConfig = { damping: 20, stiffness: 300 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Transform mouse position to rotation values
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10])

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Normalize mouse position between -0.5 and 0.5
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative rounded-xl overflow-hidden", isHovered ? "z-10" : "z-0", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        perspective: "1200px",
      }}
      animate={{
        scale: isHovered ? hoverScale : 1,
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Card content with 3D rotation */}
      <motion.div
        className="relative bg-card rounded-xl border shadow-lg w-full h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 20px 40px -20px rgba(0, 0, 0, 0.3), 0 ${depth}px ${depth * 1.5}px -${depth}px rgba(0, 0, 0, 0.2)`
            : `0 10px 30px -15px rgba(0, 0, 0, 0.2)`,
        }}
        transition={{
          type: "spring",
          damping: 20,
        }}
      >
        {children}

        {/* Floating effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: isHovered ? 0.7 : 0,
          }}
          transition={{
            opacity: { duration: 0.3 },
          }}
        />
      </motion.div>

      {/* Card reflection/shadow */}
      <motion.div
        className="absolute -inset-px rounded-xl opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`,
          filter: "blur(2px)",
          transform: "translateY(2px) scale(0.99)",
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
      />
    </motion.div>
  )
}
