"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      setIsSubmitted(true)
      toast({
        title: "Password reset email sent",
        description: "Check your email for a link to reset your password.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while sending the password reset email.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto border-purple-800/20 bg-gray-900/80 shadow-xl shadow-purple-900/5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Forgot Password</CardTitle>
        <CardDescription className="text-gray-400">
          Enter your email address and we'll send you a link to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-4">
            <h3 className="text-lg font-medium text-white mb-2">Check your email</h3>
            <p className="text-gray-400 mb-4">
              We've sent a password reset link to <span className="text-purple-400">{email}</span>
            </p>
            <p className="text-sm text-gray-500">
              Didn't receive an email? Check your spam folder or{" "}
              <button className="text-purple-400 hover:text-purple-300" onClick={() => setIsSubmitted(false)}>
                try again
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800/50 border-purple-800/30 text-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/30 hover:from-purple-600 hover:to-indigo-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t border-purple-800/20 pt-4">
        <p className="text-sm text-gray-400">
          Remember your password?{" "}
          <a href="/sign-in" className="text-purple-400 hover:text-purple-300">
            Sign in
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
