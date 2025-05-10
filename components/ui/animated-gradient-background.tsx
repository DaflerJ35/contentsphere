"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const gradientPoints = [
      { x: canvas.width * 0.1, y: canvas.height * 0.1, radius: canvas.width * 0.5, color: "rgba(111, 66, 193, 0.15)" }, // Purple
      { x: canvas.width * 0.8, y: canvas.height * 0.2, radius: canvas.width * 0.4, color: "rgba(79, 70, 229, 0.15)" }, // Indigo
      { x: canvas.width * 0.2, y: canvas.height * 0.8, radius: canvas.width * 0.4, color: "rgba(147, 51, 234, 0.15)" }, // Purple
      { x: canvas.width * 0.7, y: canvas.height * 0.9, radius: canvas.width * 0.5, color: "rgba(67, 56, 202, 0.15)" }, // Indigo
    ]

    // Animation variables
    let animationFrameId: number
    const speeds = gradientPoints.map(() => ({
      x: Math.random() * 0.2 - 0.1,
      y: Math.random() * 0.2 - 0.1,
    }))

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions
      gradientPoints.forEach((point, index) => {
        point.x += speeds[index].x
        point.y += speeds[index].y

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) speeds[index].x *= -1
        if (point.y < 0 || point.y > canvas.height) speeds[index].y *= -1

        // Draw gradient
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)
        gradient.addColorStop(0, point.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-gray-950 via-gray-950 to-gray-900"
    />
  )
}
