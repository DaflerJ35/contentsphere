import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { SeoDashboard } from "@/components/seo-dashboard"
import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"
import { SeoContentFilter } from "@/components/seo-content-filter"

export const metadata: Metadata = {
  title: "SEO Analysis | ContentSphere",
  description: "Optimize your content for search engines",
}

export default function SeoPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            SEO Analysis
          </h1>
          <p className="text-gray-400">Optimize your content for search engines</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <SeoContentFilter />
          <Button
            variant="outline"
            size="sm"
            className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
            <Plus className="mr-2 h-4 w-4" />
            New Analysis
          </Button>
        </div>
      </div>
      <SeoDashboard />
    </DashboardShell>
  )
}
