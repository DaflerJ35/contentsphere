"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "./auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Upload } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileFormProps {
  profile: {
    id: string
    full_name: string
    email: string
    avatar_url: string | null
  }
}

export function ProfileForm({ profile }: ProfileFormProps) {
  const [fullName, setFullName] = useState(profile?.full_name || "")
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || "")
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user?.id)

      if (error) throw error

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while updating your profile.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return

    const file = e.target.files[0]
    const fileExt = file.name.split(".").pop()
    const filePath = `avatars/${user?.id}-${Math.random()}.${fileExt}`

    setIsUploading(true)

    try {
      // Upload the file to Supabase Storage
      const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, file)

      if (uploadError) throw uploadError

      // Get the public URL
      const { data } = supabase.storage.from("avatars").getPublicUrl(filePath)

      // Update the avatar URL
      setAvatarUrl(data.publicUrl)

      toast({
        title: "Avatar uploaded",
        description: "Your avatar has been uploaded successfully.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while uploading your avatar.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const initials = fullName
    ? fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : user?.email?.substring(0, 2).toUpperCase() || "U"

  return (
    <Card className="border-purple-800/20 bg-gray-900/80 shadow-xl shadow-purple-900/5">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">Personal Information</CardTitle>
        <CardDescription className="text-gray-400">Update your profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={avatarUrl || "/placeholder-user.jpg"} alt={fullName} />
                <AvatarFallback className="text-lg">{initials}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2">
                <Label
                  htmlFor="avatar-upload"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-500"
                >
                  {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                  <span className="sr-only">Upload avatar</span>
                </Label>
                <Input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarUpload}
                  disabled={isUploading}
                />
              </div>
            </div>
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-gray-800/50 border-purple-800/30 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="bg-gray-800/50 border-purple-800/30 text-gray-400"
                />
                <p className="text-xs text-gray-500">Email cannot be changed</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/30 hover:from-purple-600 hover:to-indigo-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
