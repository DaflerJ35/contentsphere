"use client"

import { useState } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  MessageSquare,
  Search,
  Filter,
  Plus,
  Star,
} from "lucide-react"
import Image from "next/image"

const platformIcons = {
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  youtube: Youtube,
  tiktok: MessageSquare,
}

const templates = [
  {
    id: 1,
    title: "Instagram Carousel Template",
    description: "Educational carousel with 5-10 slides",
    platform: "instagram",
    category: "educational",
    image: "/instagram-carousel-template.png",
    isFavorite: false,
    isPro: false,
  },
  {
    id: 2,
    title: "Instagram Story Template",
    description: "Engaging story with call-to-action",
    platform: "instagram",
    category: "promotional",
    image: "/instagram-story-template.png",
    isFavorite: true,
    isPro: false,
  },
  {
    id: 3,
    title: "Instagram Reel Template",
    description: "15-second tutorial format",
    platform: "instagram",
    category: "tutorial",
    image: "/instagram-reel-template.png",
    isFavorite: false,
    isPro: true,
  },
  {
    id: 4,
    title: "Twitter Thread Template",
    description: "10-part thread with key insights",
    platform: "twitter",
    category: "educational",
    image: "/twitter-thread.png",
    isFavorite: false,
    isPro: false,
  },
  {
    id: 5,
    title: "LinkedIn Thought Leadership",
    description: "Establish authority in your industry",
    platform: "linkedin",
    category: "thought-leadership",
    image: "/linkedin-thought-leadership.png",
    isFavorite: true,
    isPro: false,
  },
  {
    id: 6,
    title: "Facebook Business Update",
    description: "Company announcement template",
    platform: "facebook",
    category: "business",
    image: "/facebook-business-update.png",
    isFavorite: false,
    isPro: true,
  },
]

const categories = ["All", "Educational", "Promotional", "Tutorial", "Business", "Thought-leadership"]

export function ModernTemplates() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTemplates = templates.filter((template) => {
    const matchesPlatform = activeTab === "all" || template.platform === activeTab
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || template.category.toLowerCase() === selectedCategory.toLowerCase()

    return matchesPlatform && matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Templates Gallery</h1>
          <p className="text-muted-foreground">Browse and use pre-designed templates for different platforms</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600">
          <Plus className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="w-full pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            className="rounded-md border border-input bg-background px-3 py-1 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 sm:grid-cols-7 mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="twitter">Twitter</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="youtube">YouTube</TabsTrigger>
          <TabsTrigger value="tiktok">TikTok</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTemplates.map((template) => {
                const Icon = platformIcons[template.platform as keyof typeof platformIcons]
                return (
                  <Card key={template.id} className="group overflow-hidden">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={template.image || "/placeholder.svg"}
                        alt={template.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute right-2 top-2 text-white opacity-0 transition-opacity group-hover:opacity-100 ${
                          template.isFavorite ? "text-yellow-400" : ""
                        }`}
                      >
                        <Star className={`h-5 w-5 ${template.isFavorite ? "fill-yellow-400" : ""}`} />
                      </Button>
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{template.title}</CardTitle>
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <CardDescription className="mt-1">{template.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-2">
                      <div className="flex w-full items-center justify-between">
                        {template.isPro && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600">PRO</Badge>
                        )}
                        {!template.isPro && <div />}
                        <Button size="sm">Use Template</Button>
                      </div>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">No templates found</h3>
              <p className="text-muted-foreground max-w-md">
                We couldn't find any templates matching your search criteria. Try adjusting your filters or search
                query.
              </p>
            </div>
          )}
        </TabsContent>

        {/* Duplicate the TabsContent for other platforms */}
        {["instagram", "twitter", "linkedin", "facebook", "youtube", "tiktok"].map((platform) => (
          <TabsContent key={platform} value={platform} className="mt-0">
            {/* Same content as the "all" tab, but filtered for the specific platform */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTemplates.map((template) => {
                const Icon = platformIcons[template.platform as keyof typeof platformIcons]
                return (
                  <Card key={template.id} className="group overflow-hidden">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={template.image || "/placeholder.svg"}
                        alt={template.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute right-2 top-2 text-white opacity-0 transition-opacity group-hover:opacity-100 ${
                          template.isFavorite ? "text-yellow-400" : ""
                        }`}
                      >
                        <Star className={`h-5 w-5 ${template.isFavorite ? "fill-yellow-400" : ""}`} />
                      </Button>
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{template.title}</CardTitle>
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <CardDescription className="mt-1">{template.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-2">
                      <div className="flex w-full items-center justify-between">
                        {template.isPro && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600">PRO</Badge>
                        )}
                        {!template.isPro && <div />}
                        <Button size="sm">Use Template</Button>
                      </div>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
