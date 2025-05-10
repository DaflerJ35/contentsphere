import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"
import { templates } from "@/components/templates-grid"

export async function POST() {
  try {
    const supabase = createServerSupabaseClient()

    // Check if templates already exist
    const { count } = await supabase.from("templates").select("*", { count: "exact", head: true })

    if (count && count > 0) {
      return NextResponse.json({ message: "Templates already seeded", count }, { status: 200 })
    }

    // Convert the templates from the frontend to the database format
    const templatesForDB = templates.map((template) => ({
      id: template.id,
      title: template.title,
      description: template.description,
      category: template.category,
      icon: JSON.stringify(template.icon),
      platforms: template.platforms,
      is_popular: template.popular || false,
      is_new: template.new || false,
    }))

    // Insert templates in batches to avoid request size limits
    const batchSize = 50
    for (let i = 0; i < templatesForDB.length; i += batchSize) {
      const batch = templatesForDB.slice(i, i + batchSize)
      const { error } = await supabase.from("templates").insert(batch)
      if (error) {
        console.error("Error seeding templates:", error)
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
    }

    return NextResponse.json(
      {
        message: "Templates seeded successfully",
        count: templatesForDB.length,
      },
      { status: 200 },
    )
  } catch (error: any) {
    console.error("Error in seed-templates route:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
