"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function SignUpForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signUp } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const { error, user } = await signUp(email, password, fullName)

      if (error) {
        toast({
          title: "Error signing up",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      })

      // If email confirmation is not required, redirect to dashboard
      if (user) {
        router.push("/dashboard")
      } else {
        router.push("/sign-in")
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign up.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto border-purple-800/20 bg-gray-900/80 shadow-xl shadow-purple-900/5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Create an Account</CardTitle>
        <CardDescription className="text-gray-400">Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
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
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800/50 border-purple-800/30 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800/50 border-purple-800/30 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-purple-800/20 pt-4">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/sign-in" className="text-purple-400 hover:text-purple-300">
            Sign in
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
