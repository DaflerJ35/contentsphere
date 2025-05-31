"use client"

import { useState } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PremiumBackground } from "@/components/premium-background"
import { Instagram, Twitter, Linkedin, Facebook, Youtube, MessageSquare, Search, Filter } from "lucide-react"
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
  },
  {
    id: 2,
    title: "Instagram Story Template",
    description: "Engaging story with call-to-action",
    platform: "instagram",
    category: "promotional",
    image: "/instagram-story-template.png",
  },
  {
    id: 3,
    title: "Instagram Reel Template",
    description: "15-second tutorial format",
    platform: "instagram",
    category: "tutorial",
    image: "/instagram-reel-template.png",
  },
  {
    id: 4,
    title: "Instagram Quote Post",
    description: "Inspirational quote with branded background",
    platform: "instagram",
    category: "quote",
    image: "/instagram-quote-post.png",
  },
  {
    id: 5,
    title: "Instagram Behind-the-Scenes",
    description: "Template for sharing company culture",
    platform: "instagram",
    category: "behind-the-scenes",
    image: "/instagram-behind-scenes.png",
  },
  {
    id: 6,
    title: "Instagram Product Showcase",
    description: "Highlight product features and benefits",
    platform: "instagram",
    category: "product",
    image: "/instagram-product-showcase.png",
  },
  {
    id: 7,
    title: "Instagram Carousel Educational",
    description: "Step-by-step guide format",
    platform: "instagram",
    category: "educational",
    image: "/instagram-carousel-educational.png",
  },
  {
    id: 8,
    title: "Twitter Thread Template",
    description: "10-part thread with key insights",
    platform: "twitter",
    category: "educational",
    image: "/twitter-thread.png",
  },
  {
    id: 9,
    title: "Twitter News Commentary",
    description: "Template for industry news reactions",
    platform: "twitter",
    category: "news",
    image: "/twitter-news-commentary.png",
  },
  {
    id: 10,
    title: "LinkedIn Thought Leadership",
    description: "Establish authority in your industry",
    platform: "linkedin",
    category: "thought-leadership",
    image: "/linkedin-thought-leadership.png",
  },
  {
    id: 11,
    title: "LinkedIn Company Update",
    description: "Share company news and milestones",
    platform: "linkedin",
    category: "company-news",
    image: "/linkedin-company-update.png",
  },
  {
    id: 12,
    title: "LinkedIn Post Template",
    description: "Professional post with call-to-action",
    platform: "linkedin",
    category: "general",
    image: "/linkedin-post-preview.png",
  },
  {
    id: 13,
    title: "Facebook Business Update",
    description: "Company announcement template",
    platform: "facebook",
    category: "business",
    image: "/facebook-business-update.png",
  },
  {
    id: 14,
    title: "Facebook Product Showcase",
    description: "Highlight product features and benefits",
    platform: "facebook",
    category: "product",
    image: "/facebook-product-showcase.png",
  },
  {
    id: 15,
    title: "Facebook Event Promotion",
    description: "Promote upcoming events effectively",
    platform: "facebook",
    category: "event",
    image: "/facebook-event-promotion.png",
  },
  {
    id: 16,
    title: "Facebook Customer Testimonial",
    description: "Showcase positive customer feedback",
    platform: "facebook",
    category: "testimonial",
    image: "/facebook-customer-testimonial.png",
  },
  {
    id: 17,
    title: "Facebook Poll Template",
    description: "Engage audience with interactive poll",
    platform: "facebook",
    category: "engagement",
    image: "/facebook-poll.png",
  },
  {
    id: 18,
    title: "Facebook Live Announcement",
    description: "Promote upcoming live streams",
    platform: "facebook",
    category: "live",
    image: "/facebook-live-announcement.png",
  },
  {
    id: 19,
    title: "TikTok Trending Template",
    description: "Format for trending challenges",
    platform: "tiktok",
    category: "trending",
    image: "/tiktok-trending-preview.png",
  },
  {
    id: 20,
    title: "Podcast Show Notes",
    description: "Template for podcast episode descriptions",
    platform: "youtube",
    category: "podcast",
    image: "/podcast-show-notes.png",
  },
]

const categories = [
  "All",
  "Educational",
  "Promotional",
  "Tutorial",
  "Quote",
  "Behind-the-scenes",
  "Product",
  "News",
  "Thought-leadership",
  "Company-news",
  "General",
  "Business",
  "Event",
  "Testimonial",
  "Engagement",
  "Live",
  "Trending",
  "Podcast",
]

export function TemplatesGallery() {
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
    <div className="relative">
      <PremiumBackground />
      <div className="relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-purple-400">Templates Gallery</h1>
            <p className="text-gray-400">Browse and use pre-designed templates for different platforms</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search templates..."
                className="w-full bg-purple-900/10 border-purple-900/50 pl-9 text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                className="bg-purple-900/10 border-purple-900/50 rounded-md text-sm text-white"
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
            <TabsList className="bg-purple-900/30 grid grid-cols-3 sm:grid-cols-7 mb-4">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
                All
              </TabsTrigger>
              <TabsTrigger value="instagram" className="data-[state=active]:bg-purple-600">
                Instagram
              </TabsTrigger>
              <TabsTrigger value="twitter" className="data-[state=active]:bg-purple-600">
                Twitter
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="data-[state=active]:bg-purple-600">
                LinkedIn
              </TabsTrigger>
              <TabsTrigger value="facebook" className="data-[state=active]:bg-purple-600">
                Facebook
              </TabsTrigger>
              <TabsTrigger value="youtube" className="data-[state=active]:bg-purple-600">
                YouTube
              </TabsTrigger>
              <TabsTrigger value="tiktok" className="data-[state=active]:bg-purple-600">
                TikTok
              </TabsTrigger>
            </TabsList>

            {["all", "instagram", "twitter", "linkedin", "facebook", "youtube", "tiktok"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                {filteredTemplates.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredTemplates.map((template) => {
                      const Icon = platformIcons[template.platform as keyof typeof platformIcons]
                      return (
                        <Card
                          key={template.id}
                          className="border-purple-900/50 bg-purple-900/10 text-white overflow-hidden"
                        >
                          <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                              src={template.image || "/placeholder.svg"}
                              alt={template.title}
                              fill
                              className="object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">{template.title}</CardTitle>
                              <div
                                className={`rounded-full p-1 bg-${template.platform === "instagram" ? "pink" : template.platform === "twitter" ? "sky" : template.platform === "linkedin" ? "blue" : template.platform === "facebook" ? "indigo" : template.platform === "youtube" ? "red" : "teal"}-600/20`}
                              >
                                <Icon
                                  className={`h-3 w-3 text-${template.platform === "instagram" ? "pink" : template.platform === "twitter" ? "sky" : template.platform === "linkedin" ? "blue" : template.platform === "facebook" ? "indigo" : template.platform === "youtube" ? "red" : "teal"}-400`}
                                />
                              </div>
                            </div>
                            <CardDescription className="text-gray-400 text-xs mt-1">
                              {template.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter className="p-4 pt-2">
                            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                              Use Template
                            </Button>
                          </CardFooter>
                        </Card>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-purple-900/20 p-3 mb-4">
                      <Search className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-1">No templates found</h3>
                    <p className="text-sm text-gray-400 max-w-md">
                      We couldn't find any templates matching your search criteria. Try adjusting your filters or search
                      query.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
