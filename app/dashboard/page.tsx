import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, BarChart3, Clock, Eye, Sparkles, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back, John</h1>
            <p className="text-muted-foreground">Here's what's happening with your content today.</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600">
            <Sparkles className="mr-2 h-4 w-4" />
            New Transformation
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium text-white">Total Views</h3>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-white">45,281</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+12.5% from last month</span>
              </div>
              <div className="mt-4 h-1 w-full rounded-full bg-gray-800">
                <div className="h-1 w-[75%] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium text-white">Engagement Rate</h3>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-white">5.2%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+0.8% from last month</span>
              </div>
              <div className="mt-4 h-1 w-full rounded-full bg-gray-800">
                <div className="h-1 w-[62%] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium text-white">Active Platforms</h3>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+2 new platforms added</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <Badge
                  variant="outline"
                  className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                >
                  Twitter
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-pink-100 text-pink-700 hover:bg-pink-100 dark:bg-pink-900/30 dark:text-pink-400"
                >
                  Instagram
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                >
                  LinkedIn
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium text-white">Scheduled Posts</h3>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-white">23</div>
              <div className="text-xs text-muted-foreground">Next post in 2 hours</div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-white">Ready (18)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="text-white">Draft (5)</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList className="bg-[#0f0a19]/80 border border-purple-900/20">
            <TabsTrigger value="recent" className="text-white data-[state=active]:bg-purple-900/20">
              Recent Activity
            </TabsTrigger>
            <TabsTrigger value="performance" className="text-white data-[state=active]:bg-purple-900/20">
              Performance
            </TabsTrigger>
            <TabsTrigger value="platforms" className="text-white data-[state=active]:bg-purple-900/20">
              Platforms
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="space-y-4">
            <Card className="border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">Recent Transformations</h3>
                <p className="text-sm text-gray-400">Your latest content transformations</p>
              </div>
              <div className="p-0">
                <div className="divide-y divide-border divide-purple-900/20">
                  {[
                    {
                      title: "Blog Post to Twitter Thread",
                      date: "2 hours ago",
                      platform: "Twitter",
                      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                    },
                    {
                      title: "Podcast to LinkedIn Article",
                      date: "5 hours ago",
                      platform: "LinkedIn",
                      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                    },
                    {
                      title: "YouTube Video to Instagram Reels",
                      date: "Yesterday",
                      platform: "Instagram",
                      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
                    },
                    {
                      title: "Blog Post to TikTok Script",
                      date: "2 days ago",
                      platform: "TikTok",
                      color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                        <Sparkles className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                      <Badge variant="outline" className={item.color}>
                        {item.platform}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="performance" className="space-y-4">
            <Card className="border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">Performance Metrics</h3>
                <p className="text-sm text-gray-400">Your content performance across platforms</p>
              </div>
              <div className="p-6 pt-0">
                <div className="h-[200px] flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Performance chart visualization</span>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="platforms" className="space-y-4">
            <Card className="border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">Platform Performance</h3>
                <p className="text-sm text-gray-400">How your content is performing on each platform</p>
              </div>
              <div className="p-0">
                <div className="divide-y divide-border divide-purple-900/20">
                  {[
                    {
                      name: "Instagram",
                      engagement: "85%",
                      followers: "12.4K",
                      color: "bg-gradient-to-r from-pink-500 to-purple-500",
                    },
                    {
                      name: "Twitter",
                      engagement: "72%",
                      followers: "8.7K",
                      color: "bg-gradient-to-r from-blue-400 to-blue-600",
                    },
                    {
                      name: "LinkedIn",
                      engagement: "68%",
                      followers: "5.2K",
                      color: "bg-gradient-to-r from-blue-600 to-blue-800",
                    },
                    {
                      name: "TikTok",
                      engagement: "91%",
                      followers: "15.8K",
                      color: "bg-gradient-to-r from-teal-400 to-teal-600",
                    },
                    {
                      name: "Facebook",
                      engagement: "53%",
                      followers: "7.3K",
                      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
                    },
                  ].map((platform, i) => (
                    <div key={i} className="flex items-center gap-4 p-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${platform.color}`}
                      >
                        {platform.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">{platform.name}</p>
                          <p className="text-sm font-medium text-white">{platform.engagement}</p>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{platform.followers} followers</span>
                          <div className="flex items-center text-green-500">
                            <ArrowUpRight className="mr-1 h-3 w-3" />
                            <span>+5.2%</span>
                          </div>
                        </div>
                        <div className="mt-2 h-1 w-full rounded-full bg-gray-800">
                          <div
                            className={`h-1 rounded-full ${platform.color}`}
                            style={{ width: platform.engagement }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white">Upcoming Schedule</h3>
              <p className="text-sm text-gray-400">Your scheduled content for the next 7 days</p>
            </div>
            <div className="p-0">
              <div className="divide-y divide-border divide-purple-900/20">
                {[
                  {
                    title: "5 Tips for Better Content",
                    platform: "Instagram",
                    date: "Today, 10:00 AM",
                    status: "Ready",
                  },
                  {
                    title: "The Future of Content Marketing",
                    platform: "LinkedIn",
                    date: "Tomorrow, 2:30 PM",
                    status: "Draft",
                  },
                  {
                    title: "AI Tools for Content Creators",
                    platform: "Twitter",
                    date: "May 23, 9:15 AM",
                    status: "In Review",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-white">{item.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{item.platform}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        item.status === "Ready"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : item.status === "Draft"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="border border-purple-900/20 bg-[#0f0a19]/80 backdrop-blur-sm">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white">Team Activity</h3>
              <p className="text-sm text-gray-400">Recent actions by team members</p>
            </div>
            <div className="p-0">
              <div className="divide-y divide-border divide-purple-900/20">
                {[
                  { user: "Sarah Johnson", action: "created a new LinkedIn post", time: "2 hours ago" },
                  { user: "Michael Chen", action: "transformed content for Twitter", time: "Yesterday" },
                  { user: "Alex Rodriguez", action: "invited 2 new team members", time: "2 days ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-white">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
