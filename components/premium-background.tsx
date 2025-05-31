"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function PremiumBackground() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background" />

      {/* Subtle gradient orbs */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-40 dark:opacity-20"
        style={{
          background: `radial-gradient(circle at 15% 20%, ${
            isDark ? "rgba(124, 58, 237, 0.15)" : "rgba(124, 58, 237, 0.07)"
          }, transparent 25%),
                     radial-gradient(circle at 85% 60%, ${
                       isDark ? "rgba(79, 70, 229, 0.15)" : "rgba(79, 70, 229, 0.07)"
                     }, transparent 25%)`,
        }}
      />

      {/* Animated gradient lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-[0.15] dark:opacity-[0.07]">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isDark ? "#4c1d95" : "#8b5cf6"} stopOpacity="0.2" />
              <stop offset="100%" stopColor={isDark ? "#6d28d9" : "#a78bfa"} stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => {
            const y = 10 + ((i * 80) % 100)
            return (
              <motion.path
                key={i}
                d={`M0 ${y} Q${25 + i * 10} ${y + (i % 2 === 0 ? 20 : -20)}, ${50 + i * 5} ${y} T 100% ${y + (i % 2 === 0 ? -10 : 10)}`}
                stroke="url(#grad1)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, delay: i * 0.2, ease: "easeInOut" }}
              />
            )
          })}
        </svg>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), 
                           linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isDark ? "#8b5cf6" : "#6d28d9",
              opacity: 0.3,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  )
}
