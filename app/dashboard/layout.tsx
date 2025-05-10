import type React from "react"
import { TemplateSeeder } from "@/components/template-seeder"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TemplateSeeder />
      {children}
    </>
  )
}
