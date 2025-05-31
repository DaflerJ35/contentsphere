"use client"

import type React from "react"

import { useRef } from "react"
import { useTheme } from "next-themes"

export function BackgroundScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80" />

      {/* Animated particles using CSS */}
      <div className="particles-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={
              {
                "--size": `${Math.random() * 6 + 1}px`,
                "--x": `${Math.random() * 100}%`,
                "--y": `${Math.random() * 100}%`,
                "--duration": `${Math.random() * 20 + 10}s`,
                "--delay": `${Math.random() * 5}s`,
                "--opacity": `${Math.random() * 0.5 + 0.1}`,
                "--color":
                  theme === "dark" ? "rgba(139, 92, 246, VAR(--opacity))" : "rgba(109, 40, 217, VAR(--opacity))",
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        style={{ animation: "float 20s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
        style={{ animation: "float 25s ease-in-out infinite reverse" }}
      />

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
