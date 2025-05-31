"use client"

import type React from "react"

import { useState } from "react"
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Save,
  Twitter,
  Youtube,
  FileText,
  MessageSquare,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Platform {
  id: string
  name: string
  icon: React.ElementType
  category: "social" | "content" | "messaging"
  isPro?: boolean
  isEnterprise?: boolean
}

export function TargetPlatforms() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter", "linkedin"])
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const platforms: Platform[] = [
    { id: "twitter", name: "Twitter", icon: Twitter, category: "social" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, category: "social" },
    { id: "instagram", name: "Instagram", icon: Instagram, category: "social" },
    { id: "facebook", name: "Facebook", icon: Facebook, category: "social" },
    { id: "youtube", name: "Youtube", icon: Youtube, category: "social", isPro: true },
    { id: "medium", name: "Medium", icon: FileText, category: "content", isPro: true },
    { id: "wordpress", name: "WordPress", icon: Globe, category: "content", isPro: true },
    { id: "blog", name: "Blog", icon: Globe, category: "content", isPro: true },
    { id: "slack", name: "Slack", icon: MessageSquare, category: "messaging", isEnterprise: true },
    { id: "teams", name: "Microsoft Teams", icon: MessageSquare, category: "messaging", isEnterprise: true },
    { id: "email", name: "Email Newsletter", icon: Mail, category: "messaging", isEnterprise: true },
  ]

  const togglePlatform = (id: string) => {
    if (selectedPlatforms.includes(id)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== id))
    } else {
      setSelectedPlatforms([...selectedPlatforms, id])
    }
  }

  const filteredPlatforms = platforms.filter(
    (platform) => activeCategory === "all" || platform.category === activeCategory,
  )

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-400" />
        <h2 className="text-xl font-semibold">Target Platforms</h2>
        <p className="text-sm text-muted-foreground">Select the platforms you want to optimize for</p>
        <Button variant="outline" size="sm" className="ml-auto gap-2">
          <Save className="h-4 w-4" />
          Save as Preset
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Platforms</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="content">Content Platforms</TabsTrigger>
          <TabsTrigger value="messaging">
            Messaging
            <Badge className="ml-2 bg-purple-600 text-[10px]">Enterprise</Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPlatforms.map((platform) => (
          <div
            key={platform.id}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all ${
              selectedPlatforms.includes(platform.id)
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                : "hover:border-purple-200 dark:hover:border-purple-800"
            }`}
            onClick={() => togglePlatform(platform.id)}
          >
            <Checkbox
              checked={selectedPlatforms.includes(platform.id)}
              onCheckedChange={() => togglePlatform(platform.id)}
              className="h-5 w-5"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
              <platform.icon className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{platform.name}</span>
              {platform.isPro && <span className="text-xs text-purple-600">Pro</span>}
              {platform.isEnterprise && <span className="text-xs text-indigo-600">Enterprise</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
