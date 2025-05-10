"use client"

import { useState } from "react"
import {
  ChevronDown,
  Clock,
  Download,
  FileText,
  Globe,
  Link2,
  MessageSquare,
  Mic,
  Newspaper,
  Upload,
  VideoIcon,
  Wand2,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { PlatformSelector } from "@/components/platform-selector"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { AudienceInsights } from "@/components/audience-insights"
import { EngagementTips } from "@/components/engagement-tips"
import { AnimatedCard } from "@/components/ui/animated-card"
import { InteractiveButton } from "@/components/ui/interactive-button"
import { NotificationToast } from "@/components/ui/notification-toast"
import { motion } from "framer-motion"

export default function ContentTransformer() {
  const [isTransforming, setIsTransforming] = useState(false)
  const [contentSource, setContentSource] = useState("manual")
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter", "linkedin", "instagram"])
  const [content, setContent] = useState("")
  const [showNotification, setShowNotification] = useState(false)

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

      setShowNotification(true)

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
    <div className="grid gap-6 lg:grid-cols-3">
      {showNotification && (
        <NotificationToast
          title="Content transformed!"
          description={`Your content has been optimized for ${selectedPlatforms.length} platform(s).`}
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="lg:col-span-2">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
            >
              Content Transformation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400"
            >
              Transform your content for multiple platforms in seconds
            </motion.p>
          </div>
          <div className="flex items-center gap-2">
            <InteractiveButton
              variant="outline"
              size="sm"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300"
            >
              <Clock className="mr-2 h-4 w-4" />
              History
            </InteractiveButton>
            <InteractiveButton
              variant="outline"
              size="sm"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </InteractiveButton>
          </div>
        </div>

        <AnimatedCard className="mb-6 group" glowColor="rgba(124, 58, 237, 0.3)">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Content Source</CardTitle>
                  <CardDescription className="text-gray-400">Choose how you want to input your content</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="border-purple-500/20 bg-purple-500/10 text-purple-400">
                Pro Feature
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="manual" onValueChange={setContentSource} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 p-1">
                <TabsTrigger
                  value="manual"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Manual Entry
                </TabsTrigger>
                <TabsTrigger
                  value="url"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  <Link2 className="mr-2 h-4 w-4" />
                  URL Import
                </TabsTrigger>
                <TabsTrigger
                  value="upload"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  File Upload
                </TabsTrigger>
              </TabsList>
              <TabsContent value="manual" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="content-type" className="text-gray-300">
                      Content Type
                    </Label>
                    <Select defaultValue="blog">
                      <SelectTrigger id="content-type" className="border-purple-800/30 bg-gray-800/50">
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent className="border-purple-800/30 bg-gray-900">
                        <SelectItem value="blog">
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4 text-purple-400" />
                            <span>Blog Post</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="social">
                          <div className="flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4 text-purple-400" />
                            <span>Social Post</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="video">
                          <div className="flex items-center">
                            <VideoIcon className="mr-2 h-4 w-4 text-purple-400" />
                            <span>Video Script</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="newsletter">
                          <div className="flex items-center">
                            <Newspaper className="mr-2 h-4 w-4 text-purple-400" />
                            <span>Newsletter</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="podcast">
                          <div className="flex items-center">
                            <Mic className="mr-2 h-4 w-4 text-purple-400" />
                            <span>Podcast Script</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="content" className="text-gray-300">
                      Your Content
                    </Label>
                    <Textarea
                      id="content"
                      placeholder="Paste your content here (blog post, article, social media post, etc.)"
                      className="min-h-[200px] border-purple-800/30 bg-gray-800/50 placeholder:text-gray-500"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="url" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="url" className="text-gray-300">
                      Website URL
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="url"
                        placeholder="https://example.com/blog/article"
                        className="border-purple-800/30 bg-gray-800/50 placeholder:text-gray-500"
                      />
                      <InteractiveButton
                        variant="gradient"
                        gradientFrom="from-purple-600"
                        gradientTo="to-indigo-600"
                        className="text-white"
                      >
                        Import
                      </InteractiveButton>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      We'll extract the main content from the URL and prepare it for transformation
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="upload" className="mt-4">
                <div className="space-y-4">
                  <div className="group flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-purple-800/30 bg-gray-800/20 p-4 transition-colors hover:border-purple-500/50 hover:bg-gray-800/30">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <motion.div
                        whileHover={{ y: -5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Upload className="h-8 w-8 text-purple-400" />
                      </motion.div>
                      <div className="text-sm font-medium">
                        <span className="text-purple-400">Click to upload</span> or drag and drop
                      </div>
                      <div className="text-xs text-gray-500">Supports DOCX, PDF, TXT, MD (Max 10MB)</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-6 group" glowColor="rgba(79, 70, 229, 0.3)">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Target Platforms</CardTitle>
                  <CardDescription className="text-gray-400">
                    Select the platforms you want to optimize for
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <InteractiveButton
                  variant="outline"
                  size="sm"
                  className="border-purple-800/30 bg-gray-900/50 text-gray-300"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Save as Preset
                </InteractiveButton>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <PlatformSelector selectedPlatforms={selectedPlatforms} onChange={setSelectedPlatforms} />
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="mb-6 group" glowColor="rgba(147, 51, 234, 0.3)">
          <CardHeader className="pb-3">
            <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Advanced Options</CardTitle>
                    <CardDescription className="text-gray-400">Fine-tune your content transformation</CardDescription>
                  </div>
                </div>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:bg-gray-800 hover:text-white">
                    <motion.div animate={{ rotate: advancedOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-4 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-gray-300">Tone</Label>
                      <RadioGroup defaultValue="professional" className="mt-2 flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="professional"
                            id="professional"
                            className="border-purple-500 text-purple-500"
                          />
                          <Label htmlFor="professional" className="text-gray-300">
                            Professional
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="casual" id="casual" className="border-purple-500 text-purple-500" />
                          <Label htmlFor="casual" className="text-gray-300">
                            Casual
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="friendly"
                            id="friendly"
                            className="border-purple-500 text-purple-500"
                          />
                          <Label htmlFor="friendly" className="text-gray-300">
                            Friendly
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="authoritative"
                            id="authoritative"
                            className="border-purple-500 text-purple-500"
                          />
                          <Label htmlFor="authoritative" className="text-gray-300">
                            Authoritative
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label className="text-gray-300">Content Length</Label>
                      <div className="mt-2 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Shorter</span>
                          <span className="text-sm text-gray-500">Longer</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} className="[&>span]:bg-purple-500" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-gray-300">Target Audience</Label>
                      <Select defaultValue="general">
                        <SelectTrigger className="border-purple-800/30 bg-gray-800/50">
                          <SelectValue placeholder="Select audience" />
                        </SelectTrigger>
                        <SelectContent className="border-purple-800/30 bg-gray-900">
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                          <SelectItem value="academic">Academic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Additional Options</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Switch id="hashtags" className="data-[state=checked]:bg-purple-500" />
                          <Label htmlFor="hashtags" className="text-gray-300">
                            Generate hashtags
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="emojis" className="data-[state=checked]:bg-purple-500" />
                          <Label htmlFor="emojis" className="text-gray-300">
                            Include emojis
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="cta" defaultChecked className="data-[state=checked]:bg-purple-500" />
                          <Label htmlFor="cta" className="text-gray-300">
                            Add call-to-action
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="seo" defaultChecked className="data-[state=checked]:bg-purple-500" />
                          <Label htmlFor="seo" className="text-gray-300">
                            Optimize for SEO
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardHeader>
        </AnimatedCard>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full overflow-hidden rounded-xl"
        >
          <InteractiveButton
            onClick={handleTransform}
            disabled={isTransforming}
            variant="gradient"
            className="relative w-full overflow-hidden rounded-xl px-8 py-4 text-white shadow-lg shadow-purple-900/30"
            size="lg"
          >
            <div className="relative z-10 flex items-center justify-center">
              <Wand2 className="mr-2 h-5 w-5" />
              {isTransforming ? "Transforming..." : "Transform Content"}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
            </div>
          </InteractiveButton>
        </motion.div>
      </div>

      <div className="space-y-6">
        <SubscriptionPlans />
        <AudienceInsights />
        <EngagementTips />
      </div>
    </div>
  )
}
