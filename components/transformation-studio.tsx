"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles,
  Sliders,
  Layers,
  Smartphone,
  Monitor,
  Tablet,
  Upload,
  FileText,
  ImageIcon,
  Video,
  Mic,
  Check,
  RefreshCw,
  ArrowRight,
  Zap,
  Save,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FloatingCard } from "@/components/floating-card"

// Platform preview mockups
const platformPreviews = {
  instagram: "/placeholder-l4o6j.png",
  tiktok: "/tiktok-trending-preview.png",
  linkedin: "/linkedin-post-preview.png",
  twitter: "/placeholder.svg?height=400&width=500&query=Twitter post preview with engagement metrics",
  facebook: "/placeholder.svg?height=400&width=500&query=Facebook post preview with comments and reactions",
}

export function TransformationStudio() {
  const [activeTab, setActiveTab] = useState("upload")
  const [selectedPlatform, setSelectedPlatform] = useState("instagram")
  const [isTransforming, setIsTransforming] = useState(false)
  const [isTransformed, setIsTransformed] = useState(false)
  const [contentType, setContentType] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Style controls
  const [styleControls, setStyleControls] = useState({
    tone: 50, // 0: Formal, 100: Casual
    length: 60, // 0: Brief, 100: Detailed
    creativity: 70, // 0: Conservative, 100: Creative
    brandAlignment: 80, // 0: Generic, 100: On-brand
  })

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      // Determine content type based on file extension
      if (file.type.startsWith("image/")) {
        setContentType("image")
      } else if (file.type.startsWith("video/")) {
        setContentType("video")
      } else if (file.type.startsWith("audio/")) {
        setContentType("audio")
      } else {
        setContentType("text")
      }
    }
  }

  const handleTransform = () => {
    setIsTransforming(true)
    // Simulate transformation process
    setTimeout(() => {
      setIsTransforming(false)
      setIsTransformed(true)
    }, 2500)
  }

  const handleStyleChange = (name: keyof typeof styleControls, value: number[]) => {
    setStyleControls({
      ...styleControls,
      [name]: value[0],
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-purple-500" />
          <h2 className="text-2xl font-bold">Interactive Transformation Studio</h2>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Save className="h-4 w-4" />
          Save Project
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Left panel - Content Source */}
        <div className="lg:col-span-2">
          <FloatingCard>
            <Card className="border-0 shadow-none h-full">
              <CardHeader>
                <CardTitle>Content Source</CardTitle>
                <CardDescription>Upload or enter the content you want to transform</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upload" onValueChange={setActiveTab}>
                  <TabsList className="mb-4 grid w-full grid-cols-3">
                    <TabsTrigger value="upload">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </TabsTrigger>
                    <TabsTrigger value="text">
                      <FileText className="mr-2 h-4 w-4" />
                      Text
                    </TabsTrigger>
                    <TabsTrigger value="url">
                      <Layers className="mr-2 h-4 w-4" />
                      URL
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="upload" className="space-y-4">
                    <div
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={handleFileUpload}
                    >
                      <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*,video/*,audio/*,text/*,.pdf,.doc,.docx"
                      />

                      {contentType ? (
                        <div className="flex flex-col items-center">
                          {contentType === "image" && <ImageIcon className="h-10 w-10 text-purple-500 mb-2" />}
                          {contentType === "video" && <Video className="h-10 w-10 text-purple-500 mb-2" />}
                          {contentType === "audio" && <Mic className="h-10 w-10 text-purple-500 mb-2" />}
                          {contentType === "text" && <FileText className="h-10 w-10 text-purple-500 mb-2" />}
                          <p className="font-medium">File uploaded successfully</p>
                          <p className="text-sm text-muted-foreground mt-1">Click to change file</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="font-medium">Drag & drop or click to upload</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Supports images, videos, audio, and documents
                          </p>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <ImageIcon className="h-3 w-3" />
                        Images
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Video className="h-3 w-3" />
                        Videos
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Mic className="h-3 w-3" />
                        Audio
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Documents
                      </Badge>
                    </div>
                  </TabsContent>

                  <TabsContent value="text" className="space-y-4">
                    <Textarea
                      placeholder="Enter your content here (blog post, article, script, etc.)"
                      className="min-h-[200px]"
                    />
                    <div className="flex justify-end">
                      <Button size="sm" onClick={() => setContentType("text")}>
                        <Check className="mr-2 h-4 w-4" />
                        Use This Text
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="url" className="space-y-4">
                    <div className="space-y-2">
                      <Input placeholder="Enter URL (blog post, article, video, etc.)" />
                      <p className="text-xs text-muted-foreground">
                        We'll extract the content from the URL and prepare it for transformation
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm" onClick={() => setContentType("url")}>
                        <Check className="mr-2 h-4 w-4" />
                        Import from URL
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>

              {contentType && (
                <CardFooter className="flex-col items-stretch gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <Sliders className="h-4 w-4" />
                        Style Controls
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Tone</label>
                          <span className="text-xs text-muted-foreground">
                            {styleControls.tone < 30 ? "Formal" : styleControls.tone < 70 ? "Conversational" : "Casual"}
                          </span>
                        </div>
                        <Slider
                          value={[styleControls.tone]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => handleStyleChange("tone", value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Length</label>
                          <span className="text-xs text-muted-foreground">
                            {styleControls.length < 30 ? "Brief" : styleControls.length < 70 ? "Moderate" : "Detailed"}
                          </span>
                        </div>
                        <Slider
                          value={[styleControls.length]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => handleStyleChange("length", value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Creativity</label>
                          <span className="text-xs text-muted-foreground">
                            {styleControls.creativity < 30
                              ? "Conservative"
                              : styleControls.creativity < 70
                                ? "Balanced"
                                : "Creative"}
                          </span>
                        </div>
                        <Slider
                          value={[styleControls.creativity]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => handleStyleChange("creativity", value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Brand Alignment</label>
                          <span className="text-xs text-muted-foreground">
                            {styleControls.brandAlignment < 30
                              ? "Generic"
                              : styleControls.brandAlignment < 70
                                ? "Moderate"
                                : "On-brand"}
                          </span>
                        </div>
                        <Slider
                          value={[styleControls.brandAlignment]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => handleStyleChange("brandAlignment", value)}
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full gap-2 bg-gradient-to-r from-purple-600 to-indigo-600"
                    onClick={handleTransform}
                    disabled={isTransforming}
                  >
                    {isTransforming ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Transforming...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4" />
                        Transform Content
                      </>
                    )}
                  </Button>
                </CardFooter>
              )}
            </Card>
          </FloatingCard>
        </div>

        {/* Right panel - Platform Preview */}
        <div className="lg:col-span-3">
          <FloatingCard>
            <Card className="border-0 shadow-none h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Platform Preview</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={selectedPlatform === "instagram" ? "bg-muted" : ""}
                      onClick={() => setSelectedPlatform("instagram")}
                    >
                      <Smartphone className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={selectedPlatform === "tiktok" ? "bg-muted" : ""}
                      onClick={() => setSelectedPlatform("tiktok")}
                    >
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={selectedPlatform === "linkedin" ? "bg-muted" : ""}
                      onClick={() => setSelectedPlatform("linkedin")}
                    >
                      <Monitor className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={selectedPlatform === "twitter" ? "bg-muted" : ""}
                      onClick={() => setSelectedPlatform("twitter")}
                    >
                      <Tablet className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  See how your content will look on{" "}
                  {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                {!contentType || !isTransformed ? (
                  <div className="text-center space-y-4">
                    <div className="rounded-full bg-muted/50 p-4 inline-block">
                      <Layers className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">No preview available</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {!contentType
                          ? "Upload or enter content to see a preview"
                          : "Click 'Transform Content' to generate a preview"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPlatform}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex justify-center"
                    >
                      <div className="relative max-w-full">
                        <img
                          src={
                            platformPreviews[selectedPlatform as keyof typeof platformPreviews] || "/placeholder.svg"
                          }
                          alt={`${selectedPlatform} preview`}
                          className="rounded-lg shadow-lg max-h-[500px] object-contain"
                        />

                        {/* Platform-specific UI overlays */}
                        {selectedPlatform === "instagram" && (
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                            <div className="flex gap-4">
                              <div className="rounded-full bg-black/70 p-2">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <div className="rounded-full bg-black/70 p-2">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="rounded-full bg-black/70 p-2">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21 14.5v-2.5c0-1.1-.9-2-2-2h-1.43c-.31 0-.62-.1-.87-.29l-1.4-1.07c-.25-.19-.56-.29-.87-.29h-2.86c-.31 0-.62.1-.87.29l-1.4 1.07c-.25.19-.56.29-.87.29h-1.43c-1.1 0-2 .9-2 2v2.5c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5zm-16.5-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm9 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </CardContent>

              {isTransformed && (
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button className="gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Export for {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}
                  </Button>
                </CardFooter>
              )}
            </Card>
          </FloatingCard>
        </div>
      </div>
    </div>
  )
}
