"use client"

import { Check } from "lucide-react"
import { useState } from "react"

export function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500">
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
            <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
            <circle cx="17" cy="7" r="5" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Subscription Plans</h2>
          <p className="text-sm text-gray-400">Upgrade to unlock premium features</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-md bg-orange-500/20 px-3 py-1">
        <span className="text-sm font-medium text-orange-400">25% OFF</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-md bg-purple-900/30 p-1">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`flex-1 rounded-md px-3 py-1 text-sm font-medium ${
            billingCycle === "monthly" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`flex-1 rounded-md px-3 py-1 text-sm font-medium ${
            billingCycle === "yearly" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Yearly
          <span className="ml-1 text-xs text-green-400">Save 20%</span>
        </button>
      </div>

      <div className="mt-4 rounded-lg bg-purple-900/20 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Professional</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">$79</div>
            <div className="text-xs text-gray-400">per month</div>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-400">For content creators and marketers</p>

        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300">200 transformations per month</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300">All platforms supported</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300">Advanced customization options</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300">Content performance analytics</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300">Priority support</span>
          </li>
        </ul>

        <button className="mt-4 w-full rounded-md bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700">
          Upgrade to Pro
        </button>

        <div className="mt-3 flex items-center justify-center gap-1 text-xs text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          Compare all plans
          <span className="ml-2 text-xs text-gray-500">Starter plan also available at $29/mo</span>
        </div>
      </div>
    </div>
  )
}
