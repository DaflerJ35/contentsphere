"use client"

import { FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function SeoContentFilter() {
  const [contentType, setContentType] = useState("All Content")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <FileText className="mr-2 h-4 w-4" />
          {contentType}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-purple-800/30 bg-gray-900">
        <DropdownMenuItem onClick={() => setContentType("All Content")}>All Content</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setContentType("Blog Posts")}>Blog Posts</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setContentType("Landing Pages")}>Landing Pages</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setContentType("Product Pages")}>Product Pages</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setContentType("Articles")}>Articles</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
