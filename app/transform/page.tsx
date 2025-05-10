import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import ContentTransformationForm from "@/components/content-transformation-form"

export const metadata: Metadata = {
  title: "Transform Content | ContentSphere",
  description: "Transform your content into optimized formats for every platform",
}

export default function TransformPage() {
  return (
    <DashboardShell>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Transform Content
        </h1>
        <p className="text-gray-400">Optimize your content for multiple platforms with AI</p>
      </div>
      <ContentTransformationForm />
    </DashboardShell>
  )
}
