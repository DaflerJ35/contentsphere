"use client"

import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function PlatformFilter() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["all"])

  const platforms = [
    { id: "all", name: "All Platforms" },
    { id: "twitter", name: "Twitter" },
    { id: "linkedin", name: "LinkedIn" },
    { id: "instagram", name: "Instagram" },
    { id: "facebook", name: "Facebook" },
    { id: "tiktok", name: "TikTok" },
    { id: "youtube", name: "YouTube" },
  ]

  const togglePlatform = (platformId: string) => {
    if (platformId === "all") {
      setSelectedPlatforms(["all"])
      return
    }

    const newSelection = selectedPlatforms.includes(platformId)
      ? selectedPlatforms.filter((id) => id !== platformId)
      : [...selectedPlatforms.filter((id) => id !== "all"), platformId]

    if (newSelection.length === 0) {
      setSelectedPlatforms(["all"])
    } else {
      setSelectedPlatforms(newSelection)
    }
  }

  const displayText = selectedPlatforms.includes("all")
    ? "All Platforms"
    : selectedPlatforms.length > 1
      ? `${selectedPlatforms.length} Platforms`
      : platforms.find((p) => p.id === selectedPlatforms[0])?.name

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <Filter className="mr-2 h-4 w-4" />
          {displayText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-purple-800/30 bg-gray-900">
        <DropdownMenuLabel>Filter by Platform</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-800" />
        {platforms.map((platform) => (
          <DropdownMenuCheckboxItem
            key={platform.id}
            checked={selectedPlatforms.includes(platform.id)}
            onCheckedChange={() => togglePlatform(platform.id)}
            className="focus:bg-gray-800"
          >
            {platform.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
