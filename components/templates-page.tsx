"use client"

import { useState } from "react"
import { Clock, Filter, Grid, List, Plus, Search, SlidersHorizontal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Template {
  id: string
  title: string
  description: string
  category: string
  platforms: string[]
  isPro?: boolean
  isFavorite?: boolean
  lastUsed?: string
}

export function TemplatesPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const templates: Template[] = [
    {
      id: "1",
      title: "Blog Post to Social Media",
      description: "Transform your blog post into engaging social media content",
      category: "Content Repurposing",
      platforms: ["Twitter", "LinkedIn", "Facebook"],
      lastUsed: "2 days ago",
    },
    {
      id: "2",
      title: "Product Launch Announcement",
      description: "Create a product launch announcement for multiple platforms",
      category: "Marketing",
      platforms: ["Twitter", "LinkedIn", "Instagram"],
      isFavorite: true,
    },
    {
      id: "3",
      title: "Weekly Newsletter",
      description: "Transform your content into a weekly newsletter format",
      category: "Email",
      platforms: ["Email"],
      isPro: true,
    },
    {
      id: "4",
      title: "SEO Blog Post",
      description: "Optimize your content for search engines",
      category: "SEO",
      platforms: ["Blog"],
      isPro: true,
    },
    {
      id: "5",
      title: "Video Script",
      description: "Convert your content into a video script format",
      category: "Video",
      platforms: ["YouTube"],
      lastUsed: "1 week ago",
    },
    {
      id: "6",
      title: "Case Study",
      description: "Transform your data into a compelling case study",
      category: "Marketing",
      platforms: ["Blog", "LinkedIn"],
    },
  ]

  const filteredTemplates = templates.filter((template) => {
    if (activeTab !== "all" && activeTab !== template.category.toLowerCase()) {
      return false
    }

    if (searchQuery) {
      return (
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
          <p className="text-muted-foreground">Create and manage your content transformation templates</p>
        </div>
        <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4" />
          New Template
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Sort
          </Button>
          <div className="flex items-center rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none rounded-l-md ${view === "grid" ? "bg-muted" : ""}`}
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none rounded-r-md ${view === "list" ? "bg-muted" : ""}`}
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="content repurposing">Content Repurposing</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          {view === "grid" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{template.title}</h3>
                          {template.isPro && <Badge className="bg-purple-900 text-xs">PRO</Badge>}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{template.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground">
                        <Star className={`h-4 w-4 ${template.isFavorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
                      </Button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {template.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary" className="bg-muted/50">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between bg-muted/30 p-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      {template.lastUsed && (
                        <>
                          <Clock className="mr-1 h-3 w-3" />
                          <span>Used {template.lastUsed}</span>
                        </>
                      )}
                    </div>
                    <Button size="sm">Use Template</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{template.title}</h3>
                      {template.isPro && <Badge className="bg-purple-900 text-xs">PRO</Badge>}
                      {template.isFavorite && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {template.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary" className="bg-muted/50">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button>Use Template</Button>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
