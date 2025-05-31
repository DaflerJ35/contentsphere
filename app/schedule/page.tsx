import { DashboardLayout } from "@/components/dashboard-layout"

export default function SchedulePage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold text-white">Content Schedule</h1>

        <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Upcoming Posts</h2>
            <button className="flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
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
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Schedule New Post
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-purple-900/20">
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Platform</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Content Type</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Title</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Date</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Time</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Status</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600/20">
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
                          className="h-4 w-4 text-pink-400"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </div>
                      Instagram
                    </div>
                  </td>
                  <td className="py-4 text-sm text-white">Carousel</td>
                  <td className="py-4 text-sm text-white">5 Tips for Better Content</td>
                  <td className="py-4 text-sm text-white">May 21, 2025</td>
                  <td className="py-4 text-sm text-white">10:00 AM</td>
                  <td className="py-4 text-sm text-white">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Ready
                    </span>
                  </td>
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </button>
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20">
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
                          className="h-4 w-4 text-blue-400"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </div>
                      LinkedIn
                    </div>
                  </td>
                  <td className="py-4 text-sm text-white">Article</td>
                  <td className="py-4 text-sm text-white">The Future of Content Marketing</td>
                  <td className="py-4 text-sm text-white">May 22, 2025</td>
                  <td className="py-4 text-sm text-white">2:30 PM</td>
                  <td className="py-4 text-sm text-white">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Draft
                    </span>
                  </td>
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </button>
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600/20">
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
                          className="h-4 w-4 text-cyan-400"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </div>
                      Twitter
                    </div>
                  </td>
                  <td className="py-4 text-sm text-white">Thread</td>
                  <td className="py-4 text-sm text-white">AI Tools for Content Creators</td>
                  <td className="py-4 text-sm text-white">May 23, 2025</td>
                  <td className="py-4 text-sm text-white">9:15 AM</td>
                  <td className="py-4 text-sm text-white">
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                      In Review
                    </span>
                  </td>
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </button>
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20">
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
                          className="h-4 w-4 text-red-400"
                        >
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                          <path d="m10 15 5-3-5-3z" />
                        </svg>
                      </div>
                      YouTube
                    </div>
                  </td>
                  <td className="py-4 text-sm text-white">Short</td>
                  <td className="py-4 text-sm text-white">Quick Content Repurposing Tips</td>
                  <td className="py-4 text-sm text-white">May 24, 2025</td>
                  <td className="py-4 text-sm text-white">3:45 PM</td>
                  <td className="py-4 text-sm text-white">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Ready
                    </span>
                  </td>
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </button>
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600/20">
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
                          className="h-4 w-4 text-teal-400"
                        >
                          <path d="M9 12 2 4V2h20v2l-7 8" />
                          <path d="M12 13v9" />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
                      TikTok
                    </div>
                  </td>
                  <td className="py-4 text-sm text-white">Video</td>
                  <td className="py-4 text-sm text-white">Content Creation Hacks</td>
                  <td className="py-4 text-sm text-white">May 25, 2025</td>
                  <td className="py-4 text-sm text-white">11:30 AM</td>
                  <td className="py-4 text-sm text-white">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Draft
                    </span>
                  </td>
                  <td className="py-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </button>
                      <button className="rounded-md bg-gray-800 p-1.5 text-gray-400 hover:text-white">
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
                          className="h-4 w-4"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4">Calendar View</h2>
            <div className="grid grid-cols-7 gap-1">
              <div className="text-center text-xs font-medium text-gray-400">Sun</div>
              <div className="text-center text-xs font-medium text-gray-400">Mon</div>
              <div className="text-center text-xs font-medium text-gray-400">Tue</div>
              <div className="text-center text-xs font-medium text-gray-400">Wed</div>
              <div className="text-center text-xs font-medium text-gray-400">Thu</div>
              <div className="text-center text-xs font-medium text-gray-400">Fri</div>
              <div className="text-center text-xs font-medium text-gray-400">Sat</div>

              {/* Calendar days */}
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 4 // Start from previous month
                const isCurrentMonth = day > 0 && day <= 31
                const hasPost = [3, 8, 12, 15, 21, 27].includes(day)

                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-md flex flex-col items-center justify-center ${
                      isCurrentMonth
                        ? hasPost
                          ? "bg-purple-900/30 text-white"
                          : "bg-gray-800/30 text-white"
                        : "bg-gray-800/10 text-gray-500"
                    }`}
                  >
                    <span className="text-xs">{isCurrentMonth ? day : day <= 0 ? 30 + day : day - 31}</span>
                    {hasPost && <div className="mt-1 h-1 w-1 rounded-full bg-purple-400"></div>}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4">Platform Distribution</h2>
            <div className="flex items-center justify-center h-64">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600/20 mb-2">
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
                      className="h-6 w-6 text-pink-400"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">Instagram</span>
                  <span className="text-2xl font-bold text-white mt-1">8</span>
                  <span className="text-xs text-gray-400">scheduled posts</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 mb-2">
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
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">LinkedIn</span>
                  <span className="text-2xl font-bold text-white mt-1">5</span>
                  <span className="text-xs text-gray-400">scheduled posts</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600/20 mb-2">
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
                      className="h-6 w-6 text-cyan-400"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">Twitter</span>
                  <span className="text-2xl font-bold text-white mt-1">6</span>
                  <span className="text-xs text-gray-400">scheduled posts</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/20 mb-2">
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
                      className="h-6 w-6 text-teal-400"
                    >
                      <path d="M9 12 2 4V2h20v2l-7 8" />
                      <path d="M12 13v9" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">TikTok</span>
                  <span className="text-2xl font-bold text-white mt-1">4</span>
                  <span className="text-xs text-gray-400">scheduled posts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
