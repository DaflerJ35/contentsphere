import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { DateRangePicker } from "@/components/date-range-picker"

export const metadata: Metadata = {
  title: "Content Analytics | ContentSphere",
  description: "Track and analyze your content performance across platforms",
}

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Content Analytics
          </h1>
          <p className="text-gray-400">Track and analyze your content performance across platforms</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <DateRangePicker />
          <Button
            variant="outline"
            size="sm"
            className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <AnalyticsDashboard />
    </DashboardShell>
  )
}
