import { DashboardLayout } from "@/components/dashboard-layout"

export default function AudiencePage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold text-white">Audience Insights</h1>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Total Audience</h3>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">124,892</p>
            <p className="mt-1 text-sm text-gray-400">+8.2% from last month</p>
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
            <p className="mt-2 text-3xl font-bold text-white">4.8%</p>
            <p className="mt-1 text-sm text-gray-400">+1.2% from last month</p>
          </div>
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Avg. Time Spent</h3>
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">2:34</p>
            <p className="mt-1 text-sm text-gray-400">+0:18 from last month</p>
          </div>
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">New Followers</h3>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">3,487</p>
            <p className="mt-1 text-sm text-gray-400">+15.3% from last month</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white mb-4">Audience Demographics</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Age Distribution</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">18-24</span>
                      <span className="text-xs text-white">28%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">25-34</span>
                      <span className="text-xs text-white">42%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">35-44</span>
                      <span className="text-xs text-white">18%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">45-54</span>
                      <span className="text-xs text-white">8%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">55+</span>
                      <span className="text-xs text-white">4%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[4%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Gender Distribution</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 rounded-lg bg-gray-800 p-4 text-center">
                    <span className="text-2xl font-bold text-white">58%</span>
                    <p className="mt-1 text-xs text-gray-400">Female</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-gray-800 p-4 text-center">
                    <span className="text-2xl font-bold text-white">41%</span>
                    <p className="mt-1 text-xs text-gray-400">Male</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-gray-800 p-4 text-center">
                    <span className="text-2xl font-bold text-white">1%</span>
                    <p className="mt-1 text-xs text-gray-400">Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white mb-4">Geographic Distribution</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Top Countries</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">United States</span>
                      <span className="text-xs text-white">42%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">United Kingdom</span>
                      <span className="text-xs text-white">18%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">Canada</span>
                      <span className="text-xs text-white">12%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">Australia</span>
                      <span className="text-xs text-white">8%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">Germany</span>
                      <span className="text-xs text-white">6%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[6%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white">Other</span>
                      <span className="text-xs text-white">14%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <div className="h-full w-[14%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Language</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-gray-800 p-3 text-center">
                    <span className="text-lg font-bold text-white">76%</span>
                    <p className="mt-1 text-xs text-gray-400">English</p>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-3 text-center">
                    <span className="text-lg font-bold text-white">8%</span>
                    <p className="mt-1 text-xs text-gray-400">Spanish</p>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-3 text-center">
                    <span className="text-lg font-bold text-white">6%</span>
                    <p className="mt-1 text-xs text-gray-400">French</p>
                  </div>
                  <div className="rounded-lg bg-gray-800 p-3 text-center">
                    <span className="text-lg font-bold text-white">10%</span>
                    <p className="mt-1 text-xs text-gray-400">Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-purple-900/20 bg-[#0f0a19]/80 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-medium text-white mb-4">Audience Interests</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800/50 p-4">
              <h4 className="text-sm font-medium text-white mb-2">Content Categories</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-white">Technology (32%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-white">Business (24%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-white">Marketing (18%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-white">Design (14%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-xs text-white">Other (12%)</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800/50 p-4">
              <h4 className="text-sm font-medium text-white mb-2">Content Format Preferences</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-white">Video (45%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-white">Images (28%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-white">Text (15%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-white">Audio (12%)</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800/50 p-4">
              <h4 className="text-sm font-medium text-white mb-2">Engagement Patterns</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-white">Morning (6-10 AM): 22%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-white">Midday (10-2 PM): 18%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-white">Afternoon (2-6 PM): 24%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-white">Evening (6-10 PM): 28%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-xs text-white">Night (10 PM-6 AM): 8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
