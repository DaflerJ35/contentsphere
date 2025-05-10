"use client"

import { Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function DateRangePicker() {
  const [dateRange, setDateRange] = useState("Last 7 days")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <Calendar className="mr-2 h-4 w-4" />
          {dateRange}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-purple-800/30 bg-gray-900">
        <DropdownMenuItem onClick={() => setDateRange("Today")}>Today</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDateRange("Yesterday")}>Yesterday</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDateRange("Last 7 days")}>Last 7 days</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDateRange("Last 30 days")}>Last 30 days</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDateRange("This month")}>This month</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDateRange("Last month")}>Last month</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDateRange("Custom range")}>Custom range</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
