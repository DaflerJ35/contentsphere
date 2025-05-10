"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function AnimatedCard({
  children,
  className,
  glowColor = "rgba(124, 58, 237, 0.5)",
  ...props
}: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = width / 2
    const centerY = height / 2
    const rotateX = ((mouseY - centerY) / centerY) * -5
    const rotateY = ((mouseX - centerX) / centerX) * 5

    setRotateX(rotateX)
    setRotateY(rotateY)
    setMouseX(mouseX / width)
    setMouseY(mouseY / height)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-purple-800/20 bg-gray-900/50 p-6 shadow-xl shadow-purple-900/5 backdrop-blur-sm transition-all duration-200",
        className,
      )}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${mouseX * 100}% ${
            mouseY * 100
          }%, ${glowColor}, transparent 40%)`,
        }}
      />
    </motion.div>
  )
}
