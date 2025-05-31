import { DashboardLayout } from "@/components/dashboard-layout"
import { EngagementTips } from "@/components/engagement-tips"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PremiumBackground } from "@/components/premium-background"

export default function EngagementTipsPage() {
  return (
    <DashboardLayout>
      <div className="relative">
        <PremiumBackground />
        <div className="relative z-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-purple-400">Platform Engagement Tips</h1>
            <p className="text-gray-400">Optimize your content for maximum engagement across different platforms</p>

            <Tabs defaultValue="tips" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md bg-purple-900/30">
                <TabsTrigger value="tips" className="data-[state=active]:bg-purple-600">
                  Tips
                </TabsTrigger>
                <TabsTrigger value="metrics" className="data-[state=active]:bg-purple-600">
                  Metrics
                </TabsTrigger>
                <TabsTrigger value="trends" className="data-[state=active]:bg-purple-600">
                  Trends
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tips" className="mt-4 space-y-4">
                <EngagementTips />

                <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                  <CardHeader>
                    <CardTitle>Advanced Platform Strategies</CardTitle>
                    <CardDescription className="text-gray-400">
                      Deeper insights for maximizing engagement on each platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-purple-900/50 bg-purple-900/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Best Posting Times</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>Twitter: Weekdays 8-10am, 12-1pm</li>
                            <li>LinkedIn: Tuesday-Thursday 8-10am, 1-2pm</li>
                            <li>Instagram: Monday, Wednesday 11am-1pm, 7-9pm</li>
                            <li>Facebook: Weekdays 1-4pm</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-900/50 bg-purple-900/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Content Type Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>Twitter: Polls, threads, news commentary</li>
                            <li>LinkedIn: Articles, data insights, case studies</li>
                            <li>Instagram: Carousels, reels, behind-the-scenes</li>
                            <li>Facebook: Videos, questions, user-generated content</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="metrics" className="mt-4 space-y-4">
                <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                  <CardHeader>
                    <CardTitle>Platform Performance Metrics</CardTitle>
                    <CardDescription className="text-gray-400">
                      Key metrics to track for each social platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-purple-900/50 bg-purple-900/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Engagement Rates</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>Twitter: 0.5-1% is good, &gt;1.5% is excellent</li>
                            <li>LinkedIn: 2-3% is good, &gt;5% is excellent</li>
                            <li>Instagram: 3-5% is good, &gt;6% is excellent</li>
                            <li>Facebook: 1-2% is good, &gt;3% is excellent</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-900/50 bg-purple-900/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Click-Through Rates</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>Twitter: 1-2% average, &gt;3% is excellent</li>
                            <li>LinkedIn: 2-3% average, &gt;4% is excellent</li>
                            <li>Instagram: 0.5-1% average, &gt;2% is excellent</li>
                            <li>Facebook: 1-2% average, &gt;3% is excellent</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends" className="mt-4 space-y-4">
                <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                  <CardHeader>
                    <CardTitle>Current Platform Trends</CardTitle>
                    <CardDescription className="text-gray-400">
                      Latest trends and algorithm changes to be aware of
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-purple-900/50 bg-purple-900/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Algorithm Updates</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>Twitter: Prioritizing conversation and replies</li>
                            <li>LinkedIn: Favoring authentic, non-promotional content</li>
                            <li>Instagram: Boosting original content and reels</li>
                            <li>Facebook: Emphasizing meaningful interactions</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-900/50 bg-purple-900/20">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Content Format Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>Twitter: Spaces, longer videos, community notes</li>
                            <li>LinkedIn: Carousels, polls, newsletters</li>
                            <li>Instagram: Reels, interactive stickers, collabs</li>
                            <li>Facebook: Live shopping, groups, short-form video</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
