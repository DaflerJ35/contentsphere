"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "gradient" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  gradientFrom?: string
  gradientTo?: string
}

export function InteractiveButton({
  children,
  className,
  variant = "default",
  size = "default",
  gradientFrom = "from-purple-600",
  gradientTo = "to-indigo-600",
  ...props
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "gradient":
        return `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white shadow-lg shadow-purple-900/30`
      case "outline":
        return "border border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
      default:
        return "bg-gray-800 text-white hover:bg-gray-700"
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-9 rounded-md px-3 text-sm"
      case "lg":
        return "h-11 rounded-md px-8 text-base"
      case "icon":
        return "h-10 w-10 rounded-md p-0"
      default:
        return "h-10 rounded-md px-4 py-2 text-sm"
    }
  }

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        getVariantClasses(),
        getSizeClasses(),
        className,
      )}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onTapCancel={() => setIsPressed(false)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === "gradient" && (
        <motion.div
          className="absolute inset-0 rounded-md opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isPressed ? 0.97 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{
            background: `linear-gradient(to right, var(--${gradientFrom.split("-")[1]}-500), var(--${gradientTo.split("-")[1]}-500))`,
          }}
        />
      )}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-md bg-white/10 opacity-0"
          animate={{ opacity: isPressed ? 0.2 : 0.1 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.button>
  )
}
