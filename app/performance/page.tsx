import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { PerformanceDashboard } from "@/components/performance-dashboard"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { DateRangePicker } from "@/components/date-range-picker"
import { ContentTypeFilter } from "@/components/content-type-filter"

export const metadata: Metadata = {
  title: "Content Performance | ContentSphere",
  description: "Analyze the performance of your content across platforms",
}

export default function PerformancePage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Content Performance
          </h1>
          <p className="text-gray-400">Analyze the performance of your content across platforms</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <ContentTypeFilter />
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
      <PerformanceDashboard />
    </DashboardShell>
  )
}
