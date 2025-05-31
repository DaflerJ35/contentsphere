import { DashboardLayout } from "@/components/dashboard-layout"

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Transformation History</h1>
        <p>View your past content transformations here.</p>
      </div>
    </DashboardLayout>
  )
}
