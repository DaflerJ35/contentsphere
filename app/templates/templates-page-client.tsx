"use client"

import { useState, useEffect } from "react"
import DashboardShell from "@/components/dashboard-shell"
import { TemplatesGrid } from "@/components/templates-grid"
import { TemplateCategories } from "@/components/template-categories"
import { TemplateDetailModal } from "@/components/template-detail-modal"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { templates } from "@/components/templates-grid"
import { useAuth } from "@/components/auth/auth-context"
import { getUserFavorites, toggleFavorite, seedTemplates } from "@/lib/template-service"
import { useToast } from "@/components/ui/use-toast"

export default function TemplatesPageClient() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [selectedTemplateId, setSelectedTemplateId] = useState<number | undefined>(undefined)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [activePlatform, setActivePlatform] = useState("All Platforms")
  const [isFiltering, setIsFiltering] = useState(false)
  const [filteredCount, setFilteredCount] = useState(templates.length)
  const [userFavorites, setUserFavorites] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()
  const { toast } = useToast()

  // Seed templates on first load (this would normally be done in a migration)
  useEffect(() => {
    async function initializeTemplates() {
      try {
        await seedTemplates()
      } catch (error) {
        console.error("Error seeding templates:", error)
      }
    }

    initializeTemplates()
  }, [])

  // Load user favorites
  useEffect(() => {
    async function loadFavorites() {
      if (!user) {
        setUserFavorites([])
        setIsLoading(false)
        return
      }

      try {
        const favorites = await getUserFavorites(user.id)
        setUserFavorites(favorites.map((fav) => fav.template_id))
      } catch (error) {
        console.error("Error loading favorites:", error)
        toast({
          title: "Error",
          description: "Failed to load your favorite templates.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadFavorites()
  }, [user, toast])

  const openTemplateDetail = (id: number) => {
    setSelectedTemplateId(id)
    setIsDetailModalOpen(true)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setIsFiltering(category !== "all" || searchQuery !== "" || activePlatform !== "All Platforms")
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setIsFiltering(query !== "" || activeCategory !== "all" || activePlatform !== "All Platforms")
  }

  const handlePlatformChange = (platform: string) => {
    setActivePlatform(platform)
    setIsFiltering(platform !== "All Platforms" || activeCategory !== "all" || searchQuery !== "")
  }

  const handleToggleFavorite = async (templateId: number) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to save templates as favorites.",
        variant: "destructive",
      })
      return
    }

    try {
      await toggleFavorite(user.id, templateId)

      // Update local state
      setUserFavorites((prev) =>
        prev.includes(templateId) ? prev.filter((id) => id !== templateId) : [...prev, templateId],
      )

      toast({
        title: userFavorites.includes(templateId) ? "Removed from favorites" : "Added to favorites",
        description: userFavorites.includes(templateId)
          ? "Template removed from your favorites."
          : "Template added to your favorites.",
      })
    } catch (error) {
      console.error("Error toggling favorite:", error)
      toast({
        title: "Error",
        description: "Failed to update favorite status.",
        variant: "destructive",
      })
    }
  }

  // Calculate filtered count
  useEffect(() => {
    const count = templates.filter((template) => {
      // Filter by category
      const categoryMatch = activeCategory === "all" || template.category.toLowerCase() === activeCategory.toLowerCase()

      // Filter by search query
      const searchMatch =
        searchQuery === "" ||
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.category.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by platform
      const platformMatch =
        activePlatform === "All Platforms" ||
        template.platforms.includes(activePlatform) ||
        template.platforms.includes("All Platforms")

      return categoryMatch && searchMatch && platformMatch
    }).length

    setFilteredCount(count)
  }, [activeCategory, searchQuery, activePlatform])

  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Content Templates
          </h1>
          <p className="text-gray-400">
            Start with pre-made templates to speed up your content creation{" "}
            {isFiltering && (
              <span className="text-purple-400">
                • Showing {filteredCount} of {templates.length} templates
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <AnimatePresence>
            {isFiltering && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                    setActivePlatform("All Platforms")
                    setIsFiltering(false)
                  }}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => {
              setActiveCategory("favorites")
              setIsFiltering(true)
            }}
          >
            <Heart
              className={`mr-2 h-4 w-4 ${activeCategory === "favorites" ? "fill-purple-400 text-purple-400" : ""}`}
            />
            My Favorites
          </Button>
          <Button className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/30 hover:from-purple-600 hover:to-indigo-600">
            <Plus className="mr-2 h-4 w-4" />
            Create Template
          </Button>
        </div>
      </div>

      <TemplateCategories
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        onPlatformChange={handlePlatformChange}
      />

      <TemplatesGrid
        activeCategory={activeCategory === "favorites" ? "all" : activeCategory}
        searchQuery={searchQuery}
        activePlatform={activePlatform}
        onTemplateClick={openTemplateDetail}
        userFavorites={userFavorites}
        onToggleFavorite={handleToggleFavorite}
      />

      <TemplateDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        templateId={selectedTemplateId}
        userFavorites={userFavorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </DashboardShell>
  )
}
