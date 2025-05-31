"use client"

import { BarChart2, Clock, Home, LayoutGrid, Settings, Users, Zap, Activity, Search, Lightbulb } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AppSidebarProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AppSidebar({ open, onOpenChange }: AppSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/transform", label: "Transform", icon: Zap },
    { path: "/templates", label: "Templates", icon: LayoutGrid },
    { path: "/history", label: "History", icon: Clock },
    { path: "/schedule", label: "Schedule", icon: Clock },
    { path: "/analytics", label: "Analytics", icon: BarChart2 },
    { path: "/audience", label: "Audience", icon: Users },
    { path: "/performance", label: "Performance", icon: Activity },
    { path: "/seo", label: "SEO", icon: Search },
    { path: "/engagement-tips", label: "Engagement Tips", icon: Lightbulb },
    { path: "/settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside
      className={`flex h-screen w-[220px] flex-col bg-[#0f0a19] border-r border-purple-900/20 ${
        open !== undefined ? (open ? "translate-x-0" : "-translate-x-full") : ""
      } md:translate-x-0 transition-transform duration-200 ease-in-out fixed md:relative z-40`}
    >
      <div className="flex flex-col flex-1 overflow-y-auto py-4">
        <div className="px-4 py-2 mb-4">
          <h1 className="text-xl font-bold text-white">ContentSphere</h1>
        </div>
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => {
            const active = isActive(item.path)
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  active ? "bg-purple-900/20 text-white" : "text-gray-400 hover:bg-purple-900/10 hover:text-white"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "text-purple-400" : ""}`} />
                {item.label}
                {active && <span className="ml-auto h-2 w-2 rounded-full bg-purple-400"></span>}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t border-purple-900/20 p-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">Usage</span>
            <span className="text-xs font-medium text-gray-400">12/50</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-[24%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
              <circle cx="17" cy="7" r="5" />
            </svg>
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  )
}
