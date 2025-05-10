"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  CalendarIcon,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Check,
} from "lucide-react"
import { TiktokIcon } from "@/components/tiktok-icon"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const currentDate = new Date()
const currentMonth = currentDate.toLocaleString("default", { month: "long" })
const currentYear = currentDate.getFullYear()

// Generate calendar days for the current month
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())
const firstDayOfMonth = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth())

const calendarDays = Array.from({ length: 42 }, (_, i) => {
  const dayIndex = i - firstDayOfMonth + 1
  if (dayIndex > 0 && dayIndex <= daysInMonth) {
    return dayIndex
  }
  return null
})

// Enhanced scheduled content with more details
const scheduledContent = [
  {
    day: 5,
    items: [
      {
        platform: "twitter",
        time: "9:00 AM",
        title: "Product Feature Thread",
        status: "scheduled",
      },
      {
        platform: "linkedin",
        time: "11:30 AM",
        title: "Industry Insights Article",
        status: "scheduled",
      },
    ],
  },
  {
    day: 8,
    items: [
      {
        platform: "instagram",
        time: "2:00 PM",
        title: "Behind the Scenes Photos",
        status: "scheduled",
      },
      {
        platform: "facebook",
        time: "4:30 PM",
        title: "Customer Spotlight",
        status: "draft",
      },
    ],
  },
  {
    day: 12,
    items: [
      {
        platform: "youtube",
        time: "10:00 AM",
        title: "Product Tutorial Video",
        status: "scheduled",
      },
      {
        platform: "tiktok",
        time: "3:00 PM",
        title: "Trending Challenge Participation",
        status: "draft",
      },
    ],
  },
  {
    day: 15,
    items: [
      {
        platform: "twitter",
        time: "8:30 AM",
        title: "Industry News Roundup",
        status: "scheduled",
      },
      {
        platform: "linkedin",
        time: "1:00 PM",
        title: "Company Milestone Announcement",
        status: "scheduled",
      },
    ],
  },
  {
    day: 20,
    items: [
      {
        platform: "instagram",
        time: "12:00 PM",
        title: "Product Showcase",
        status: "scheduled",
      },
      {
        platform: "facebook",
        time: "5:00 PM",
        title: "Customer Success Story",
        status: "draft",
      },
    ],
  },
  {
    day: 25,
    items: [
      {
        platform: "youtube",
        time: "11:00 AM",
        title: "Monthly Webinar",
        status: "scheduled",
      },
      {
        platform: "twitter",
        time: "2:30 PM",
        title: "Q&A Session",
        status: "draft",
      },
    ],
  },
  // Add today's content
  {
    day: currentDate.getDate(),
    items: [
      {
        platform: "twitter",
        time: "10:00 AM",
        title: "Today's Special Announcement",
        status: "published",
      },
      {
        platform: "linkedin",
        time: "2:00 PM",
        title: "Team Spotlight",
        status: "scheduled",
      },
    ],
  },
]

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "twitter":
      return <Twitter className="h-3 w-3" />
    case "linkedin":
      return <Linkedin className="h-3 w-3" />
    case "instagram":
      return <Instagram className="h-3 w-3" />
    case "facebook":
      return <Facebook className="h-3 w-3" />
    case "youtube":
      return <Youtube className="h-3 w-3" />
    case "tiktok":
      return <TiktokIcon className="h-3 w-3" />
    default:
      return null
  }
}

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "twitter":
      return "bg-[#1DA1F2] text-white"
    case "linkedin":
      return "bg-[#0A66C2] text-white"
    case "instagram":
      return "bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] text-white"
    case "facebook":
      return "bg-[#1877F2] text-white"
    case "youtube":
      return "bg-[#FF0000] text-white"
    case "tiktok":
      return "bg-black text-white"
    default:
      return "bg-gray-800 text-white"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "published":
      return "bg-green-500/20 text-green-400"
    case "scheduled":
      return "bg-blue-500/20 text-blue-400"
    case "draft":
      return "bg-amber-500/20 text-amber-400"
    default:
      return "bg-gray-500/20 text-gray-400"
  }
}

export function ContentCalendar() {
  return (
    <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
              <CalendarIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription className="text-gray-400">Plan and schedule your content</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous month</span>
            </Button>
            <span className="text-sm font-medium text-white">
              {currentMonth} {currentYear}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next month</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-400">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => {
            const isToday = day === currentDate.getDate()
            const hasContent = scheduledContent.find((item) => item.day === day)

            return (
              <div
                key={index}
                className={`relative min-h-[100px] rounded-md border p-1 ${
                  day
                    ? isToday
                      ? "border-purple-500/50 bg-purple-900/20"
                      : "border-purple-800/20 bg-gray-800/30 hover:border-purple-500/30 hover:bg-gray-800/50"
                    : "border-transparent"
                }`}
              >
                {day && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isToday ? "text-purple-400" : "text-gray-400"}`}>
                        {day}
                      </span>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5 rounded-full text-gray-500 hover:bg-gray-700 hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Add content</span>
                        </Button>
                      </motion.div>
                    </div>
                    {hasContent && (
                      <div className="mt-1 space-y-1">
                        {hasContent.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            whileHover={{ scale: 1.02 }}
                            className="flex cursor-pointer items-center gap-1 rounded-sm px-1 py-0.5 text-xs hover:bg-gray-700/50"
                          >
                            <div
                              className={`flex h-4 w-4 items-center justify-center rounded-sm ${getPlatformColor(
                                item.platform,
                              )}`}
                            >
                              {getPlatformIcon(item.platform)}
                            </div>
                            <div className="flex-1 truncate">{item.title}</div>
                            {item.status === "published" && (
                              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500/20">
                                <Check className="h-2 w-2 text-green-400" />
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-purple-800/20 pt-4">
          <div className="text-sm font-medium text-gray-400">Status:</div>
          <div className="flex items-center gap-1">
            <Badge className="bg-green-500/20 text-green-400">Published</Badge>
          </div>
          <div className="flex items-center gap-1">
            <Badge className="bg-blue-500/20 text-blue-400">Scheduled</Badge>
          </div>
          <div className="flex items-center gap-1">
            <Badge className="bg-amber-500/20 text-amber-400">Draft</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
