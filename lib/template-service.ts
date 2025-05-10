import { supabase } from "./supabase"
import { templates } from "@/components/templates-grid"

export interface Template {
  id: number
  title: string
  description: string
  category: string
  icon: string
  platforms: string[]
  is_popular: boolean
  is_new: boolean
}

export interface UserTemplate {
  id: number
  user_id: string
  template_id: number
  is_favorite: boolean
  created_at: string
  template?: Template
}

// Seed templates to the database (call this once)
export async function seedTemplates() {
  // Check if templates already exist
  const { count } = await supabase.from("templates").select("*", { count: "exact", head: true })

  if (count && count > 0) {
    console.log("Templates already seeded")
    return
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
      throw error
    }
  }

  console.log("Templates seeded successfully")
}

// Get all templates from the database
export async function getTemplates() {
  const { data, error } = await supabase.from("templates").select("*").order("id")

  if (error) {
    console.error("Error fetching templates:", error)
    throw error
  }

  return data
}

// Get user's favorite templates
export async function getUserFavorites(userId: string) {
  const { data, error } = await supabase
    .from("user_templates")
    .select(`
      *,
      template:templates(*)
    `)
    .eq("user_id", userId)
    .eq("is_favorite", true)

  if (error) {
    console.error("Error fetching user favorites:", error)
    throw error
  }

  return data
}

// Toggle favorite status for a template
export async function toggleFavorite(userId: string, templateId: number) {
  // Check if the user already has this template
  const { data: existingTemplate, error: fetchError } = await supabase
    .from("user_templates")
    .select("*")
    .eq("user_id", userId)
    .eq("template_id", templateId)
    .single()

  if (fetchError && fetchError.code !== "PGRST116") {
    // PGRST116 is "no rows returned"
    console.error("Error checking template:", fetchError)
    throw fetchError
  }

  if (existingTemplate) {
    // Toggle the favorite status
    const { error } = await supabase
      .from("user_templates")
      .update({ is_favorite: !existingTemplate.is_favorite })
      .eq("id", existingTemplate.id)

    if (error) {
      console.error("Error updating favorite status:", error)
      throw error
    }

    return { ...existingTemplate, is_favorite: !existingTemplate.is_favorite }
  } else {
    // Create a new user_template entry
    const { data, error } = await supabase
      .from("user_templates")
      .insert({
        user_id: userId,
        template_id: templateId,
        is_favorite: true,
      })
      .select()
      .single()

    if (error) {
      console.error("Error adding favorite:", error)
      throw error
    }

    return data
  }
}
