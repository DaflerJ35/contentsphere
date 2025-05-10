"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { templates } from "./templates-grid"
import { Heart, Copy, ArrowRight } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"
import { useToast } from "@/components/ui/use-toast"

interface TemplateDetailModalProps {
  isOpen: boolean
  onClose: () => void
  templateId?: number
  userFavorites?: number[]
  onToggleFavorite?: (id: number) => void
}

export function TemplateDetailModal({
  isOpen,
  onClose,
  templateId,
  userFavorites = [],
  onToggleFavorite,
}: TemplateDetailModalProps) {
  const [template, setTemplate] = useState<any>(null)
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    if (templateId) {
      const selectedTemplate = templates.find((t) => t.id === templateId)
      setTemplate(selectedTemplate)
    }
  }, [templateId])

  const handleUseTemplate = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to use this template.",
        variant: "destructive",
      })
      return
    }

    // Logic to use the template
    toast({
      title: "Template selected",
      description: `You're now using the "${template?.title}" template.`,
    })

    onClose()
  }

  if (!template) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] border-purple-800/20 bg-gray-900/95 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900/30 text-purple-400">
                {template.icon}
              </div>
              <DialogTitle className="text-xl font-semibold">{template.title}</DialogTitle>
            </div>
            {user && onToggleFavorite && (
              <Button
                variant="outline"
                size="sm"
                className="border-purple-800/30 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => onToggleFavorite(template.id)}
              >
                <Heart
                  className={`mr-2 h-4 w-4 ${
                    userFavorites.includes(template.id) ? "fill-purple-400 text-purple-400" : ""
                  }`}
                />
                {userFavorites.includes(template.id) ? "Favorited" : "Add to Favorites"}
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="grid gap-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-400">Description</h3>
            <p className="text-gray-300">{template.description}</p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-400">Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {template.platforms.map((platform: string) => (
                <span key={platform} className="rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-400">Preview</h3>
            <div className="rounded-lg border border-purple-800/20 bg-gray-800/50 p-4">
              <p className="text-gray-400">Template preview content would appear here.</p>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <Copy className="mr-2 h-4 w-4" />
              Duplicate
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/30 hover:from-purple-600 hover:to-indigo-600"
              onClick={handleUseTemplate}
            >
              Use Template
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
