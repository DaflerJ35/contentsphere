import { DashboardLayout } from "@/components/dashboard-layout"

export default function PerformancePage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold text-white">Performance Analytics</h1>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Total Impressions</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
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
                  className="h-4 w-4 text-purple-400"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">2.4M</p>
            <p className="mt-1 text-sm text-gray-400">+18.2% from last month</p>
          </div>
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Engagement Rate</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
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
                  className="h-4 w-4 text-purple-400"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">5.2%</p>
            <p className="mt-1 text-sm text-gray-400">+1.5% from last month</p>
          </div>
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Click-Through Rate</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
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
                  className="h-4 w-4 text-purple-400"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">3.8%</p>
            <p className="mt-1 text-sm text-gray-400">+0.7% from last month</p>
          </div>
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Conversion Rate</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
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
                  className="h-4 w-4 text-purple-400"
                >
                  <path d="M12 2v20" />
                  <path d="m19 15-7 7-7-7" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">2.1%</p>
            <p className="mt-1 text-sm text-gray-400">+0.4% from last month</p>
          </div>
        </div>

        <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-medium text-white mb-4">Performance Trends</h3>
          <div className="h-80 w-full">
            <div className="flex h-full items-end gap-2">
              {Array.from({ length: 30 }).map((_, i) => {
                const height = 30 + Math.random() * 70
                return (
                  <div key={i} className="group relative flex-1">
                    <div
                      className="h-full rounded-t-sm bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-300 hover:from-purple-500 hover:to-purple-300"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
                      {Math.round(height * 1000)} views
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-400">
              <span>May 1</span>
              <span>May 15</span>
              <span>May 30</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white mb-4">Top Performing Content</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20">
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
                    className="h-6 w-6 text-purple-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">5 Tips for Better Content</p>
                  <p className="text-xs text-gray-400">Instagram Carousel • May 15, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">24.8K</p>
                  <p className="text-xs text-gray-400">Impressions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20">
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
                    className="h-6 w-6 text-purple-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">The Future of Content Marketing</p>
                  <p className="text-xs text-gray-400">LinkedIn Article • May 10, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">18.3K</p>
                  <p className="text-xs text-gray-400">Impressions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20">
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
                    className="h-6 w-6 text-purple-400"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">AI Tools for Content Creators</p>
                  <p className="text-xs text-gray-400">Twitter Thread • May 8, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">15.6K</p>
                  <p className="text-xs text-gray-400">Impressions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20">
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
                    className="h-6 w-6 text-purple-400"
                  >
                    <path d="M9 12 2 4V2h20v2l-7 8" />
                    <path d="M12 13v9" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Content Creation Hacks</p>
                  <p className="text-xs text-gray-400">TikTok Video • May 5, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">12.9K</p>
                  <p className="text-xs text-gray-400">Impressions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white mb-4">Platform Performance</h3>
            <div className="space-y-6">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                    <p className="text-sm font-medium text-white">Instagram</p>
                  </div>
                  <p className="text-sm font-medium text-white">85%</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-pink-500 to-pink-400"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                    <p className="text-sm font-medium text-white">Twitter</p>
                  </div>
                  <p className="text-sm font-medium text-white">72%</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                    <p className="text-sm font-medium text-white">LinkedIn</p>
                  </div>
                  <p className="text-sm font-medium text-white">68%</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                    <p className="text-sm font-medium text-white">TikTok</p>
                  </div>
                  <p className="text-sm font-medium text-white">91%</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-teal-500 to-teal-400"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                      className="h-4 w-4 text-indigo-400"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <p className="text-sm font-medium text-white">Facebook</p>
                  </div>
                  <p className="text-sm font-medium text-white">53%</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[53%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">Content Performance Metrics</h3>
            <div className="flex items-center gap-2">
              <button className="rounded-md bg-purple-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-700">
                Export Report
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-purple-900/20">
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Content</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Platform</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Date</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Impressions</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Engagement</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">CTR</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-400">Conversions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">5 Tips for Better Content</td>
                  <td className="py-4 text-sm text-white">Instagram</td>
                  <td className="py-4 text-sm text-white">May 15, 2025</td>
                  <td className="py-4 text-sm text-white">24,832</td>
                  <td className="py-4 text-sm text-white">1,842</td>
                  <td className="py-4 text-sm text-white">4.2%</td>
                  <td className="py-4 text-sm text-white">128</td>
                </tr>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">The Future of Content Marketing</td>
                  <td className="py-4 text-sm text-white">LinkedIn</td>
                  <td className="py-4 text-sm text-white">May 10, 2025</td>
                  <td className="py-4 text-sm text-white">18,342</td>
                  <td className="py-4 text-sm text-white">1,256</td>
                  <td className="py-4 text-sm text-white">3.8%</td>
                  <td className="py-4 text-sm text-white">95</td>
                </tr>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">AI Tools for Content Creators</td>
                  <td className="py-4 text-sm text-white">Twitter</td>
                  <td className="py-4 text-sm text-white">May 8, 2025</td>
                  <td className="py-4 text-sm text-white">15,621</td>
                  <td className="py-4 text-sm text-white">982</td>
                  <td className="py-4 text-sm text-white">3.5%</td>
                  <td className="py-4 text-sm text-white">78</td>
                </tr>
                <tr className="border-b border-purple-900/10">
                  <td className="py-4 text-sm text-white">Content Creation Hacks</td>
                  <td className="py-4 text-sm text-white">TikTok</td>
                  <td className="py-4 text-sm text-white">May 5, 2025</td>
                  <td className="py-4 text-sm text-white">12,932</td>
                  <td className="py-4 text-sm text-white">1,532</td>
                  <td className="py-4 text-sm text-white">5.1%</td>
                  <td className="py-4 text-sm text-white">112</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-white">Quick Content Repurposing Tips</td>
                  <td className="py-4 text-sm text-white">YouTube</td>
                  <td className="py-4 text-sm text-white">May 1, 2025</td>
                  <td className="py-4 text-sm text-white">8,745</td>
                  <td className="py-4 text-sm text-white">632</td>
                  <td className="py-4 text-sm text-white">2.8%</td>
                  <td className="py-4 text-sm text-white">45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
