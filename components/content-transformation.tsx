"use client"

import { Clock, Download, FileText, Link2, Upload } from "lucide-react"
import { useState } from "react"

export function ContentTransformation() {
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    twitter: true,
    linkedin: true,
    instagram: true,
    facebook: false,
    tiktok: false,
    youtube: false,
    blog: false,
  })

  const togglePlatform = (platform: keyof typeof selectedPlatforms) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-400">Content Transformation</h1>
          <p className="text-sm text-gray-400">Transform your content for multiple platforms in seconds</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-md border border-purple-900/50 bg-purple-900/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-900/30">
            <Clock className="h-4 w-4" />
            History
          </button>
          <button className="flex items-center gap-2 rounded-md border border-purple-900/50 bg-purple-900/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-900/30">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-900/50 text-purple-400">
            <FileText className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white">Content Source</h2>
            <p className="text-sm text-gray-400">Choose how you want to input your content</p>
          </div>
          <div className="rounded-md bg-purple-900/30 px-2 py-1">
            <span className="text-xs font-medium text-purple-400">Pro Feature</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <button className="flex items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
            <FileText className="h-4 w-4" />
            Manual Entry
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border border-purple-900/50 bg-purple-900/20 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-purple-900/30">
            <Link2 className="h-4 w-4" />
            URL Import
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border border-purple-900/50 bg-purple-900/20 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-purple-900/30">
            <Upload className="h-4 w-4" />
            File Upload
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-white">Content Type</label>
          <div className="mt-1.5">
            <button className="flex w-full items-center justify-between rounded-md border border-purple-900/50 bg-purple-900/20 px-4 py-2.5 text-left text-sm font-medium text-white hover:bg-purple-900/30">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-purple-400" />
                Blog Post
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-gray-400"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-white">Your Content</label>
          <div className="mt-1.5">
            <textarea
              className="w-full rounded-md border border-purple-900/50 bg-purple-900/20 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              rows={6}
              placeholder="Paste your content here (blog post, article, social media post, etc.)"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-900/50 text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white">Target Platforms</h2>
            <p className="text-sm text-gray-400">Select the platforms you want to optimize for</p>
          </div>
          <button className="flex items-center gap-2 rounded-md border border-purple-900/50 bg-purple-900/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-900/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Save as Preset
          </button>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="twitter"
              checked={selectedPlatforms.twitter}
              onChange={() => togglePlatform("twitter")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="twitter" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              Twitter
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="linkedin"
              checked={selectedPlatforms.linkedin}
              onChange={() => togglePlatform("linkedin")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="linkedin" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              LinkedIn
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="instagram"
              checked={selectedPlatforms.instagram}
              onChange={() => togglePlatform("instagram")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="instagram" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              Instagram
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="facebook"
              checked={selectedPlatforms.facebook}
              onChange={() => togglePlatform("facebook")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="facebook" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              Facebook
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="tiktok"
              checked={selectedPlatforms.tiktok}
              onChange={() => togglePlatform("tiktok")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="tiktok" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M7 8v8" />
                  <path d="M15 8v8" />
                  <path d="M15 8a4 4 0 0 0-4-4" />
                  <path d="M19 8a4 4 0 0 0-4-4" />
                  <path d="M19 8v8" />
                  <path d="M15 16a4 4 0 0 0 4 4" />
                </svg>
              </div>
              TikTok
              <span className="ml-1 rounded bg-purple-900 px-1 py-0.5 text-[10px] font-bold text-purple-300">PRO</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="youtube"
              checked={selectedPlatforms.youtube}
              onChange={() => togglePlatform("youtube")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="youtube" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </div>
              YouTube
              <span className="ml-1 rounded bg-purple-900 px-1 py-0.5 text-[10px] font-bold text-purple-300">PRO</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="blog"
              checked={selectedPlatforms.blog}
              onChange={() => togglePlatform("blog")}
              className="h-4 w-4 rounded border-gray-600 bg-purple-900/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="blog" className="flex items-center gap-2 text-sm font-medium text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              Blog
              <span className="ml-1 rounded bg-purple-900 px-1 py-0.5 text-[10px] font-bold text-purple-300">PRO</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
