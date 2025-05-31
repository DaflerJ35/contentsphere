"use client"

import { Bell, Menu, Search, Settings } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface AppHeaderProps {
  onMenuButtonClick: () => void
}

export function AppHeader({ onMenuButtonClick }: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-purple-900/20 bg-[#0f0a19] px-6">
      <div className="flex items-center md:hidden">
        <button
          onClick={onMenuButtonClick}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-900/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-md border border-purple-900/20 bg-[#0a0414] py-1.5 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        <button className="rounded-full bg-[#0a0414] p-2 text-gray-400 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>
        <button className="rounded-full bg-[#0a0414] p-2 text-gray-400 hover:text-white">
          <Settings className="h-5 w-5" />
        </button>
        <ThemeToggle />
        <div className="relative">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-medium text-white">
            JS
          </button>
        </div>
      </div>
    </header>
  )
}
