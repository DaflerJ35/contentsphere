"use client"

import { useState } from "react"
import {
  Users,
  UserPlus,
  Settings,
  Shield,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  ArrowUpDown,
  Download,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "invited" | "inactive"
  avatar?: string
  lastActive?: string
}

interface Team {
  id: string
  name: string
  description: string
  members: number
  createdAt: string
}

export function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("members")

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "active",
      lastActive: "Just now",
    },
    {
      id: "2",
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Editor",
      status: "active",
      lastActive: "5 minutes ago",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Viewer",
      status: "active",
      lastActive: "1 hour ago",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Editor",
      status: "invited",
    },
    {
      id: "5",
      name: "James Wilson",
      email: "james@example.com",
      role: "Viewer",
      status: "inactive",
      lastActive: "2 days ago",
    },
  ]

  const teams: Team[] = [
    {
      id: "1",
      name: "Marketing Team",
      description: "Responsible for content marketing and social media",
      members: 8,
      createdAt: "Jan 15, 2025",
    },
    {
      id: "2",
      name: "Product Team",
      description: "Product descriptions and documentation",
      members: 5,
      createdAt: "Feb 3, 2025",
    },
    {
      id: "3",
      name: "Sales Team",
      description: "Sales materials and presentations",
      members: 6,
      createdAt: "Mar 10, 2025",
    },
  ]

  const filteredMembers = teamMembers.filter((member) => {
    if (searchQuery) {
      return (
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Manage your team members, roles, and permissions</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            <UserPlus className="h-4 w-4" />
            Invite Members
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search members..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              <SelectItem value="marketing">Marketing Team</SelectItem>
              <SelectItem value="product">Product Team</SelectItem>
              <SelectItem value="sales">Sales Team</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="members" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="audit">Audit Log</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="mt-0">
          <Card>
            <CardHeader className="px-6 py-4">
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team members and their access levels</CardDescription>
            </CardHeader>
            <CardContent className="px-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            member.role === "Admin"
                              ? "border-purple-500 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
                              : member.role === "Editor"
                                ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                : "border-gray-500 bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400"
                          }
                        >
                          {member.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            member.status === "active"
                              ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                              : member.status === "invited"
                                ? "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                                : "border-gray-500 bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400"
                          }
                        >
                          {member.status === "active" ? "Active" : member.status === "invited" ? "Invited" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {member.lastActive ? (
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span>{member.lastActive}</span>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              <span>Send Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Settings className="mr-2 h-4 w-4" />
                              <span>Edit Permissions</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between px-6 py-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filteredMembers.length}</strong> of <strong>{teamMembers.length}</strong> team members
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <Card key={team.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{team.name}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Team</DropdownMenuItem>
                        <DropdownMenuItem>Manage Members</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete Team</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{team.members} members</span>
                    </div>
                    <div className="text-muted-foreground">Created {team.createdAt}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/30 px-6 py-3">
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="flex h-full flex-col items-center justify-center p-6">
              <div className="mb-4 rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-1 text-lg font-medium">Create New Team</h3>
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Organize your members into functional teams
              </p>
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <UserPlus className="h-4 w-4" />
                Create Team
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roles" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Roles & Permissions</CardTitle>
              <CardDescription>Configure access levels and permissions for your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-600">Admin</Badge>
                      <h3 className="font-medium">Administrator</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Role
                    </Button>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Full access to all features and settings. Can manage team members and billing.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">Manage Users</Badge>
                    <Badge variant="outline">Manage Billing</Badge>
                    <Badge variant="outline">Create Content</Badge>
                    <Badge variant="outline">Edit Settings</Badge>
                    <Badge variant="outline">View Analytics</Badge>
                    <Badge variant="outline">Manage Teams</Badge>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600">Editor</Badge>
                      <h3 className="font-medium">Editor</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Role
                    </Button>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Can create and edit content, but cannot manage team members or billing.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">Create Content</Badge>
                    <Badge variant="outline">Edit Content</Badge>
                    <Badge variant="outline">Use Templates</Badge>
                    <Badge variant="outline">View Analytics</Badge>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-gray-600">Viewer</Badge>
                      <h3 className="font-medium">Viewer</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Role
                    </Button>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Read-only access to content and analytics. Cannot create or edit content.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">View Content</Badge>
                    <Badge variant="outline">View Analytics</Badge>
                  </div>
                </div>

                <Button className="gap-2">
                  <Shield className="h-4 w-4" />
                  Create Custom Role
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Audit Log</CardTitle>
              <CardDescription>Track all actions performed by team members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="mt-0.5 rounded-full bg-muted p-1">
                      {i === 0 ? (
                        <UserPlus className="h-4 w-4 text-green-500" />
                      ) : i === 1 ? (
                        <Settings className="h-4 w-4 text-blue-500" />
                      ) : i === 2 ? (
                        <Shield className="h-4 w-4 text-purple-500" />
                      ) : i === 3 ? (
                        <ArrowUpDown className="h-4 w-4 text-orange-500" />
                      ) : (
                        <Users className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          {i === 0
                            ? "Alex Johnson invited Emily Davis"
                            : i === 1
                              ? "Sarah Williams updated account settings"
                              : i === 2
                                ? "Alex Johnson changed Michael Brown's role to Editor"
                                : i === 3
                                  ? "System performed automatic backup"
                                  : "James Wilson was removed from Marketing Team"}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {i === 0
                            ? "5 minutes ago"
                            : i === 1
                              ? "1 hour ago"
                              : i === 2
                                ? "Yesterday, 3:45 PM"
                                : i === 3
                                  ? "Yesterday, 12:00 AM"
                                  : "May 15, 2025"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {i === 0
                          ? "New team member invitation sent to emily@example.com"
                          : i === 1
                            ? "Updated notification preferences and security settings"
                            : i === 2
                              ? "Changed user role from Viewer to Editor"
                              : i === 3
                                ? "Automatic system backup completed successfully"
                                : "User removed from team by Alex Johnson"}
                      </p>
                      <div className="mt-1 text-xs text-muted-foreground">
                        IP:{" "}
                        {i === 0
                          ? "192.168.1.1"
                          : i === 1
                            ? "192.168.1.2"
                            : i === 2
                              ? "192.168.1.1"
                              : i === 3
                                ? "System"
                                : "192.168.1.1"}
                        {" • "}
                        Browser: {i === 3 ? "System" : "Chrome on macOS"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Export Logs
              </Button>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
