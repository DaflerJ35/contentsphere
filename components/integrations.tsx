"use client"

import type React from "react"

import { useState } from "react"
import {
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Database,
  MessageSquare,
  ImageIcon,
  FileText,
  Mail,
  ShoppingCart,
  CreditCard,
  BarChart2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Integration {
  id: string
  name: string
  description: string
  category: string
  icon: React.ReactNode
  isConnected?: boolean
  isPro?: boolean
}

export function Integrations() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const integrations: Integration[] = [
    {
      id: "1",
      name: "Supabase",
      description: "PostgreSQL database with authentication and realtime subscriptions",
      category: "database",
      icon: <Database className="h-8 w-8 text-[#3ECF8E]" />,
      isConnected: true,
    },
    {
      id: "2",
      name: "MongoDB",
      description: "Document database with scalability and flexibility",
      category: "database",
      icon: <Database className="h-8 w-8 text-[#00ED64]" />,
    },
    {
      id: "3",
      name: "Slack",
      description: "Business communication platform for teams",
      category: "communication",
      icon: <MessageSquare className="h-8 w-8 text-[#4A154B]" />,
      isConnected: true,
    },
    {
      id: "4",
      name: "Cloudinary",
      description: "Cloud-based image and video management",
      category: "media",
      icon: <ImageIcon className="h-8 w-8 text-[#3448C5]" />,
      isPro: true,
    },
    {
      id: "5",
      name: "Notion",
      description: "All-in-one workspace for notes and documents",
      category: "productivity",
      icon: <FileText className="h-8 w-8 text-[#000000]" />,
    },
    {
      id: "6",
      name: "Mailchimp",
      description: "Email marketing platform",
      category: "marketing",
      icon: <Mail className="h-8 w-8 text-[#FFE01B]" />,
      isPro: true,
    },
    {
      id: "7",
      name: "Shopify",
      description: "E-commerce platform for online stores",
      category: "ecommerce",
      icon: <ShoppingCart className="h-8 w-8 text-[#7AB55C]" />,
      isPro: true,
    },
    {
      id: "8",
      name: "Stripe",
      description: "Payment processing platform",
      category: "payment",
      icon: <CreditCard className="h-8 w-8 text-[#6772E5]" />,
      isConnected: true,
    },
    {
      id: "9",
      name: "Google Analytics",
      description: "Web analytics service by Google",
      category: "analytics",
      icon: <BarChart2 className="h-8 w-8 text-[#E37400]" />,
    },
  ]

  const filteredIntegrations = integrations.filter((integration) => {
    if (activeTab !== "all" && activeTab !== integration.category) {
      return false
    }

    if (searchQuery) {
      return (
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-400">Integrations</h1>
          <p className="text-sm text-gray-400">Connect your content with third-party services and platforms</p>
        </div>
        <Button className="gap-2 bg-purple-600 text-white hover:bg-purple-700">
          <Plus className="h-4 w-4" />
          Add Custom Integration
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="search"
            placeholder="Search integrations..."
            className="pl-10 bg-purple-900/20 border-purple-900/50 text-white placeholder:text-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-purple-900/20 text-white border-purple-900/50 hover:bg-purple-900/30"
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="flex items-center rounded-md border border-purple-900/50">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none rounded-l-md ${view === "grid" ? "bg-purple-900/30" : ""} text-white hover:bg-purple-900/40`}
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none rounded-r-md ${view === "list" ? "bg-purple-900/30" : ""} text-white hover:bg-purple-900/40`}
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-purple-900/30 p-1">
          <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
            All
          </TabsTrigger>
          <TabsTrigger value="database" className="data-[state=active]:bg-purple-600">
            Databases
          </TabsTrigger>
          <TabsTrigger value="communication" className="data-[state=active]:bg-purple-600">
            Communication
          </TabsTrigger>
          <TabsTrigger value="media" className="data-[state=active]:bg-purple-600">
            Media
          </TabsTrigger>
          <TabsTrigger value="productivity" className="data-[state=active]:bg-purple-600">
            Productivity
          </TabsTrigger>
          <TabsTrigger value="marketing" className="data-[state=active]:bg-purple-600">
            Marketing
          </TabsTrigger>
        </TabsList>

        <div className={view === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className={`group overflow-hidden rounded-lg border border-purple-900/50 bg-purple-900/10 transition-all hover:border-purple-500/50 ${
                view === "grid" ? "" : "flex"
              }`}
            >
              <div className={`p-6 ${view === "grid" ? "" : "flex-1"}`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-900/30">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Badge
                    className={
                      integration.isConnected ? "bg-green-500/20 text-green-400" : "bg-purple-900/30 text-purple-400"
                    }
                  >
                    {integration.isConnected ? "Connected" : integration.isPro ? "Pro" : "Available"}
                  </Badge>
                  <Button
                    size="sm"
                    variant={integration.isConnected ? "outline" : "default"}
                    className={
                      integration.isConnected
                        ? "gap-2 bg-purple-900/20 text-white border-purple-900/50 hover:bg-purple-900/30"
                        : "gap-2 bg-purple-600 text-white hover:bg-purple-700"
                    }
                  >
                    {integration.isConnected ? "Configure" : "Connect"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
