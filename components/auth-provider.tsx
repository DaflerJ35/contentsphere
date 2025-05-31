"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { AuthState, User, getUser } from "@/lib/auth"
import { useToast } from "@/components/ui/use-toast"

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is already logged in
    const loadUser = () => {
      const user = getUser()
      setState({
        user,
        isAuthenticated: !!user,
        isLoading: false,
      })
    }

    loadUser()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true }))
      
      // Import dynamically to avoid issues with SSR
      const auth = await import("@/lib/auth")
      const result = await auth.signIn(email, password)
      
      if (result.success && result.user) {
        setState({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
        })
        toast({
          title: "Welcome back!",
          description: `You've successfully signed in as ${result.user.name}.`,
        })
        return { success: true }
      } else {
        setState(prev => ({ ...prev, isLoading: false }))
        toast({
          variant: "destructive",
          title: "Sign in failed",
          description: result.error || "Invalid credentials",
        })
        return { success: false, error: result.error }
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }))
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: errorMessage,
      })
      return { success: false, error: errorMessage }
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true }))
      
      // Import dynamically to avoid issues with SSR
      const auth = await import("@/lib/auth")
      const result = await auth.signUp(name, email, password)
      
      if (result.success && result.user) {
        setState({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
        })
        toast({
          title: "Account created",
          description: `Welcome to ContentSphere, ${result.user.name}!`,
        })
        return { success: true }
      } else {
        setState(prev => ({ ...prev, isLoading: false }))
        toast({
          variant: "destructive",
          title: "Sign up failed",
          description: result.error || "Failed to create account",
        })
        return { success: false, error: result.error }
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }))
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: errorMessage,
      })
      return { success: false, error: errorMessage }
    }
  }

  const signOut = async () => {
    try {
      // Import dynamically to avoid issues with SSR
      const auth = await import("@/lib/auth")
      auth.signOut()
      
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      })
      
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      })
    } catch (error) {
      console.error("Sign out error:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}