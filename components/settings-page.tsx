"use client"

import { useState } from "react"
import { Bell, CreditCard, Globe, Key, Lock, Save, Webhook, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="account" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your personal information and profile settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  defaultValue="Content creator and digital marketer with 5+ years of experience."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Lock className="h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your subscription plan and billing information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Professional Plan</div>
                    <div className="text-sm text-muted-foreground">$79/month, billed monthly</div>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                <div className="mt-4 text-sm">
                  <div className="flex items-center justify-between py-1">
                    <span>Next billing date</span>
                    <span>June 15, 2025</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Payment method</span>
                    <span>Visa ending in 4242</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span>Visa ending in 4242</span>
                  <Button variant="link" size="sm" className="ml-auto">
                    Update
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Billing Address</Label>
                <div className="rounded-lg border p-4 text-sm">
                  <p>John Doe</p>
                  <p>Acme Inc.</p>
                  <p>123 Main St, Suite 100</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                  <Button variant="link" size="sm" className="mt-2 px-0">
                    Edit Address
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <Button variant="outline" className="gap-2 text-destructive">
                Cancel Subscription
              </Button>
              <p className="text-xs text-muted-foreground">
                Your subscription will continue until the end of the current billing period.
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Invoice #{2025050 + i}</div>
                      <div className="text-sm text-muted-foreground">
                        {i === 0 ? "May 15, 2025" : i === 1 ? "April 15, 2025" : "March 15, 2025"}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-medium">$79.00</div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how and when you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">
                      Receive email notifications about your account and content
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Browser Notifications</div>
                    <div className="text-sm text-muted-foreground">
                      Receive browser notifications when you're online
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Marketing Emails</div>
                    <div className="text-sm text-muted-foreground">
                      Receive emails about new features, tips, and promotions
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Notification Types</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Content Transformations</div>
                      <div className="text-sm text-muted-foreground">
                        Notifications about your content transformations
                      </div>
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="important">Important Only</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Account Updates</div>
                      <div className="text-sm text-muted-foreground">Notifications about your account and billing</div>
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="important">Important Only</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Platform Updates</div>
                      <div className="text-sm text-muted-foreground">Notifications about new features and updates</div>
                    </div>
                    <Select defaultValue="important">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="important">Important Only</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Bell className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for programmatic access to ContentSphere</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Your API Keys</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Production Key</div>
                      <div className="text-sm text-muted-foreground">Created on May 10, 2025</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input value="sk_live_••••••••••••••••••••••••" className="w-64" readOnly />
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Development Key</div>
                      <div className="text-sm text-muted-foreground">Created on May 10, 2025</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input value="sk_test_••••••••••••••••••••••••" className="w-64" readOnly />
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Create New API Key</Label>
                <div className="flex items-center gap-2">
                  <Select defaultValue="test">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="live">Production</SelectItem>
                      <SelectItem value="test">Development</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Key description (optional)" className="flex-1" />
                  <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                    <Key className="h-4 w-4" />
                    Generate Key
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Configure webhooks to receive real-time updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Active Webhooks</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Content Transformation Webhook</div>
                      <div className="text-sm text-muted-foreground">https://example.com/webhooks/contentsphere</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        Active
                      </Badge>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Add New Webhook</Label>
                <div className="space-y-2">
                  <Input placeholder="Webhook URL" />
                  <div className="space-y-2">
                    <Label>Events to trigger this webhook</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="event-transformation" />
                        <Label htmlFor="event-transformation">Content Transformation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="event-account" />
                        <Label htmlFor="event-account">Account Updates</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="event-billing" />
                        <Label htmlFor="event-billing">Billing Events</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="event-analytics" />
                        <Label htmlFor="event-analytics">Analytics Events</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Webhook className="h-4 w-4" />
                Add Webhook
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Language & Region</CardTitle>
              <CardDescription>Configure your language and regional preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="america-los_angeles">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-los_angeles">Pacific Time (US & Canada)</SelectItem>
                    <SelectItem value="america-new_york">Eastern Time (US & Canada)</SelectItem>
                    <SelectItem value="europe-london">London</SelectItem>
                    <SelectItem value="europe-paris">Paris</SelectItem>
                    <SelectItem value="asia-tokyo">Tokyo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                <Globe className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Account Management</CardTitle>
              <CardDescription>Manage your account data and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Data Export</Label>
                <p className="text-sm text-muted-foreground">
                  Download all your data including content, transformations, and settings
                </p>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export All Data
                </Button>
              </div>
              <div className="space-y-2">
                <Label>Account Deletion</Label>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
                <Button variant="destructive" className="gap-2">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
