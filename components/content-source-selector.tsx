"use client"

import { useState } from "react"
import { FileText, Link2, Upload, Database, Cloud, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContentSourceSelector() {
  const [selectedSource, setSelectedSource] = useState<string>("manual")

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FileText className="h-6 w-6 text-purple-400" />
        <h2 className="text-xl font-semibold">Content Source</h2>
        <p className="text-sm text-muted-foreground">Choose how you want to input your content</p>
      </div>

      <Tabs defaultValue="basic" className="mb-4">
        <TabsList className="w-full">
          <TabsTrigger value="basic">Basic Sources</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Sources</TabsTrigger>
          <TabsTrigger value="enterprise">
            Enterprise Sources
            <Badge className="ml-2 bg-purple-600 text-[10px]">Enterprise</Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Button
              variant={selectedSource === "manual" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("manual")}
            >
              <div className="flex w-full items-center">
                <FileText className="h-5 w-5" />
                <span className="ml-2 font-medium">Manual Entry</span>
              </div>
              <p className="text-xs text-muted-foreground">Paste or type your content directly</p>
            </Button>
            <Button
              variant={selectedSource === "url" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("url")}
            >
              <div className="flex w-full items-center">
                <Link2 className="h-5 w-5" />
                <span className="ml-2 font-medium">URL Import</span>
              </div>
              <p className="text-xs text-muted-foreground">Import content from a website URL</p>
            </Button>
            <Button
              variant={selectedSource === "file" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("file")}
            >
              <div className="flex w-full items-center">
                <Upload className="h-5 w-5" />
                <span className="ml-2 font-medium">File Upload</span>
              </div>
              <p className="text-xs text-muted-foreground">Upload a document file (DOCX, PDF, etc.)</p>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="advanced" className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Button
              variant={selectedSource === "api" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("api")}
            >
              <div className="flex w-full items-center">
                <FileCode className="h-5 w-5" />
                <span className="ml-2 font-medium">API Integration</span>
                <Badge className="ml-auto bg-purple-600">Pro</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Connect via API to import content programmatically</p>
            </Button>
            <Button
              variant={selectedSource === "rss" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("rss")}
            >
              <div className="flex w-full items-center">
                <Cloud className="h-5 w-5" />
                <span className="ml-2 font-medium">RSS Feed</span>
                <Badge className="ml-auto bg-purple-600">Pro</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Import content from RSS or Atom feeds</p>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="enterprise" className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Button
              variant={selectedSource === "cms" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("cms")}
            >
              <div className="flex w-full items-center">
                <Database className="h-5 w-5" />
                <span className="ml-2 font-medium">CMS Integration</span>
                <Badge className="ml-auto enterprise-badge">Enterprise</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Connect directly to your CMS (WordPress, Contentful, etc.)
              </p>
            </Button>
            <Button
              variant={selectedSource === "dam" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("dam")}
            >
              <div className="flex w-full items-center">
                <Database className="h-5 w-5" />
                <span className="ml-2 font-medium">DAM Integration</span>
                <Badge className="ml-auto enterprise-badge">Enterprise</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Connect to your Digital Asset Management system</p>
            </Button>
            <Button
              variant={selectedSource === "erp" ? "default" : "outline"}
              className="h-auto flex-col items-start gap-2 p-4 text-left"
              onClick={() => setSelectedSource("erp")}
            >
              <div className="flex w-full items-center">
                <Database className="h-5 w-5" />
                <span className="ml-2 font-medium">ERP/PIM Integration</span>
                <Badge className="ml-auto enterprise-badge">Enterprise</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Connect to your ERP or Product Information Management system
              </p>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
