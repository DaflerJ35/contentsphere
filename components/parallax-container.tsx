"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  speed?: number
  rotationFactor?: number
}

export function ParallaxContainer({ children, className, speed = 0.1, rotationFactor = 2 }: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Apply smooth spring physics to the mouse movement
  const springConfig = { damping: 15, stiffness: 150 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(smoothMouseY, (y) => -y * rotationFactor)
  const rotateY = useTransform(smoothMouseX, (x) => x * rotationFactor)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()

    // Normalize mouse coordinates to be between -0.5 and 0.5
    const normalizedX = ((e.clientX - left) / width - 0.5) * speed
    const normalizedY = ((e.clientY - top) / height - 0.5) * speed

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)

    setCursorPosition({ x: e.clientX - left, y: e.clientY - top })
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn("overflow-hidden relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>

      {/* Optional spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(139, 92, 246, 0.06), transparent 40%)`,
        }}
      />
    </motion.div>
  )
}
