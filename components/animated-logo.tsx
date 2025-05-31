"use client"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function AnimatedLogo({ className }: { className?: string }) {
  const { theme } = useTheme()

  const primaryColor = theme === "dark" ? "#8b5cf6" : "#6d28d9"
  const secondaryColor = theme === "dark" ? "#c4b5fd" : "#a78bfa"

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <div className="relative w-full h-full">
        {/* Animated circles */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-dashed"
          style={{ borderColor: primaryColor }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute inset-2 rounded-full border-2"
          style={{ borderColor: secondaryColor }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute inset-4 rounded-full"
          style={{ background: `radial-gradient(circle, ${primaryColor}20, transparent 70%)` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Sparkles */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 36 * Math.PI) / 180
          const distance = 40 + Math.random() * 10
          const x = 50 + distance * Math.cos(angle)
          const y = 50 + distance * Math.sin(angle)

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                backgroundColor: secondaryColor,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-1/2 h-1/2 rounded-full"
            style={{ background: `radial-gradient(circle, ${primaryColor}, ${primaryColor}50)` }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  )
}
