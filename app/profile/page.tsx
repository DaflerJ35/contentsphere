import { createServerSupabaseClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import { ProfileForm } from "@/components/auth/profile-form"
import DashboardShell from "@/components/dashboard-shell"

export default async function ProfilePage() {
  const supabase = createServerSupabaseClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/sign-in")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

  return (
    <DashboardShell>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Your Profile
        </h1>
        <p className="text-gray-400">Manage your account settings and profile information</p>
      </div>

      <div className="grid gap-6">
        <ProfileForm profile={profile} />
      </div>
    </DashboardShell>
  )
}
