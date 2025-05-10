"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { Users, Globe, Clock, Smartphone, Laptop, Target, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AudienceDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Total Audience</CardTitle>
                <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">142,891</div>
              <div className="mt-1 flex items-center gap-1">
                <span className="flex items-center text-xs text-green-400">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +12.5% growth
                </span>
                <span className="text-xs text-gray-500">vs. last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Top Location</CardTitle>
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-2 shadow-lg shadow-blue-900/20">
                  <Globe className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">United States</div>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-xs text-gray-400">42% of audience</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Peak Activity</CardTitle>
                <div className="rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-2 shadow-lg shadow-amber-900/20">
                  <Clock className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">6-9 PM</div>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-xs text-gray-400">Weekdays</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Device Usage</CardTitle>
                <div className="rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 p-2 shadow-lg shadow-green-900/20">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">78% Mobile</div>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-xs text-gray-400">22% Desktop</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <CardTitle>Demographics</CardTitle>
              <CardDescription className="text-gray-400">Age and gender distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-4 text-sm font-medium text-gray-400">Age Distribution</h4>
                  <PieChart
                    data={[
                      { name: "18-24", value: 15 },
                      { name: "25-34", value: 42 },
                      { name: "35-44", value: 25 },
                      { name: "45-54", value: 12 },
                      { name: "55+", value: 6 },
                    ]}
                    className="aspect-square"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-medium text-gray-400">Gender Distribution</h4>
                  <PieChart
                    data={[
                      { name: "Female", value: 58 },
                      { name: "Male", value: 40 },
                      { name: "Other", value: 2 },
                    ]}
                    className="aspect-square"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <CardTitle>Audience Growth</CardTitle>
              <CardDescription className="text-gray-400">Monthly audience growth trend</CardDescription>
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
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-400" />
                <CardTitle>Interests</CardTitle>
              </div>
              <CardDescription className="text-gray-400">Top audience interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Technology", percentage: 78 },
                  { name: "Marketing", percentage: 65 },
                  { name: "Business", percentage: 58 },
                  { name: "Social Media", percentage: 52 },
                  { name: "Design", percentage: 45 },
                ].map((interest) => (
                  <div key={interest.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{interest.name}</span>
                      <span className="font-medium text-gray-300">{interest.percentage}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: `${interest.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-400" />
                <CardTitle>Locations</CardTitle>
              </div>
              <CardDescription className="text-gray-400">Top audience locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "United States", percentage: 42 },
                  { name: "United Kingdom", percentage: 18 },
                  { name: "Canada", percentage: 12 },
                  { name: "Australia", percentage: 8 },
                  { name: "Germany", percentage: 6 },
                  { name: "France", percentage: 4 },
                  { name: "Other", percentage: 10 },
                ].map((location) => (
                  <div key={location.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{location.name}</span>
                      <span className="font-medium text-gray-300">{location.percentage}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-purple-400" />
                <CardTitle>Devices & Platforms</CardTitle>
              </div>
              <CardDescription className="text-gray-400">Device and platform usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-400">Device Type</h4>
                  <BarChart
                    data={[
                      { name: "Mobile", value: 78 },
                      { name: "Desktop", value: 18 },
                      { name: "Tablet", value: 4 },
                    ]}
                    className="aspect-[3/2]"
                  />
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-400">Browser</h4>
                  <BarChart
                    data={[
                      { name: "Chrome", value: 62 },
                      { name: "Safari", value: 24 },
                      { name: "Firefox", value: 8 },
                      { name: "Edge", value: 6 },
                    ]}
                    className="aspect-[3/2]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* New section: Audience Segments */}
      <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Audience Segments</CardTitle>
              <CardDescription className="text-gray-400">
                Key audience groups based on behavior and demographics
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Create Segment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Active Engagers",
                description: "Users who regularly interact with your content",
                count: "32,450",
                growth: "+8.2%",
                badges: ["High Value", "Loyal"],
              },
              {
                name: "New Followers",
                description: "Users who started following in the last 30 days",
                count: "5,823",
                growth: "+24.5%",
                badges: ["Growing", "New"],
              },
              {
                name: "Content Creators",
                description: "Users who create similar content in your niche",
                count: "12,105",
                growth: "+3.7%",
                badges: ["Influencers", "Partners"],
              },
              {
                name: "Decision Makers",
                description: "Senior professionals with purchasing power",
                count: "18,720",
                growth: "+5.1%",
                badges: ["B2B", "Enterprise"],
              },
              {
                name: "Casual Browsers",
                description: "Users who view but rarely engage with content",
                count: "45,290",
                growth: "+12.3%",
                badges: ["Conversion Target"],
              },
              {
                name: "Brand Advocates",
                description: "Users who frequently share your content",
                count: "8,450",
                growth: "+7.8%",
                badges: ["High Value", "Promoters"],
              },
            ].map((segment, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="rounded-lg border border-purple-800/20 bg-gray-800/30 p-4"
              >
                <h3 className="text-lg font-medium text-white">{segment.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{segment.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xl font-bold text-white">{segment.count}</div>
                  <div className="flex items-center text-xs text-green-400">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    {segment.growth}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {segment.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} className="bg-purple-500/20 text-purple-400">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
