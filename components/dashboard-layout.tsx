"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { PremiumBackground } from "@/components/premium-background"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#0a0414] text-white overflow-hidden">
      <AppSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader onMenuButtonClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-6 relative">
          <PremiumBackground />
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </div>
  )
}
