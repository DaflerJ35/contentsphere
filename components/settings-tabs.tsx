"use client"

import { Slider } from "@/components/ui/slider"

import { Badge } from "@/components/ui/badge"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  CreditCard,
  Bell,
  Lock,
  Key,
  Palette,
  Upload,
  Save,
  Trash2,
  Laptop,
  Smartphone,
  Download,
  Check,
} from "lucide-react"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-5 bg-gray-800/50 p-1 md:w-auto">
        <TabsTrigger
          value="profile"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
        >
          <User className="mr-2 h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="account"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
        >
          <Lock className="mr-2 h-4 w-4" />
          Account
        </TabsTrigger>
        <TabsTrigger
          value="billing"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
        >
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger
          value="appearance"
          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
        >
          <Palette className="mr-2 h-4 w-4" />
          Appearance
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="mt-6 space-y-6">
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription className="text-gray-400">Manage your public profile information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Change Avatar
                </Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-300">
                      First Name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Sarah"
                      className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-300">
                      Last Name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Connor"
                      className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="sarah@example.com"
                    className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-gray-300">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    className="min-h-[100px] border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Social Profiles</CardTitle>
            <CardDescription className="text-gray-400">Connect your social media accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-gray-300">
                  Twitter
                </Label>
                <Input
                  id="twitter"
                  placeholder="@username"
                  className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-gray-300">
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  placeholder="linkedin.com/in/username"
                  className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-gray-300">
                  Instagram
                </Label>
                <Input
                  id="instagram"
                  placeholder="@username"
                  className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website" className="text-gray-300">
                  Website
                </Label>
                <Input
                  id="website"
                  placeholder="https://example.com"
                  className="border-purple-800/30 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="account" className="mt-6 space-y-6">
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
            <CardDescription className="text-gray-400">Manage your account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Change Password</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-gray-300">
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="border-purple-800/30 bg-gray-800/50 text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-300">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="border-purple-800/30 bg-gray-800/50 text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-300">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="border-purple-800/30 bg-gray-800/50 text-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-purple-400" />
                    <h4 className="font-medium text-white">Two-Factor Authentication</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Add an extra layer of security to your account by enabling 2FA.
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-purple-500" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Sessions</h3>
              <div className="rounded-md border border-purple-800/20 bg-gray-800/30 p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-white">Active Sessions</h4>
                      <p className="text-sm text-gray-400">You are currently logged in on these devices.</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Log Out All
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md bg-gray-800/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-purple-500/20 p-2">
                          <Laptop className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">MacBook Pro</div>
                          <div className="text-xs text-gray-500">San Francisco, CA • Last active: Just now</div>
                        </div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">Current</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-gray-800/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-purple-500/20 p-2">
                          <Smartphone className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">iPhone 13</div>
                          <div className="text-xs text-gray-500">San Francisco, CA • Last active: 2 hours ago</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:bg-gray-700 hover:text-white">
                        Log Out
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
            <CardDescription className="text-gray-400">Irreversible account actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-red-900/20 bg-red-900/5 p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium text-red-400">Delete Account</h4>
                  <p className="text-sm text-gray-400">Permanently delete your account and all of your content.</p>
                </div>
                <Button variant="destructive" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="billing" className="mt-6 space-y-6">
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Subscription Plan</CardTitle>
            <CardDescription className="text-gray-400">Manage your subscription and billing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-md border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-gradient-to-br from-purple-600 to-indigo-700 p-2 shadow-lg shadow-purple-900/20">
                      <CreditCard className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Professional Plan</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    You are currently on the Professional plan, billed monthly.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    $79
                  </div>
                  <div className="text-xs text-gray-500">per month</div>
                  <div className="mt-1 text-xs text-green-400">Renews on July 15, 2023</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Change Plan
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Cancel Subscription
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Payment Method</h3>
              <div className="rounded-md border border-purple-800/20 bg-gray-800/30 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-blue-500/20 p-2">
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
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">Visa ending in 4242</div>
                      <div className="text-xs text-gray-500">Expires 12/2025</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Billing History</h3>
              <div className="rounded-md border border-purple-800/20 bg-gray-800/30 p-4">
                <div className="space-y-3">
                  {[
                    {
                      date: "Jun 1, 2023",
                      amount: "$79.00",
                      status: "Paid",
                      invoice: "INV-001234",
                    },
                    {
                      date: "May 1, 2023",
                      amount: "$79.00",
                      status: "Paid",
                      invoice: "INV-001233",
                    },
                    {
                      date: "Apr 1, 2023",
                      amount: "$79.00",
                      status: "Paid",
                      invoice: "INV-001232",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between rounded-md bg-gray-800/50 p-3">
                      <div>
                        <div className="font-medium text-white">{item.date}</div>
                        <div className="text-xs text-gray-500">{item.invoice}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-medium text-white">{item.amount}</div>
                          <div className="text-xs text-green-400">{item.status}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="mt-6 space-y-6">
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription className="text-gray-400">Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Email Notifications</h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Content Transformations",
                    description: "Receive notifications when your content transformations are complete",
                  },
                  {
                    title: "Platform Updates",
                    description: "Get notified about new features and platform updates",
                  },
                  {
                    title: "Content Performance",
                    description: "Receive weekly performance reports for your content",
                  },
                  {
                    title: "Billing and Subscription",
                    description: "Get notified about billing and subscription changes",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4"
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-purple-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Push Notifications</h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Content Transformations",
                    description: "Receive notifications when your content transformations are complete",
                  },
                  {
                    title: "Content Performance",
                    description: "Get notified when your content reaches performance milestones",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border border-purple-800/20 bg-gray-800/30 p-4"
                  >
                    <div className="space-y-1">
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-purple-500" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="appearance" className="mt-6 space-y-6">
        <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription className="text-gray-400">Customize the appearance of the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Theme</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-md border border-purple-800/20 bg-gray-800/30 p-1">
                  <div className="rounded-md bg-white p-4">
                    <div className="h-20 rounded-md bg-gray-200"></div>
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <span className="text-sm font-medium text-white">Light</span>
                    <Switch className="data-[state=checked]:bg-purple-500" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-md border border-purple-800/20 bg-gray-800/30 p-1">
                  <div className="rounded-md bg-gray-900 p-4">
                    <div className="h-20 rounded-md bg-gray-800"></div>
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <span className="text-sm font-medium text-white">Dark</span>
                    <Switch defaultChecked className="data-[state=checked]:bg-purple-500" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-md border border-purple-800/20 bg-gray-800/30 p-1">
                  <div className="rounded-md bg-gray-900 p-4">
                    <div className="h-20 rounded-md bg-gradient-to-br from-purple-900 to-indigo-900"></div>
                  </div>
                  <div className="flex items-center justify-between p-2">
                    <span className="text-sm font-medium text-white">System</span>
                    <Switch className="data-[state=checked]:bg-purple-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Accent Color</h3>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-7">
                {[
                  { name: "Purple", color: "bg-purple-500" },
                  { name: "Indigo", color: "bg-indigo-500" },
                  { name: "Blue", color: "bg-blue-500" },
                  { name: "Cyan", color: "bg-cyan-500" },
                  { name: "Green", color: "bg-green-500" },
                  { name: "Amber", color: "bg-amber-500" },
                  { name: "Red", color: "bg-red-500" },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} shadow-lg`}>
                      {item.name === "Purple" && <Check className="h-5 w-5 text-white" />}
                    </div>
                    <span className="text-xs text-gray-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Font Size</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Small</span>
                  <span className="text-sm text-gray-400">Large</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} className="[&>span]:bg-purple-500" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="border-purple-800/30 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Reset to Defaults
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
