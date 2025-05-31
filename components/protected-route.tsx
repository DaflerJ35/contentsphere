"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If authentication is still loading, do nothing yet
    if (isLoading) return
    
    // If not authenticated and finished loading, redirect to login
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  // Show nothing while loading or if not authenticated
  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
      </div>
    )
  }

  // If authenticated, show the protected content
  return <>{children}</>
}