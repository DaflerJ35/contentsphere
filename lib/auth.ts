// Authentication utilities and types

export interface User {
  id: string
  name: string
  email: string
  image?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Mock authentication function - in a real app, this would connect to a backend
export async function signIn(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
  // This is a mock implementation
  // In a real app, you would validate credentials against your backend
  
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // For demo purposes, accept any email with a password longer than 5 characters
  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters" }
  }
  
  // Create a mock user
  const user: User = {
    id: "user-1",
    name: email.split("@")[0],
    email: email,
    image: "/placeholder-user.jpg"
  }
  
  // Store user in localStorage for persistence
  localStorage.setItem("auth-user", JSON.stringify(user))
  
  return { success: true, user }
}

export async function signUp(name: string, email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
  // This is a mock implementation
  // In a real app, you would register the user in your backend
  
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Validate inputs
  if (!name || !email || !password) {
    return { success: false, error: "All fields are required" }
  }
  
  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters" }
  }
  
  // Create a mock user
  const user: User = {
    id: "user-" + Math.random().toString(36).substring(2, 9),
    name,
    email,
    image: "/placeholder-user.jpg"
  }
  
  // Store user in localStorage for persistence
  localStorage.setItem("auth-user", JSON.stringify(user))
  
  return { success: true, user }
}

export function signOut(): void {
  // Remove user from localStorage
  localStorage.removeItem("auth-user")
}

export function getUser(): User | null {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return null
  }
  
  // Get user from localStorage
  const userJson = localStorage.getItem("auth-user")
  if (!userJson) {
    return null
  }
  
  try {
    return JSON.parse(userJson) as User
  } catch (error) {
    console.error("Failed to parse user from localStorage", error)
    return null
  }
}