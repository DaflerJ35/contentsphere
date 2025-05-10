import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function middleware(request: NextRequest) {
  // Create a Supabase client configured to use cookies
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  const supabase = createClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value
      },
    },
  })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If no session and trying to access protected routes
  const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/templates",
    "/transform",
    "/history",
    "/schedule",
    "/analytics",
    "/audience",
    "/performance",
    "/seo",
  ]
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // Auth routes that logged-in users shouldn't access
  const authRoutes = ["/sign-in", "/sign-up"]
  const isAuthRoute = authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  if (!session && isProtectedRoute) {
    // Redirect to login if accessing protected route without session
    const redirectUrl = new URL("/sign-in", request.url)
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  if (session && isAuthRoute) {
    // Redirect to dashboard if accessing auth routes with active session
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Protected routes
    "/dashboard/:path*",
    "/profile/:path*",
    "/templates/:path*",
    "/transform/:path*",
    "/history/:path*",
    "/schedule/:path*",
    "/analytics/:path*",
    "/audience/:path*",
    "/performance/:path*",
    "/seo/:path*",
    // Auth routes
    "/sign-in/:path*",
    "/sign-up/:path*",
  ],
}
