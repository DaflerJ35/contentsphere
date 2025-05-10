import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard-shell"
import { SettingsTabs } from "@/components/settings-tabs"

export const metadata: Metadata = {
  title: "Account Settings | ContentSphere",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Settings
        </h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>
      <SettingsTabs />
    </DashboardShell>
  )
}
