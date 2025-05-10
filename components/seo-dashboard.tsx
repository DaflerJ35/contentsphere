"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import {
  Search,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  FileText,
  Link2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function SeoDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Organic Traffic"
          value="12,450"
          change="+18.5%"
          trend="up"
          description="vs. previous period"
          icon={<Globe className="h-5 w-5 text-white" />}
          color="from-purple-600 to-indigo-700"
        />
        <MetricCard
          title="Keyword Rankings"
          value="245"
          change="+32"
          trend="up"
          description="new rankings"
          icon={<Search className="h-5 w-5 text-white" />}
          color="from-blue-600 to-cyan-600"
        />
        <MetricCard
          title="Avg. Position"
          value="14.2"
          change="-2.3"
          trend="up"
          description="positions improved"
          icon={<ArrowUpRight className="h-5 w-5 text-white" />}
          color="from-green-600 to-emerald-600"
        />
        <MetricCard
          title="Backlinks"
          value="1,872"
          change="+124"
          trend="up"
          description="new backlinks"
          icon={<Link2 className="h-5 w-5 text-white" />}
          color="from-amber-500 to-orange-600"
        />
      </div>

      <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Keyword Rankings</CardTitle>
                <CardDescription className="text-gray-400">Performance of your top keywords over time</CardDescription>
              </div>
              <Tabs defaultValue="top10" className="w-[300px]">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 p-1">
                  <TabsTrigger
                    value="top10"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                  >
                    Top 10
                  </TabsTrigger>
                  <TabsTrigger
                    value="top50"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                  >
                    Top 50
                  </TabsTrigger>
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                  >
                    All
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4">
              <LineChart
                data={[
                  { name: "Jan", value: 28 },
                  { name: "Feb", value: 24 },
                  { name: "Mar", value: 19 },
                  { name: "Apr", value: 15 },
                  { name: "May", value: 12 },
                  { name: "Jun", value: 8 },
                ]}
                className="aspect-[4/1]"
              />
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  keyword: "content transformation tool",
                  position: 3,
                  change: "+5",
                  volume: "2.4K",
                  difficulty: "Medium",
                },
                {
                  keyword: "multi-platform content creator",
                  position: 5,
                  change: "+8",
                  volume: "1.8K",
                  difficulty: "Medium",
                },
                {
                  keyword: "social media content optimizer",
                  position: 7,
                  change: "+12",
                  volume: "3.2K",
                  difficulty: "High",
                },
                {
                  keyword: "AI content transformation",
                  position: 9,
                  change: "+15",
                  volume: "5.6K",
                  difficulty: "High",
                },
                {
                  keyword: "repurpose blog content",
                  position: 12,
                  change: "+3",
                  volume: "4.1K",
                  difficulty: "Medium",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex flex-col justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4 sm:flex-row sm:items-center"
                >
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-medium text-white">{item.keyword}</h4>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge
                        className={
                          item.difficulty === "High"
                            ? "bg-red-500/20 text-red-400"
                            : item.difficulty === "Medium"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-green-500/20 text-green-400"
                        }
                      >
                        {item.difficulty}
                      </Badge>
                      <span className="text-xs text-gray-500">Volume: {item.volume}/mo</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400">Position</span>
                      <span className="text-lg font-bold text-white">{item.position}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400">Change</span>
                      <span className="flex items-center text-lg font-bold text-green-400">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        {item.change}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Analyze
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <CardTitle>Content SEO Analysis</CardTitle>
              <CardDescription className="text-gray-400">SEO performance of your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "10 Ways to Transform Your Content Strategy",
                    url: "/blog/transform-content-strategy",
                    score: 92,
                    issues: 2,
                    status: "good",
                  },
                  {
                    title: "The Ultimate Guide to Content Repurposing",
                    url: "/blog/ultimate-guide-content-repurposing",
                    score: 87,
                    issues: 4,
                    status: "good",
                  },
                  {
                    title: "How to Optimize Content for Multiple Platforms",
                    url: "/blog/optimize-content-multiple-platforms",
                    score: 76,
                    issues: 7,
                    status: "medium",
                  },
                  {
                    title: "Content Transformation: The Complete Guide",
                    url: "/blog/content-transformation-guide",
                    score: 65,
                    issues: 12,
                    status: "medium",
                  },
                  {
                    title: "Why Your Content Strategy Needs AI",
                    url: "/blog/content-strategy-ai",
                    score: 54,
                    issues: 18,
                    status: "poor",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex flex-col justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4 sm:items-center sm:flex-row"
                  >
                    <div className="mb-3 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-purple-400" />
                        <h4 className="font-medium text-white">{item.title}</h4>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-gray-500">{item.url}</span>
                        <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-500 hover:text-white">
                          <ExternalLink className="h-3 w-3" />
                          <span className="sr-only">Open</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {item.status === "good" ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : item.status === "medium" ? (
                          <AlertCircle className="h-5 w-5 text-amber-400" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">Score: {item.score}/100</span>
                          <span className="text-xs text-gray-500">{item.issues} issues found</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                      >
                        Fix Issues
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <CardTitle>Backlink Analysis</CardTitle>
              <CardDescription className="text-gray-400">Overview of your backlink profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <BarChart
                  data={[
                    { name: "High Authority", value: 245 },
                    { name: "Medium Authority", value: 876 },
                    { name: "Low Authority", value: 751 },
                  ]}
                  className="aspect-[4/3]"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Recent Backlinks</h3>
                {[
                  {
                    domain: "techcrunch.com",
                    url: "/article/content-transformation-tools",
                    authority: 92,
                    date: "Jun 15, 2023",
                  },
                  {
                    domain: "forbes.com",
                    url: "/business/ai-content-tools-2023",
                    authority: 94,
                    date: "Jun 10, 2023",
                  },
                  {
                    domain: "contentmarketinginstitute.com",
                    url: "/best-content-tools",
                    authority: 86,
                    date: "Jun 5, 2023",
                  },
                  {
                    domain: "searchenginejournal.com",
                    url: "/content-optimization-tools",
                    authority: 88,
                    date: "May 28, 2023",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex flex-col justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-3 sm:flex-row sm:items-center"
                  >
                    <div className="mb-2 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-purple-400" />
                        <h4 className="font-medium text-white">{item.domain}</h4>
                      </div>
                      <div className="mt-1 flex items-center gap-1">
                        <span className="text-xs text-gray-500">{item.url}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-white">DA: {item.authority}</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:bg-gray-800 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit</span>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* New section: SEO Optimization Opportunities */}
      <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
        <CardHeader className="pb-2">
          <CardTitle>SEO Optimization Opportunities</CardTitle>
          <CardDescription className="text-gray-400">
            AI-detected opportunities to improve your search rankings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Missing meta descriptions",
                description:
                  "12 pages are missing meta descriptions, which can improve click-through rates from search results.",
                impact: "Medium",
                difficulty: "Easy",
                pages: 12,
              },
              {
                title: "Slow page loading speed",
                description:
                  "8 pages take more than 3 seconds to load, which can negatively impact rankings and user experience.",
                impact: "High",
                difficulty: "Medium",
                pages: 8,
              },
              {
                title: "Keyword cannibalization",
                description: "Multiple pages are competing for the same keywords, diluting your ranking potential.",
                impact: "High",
                difficulty: "Medium",
                pages: 5,
              },
              {
                title: "Missing alt text on images",
                description:
                  "23 images across your site are missing alt text, which helps with accessibility and image search.",
                impact: "Low",
                difficulty: "Easy",
                pages: 14,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4 sm:flex-row sm:items-center"
              >
                <div className="mb-3 sm:mb-0">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-400" />
                    <h4 className="font-medium text-white">{item.title}</h4>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <div className="flex gap-2">
                      <Badge
                        className={
                          item.impact === "High"
                            ? "bg-red-500/20 text-red-400"
                            : item.impact === "Medium"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-blue-500/20 text-blue-400"
                        }
                      >
                        {item.impact} Impact
                      </Badge>
                      <Badge className="bg-gray-700 text-gray-300">{item.difficulty}</Badge>
                    </div>
                    <span className="mt-1 text-xs text-gray-500">{item.pages} affected pages</span>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500"
                    size="sm"
                  >
                    Fix Now
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
