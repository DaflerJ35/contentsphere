"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import {
  TrendingUp,
  BarChart3,
  Share2,
  MessageSquare,
  Heart,
  Eye,
  Repeat,
  ArrowUpRight,
  ArrowDownRight,
  Bookmark,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PerformanceDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Engagement Rate"
          value="4.8%"
          change="+0.6%"
          trend="up"
          description="vs. previous period"
          icon={<BarChart3 className="h-5 w-5 text-white" />}
          color="from-purple-600 to-indigo-700"
        />
        <MetricCard
          title="Avg. Reach per Post"
          value="12,450"
          change="+8.3%"
          trend="up"
          description="vs. previous period"
          icon={<Eye className="h-5 w-5 text-white" />}
          color="from-blue-600 to-cyan-600"
        />
        <MetricCard
          title="Conversion Rate"
          value="2.3%"
          change="-0.2%"
          trend="down"
          description="vs. previous period"
          icon={<Share2 className="h-5 w-5 text-white" />}
          color="from-amber-500 to-orange-600"
        />
        <MetricCard
          title="Growth Rate"
          value="5.7%"
          change="+1.2%"
          trend="up"
          description="vs. previous period"
          icon={<TrendingUp className="h-5 w-5 text-white" />}
          color="from-green-600 to-emerald-600"
        />
      </div>

      <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Performance by Platform</CardTitle>
                <CardDescription className="text-gray-400">
                  Engagement metrics across different platforms
                </CardDescription>
              </div>
              <Tabs defaultValue="engagement" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 p-1">
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
                    value="growth"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                  >
                    Growth
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <BarChart
                  data={[
                    { name: "Twitter", value: 4.2 },
                    { name: "LinkedIn", value: 3.8 },
                    { name: "Instagram", value: 5.7 },
                    { name: "Facebook", value: 3.1 },
                    { name: "TikTok", value: 6.3 },
                  ]}
                  className="aspect-[4/3]"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Platform Performance</h3>
                <p className="text-sm text-gray-400">
                  TikTok shows the highest engagement rate at 6.3%, followed by Instagram at 5.7%. Facebook has the
                  lowest engagement at 3.1%.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      platform: "TikTok",
                      rate: "6.3%",
                      change: "+1.2%",
                      trend: "up",
                      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
                    },
                    {
                      platform: "Instagram",
                      rate: "5.7%",
                      change: "+0.8%",
                      trend: "up",
                      color: "bg-gradient-to-r from-pink-500 to-rose-500",
                    },
                    {
                      platform: "Twitter",
                      rate: "4.2%",
                      change: "+0.3%",
                      trend: "up",
                      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
                    },
                    {
                      platform: "LinkedIn",
                      rate: "3.8%",
                      change: "-0.1%",
                      trend: "down",
                      color: "bg-gradient-to-r from-blue-600 to-blue-800",
                    },
                    {
                      platform: "Facebook",
                      rate: "3.1%",
                      change: "-0.4%",
                      trend: "down",
                      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.platform}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="flex items-center justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-1 rounded-full ${item.color}`}></div>
                        <span className="font-medium text-white">{item.platform}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-white">{item.rate}</span>
                        <span
                          className={`flex items-center text-xs font-medium ${
                            item.trend === "up" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {item.trend === "up" ? (
                            <ArrowUpRight className="mr-1 h-3 w-3" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3" />
                          )}
                          {item.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <CardTitle>Engagement Breakdown</CardTitle>
              <CardDescription className="text-gray-400">Types of engagement across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <PieChart
                  data={[
                    { name: "Likes", value: 45 },
                    { name: "Comments", value: 25 },
                    { name: "Shares", value: 20 },
                    { name: "Saves", value: 10 },
                  ]}
                  className="aspect-[4/3]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
                    <div className="rounded-md bg-gradient-to-br from-red-500 to-pink-600 p-2 shadow-lg shadow-red-900/20">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Likes</div>
                      <div className="text-lg font-bold text-white">45%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
                    <div className="rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 p-2 shadow-lg shadow-blue-900/20">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Comments</div>
                      <div className="text-lg font-bold text-white">25%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
                    <div className="rounded-md bg-gradient-to-br from-green-500 to-emerald-600 p-2 shadow-lg shadow-green-900/20">
                      <Repeat className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Shares</div>
                      <div className="text-lg font-bold text-white">20%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
                    <div className="rounded-md bg-gradient-to-br from-amber-500 to-orange-600 p-2 shadow-lg shadow-amber-900/20">
                      <Bookmark className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Saves</div>
                      <div className="text-lg font-bold text-white">10%</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription className="text-gray-400">
                Engagement and reach trends over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={[
                  { name: "Jan", engagement: 3.2, reach: 8500 },
                  { name: "Feb", engagement: 3.8, reach: 9200 },
                  { name: "Mar", engagement: 4.1, reach: 10100 },
                  { name: "Apr", engagement: 4.5, reach: 11300 },
                  { name: "May", engagement: 4.3, reach: 11800 },
                  { name: "Jun", engagement: 4.8, reach: 12450 },
                ]}
                className="aspect-[4/3]"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader className="pb-2">
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription className="text-gray-400">Your best performing content by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Behind the Scenes: Product Development",
                  platform: "Instagram",
                  type: "Image Gallery",
                  engagement: "8.7%",
                  reach: "24.5K",
                  date: "Jun 15, 2023",
                },
                {
                  title: "10 Industry Trends You Need to Know",
                  platform: "LinkedIn",
                  type: "Article",
                  engagement: "6.2%",
                  reach: "18.3K",
                  date: "Jun 8, 2023",
                },
                {
                  title: "How Our Product Solves [Problem] - Demo",
                  platform: "TikTok",
                  type: "Video",
                  engagement: "9.1%",
                  reach: "32.7K",
                  date: "Jun 12, 2023",
                },
                {
                  title: "Customer Success Story: XYZ Corp",
                  platform: "Twitter",
                  type: "Thread",
                  engagement: "5.4%",
                  reach: "15.2K",
                  date: "Jun 5, 2023",
                },
                {
                  title: "Announcing Our New Feature Release",
                  platform: "Facebook",
                  type: "Post",
                  engagement: "4.8%",
                  reach: "12.9K",
                  date: "Jun 1, 2023",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex flex-col justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4 sm:flex-row sm:items-center"
                >
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge className="bg-purple-500/20 text-purple-400">{item.platform}</Badge>
                      <Badge variant="outline" className="border-purple-800/30 bg-gray-800/50 text-gray-300">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400">Engagement</span>
                      <span className="text-lg font-bold text-white">{item.engagement}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400">Reach</span>
                      <span className="text-lg font-bold text-white">{item.reach}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* New section: Content Performance Recommendations */}
      <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
        <CardHeader className="pb-2">
          <CardTitle>Performance Recommendations</CardTitle>
          <CardDescription className="text-gray-400">
            AI-powered suggestions to improve your content performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Optimize posting time",
                description:
                  "Your audience is most active between 6-8 PM. Consider scheduling more posts during this window.",
                impact: "High",
                effort: "Low",
              },
              {
                title: "Increase video content on Instagram",
                description:
                  "Video content on Instagram is outperforming images by 32%. Consider creating more Reels and video Stories.",
                impact: "High",
                effort: "Medium",
              },
              {
                title: "Add more calls-to-action",
                description:
                  "Posts with explicit CTAs have 24% higher engagement. Try adding clear action prompts to your content.",
                impact: "Medium",
                effort: "Low",
              },
              {
                title: "Leverage trending hashtags",
                description: "Using 3-5 trending hashtags can increase reach by up to 40% on Twitter and Instagram.",
                impact: "Medium",
                effort: "Low",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4 sm:flex-row sm:items-center"
              >
                <div className="mb-3 flex-1 sm:mb-0">
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <Badge
                      className={`${item.impact === "High" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}
                    >
                      {item.impact} Impact
                    </Badge>
                    <Badge className="ml-2 bg-gray-700 text-gray-300">{item.effort} Effort</Badge>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500"
                    size="sm"
                  >
                    Apply
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
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
