"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Twitter, Instagram, Linkedin, Facebook, Youtube, TwitterIcon as TikTok } from "lucide-react"

export function EnhancedBackground() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Social media icons with their brand colors
  const socialIcons = [
    { Icon: Twitter, color: "#1DA1F2", size: 24 },
    { Icon: Instagram, color: "#C13584", size: 28 },
    { Icon: Linkedin, color: "#0077B5", size: 26 },
    { Icon: Facebook, color: "#4267B2", size: 25 },
    { Icon: Youtube, color: "#FF0000", size: 30 },
    { Icon: TikTok, color: "#000000", size: 27 },
  ]

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/5" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        style={{ animation: "float 20s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
        style={{ animation: "float 25s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
        style={{ animation: "float 30s ease-in-out infinite" }}
      />

      {/* Floating social media icons */}
      {socialIcons.map((social, index) => {
        const { Icon, color, size } = social
        const delay = index * 0.7
        const duration = 15 + Math.random() * 20
        const x = 10 + Math.random() * 80 // Random position between 10% and 90% of screen width
        const y = 10 + Math.random() * 80 // Random position between 10% and 90% of screen height

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              opacity: isDark ? 0.15 : 0.1,
            }}
            animate={{
              x: [0, 20, -20, 10, -10, 0],
              y: [0, -15, 10, -20, 5, 0],
              rotate: [0, 5, -5, 3, -3, 0],
              scale: [1, 1.05, 0.95, 1.02, 0.98, 1],
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              delay,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                style={{ backgroundColor: color, opacity: 0.3 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <Icon size={size} style={{ color }} />
            </div>
          </motion.div>
        )
      })}

      {/* Particle effect */}
      <div className="particles-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={
              {
                "--size": `${Math.random() * 4 + 1}px`,
                "--x": `${Math.random() * 100}%`,
                "--y": `${Math.random() * 100}%`,
                "--duration": `${Math.random() * 20 + 10}s`,
                "--delay": `${Math.random() * 5}s`,
                "--opacity": `${Math.random() * 0.3 + 0.1}`,
                "--color": isDark ? "rgba(139, 92, 246, VAR(--opacity))" : "rgba(109, 40, 217, VAR(--opacity))",
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5%, 5%) rotate(5deg); }
          50% { transform: translate(0%, 10%) rotate(0deg); }
          75% { transform: translate(-5%, 5%) rotate(-5deg); }
        }
        
        .particles-container {
          position: absolute;
          inset: 0;
        }
        
        .particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background-color: var(--color);
          border-radius: 50%;
          left: var(--x);
          top: var(--y);
          opacity: var(--opacity);
          animation: particle-float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(50px, -30px); }
          50% { transform: translate(100px, 0); }
          75% { transform: translate(50px, 30px); }
        }
      `}</style>
    </div>
  )
}
