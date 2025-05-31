"use client"

export function AudienceInsights() {
  return (
    <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <circle cx="12" cy="10" r="2" />
              <line x1="8" x2="8" y1="2" y2="4" />
              <line x1="16" x2="16" y1="2" y2="4" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Audience Insights</h2>
            <p className="text-sm text-gray-400">Understand who you're creating for</p>
          </div>
        </div>
        <div className="rounded-md bg-purple-900/30 px-2 py-1">
          <span className="text-xs font-medium text-purple-400">Pro Feature</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-400">Demographics</h3>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-medium text-gray-500">Age</h4>
            <p className="text-sm font-medium text-white">25-34 (42%)</p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500">Gender</h4>
            <p className="text-sm font-medium text-white">Female (58%)</p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500">Location</h4>
            <p className="text-sm font-medium text-white">United States</p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500">Language</h4>
            <p className="text-sm font-medium text-white">English</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-400">Interests</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">
            Technology
          </span>
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">Marketing</span>
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">Business</span>
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">
            Social Media
          </span>
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">Design</span>
        </div>
      </div>
    </div>
  )
}
