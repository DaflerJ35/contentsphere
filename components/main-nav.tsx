import Link from "next/link"
import { SparklesIcon } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 shadow-lg shadow-purple-900/30">
          <SparklesIcon className="h-6 w-6 text-white" />
        </div>
        <span className="hidden bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-xl font-bold text-transparent sm:inline-block">
          ContentSphere
        </span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link
          href="/dashboard"
          className="flex items-center text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/templates"
          className="flex items-center text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          Templates
        </Link>
        <Link
          href="/analytics"
          className="flex items-center text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          Analytics
        </Link>
        <Link
          href="/settings"
          className="flex items-center text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          Settings
        </Link>
      </nav>
    </div>
  )
}
