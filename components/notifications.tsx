"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-purple-500 p-0 text-[10px]">3</Badge>
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          {[
            {
              title: "Content transformation complete",
              description: "Your blog post has been transformed for 5 platforms",
              time: "Just now",
              unread: true,
            },
            {
              title: "New feature available",
              description: "Try our new AI-powered content suggestions",
              time: "2 hours ago",
              unread: true,
            },
            {
              title: "Weekly content report",
              description: "Your content performance report is ready",
              time: "1 day ago",
              unread: true,
            },
            {
              title: "Subscription renewal",
              description: "Your subscription will renew in 7 days",
              time: "3 days ago",
              unread: false,
            },
          ].map((notification, i) => (
            <DropdownMenuItem key={i} className="cursor-pointer p-0">
              <div className="flex w-full items-start gap-2 p-2">
                {notification.unread && <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500"></div>}
                <div className={`flex-1 ${!notification.unread && "pl-4"}`}>
                  <div className="font-medium">{notification.title}</div>
                  <div className="text-xs text-muted-foreground">{notification.description}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{notification.time}</div>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer justify-center text-center font-medium">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
