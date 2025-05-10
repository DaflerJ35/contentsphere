import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import ContentTransformer from "@/components/content-transformer"

export const metadata: Metadata = {
  title: "Dashboard | ContentSphere",
  description: "Transform your content into optimized formats for every platform",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <ContentTransformer />
    </DashboardShell>
  )
}
