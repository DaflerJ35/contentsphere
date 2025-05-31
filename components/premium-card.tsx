"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "tilt" | "glow" | "none"
  glowColor?: string
}

export function PremiumCard({
  children,
  className,
  hoverEffect = "lift",
  glowColor = "rgba(139, 92, 246, 0.15)",
}: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 400 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Transform mouse position to rotation values (for tilt effect)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [2, -2])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2])

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hoverEffect !== "tilt") return

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
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        isHovered ? "z-10" : "z-0",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      animate={{
        y: isHovered && hoverEffect === "lift" ? -8 : 0,
        scale: isHovered && hoverEffect === "lift" ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
    >
      {/* Card content with conditional 3D rotation */}
      <motion.div
        className="relative bg-card rounded-xl border shadow-md w-full h-full"
        style={{
          rotateX: hoverEffect === "tilt" && isHovered ? rotateX : 0,
          rotateY: hoverEffect === "tilt" && isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)`
            : `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
        }}
        transition={{
          type: "spring",
          damping: 25,
        }}
      >
        {children}

        {/* Subtle glow effect on hover */}
        {hoverEffect === "glow" && (
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: isHovered ? 0.6 : 0,
            }}
            transition={{
              opacity: { duration: 0.3 },
            }}
          />
        )}
      </motion.div>

      {/* Subtle border highlight on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${glowColor}`,
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
        }}
      />
    </motion.div>
  )
}
