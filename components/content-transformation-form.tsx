"use client"

import type React from "react"

import { useState } from "react"
import { SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import {
  FileTextIcon,
  MessageSquareIcon,
  VideoIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "lucide-react"
import { TiktokIcon } from "@/components/tiktok-icon"

type Platform = {
  id: string
  name: string
  icon: React.ReactNode
  color: string
}

type ContentType = {
  id: string
  name: string
  icon: React.ReactNode
}

export default function ContentTransformationForm() {
  const [content, setContent] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [isTransforming, setIsTransforming] = useState(false)

  const contentTypes: ContentType[] = [
    { id: "blog", name: "Blog Post", icon: <FileTextIcon className="h-4 w-4" /> },
    { id: "social", name: "Social Post", icon: <MessageSquareIcon className="h-4 w-4" /> },
    { id: "video", name: "Video Script", icon: <VideoIcon className="h-4 w-4" /> },
  ]

  const platforms: Platform[] = [
    { id: "twitter", name: "Twitter", icon: <TwitterIcon className="h-5 w-5" />, color: "bg-[#1DA1F2]" },
    { id: "linkedin", name: "LinkedIn", icon: <LinkedinIcon className="h-5 w-5" />, color: "bg-[#0A66C2]" },
    {
      id: "instagram",
      name: "Instagram",
      icon: <InstagramIcon className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4]",
    },
    { id: "facebook", name: "Facebook", icon: <FacebookIcon className="h-5 w-5" />, color: "bg-[#1877F2]" },
    { id: "tiktok", name: "TikTok", icon: <TiktokIcon className="h-5 w-5" />, color: "bg-black" },
    { id: "youtube", name: "Youtube", icon: <YoutubeIcon className="h-5 w-5" />, color: "bg-[#FF0000]" },
    { id: "blog", name: "Blog", icon: <FileTextIcon className="h-5 w-5" />, color: "bg-purple-600" },
  ]

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((id) => id !== platformId) : [...prev, platformId],
    )
  }

  const handleTransform = async () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please enter your content before transforming.",
        variant: "destructive",
      })
      return
    }

    if (selectedPlatforms.length === 0) {
      toast({
        title: "Select platforms",
        description: "Please select at least one target platform.",
        variant: "destructive",
      })
      return
    }

    setIsTransforming(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Content transformed!",
        description: `Your content has been optimized for ${selectedPlatforms.length} platform(s).`,
      })

      // In a real app, you would handle the transformed content here
    } catch (error) {
      toast({
        title: "Transformation failed",
        description: "There was an error transforming your content. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsTransforming(false)
    }
  }

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/20 p-6">
      <h2 className="mb-6 text-2xl font-bold">Content Transformation</h2>
      <p className="mb-6 text-gray-400">Enter your content and select target platforms</p>

      <div className="mb-6">
        <Label className="mb-2 block text-sm font-medium">Content Type</Label>
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            {contentTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  {type.icon}
                  <span>{type.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-6">
        <Label htmlFor="content" className="mb-2 block text-sm font-medium">
          Your Content
        </Label>
        <Textarea
          id="content"
          placeholder="Paste your content here (blog post, article, social media post, etc.)"
          className="min-h-[200px] bg-gray-950 border-gray-800"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <Label className="mb-4 block text-sm font-medium">Target Platforms</Label>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="flex items-center space-x-3">
              <Checkbox
                id={`platform-${platform.id}`}
                checked={selectedPlatforms.includes(platform.id)}
                onCheckedChange={() => handlePlatformToggle(platform.id)}
                className="border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <Label
                htmlFor={`platform-${platform.id}`}
                className="flex cursor-pointer items-center gap-2 text-sm font-medium"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${platform.color}`}>
                  {platform.icon}
                </div>
                {platform.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleTransform} disabled={isTransforming} className="w-full bg-purple-600 hover:bg-purple-700">
        <SparklesIcon className="mr-2 h-4 w-4" />
        {isTransforming ? "Transforming..." : "Transform Content"}
      </Button>
    </div>
  )
}
