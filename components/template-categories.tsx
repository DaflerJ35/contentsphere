"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Video,
  Star,
  Zap,
  ImageIcon,
  Mail,
  Briefcase,
  Target,
  Sparkles,
  Megaphone,
  Search,
  Filter,
  SlidersHorizontal,
  X,
  ChevronDown,
  GraduationCapIcon as Graduation,
  ShoppingCart,
  Share2,
  HeartHandshake,
  UserPlus,
  Calendar,
  Mic,
  BookOpen,
  Globe,
  MessageCircle,
  BarChart,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { templates } from "./templates-grid"

// Extract unique categories from templates
const getUniqueCategories = () => {
  const categories = templates.map((template) => template.category)
  return ["all", ...Array.from(new Set(categories))]
}

// Extract unique platforms from templates
const getUniquePlatforms = () => {
  const platforms = templates.flatMap((template) => template.platforms)
  return ["All Platforms", ...Array.from(new Set(platforms))]
}

const categories = [
  { id: "all", name: "All Templates", icon: <Star className="h-4 w-4" /> },
  { id: "content-repurposing", name: "Content Repurposing", icon: <FileText className="h-4 w-4" /> },
  { id: "marketing", name: "Marketing", icon: <Zap className="h-4 w-4" /> },
  { id: "creator-content", name: "Creator Content", icon: <Video className="h-4 w-4" /> },
  { id: "business", name: "Business", icon: <Briefcase className="h-4 w-4" /> },
  { id: "email", name: "Email", icon: <Mail className="h-4 w-4" /> },
  { id: "visual-content", name: "Visual Content", icon: <ImageIcon className="h-4 w-4" /> },
  { id: "strategy", name: "Strategy", icon: <Target className="h-4 w-4" /> },
  { id: "ai-content", name: "AI Content", icon: <Sparkles className="h-4 w-4" /> },
  { id: "pr & communications", name: "PR & Communications", icon: <Megaphone className="h-4 w-4" /> },
  // New categories
  { id: "educational-content", name: "Educational Content", icon: <Graduation className="h-4 w-4" /> },
  { id: "product-marketing", name: "Product Marketing", icon: <ShoppingCart className="h-4 w-4" /> },
  { id: "social-media-campaigns", name: "Social Media Campaigns", icon: <Share2 className="h-4 w-4" /> },
  { id: "customer-success", name: "Customer Success", icon: <HeartHandshake className="h-4 w-4" /> },
  { id: "lead-generation", name: "Lead Generation", icon: <UserPlus className="h-4 w-4" /> },
  { id: "event-marketing", name: "Event Marketing", icon: <Calendar className="h-4 w-4" /> },
  { id: "podcast-content", name: "Podcast Content", icon: <Mic className="h-4 w-4" /> },
  { id: "blog-content", name: "Blog Content", icon: <BookOpen className="h-4 w-4" /> },
  { id: "international-marketing", name: "International Marketing", icon: <Globe className="h-4 w-4" /> },
  { id: "community-engagement", name: "Community Engagement", icon: <MessageCircle className="h-4 w-4" /> },
  { id: "analytics-reporting", name: "Analytics & Reporting", icon: <BarChart className="h-4 w-4" /> },
]

interface TemplateCategoriesProps {
  onCategoryChange: (category: string) => void
  onSearchChange: (query: string) => void
  onPlatformChange: (platform: string) => void
}

export function TemplateCategories({ onCategoryChange, onSearchChange, onPlatformChange }: TemplateCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [activePlatform, setActivePlatform] = useState("All Platforms")
  const [showFilters, setShowFilters] = useState(false)

  const platforms = getUniquePlatforms()

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    onSearchChange(e.target.value)
  }

  // Handle platform change
  const handlePlatformChange = (platform: string) => {
    setActivePlatform(platform)
    onPlatformChange(platform)
  }

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory("all")
    setSearchQuery("")
    setActivePlatform("All Platforms")
    onCategoryChange("all")
    onSearchChange("")
    onPlatformChange("All Platforms")
  }

  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="pl-10 border-purple-800/30 bg-gray-900/80 text-gray-300 placeholder:text-gray-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 text-gray-400 hover:text-white"
              onClick={() => {
                setSearchQuery("")
                onSearchChange("")
              }}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant={showFilters ? "default" : "outline"}
            size="sm"
            className={`${
              showFilters
                ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                : "border-purple-800/30 bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {(activeCategory !== "all" || activePlatform !== "All Platforms") && (
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs font-medium text-white">
                {(activeCategory !== "all" ? 1 : 0) + (activePlatform !== "All Platforms" ? 1 : 0)}
              </span>
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-800/30 bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Sort
                <ChevronDown className="ml-2 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-purple-800/30 bg-gray-900/95 text-gray-300 backdrop-blur-lg">
              <DropdownMenuLabel>Sort Templates</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-purple-800/30" />
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">Newest First</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">Most Popular</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">Alphabetical (A-Z)</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-800 focus:text-white">Alphabetical (Z-A)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="scrollbar-hide -mx-2 flex space-x-2 overflow-x-auto pb-2 px-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            className={`flex-shrink-0 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                : "border-purple-800/30 bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategoryIndicator"
                className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-700 to-indigo-700 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Button>
        ))}
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="rounded-lg border border-purple-800/30 bg-gray-900/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-white">Active Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs text-gray-400 hover:text-white"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium text-gray-400">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={activeCategory === category.id ? "default" : "outline"}
                        size="sm"
                        className={`h-7 rounded-full px-3 py-1 text-xs ${
                          activeCategory === category.id
                            ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                            : "border-purple-800/30 bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-medium text-gray-400">Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {platforms.slice(0, 12).map((platform) => (
                      <Button
                        key={platform}
                        variant={activePlatform === platform ? "default" : "outline"}
                        size="sm"
                        className={`h-7 rounded-full px-3 py-1 text-xs ${
                          activePlatform === platform
                            ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                            : "border-purple-800/30 bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={() => handlePlatformChange(platform)}
                      >
                        {platform}
                      </Button>
                    ))}

                    {platforms.length > 12 && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 rounded-full border-purple-800/30 bg-gray-900/80 px-3 py-1 text-xs text-gray-300 hover:bg-gray-800 hover:text-white"
                          >
                            +{platforms.length - 12} more
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-60 overflow-y-auto border-purple-800/30 bg-gray-900/95 text-gray-300 backdrop-blur-lg">
                          {platforms.slice(12).map((platform) => (
                            <DropdownMenuItem
                              key={platform}
                              className="focus:bg-gray-800 focus:text-white"
                              onClick={() => handlePlatformChange(platform)}
                            >
                              {platform}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
