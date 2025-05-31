"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TrendAnalysis() {
  return (
    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
      <CardHeader>
        <CardTitle>Trend Analysis</CardTitle>
        <CardDescription className="text-gray-400">Key insights from your content performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-1">Growth Trend</h3>
            <p className="text-xs text-gray-400">Your content engagement has increased by 23% over the last 30 days</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Best Performing Content</h3>
            <p className="text-xs text-gray-400">Video content generates 3.2x more engagement than static posts</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Optimal Posting Times</h3>
            <p className="text-xs text-gray-400">Tuesday-Thursday 9-11 AM shows highest engagement rates</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Audience Growth</h3>
            <p className="text-xs text-gray-400">Follower growth rate of 8.5% month-over-month across all platforms</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
