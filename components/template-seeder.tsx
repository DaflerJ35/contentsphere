"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function TemplateSeeder() {
  const [seeded, setSeeded] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    async function seedTemplates() {
      try {
        const response = await fetch("/api/seed-templates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Failed to seed templates")
        }

        setSeeded(true)
        console.log("Templates seeded:", data)
      } catch (error: any) {
        console.error("Error seeding templates:", error)
        toast({
          title: "Error",
          description: "Failed to initialize templates. Some features may not work correctly.",
          variant: "destructive",
        })
      }
    }

    if (!seeded) {
      seedTemplates()
    }
  }, [toast, seeded])

  // This component doesn't render anything
  return null
}
