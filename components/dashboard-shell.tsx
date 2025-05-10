import type React from "react"
import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/dashboard-nav"
import { Search } from "@/components/search"
import { ModeToggle } from "@/components/mode-toggle"
import { Notifications } from "@/components/notifications"
import { UpgradeButton } from "@/components/upgrade-button"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { FloatingActionButton } from "@/components/ui/floating-action-button"

interface DashboardShellProps {
  children: React.ReactNode
}

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedGradientBackground />
      <header className="sticky top-0 z-50 border-b border-purple-900/20 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <div className="flex items-center gap-4">
            <Search />
            <Notifications />
            <ModeToggle />
            <UpgradeButton />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-purple-900/20 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
          <DashboardNav />
        </aside>
        <main className="ml-64 flex-1 p-6">{children}</main>
      </div>
      <FloatingActionButton />
    </div>
  )
}
