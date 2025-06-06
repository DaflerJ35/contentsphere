import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })
    const { data: { session } } = await supabase.auth.getSession()

    // If user is not signed in and the current path is not /login,
    // redirect the user to /login
    if (!session && req.nextUrl.pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // If user is signed in and the current path is /login,
    // redirect the user to /dashboard
    if (session && req.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return res
  } catch (error) {
    // If there's an error (like missing env vars), allow the request to proceed
    // This prevents the app from breaking in production
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
} 