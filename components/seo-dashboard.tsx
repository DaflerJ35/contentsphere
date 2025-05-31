"use client"

import { useState } from "react"
import {
  BarChart,
  LineChart,
  Search,
  ArrowUpRight,
  Globe,
  Zap,
  FileText,
  Share2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PremiumBackground } from "./premium-background"

export function SEODashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="w-full min-h-screen">
      <PremiumBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-purple-400">SEO Performance</h1>
              <p className="text-gray-400">Optimize your content for search engines across platforms</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-9 border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
              >
                <FileText className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button className="h-9 bg-purple-600 text-white hover:bg-purple-700">
                <Zap className="mr-2 h-4 w-4" />
                Optimize All
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full max-w-xl bg-purple-900/30">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
                Overview
              </TabsTrigger>
              <TabsTrigger value="keywords" className="data-[state=active]:bg-purple-600">
                Keywords
              </TabsTrigger>
              <TabsTrigger value="backlinks" className="data-[state=active]:bg-purple-600">
                Backlinks
              </TabsTrigger>
              <TabsTrigger value="competitors" className="data-[state=active]:bg-purple-600">
                Competitors
              </TabsTrigger>
            </TabsList>

            <div className="mt-6 grid gap-6">
              {activeTab === "overview" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MetricCard
                      title="SEO Score"
                      value="82/100"
                      change="+4"
                      description="Overall SEO performance"
                      icon={<CheckCircle2 className="h-4 w-4 text-green-500" />}
                    />
                    <MetricCard
                      title="Organic Traffic"
                      value="14,382"
                      change="+12%"
                      description="Monthly visitors from search"
                      icon={<ArrowUpRight className="h-4 w-4 text-green-500" />}
                    />
                    <MetricCard
                      title="Keyword Rankings"
                      value="143"
                      change="+8"
                      description="Keywords in top 10 positions"
                      icon={<Search className="h-4 w-4 text-blue-500" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                      <CardHeader>
                        <CardTitle>Organic Traffic Trend</CardTitle>
                        <CardDescription className="text-gray-400">Last 30 days performance</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="h-[200px] flex items-center justify-center">
                          <LineChart className="h-16 w-16 text-gray-500" />
                          <span className="ml-2 text-sm text-gray-400">Traffic visualization chart</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                      <CardHeader>
                        <CardTitle>Top Performing Content</CardTitle>
                        <CardDescription className="text-gray-400">Content with highest SEO impact</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topPerformingContent.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="rounded-md bg-purple-900/30 p-2 w-8 h-8 flex items-center justify-center">
                                <FileText className="h-4 w-4 text-purple-400" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none text-white">{item.title}</p>
                                <div className="flex items-center text-xs text-gray-400">
                                  <Globe className="mr-1 h-3 w-3" />
                                  <span>{item.platform}</span>
                                  <span className="mx-2">•</span>
                                  <span>{item.traffic} visits/mo</span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <span
                                  className={`text-xs font-medium ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                                >
                                  {item.change}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>SEO Health Check</CardTitle>
                      <CardDescription className="text-gray-400">
                        Critical issues affecting your content visibility
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {seoIssues.map((issue, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className={`rounded-full p-1 ${issue.severity === "high" ? "text-red-500" : issue.severity === "medium" ? "text-amber-500" : "text-green-500"}`}
                            >
                              {issue.severity === "high" ? (
                                <AlertCircle className="h-5 w-5" />
                              ) : (
                                <CheckCircle2 className="h-5 w-5" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-white">{issue.title}</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 gap-1 text-white hover:bg-purple-900/30"
                                >
                                  <span className="text-xs">Fix Issue</span>
                                  <Zap className="h-3 w-3" />
                                </Button>
                              </div>
                              <p className="text-xs text-gray-400 mt-1">{issue.description}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <Progress value={issue.progress} className="h-1.5 bg-gray-800" />
                                <span className="text-xs text-gray-400">{issue.progress}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                      >
                        View All Issues
                      </Button>
                    </CardFooter>
                  </Card>
                </>
              )}

              {activeTab === "keywords" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Keyword Performance</CardTitle>
                      <CardDescription className="text-gray-400">Tracking your top performing keywords</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <BarChart className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Keyword performance chart</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "backlinks" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Backlink Analysis</CardTitle>
                      <CardDescription className="text-gray-400">Monitoring your backlink profile</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <Share2 className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Backlink visualization</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "competitors" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Competitor Analysis</CardTitle>
                      <CardDescription className="text-gray-400">
                        Compare your SEO performance with competitors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <BarChart className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Competitor comparison chart</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, description, icon }) {
  const isPositive = change.startsWith("+")

  return (
    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </div>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">{value}</div>
          <div className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</div>
        </div>
      </CardContent>
    </Card>
  )
}

const topPerformingContent = [
  {
    title: "10 Ways to Optimize Your LinkedIn Profile",
    platform: "LinkedIn",
    traffic: "2,341",
    change: "+15%",
  },
  {
    title: "How to Create Viral TikTok Content",
    platform: "TikTok",
    traffic: "1,892",
    change: "+23%",
  },
  {
    title: "Instagram Marketing Strategy Guide",
    platform: "Instagram",
    traffic: "1,567",
    change: "+8%",
  },
  {
    title: "Twitter Engagement Tactics for 2023",
    platform: "Twitter",
    traffic: "1,245",
    change: "-3%",
  },
]

const seoIssues = [
  {
    title: "Missing meta descriptions",
    description: "12 pieces of content are missing proper meta descriptions",
    severity: "high",
    progress: 65,
  },
  {
    title: "Slow loading media",
    description: "8 pages have media files that are slowing down load times",
    severity: "medium",
    progress: 42,
  },
  {
    title: "Keyword optimization",
    description: "Content is properly optimized for target keywords",
    severity: "low",
    progress: 92,
  },
]
