"use client"

import { AppHeader } from "./app-header"
import { AppSidebar } from "./app-sidebar"
import { ContentTransformation } from "./content-transformation"
import { SubscriptionPlans } from "./subscription-plans"
import { AudienceInsights } from "./audience-insights"

export function ContentTransformationPage() {
  return (
    <div className="flex h-screen flex-col bg-[#0f0a19] text-white">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <main className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            <ContentTransformation />
          </div>
          <div className="hidden w-[350px] overflow-y-auto border-l border-purple-900/20 p-4 lg:block">
            <div className="space-y-6">
              <SubscriptionPlans />
              <AudienceInsights />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
