import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  MessageSquare,
  Video,
  Newspaper,
  Copy,
  MoreHorizontal,
  ExternalLink,
  Download,
  Edit,
  Trash2,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const historyItems = [
  {
    id: 1,
    title: "Q1 Marketing Strategy Blog Post",
    description: "Transformed into 5 platforms",
    date: "Today at 10:23 AM",
    type: "Blog Post",
    icon: <FileText className="h-5 w-5" />,
    platforms: ["Twitter", "LinkedIn", "Facebook", "Instagram", "Blog"],
    status: "completed",
  },
  {
    id: 2,
    title: "Product Feature Announcement",
    description: "Transformed into 3 platforms",
    date: "Yesterday at 2:45 PM",
    type: "Social Post",
    icon: <MessageSquare className="h-5 w-5" />,
    platforms: ["Twitter", "LinkedIn", "Facebook"],
    status: "completed",
  },
  {
    id: 3,
    title: "Customer Testimonial Video Script",
    description: "Transformed into 4 platforms",
    date: "Jan 15, 2023",
    type: "Video Script",
    icon: <Video className="h-5 w-5" />,
    platforms: ["YouTube", "Instagram", "TikTok", "LinkedIn"],
    status: "completed",
  },
  {
    id: 4,
    title: "Monthly Newsletter",
    description: "Transformed into 2 platforms",
    date: "Jan 10, 2023",
    type: "Newsletter",
    icon: <Newspaper className="h-5 w-5" />,
    platforms: ["Email", "Blog"],
    status: "completed",
  },
  {
    id: 5,
    title: "Product Launch Webinar Script",
    description: "Transformation in progress...",
    date: "Jan 5, 2023",
    type: "Video Script",
    icon: <Video className="h-5 w-5" />,
    platforms: ["YouTube", "LinkedIn"],
    status: "processing",
  },
]

export function ContentHistoryList() {
  return (
    <div className="space-y-4">
      {historyItems.map((item) => (
        <Card
          key={item.id}
          className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5 transition-all hover:border-purple-500/30 hover:bg-gray-800/50"
        >
          <div className="flex flex-col p-6 sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.platforms.map((platform) => (
                    <Badge
                      key={platform}
                      variant="outline"
                      className="border-purple-800/30 bg-gray-800/50 text-gray-300"
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 sm:mt-0">
              <div className="flex flex-col items-end">
                <Badge
                  className={
                    item.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"
                  }
                >
                  {item.status === "completed" ? "Completed" : "Processing"}
                </Badge>
                <span className="mt-1 text-xs text-gray-500">{item.date}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-purple-800/30 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-purple-800/30 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="border-purple-800/30 bg-gray-900">
                    <DropdownMenuItem className="flex cursor-pointer items-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>View Details</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex cursor-pointer items-center">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex cursor-pointer items-center">
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="flex cursor-pointer items-center text-red-500">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
