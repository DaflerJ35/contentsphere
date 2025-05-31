"use client"

import { Plus, Settings } from "lucide-react"

export function TeamsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-400">Teams Management</h1>
          <p className="text-sm text-gray-400">Manage your team members and their permissions</p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
          <Plus className="h-4 w-4" />
          Invite Team Member
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Team Overview</h2>
            <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">
              Enterprise
            </span>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Active Members</span>
                <span className="text-sm font-medium text-white">12/20</span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Pending Invitations</span>
                <span className="text-sm font-medium text-white">3</span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-[15%] rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Content Created</span>
                <span className="text-sm font-medium text-white">342</span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-6">
          <h2 className="text-lg font-semibold text-white">Role Management</h2>
          <p className="text-sm text-gray-400">Define custom roles and permissions</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-md bg-purple-900/20 p-3">
              <div className="flex items-center gap-3">
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
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Admin</h3>
                  <p className="text-xs text-gray-400">Full access to all features</p>
                </div>
              </div>
              <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
                <Settings className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-md bg-purple-900/20 p-3">
              <div className="flex items-center gap-3">
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
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Editor</h3>
                  <p className="text-xs text-gray-400">Can create and edit content</p>
                </div>
              </div>
              <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
                <Settings className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-md bg-purple-900/20 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600">
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
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Viewer</h3>
                  <p className="text-xs text-gray-400">Can only view content</p>
                </div>
              </div>
              <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-6">
          <h2 className="text-lg font-semibold text-white">Team Activity</h2>
          <p className="text-sm text-gray-400">Recent team member activities</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
                <img
                  src="/diverse-group-avatars.png"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-white">
                  <span className="font-medium">Sarah Johnson</span> created a new LinkedIn post
                </p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
                <img
                  src="/diverse-group-avatars.png"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-white">
                  <span className="font-medium">Michael Chen</span> transformed content for Twitter
                </p>
                <p className="text-xs text-gray-400">Yesterday</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
                <img
                  src="/diverse-group-avatars.png"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-white">
                  <span className="font-medium">Alex Rodriguez</span> invited 2 new team members
                </p>
                <p className="text-xs text-gray-400">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Team Members</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search members..."
                className="h-9 rounded-md bg-purple-900/20 pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border border-purple-900/50">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-purple-900/50 bg-purple-900/30">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Last Active
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-900/50">
              <tr className="bg-purple-900/10">
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
                      <img
                        src="/diverse-group-avatars.png"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Sarah Johnson</p>
                      <p className="text-xs text-gray-400">sarah@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">
                    Admin
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="flex items-center gap-1 text-xs font-medium text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                    Online
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-300">Just now</td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
                    <Settings className="h-4 w-4" />
                  </button>
                </td>
              </tr>
              <tr className="bg-purple-900/10">
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
                      <img
                        src="/diverse-group-avatars.png"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Michael Chen</p>
                      <p className="text-xs text-gray-400">michael@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="rounded-full bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-400">
                    Editor
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Offline
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-300">2 hours ago</td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
                    <Settings className="h-4 w-4" />
                  </button>
                </td>
              </tr>
              <tr className="bg-purple-900/10">
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
                      <img
                        src="/diverse-group-avatars.png"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Alex Rodriguez</p>
                      <p className="text-xs text-gray-400">alex@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="rounded-full bg-green-900/30 px-2 py-1 text-xs font-medium text-green-400">
                    Viewer
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="flex items-center gap-1 text-xs font-medium text-yellow-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                    Away
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-300">Yesterday</td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button className="rounded-md bg-purple-900/30 p-1.5 text-gray-400 hover:text-white">
                    <Settings className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        \
