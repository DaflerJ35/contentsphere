import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { ContentCalendar } from "@/components/content-calendar"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, List } from "lucide-react"

export const metadata: Metadata = {
  title: "Content Schedule | ContentSphere",
  description: "Schedule and manage your content publishing calendar",
}

export default function SchedulePage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Content Schedule
          </h1>
          <p className="text-gray-400">Plan and schedule your content across multiple platforms</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-purple-800/30 bg-gray-800/50 p-0.5">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-r-none bg-gray-700/80 text-white hover:bg-gray-700 hover:text-white"
            >
              <Calendar className="h-4 w-4" />
              <span className="sr-only md:not-sr-only md:ml-2">Calendar</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-l-none text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <List className="h-4 w-4" />
              <span className="sr-only md:not-sr-only md:ml-2">List</span>
            </Button>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Content
          </Button>
        </div>
      </div>
      <ContentCalendar />
    </DashboardShell>
  )
}
