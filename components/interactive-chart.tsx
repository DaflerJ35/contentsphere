"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DataPoint {
  label: string
  value: number
  color: string
}

interface InteractiveChartProps {
  title: string
  data: DataPoint[]
  className?: string
  height?: number
}

export function InteractiveChart({ title, data, className, height = 300 }: InteractiveChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-full w-full flex-col">
          <div className="relative mt-4" style={{ height }}>
            <div
              className="absolute bottom-0 grid h-full w-full grid-cols-1"
              style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
            >
              {data.map((point, index) => {
                const isHovered = hoveredIndex === index
                const percentage = (point.value / maxValue) * 100

                return (
                  <div
                    key={index}
                    className="relative flex h-full items-end justify-center px-2"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div
                      className="group relative w-full rounded-t-md"
                      style={{ backgroundColor: point.color, minWidth: 20 }}
                      initial={{ height: 0 }}
                      animate={{
                        height: `${percentage}%`,
                        width: isHovered ? "100%" : "80%",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.div
                        className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-background px-2 py-1 shadow-md"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 10,
                          scale: isHovered ? 1 : 0.9,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="text-center text-sm font-semibold">{point.value}</div>
                      </motion.div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1" style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}>
            {data.map((point, index) => (
              <div
                key={index}
                className="text-center text-xs font-medium"
                style={{ color: hoveredIndex === index ? point.color : undefined }}
              >
                {point.label}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
