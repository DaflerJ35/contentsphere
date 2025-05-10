"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Wand2,
  Clock,
  BarChart3,
  Users,
  TrendingUp,
  Search,
  Settings,
  FileText,
  Layers,
} from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      <Link
        href="/dashboard"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/dashboard" ? "bg-accent" : "transparent",
        )}
      >
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/transform"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/transform" ? "bg-accent" : "transparent",
        )}
      >
        <Wand2 className="mr-2 h-4 w-4" />
        <span>Transform</span>
      </Link>
      <Link
        href="/templates"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/templates" ? "bg-accent" : "transparent",
        )}
      >
        <Layers className="mr-2 h-4 w-4" />
        <span>Templates</span>
      </Link>
      <Link
        href="/history"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/history" ? "bg-accent" : "transparent",
        )}
      >
        <Clock className="mr-2 h-4 w-4" />
        <span>History</span>
      </Link>
      <Link
        href="/schedule"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/schedule" ? "bg-accent" : "transparent",
        )}
      >
        <FileText className="mr-2 h-4 w-4" />
        <span>Schedule</span>
      </Link>
      <Link
        href="/analytics"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/analytics" ? "bg-accent" : "transparent",
        )}
      >
        <BarChart3 className="mr-2 h-4 w-4" />
        <span>Analytics</span>
      </Link>
      <Link
        href="/audience"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/audience" ? "bg-accent" : "transparent",
        )}
      >
        <Users className="mr-2 h-4 w-4" />
        <span>Audience</span>
      </Link>
      <Link
        href="/performance"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/performance" ? "bg-accent" : "transparent",
        )}
      >
        <TrendingUp className="mr-2 h-4 w-4" />
        <span>Performance</span>
      </Link>
      <Link
        href="/seo"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/seo" ? "bg-accent" : "transparent",
        )}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>SEO</span>
      </Link>
      <Link
        href="/settings"
        className={cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          pathname === "/settings" ? "bg-accent" : "transparent",
        )}
      >
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </Link>
    </nav>
  )
}
