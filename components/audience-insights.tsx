import { Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AudienceInsights() {
  return (
    <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-2 shadow-lg shadow-blue-900/20">
              <Users className="h-5 w-5 text-white" />
            </div>
            <CardTitle>Audience Insights</CardTitle>
          </div>
          <Badge variant="outline" className="border-purple-500/20 bg-purple-500/10 text-purple-400">
            Pro Feature
          </Badge>
        </div>
        <CardDescription className="text-gray-400">Understand who you're creating for</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-300">Demographics</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-md bg-gray-800/50 p-2">
                <div className="text-xs text-gray-500">Age</div>
                <div className="text-sm font-medium text-gray-300">25-34 (42%)</div>
              </div>
              <div className="rounded-md bg-gray-800/50 p-2">
                <div className="text-xs text-gray-500">Gender</div>
                <div className="text-sm font-medium text-gray-300">Female (58%)</div>
              </div>
              <div className="rounded-md bg-gray-800/50 p-2">
                <div className="text-xs text-gray-500">Location</div>
                <div className="text-sm font-medium text-gray-300">United States</div>
              </div>
              <div className="rounded-md bg-gray-800/50 p-2">
                <div className="text-xs text-gray-500">Language</div>
                <div className="text-sm font-medium text-gray-300">English</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-300">Interests</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Technology
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Marketing
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Business
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Social Media
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Design
              </Badge>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-300">Behavior</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Active on mobile</span>
                <span className="font-medium text-gray-300">78%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-800">
                <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Peak activity time</span>
                <span className="font-medium text-gray-300">6-9 PM</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-800">
                <div className="h-2 w-[65%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
