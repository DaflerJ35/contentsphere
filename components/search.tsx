"use client"

import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="relative w-full max-w-[200px]">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-md border-none bg-gray-800/50 pl-8 text-sm text-gray-300 placeholder:text-gray-500 focus:ring-purple-500"
      />
    </div>
  )
}
