"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Calendar, History, Home, Layers, Search, Settings, Sparkles, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      title: "Transform",
      icon: Sparkles,
      href: "/transform",
      active: pathname === "/transform",
    },
    {
      title: "Templates",
      icon: Layers,
      href: "/templates",
      active: pathname === "/templates",
    },
    {
      title: "History",
      icon: History,
      href: "/history",
      active: pathname === "/history",
    },
    {
      title: "Schedule",
      icon: Calendar,
      href: "/schedule",
      active: pathname === "/schedule",
    },
    {
      title: "Analytics",
      icon: BarChart2,
      href: "/analytics",
      active: pathname === "/analytics",
    },
    {
      title: "Audience",
      icon: Users,
      href: "/audience",
      active: pathname === "/audience",
    },
    {
      title: "Performance",
      icon: Zap,
      href: "/performance",
      active: pathname === "/performance",
    },
    {
      title: "SEO",
      icon: Search,
      href: "/seo",
      active: pathname === "/seo",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className="w-[220px] h-screen bg-[#121121] border-r border-[#2a2a3c] flex flex-col">
      <div className="flex flex-col h-full">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors",
              route.active && "text-white bg-white/10 relative",
            )}
          >
            {route.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r"></div>}
            <route.icon className="h-5 w-5" />
            <span>{route.title}</span>
            {route.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500"></div>}
          </Link>
        ))}
      </div>

      <div className="mt-auto border-t border-[#2a2a3c] p-4">
        <div className="text-xs font-medium text-white/50 mb-2">Usage</div>
        <div className="text-sm font-medium text-white mb-2">Transforms</div>
        <div className="flex items-center justify-between text-xs text-white/70 mb-2">
          <span>12/50</span>
        </div>
        <div className="w-full h-1.5 bg-[#2a2a3c] rounded-full mb-4">
          <div className="h-full w-[24%] bg-purple-500 rounded-full"></div>
        </div>
        <Button className="w-full bg-[#2a2a3c] hover:bg-[#3a3a4c] text-white gap-2">
          <Sparkles className="h-4 w-4" />
          Upgrade Plan
        </Button>
      </div>
    </div>
  )
}
