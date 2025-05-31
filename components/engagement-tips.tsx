"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Twitter, Linkedin, Facebook, Youtube, MessageSquare } from "lucide-react"

export function EngagementTips() {
  const platformTips = [
    {
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-400",
      bgColor: "bg-sky-600/20",
      tips: [
        "Keep tweets between 71-100 characters for 17% higher engagement",
        "Use 1-2 relevant hashtags maximum",
        "Include a clear call-to-action",
        "Post threads for longer content (8-10 tweets ideal)",
        "Use high-contrast images with minimal text",
      ],
      bestTimes: ["Weekdays 8-10am", "12-1pm", "5-6pm"],
      contentTypes: ["Polls", "Threads", "News commentary", "Questions", "GIFs"],
    },
    {
      platform: "Instagram",
      icon: Instagram,
      color: "text-pink-400",
      bgColor: "bg-pink-600/20",
      tips: [
        "Use 5-10 relevant hashtags (hide in comments for cleaner look)",
        "Carousel posts get 1.4x more reach than single images",
        "Include a call-to-action in the first 125 characters",
        "Use line breaks for readability",
        "Tag relevant accounts and locations",
      ],
      bestTimes: ["Monday, Wednesday 11am-1pm", "7-9pm"],
      contentTypes: ["Carousels", "Reels", "Behind-the-scenes", "User-generated content", "Educational content"],
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-400",
      bgColor: "bg-blue-600/20",
      tips: [
        "Keep posts under 1,000 characters",
        "Use 3-5 industry-specific hashtags",
        "Include data points and statistics",
        "Ask thoughtful questions to encourage comments",
        "Use document posts for higher engagement",
      ],
      bestTimes: ["Tuesday-Thursday 8-10am", "1-2pm"],
      contentTypes: ["Articles", "Data insights", "Case studies", "Industry news", "Professional achievements"],
    },
    {
      platform: "Facebook",
      icon: Facebook,
      color: "text-indigo-400",
      bgColor: "bg-indigo-600/20",
      tips: [
        "Keep posts under 80 characters for higher engagement",
        "Use native video for 10x more reach",
        "Ask questions to encourage comments",
        "Use minimal hashtags (1-2 maximum)",
        "Include a clear call-to-action",
      ],
      bestTimes: ["Weekdays 1-4pm"],
      contentTypes: ["Videos", "Questions", "User-generated content", "Live streams", "Events"],
    },
    {
      platform: "YouTube",
      icon: Youtube,
      color: "text-red-400",
      bgColor: "bg-red-600/20",
      tips: [
        "Front-load keywords in video titles",
        "Create custom thumbnails with text overlay",
        "Include timestamps in descriptions",
        "Add cards and end screens for higher retention",
        "Optimize first 15 seconds to hook viewers",
      ],
      bestTimes: ["Thursday-Friday 3-5pm", "Weekends 10-11am"],
      contentTypes: ["Tutorials", "Reviews", "Vlogs", "Interviews", "Behind-the-scenes"],
    },
    {
      platform: "TikTok",
      icon: MessageSquare,
      color: "text-teal-400",
      bgColor: "bg-teal-600/20",
      tips: [
        "Hook viewers in first 3 seconds",
        "Keep videos between 15-60 seconds",
        "Use trending sounds and effects",
        "Create vertical 9:16 video",
        "Include 3-5 relevant hashtags",
      ],
      bestTimes: ["Tuesday 9am", "Thursday 12pm", "Friday 5pm"],
      contentTypes: ["Trends", "Educational content", "Behind-the-scenes", "Challenges", "Tutorials"],
    },
  ]

  return (
    <div className="grid gap-4">
      {platformTips.map((platform, index) => (
        <Card key={index} className="border-purple-900/50 bg-purple-900/10 text-white overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className={`rounded-full p-1.5 ${platform.bgColor}`}>
                <platform.icon className={`h-4 w-4 ${platform.color}`} />
              </div>
              <CardTitle>{platform.platform} Engagement Tips</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tips" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-purple-900/30">
                <TabsTrigger value="tips" className="data-[state=active]:bg-purple-600">
                  Top Tips
                </TabsTrigger>
                <TabsTrigger value="times" className="data-[state=active]:bg-purple-600">
                  Best Times
                </TabsTrigger>
                <TabsTrigger value="content" className="data-[state=active]:bg-purple-600">
                  Content Types
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tips" className="mt-2 space-y-2">
                <ul className="space-y-1 text-sm text-gray-300">
                  {platform.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="times" className="mt-2">
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">Optimal posting times:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {platform.bestTimes.map((time, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="content" className="mt-2">
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">Best performing content types:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {platform.contentTypes.map((type, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
