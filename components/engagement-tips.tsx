import { Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EngagementTips() {
  return (
    <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 p-2 shadow-lg shadow-amber-900/20">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <CardTitle>Engagement Tips</CardTitle>
          </div>
          <Badge variant="outline" className="border-purple-500/20 bg-purple-500/10 text-purple-400">
            Pro Feature
          </Badge>
        </div>
        <CardDescription className="text-gray-400">Platform-specific optimization tips</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1DA1F2] shadow-lg shadow-[#1DA1F2]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-white">Twitter</h4>
            </div>
            <ul className="ml-8 list-disc space-y-1 text-xs text-gray-400">
              <li>Keep tweets under 100 characters for 18% more engagement</li>
              <li>Include 1-2 relevant hashtags (not more)</li>
              <li>Add a question to increase replies by 25%</li>
            </ul>
          </div>

          <div className="rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2] shadow-lg shadow-[#0A66C2]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-white">LinkedIn</h4>
            </div>
            <ul className="ml-8 list-disc space-y-1 text-xs text-gray-400">
              <li>Use professional tone and industry-specific terms</li>
              <li>Include statistics and data points when possible</li>
              <li>Optimal post length: 1,500-2,000 characters</li>
            </ul>
          </div>

          <div className="rounded-md border border-purple-800/20 bg-gray-800/30 p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] shadow-lg shadow-[#F56040]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-white">Instagram</h4>
            </div>
            <ul className="ml-8 list-disc space-y-1 text-xs text-gray-400">
              <li>Use 5-10 relevant hashtags for optimal reach</li>
              <li>Keep captions under 125 characters</li>
              <li>Include a question or call-to-action</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
