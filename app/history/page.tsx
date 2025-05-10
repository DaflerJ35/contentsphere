import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { ContentHistoryList } from "@/components/content-history-list"
import { Button } from "@/components/ui/button"
import { Filter, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Content History | ContentSphere",
  description: "View and manage your content transformation history",
}

export default function HistoryPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Content History
          </h1>
          <p className="text-gray-400">View and manage your previous content transformations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
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
      <ContentHistoryList />
    </DashboardShell>
  )
}
