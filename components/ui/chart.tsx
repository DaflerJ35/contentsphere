"use client"

import type React from "react"

import { Bar, Line, Pie } from "recharts"
import {
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const colors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-6)",
  "var(--chart-7)",
  "var(--chart-8)",
  "var(--chart-9)",
  "var(--chart-10)",
]

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[]
}

export function BarChart({ data, className, ...props }: ChartProps) {
  return (
    <div className={className} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-purple-800/20 bg-gray-900 p-2 shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-[var(--chart-1)]" />
                        <span className="text-xs font-medium text-white">{payload[0].name}</span>
                      </div>
                      <div className="text-right text-xs font-medium text-white">{payload[0].value}</div>
                    </div>
                  </div>
                )
              }

              return null
            }}
          />
          <Bar dataKey="value" fill="url(#colorValue)" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function LineChart({ data, className, ...props }: ChartProps) {
  return (
    <div className={className} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-purple-800/20 bg-gray-900 p-2 shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-[var(--chart-1)]" />
                        <span className="text-xs font-medium text-white">{payload[0].name}</span>
                      </div>
                      <div className="text-right text-xs font-medium text-white">{payload[0].value}</div>
                    </div>
                  </div>
                )
              }

              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--chart-1)"
            strokeWidth={2}
            activeDot={{ r: 6, style: { fill: "var(--chart-1)", opacity: 0.8 } }}
          />
          <Line
            type="monotone"
            dataKey="engagement"
            stroke="var(--chart-1)"
            strokeWidth={2}
            activeDot={{ r: 6, style: { fill: "var(--chart-1)", opacity: 0.8 } }}
          />
          <Line
            type="monotone"
            dataKey="reach"
            stroke="var(--chart-2)"
            strokeWidth={2}
            activeDot={{ r: 6, style: { fill: "var(--chart-2)", opacity: 0.8 } }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PieChart({ data, className, ...props }: ChartProps) {
  return (
    <div className={className} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            paddingAngle={2}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-purple-800/20 bg-gray-900 p-2 shadow-md">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: payload[0].payload.fill }} />
                        <span className="text-xs font-medium text-white">{payload[0].name}</span>
                      </div>
                      <div className="text-right text-xs font-medium text-white">{payload[0].value}</div>
                    </div>
                  </div>
                )
              }

              return null
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}
