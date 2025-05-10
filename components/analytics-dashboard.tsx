"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { ArrowUpRight, ArrowDownRight, Users, Eye, Share2, MessageSquare, BarChart3, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 p-1 md:w-auto">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="engagement"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Engagement
          </TabsTrigger>
          <TabsTrigger
            value="reach"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Reach
          </TabsTrigger>
          <TabsTrigger
            value="conversions"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Conversions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Total Engagement"
              value="24,531"
              change="+12.5%"
              trend="up"
              description="vs. previous period"
              icon={<BarChart3 className="h-5 w-5 text-white" />}
              color="from-purple-600 to-indigo-700"
            />
            <MetricCard
              title="Audience Reach"
              value="142,891"
              change="+18.2%"
              trend="up"
              description="vs. previous period"
              icon={<Users className="h-5 w-5 text-white" />}
              color="from-blue-600 to-cyan-600"
            />
            <MetricCard
              title="Impressions"
              value="1.2M"
              change="+7.4%"
              trend="up"
              description="vs. previous period"
              icon={<Eye className="h-5 w-5 text-white" />}
              color="from-amber-500 to-orange-600"
            />
            <MetricCard
              title="Conversion Rate"
              value="3.8%"
              change="-0.5%"
              trend="down"
              description="vs. previous period"
              icon={<Share2 className="h-5 w-5 text-white" />}
              color="from-green-600 to-emerald-600"
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
                <CardHeader className="pb-2">
                  <CardTitle>Engagement by Platform</CardTitle>
                  <CardDescription className="text-gray-400">
                    Total engagement across different platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: "Twitter", value: 4500 },
                      { name: "LinkedIn", value: 6200 },
                      { name: "Instagram", value: 8100 },
                      { name: "Facebook", value: 3800 },
                      { name: "TikTok", value: 5400 },
                    ]}
                    className="aspect-[4/3]"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
                <CardHeader className="pb-2">
                  <CardTitle>Engagement Trend</CardTitle>
                  <CardDescription className="text-gray-400">Engagement metrics over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { name: "Week 1", value: 2400 },
                      { name: "Week 2", value: 3600 },
                      { name: "Week 3", value: 2900 },
                      { name: "Week 4", value: 3800 },
                    ]}
                    className="aspect-[4/3]"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
                <CardHeader className="pb-2">
                  <CardTitle>Content Type Performance</CardTitle>
                  <CardDescription className="text-gray-400">Engagement by content type</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: "Blog Posts", value: 35 },
                      { name: "Social Posts", value: 25 },
                      { name: "Videos", value: 20 },
                      { name: "Newsletters", value: 15 },
                      { name: "Other", value: 5 },
                    ]}
                    className="aspect-square"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="col-span-2"
            >
              <Card className="col-span-2 border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
                <CardHeader className="pb-2">
                  <CardTitle>Top Performing Content</CardTitle>
                  <CardDescription className="text-gray-400">Your best performing content pieces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "10 Ways to Optimize Your Content Strategy",
                        platform: "Blog",
                        engagement: "8.2K",
                        type: "Article",
                      },
                      {
                        title: "Behind the Scenes: Product Development",
                        platform: "Instagram",
                        engagement: "6.5K",
                        type: "Image Gallery",
                      },
                      {
                        title: "Industry Trends for 2023",
                        platform: "LinkedIn",
                        engagement: "5.9K",
                        type: "Article",
                      },
                      {
                        title: "Customer Success Story: XYZ Corp",
                        platform: "Twitter",
                        engagement: "4.7K",
                        type: "Thread",
                      },
                      {
                        title: "Product Tutorial: Advanced Features",
                        platform: "YouTube",
                        engagement: "3.8K",
                        type: "Video",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-3"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{item.title}</h4>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge className="bg-purple-500/20 text-purple-400">{item.platform}</Badge>
                            <Badge variant="outline" className="border-purple-800/30 bg-gray-800/50 text-gray-300">
                              {item.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-sm">
                            <MessageSquare className="h-4 w-4 text-purple-400" />
                            <span className="font-medium text-white">{item.engagement}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
              <CardHeader className="pb-2">
                <CardTitle>Engagement by Content Type</CardTitle>
                <CardDescription className="text-gray-400">
                  Breakdown of engagement metrics by content format
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "Blog Posts", value: 7800 },
                    { name: "Videos", value: 6500 },
                    { name: "Infographics", value: 5200 },
                    { name: "Podcasts", value: 4100 },
                    { name: "Social Posts", value: 9300 },
                  ]}
                  className="aspect-[4/3]"
                />
              </CardContent>
            </Card>

            <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
              <CardHeader className="pb-2">
                <CardTitle>Engagement by Time of Day</CardTitle>
                <CardDescription className="text-gray-400">When your audience is most active</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={[
                    { name: "12 AM", value: 1200 },
                    { name: "3 AM", value: 800 },
                    { name: "6 AM", value: 1500 },
                    { name: "9 AM", value: 3200 },
                    { name: "12 PM", value: 4100 },
                    { name: "3 PM", value: 4800 },
                    { name: "6 PM", value: 5200 },
                    { name: "9 PM", value: 3800 },
                  ]}
                  className="aspect-[4/3]"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reach" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
              <CardHeader className="pb-2">
                <CardTitle>Audience Growth</CardTitle>
                <CardDescription className="text-gray-400">Monthly audience growth across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={[
                    { name: "Jan", value: 98500 },
                    { name: "Feb", value: 105200 },
                    { name: "Mar", value: 114800 },
                    { name: "Apr", value: 124300 },
                    { name: "May", value: 132700 },
                    { name: "Jun", value: 142891 },
                  ]}
                  className="aspect-[4/3]"
                />
              </CardContent>
            </Card>

            <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
              <CardHeader className="pb-2">
                <CardTitle>Reach by Platform</CardTitle>
                <CardDescription className="text-gray-400">Total reach across different platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: "Instagram", value: 42 },
                    { name: "Twitter", value: 18 },
                    { name: "LinkedIn", value: 15 },
                    { name: "Facebook", value: 12 },
                    { name: "TikTok", value: 8 },
                    { name: "YouTube", value: 5 },
                  ]}
                  className="aspect-square"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversions" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
              <CardHeader className="pb-2">
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription className="text-gray-400">
                  Conversion rates at each stage of the funnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "Impressions", value: 100000 },
                    { name: "Clicks", value: 25000 },
                    { name: "Sign-ups", value: 5000 },
                    { name: "Purchases", value: 1200 },
                    { name: "Retention", value: 800 },
                  ]}
                  className="aspect-[4/3]"
                />
              </CardContent>
            </Card>

            <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
              <CardHeader className="pb-2">
                <CardTitle>Conversion by Content Type</CardTitle>
                <CardDescription className="text-gray-400">
                  Which content types drive the most conversions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: "Case Studies", value: 35 },
                    { name: "Product Demos", value: 25 },
                    { name: "Testimonials", value: 20 },
                    { name: "How-to Guides", value: 15 },
                    { name: "Other", value: 5 },
                  ]}
                  className="aspect-square"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  description: string
  icon: React.ReactNode
  color: string
}

function MetricCard({ title, value, change, trend, description, icon, color }: MetricCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
            <div className={`rounded-lg bg-gradient-to-br ${color} p-2 shadow-lg shadow-purple-900/20`}>{icon}</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="mt-1 flex items-center gap-1">
            <span
              className={`flex items-center text-xs font-medium ${trend === "up" ? "text-green-400" : "text-red-400"}`}
            >
              {trend === "up" ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
              {change}
            </span>
            <span className="text-xs text-gray-500">{description}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
