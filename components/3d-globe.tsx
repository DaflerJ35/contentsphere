"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThreeDGlobe({ className }: { className?: string }) {
  const { theme } = useTheme()
  const [points, setPoints] = useState<Array<{ x: number; y: number; size: number; pulse: boolean }>>([])

  useEffect(() => {
    // Generate random points on the "globe"
    const newPoints = Array.from({ length: 20 }).map(() => {
      // Generate points that appear to be on a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      // Project 3D coordinates onto 2D
      const radius = 40 + Math.random() * 5
      const x = 50 + radius * Math.sin(phi) * Math.cos(theta)
      const y = 50 + radius * Math.sin(phi) * Math.sin(theta)

      return {
        x,
        y,
        size: Math.random() * 3 + 1,
        pulse: Math.random() > 0.7,
      }
    })

    setPoints(newPoints)
  }, [])

  const primaryColor = theme === "dark" ? "#8b5cf6" : "#6d28d9"
  const secondaryColor = theme === "dark" ? "#c4b5fd" : "#a78bfa"

  return (
    <div className={`${className} relative overflow-hidden`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))" }}
      >
        {/* Grid lines */}
        <g opacity="0.2">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={`circle-${i}`}
              cx="50"
              cy="50"
              r={10 + i * 5}
              fill="none"
              stroke={primaryColor}
              strokeWidth="0.2"
              opacity="0.3"
            />
          ))}

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            return (
              <line
                key={`line-${i}`}
                x1="50"
                y1="50"
                x2={50 + 45 * Math.cos(angle)}
                y2={50 + 45 * Math.sin(angle)}
                stroke={primaryColor}
                strokeWidth="0.2"
                opacity="0.3"
              />
            )
          })}
        </g>

        {/* Points */}
        {points.map((point, i) => (
          <g key={`point-${i}`}>
            <circle cx={point.x} cy={point.y} r={point.size} fill={primaryColor} />

            {point.pulse && (
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={point.size}
                fill="none"
                stroke={secondaryColor}
                strokeWidth="0.5"
                initial={{ r: point.size }}
                animate={{
                  r: [point.size, point.size + 5, point.size],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        ))}

        {/* Outer circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke={primaryColor} strokeWidth="0.5" opacity="0.5" />
      </svg>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
