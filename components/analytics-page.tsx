"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveChart } from "./interactive-chart"
import { TrendAnalysis } from "./trend-analysis"
import { EngagementTips } from "./engagement-tips"

export function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const overviewData = [
    { label: "Mon", value: 420, color: "#8b5cf6" },
    { label: "Tue", value: 380, color: "#8b5cf6" },
    { label: "Wed", value: 510, color: "#8b5cf6" },
    { label: "Thu", value: 470, color: "#8b5cf6" },
    { label: "Fri", value: 590, color: "#8b5cf6" },
    { label: "Sat", value: 620, color: "#8b5cf6" },
    { label: "Sun", value: 520, color: "#8b5cf6" },
  ]

  const engagementData = [
    { label: "Mon", value: 220, color: "#ec4899" },
    { label: "Tue", value: 270, color: "#ec4899" },
    { label: "Wed", value: 250, color: "#ec4899" },
    { label: "Thu", value: 300, color: "#ec4899" },
    { label: "Fri", value: 320, color: "#ec4899" },
    { label: "Sat", value: 370, color: "#ec4899" },
    { label: "Sun", value: 390, color: "#ec4899" },
  ]

  const conversionData = [
    { label: "Mon", value: 25, color: "#10b981" },
    { label: "Tue", value: 30, color: "#10b981" },
    { label: "Wed", value: 22, color: "#10b981" },
    { label: "Thu", value: 28, color: "#10b981" },
    { label: "Fri", value: 35, color: "#10b981" },
    { label: "Sat", value: 40, color: "#10b981" },
    { label: "Sun", value: 32, color: "#10b981" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-purple-400">Analytics Dashboard</h1>
        <p className="text-gray-400">Track your content performance across platforms</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList className="bg-purple-900/30">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
            Overview
          </TabsTrigger>
          <TabsTrigger value="engagement" className="data-[state=active]:bg-purple-600">
            Engagement
          </TabsTrigger>
          <TabsTrigger value="conversion" className="data-[state=active]:bg-purple-600">
            Conversion
          </TabsTrigger>
          <TabsTrigger value="platforms" className="data-[state=active]:bg-purple-600">
            Platforms
          </TabsTrigger>
        </TabsList>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TabsContent value="overview" className="space-y-6 col-span-full">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <CardDescription className="text-gray-400">Across all platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,281</div>
                  <p className="text-xs text-green-500">+12.5% from last month</p>
                </CardContent>
              </Card>
              <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  <CardDescription className="text-gray-400">Likes, comments, shares</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.2%</div>
                  <p className="text-xs text-green-500">+0.8% from last month</p>
                </CardContent>
              </Card>
              <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <CardDescription className="text-gray-400">Click-throughs to action</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.1%</div>
                  <p className="text-xs text-green-500">+0.5% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <InteractiveChart
                title="Weekly Performance"
                data={overviewData}
                className="border-purple-900/50 bg-purple-900/10 text-white"
                height={250}
              />
              <EngagementTips className="h-full" />
            </div>

            <TrendAnalysis />
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6 col-span-full">
            <div className="grid gap-6 md:grid-cols-2">
              <InteractiveChart
                title="Engagement Metrics"
                data={engagementData}
                className="border-purple-900/50 bg-purple-900/10 text-white"
                height={300}
              />
              <EngagementTips className="h-full" />
            </div>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6 col-span-full">
            <div className="grid gap-6 md:grid-cols-2">
              <InteractiveChart
                title="Conversion Metrics"
                data={conversionData}
                className="border-purple-900/50 bg-purple-900/10 text-white"
                height={300}
              />
              <Card className="border-purple-900/50 bg-purple-900/10 text-white h-full">
                <CardHeader>
                  <CardTitle>Conversion Insights</CardTitle>
                  <CardDescription className="text-gray-400">How your content drives user actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-1">Top Converting Content</h3>
                      <p className="text-xs text-gray-400">
                        Your product tutorials have 2.3x higher conversion rates than other content types
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Best Time for Conversions</h3>
                      <p className="text-xs text-gray-400">
                        Tuesday and Wednesday mornings show 40% higher conversion rates
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Call-to-Action Performance</h3>
                      <p className="text-xs text-gray-400">
                        Direct CTAs like "Try Now" perform 35% better than "Learn More"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6 col-span-full">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                <CardHeader>
                  <CardTitle>Platform Comparison</CardTitle>
                  <CardDescription className="text-gray-400">
                    Performance metrics across different platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-500 p-1.5 w-7 h-7 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                          </svg>
                        </div>
                        <span className="text-sm">Twitter</span>
                      </div>
                      <div className="text-sm">12,450 views</div>
                      <div className="text-xs text-green-500">+18%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-700 p-1.5 w-7 h-7 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <span className="text-sm">LinkedIn</span>
                      </div>
                      <div className="text-sm">8,932 views</div>
                      <div className="text-xs text-green-500">+24%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-pink-600 p-1.5 w-7 h-7 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                          </svg>
                        </div>
                        <span className="text-sm">Instagram</span>
                      </div>
                      <div className="text-sm">15,742 views</div>
                      <div className="text-xs text-green-500">+32%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-red-600 p-1.5 w-7 h-7 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                        <span className="text-sm">YouTube</span>
                      </div>
                      <div className="text-sm">7,125 views</div>
                      <div className="text-xs text-green-500">+15%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-400 p-1.5 w-7 h-7 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        </div>
                        <span className="text-sm">TikTok</span>
                      </div>
                      <div className="text-sm">9,874 views</div>
                      <div className="text-xs text-green-500">+45%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <EngagementTips className="h-full" />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
