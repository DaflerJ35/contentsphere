"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  className?: string
  children: React.ReactNode
  depth?: number
}

export function ThreeDCard({ className, children, depth = 8 }: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation values based on mouse position
    const rotateY = ((mouseX - cardCenterX) / (rect.width / 2)) * 5
    const rotateX = -((mouseY - cardCenterY) / (rect.height / 2)) * 5

    setRotateX(rotateX)
    setRotateY(rotateY)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative transition-all duration-200 ease-out", className)}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setScale(1.02)}
      onMouseLeave={() => {
        setRotateX(0)
        setRotateY(0)
        setScale(1)
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
      }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div className="w-full h-full">{children}</div>
      <div
        className="absolute inset-0 -z-10 rounded-lg opacity-50 bg-gradient-to-br from-purple-800/10 to-indigo-800/10"
        style={{
          transform: `translateZ(-${depth}px)`,
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  )
}
