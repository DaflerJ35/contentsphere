"use client"

import { useState } from "react"
import { AlertTriangle, Check, Download, FileText, Lock, RefreshCw, Shield, ShieldCheck, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SecurityCompliance() {
  const [securityScore, setSecurityScore] = useState(85)

  function ComplianceItem({
    title,
    status,
    progress,
  }: { title: string; status: "compliant" | "in-progress" | "non-compliant"; progress?: number }) {
    return (
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-white">{title}</h4>
          {status === "compliant" && (
            <div className="mt-1 flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-xs text-gray-400">Compliant</span>
            </div>
          )}
          {status === "in-progress" && (
            <>
              <p className="text-sm text-gray-400">In Progress: {progress}%</p>
              <Progress value={progress} className="h-2 w-32 bg-gray-800" />
            </>
          )}
        </div>
        {status === "non-compliant" && (
          <div className="rounded-md bg-red-900/20 px-2 py-1 text-xs font-medium text-red-400">Non-Compliant</div>
        )}
      </div>
    )
  }

  function ActivityItem({
    icon: Icon,
    title,
    description,
    time,
    severity,
  }: { icon: any; title: string; description: string; time: string; severity: "high" | "medium" | "low" | "info" }) {
    let severityColor
    switch (severity) {
      case "high":
        severityColor = "text-red-500"
        break
      case "medium":
        severityColor = "text-yellow-500"
        break
      case "low":
        severityColor = "text-green-500"
        break
      default:
        severityColor = "text-blue-500"
        break
    }

    return (
      <div className="flex items-start space-x-3">
        <Icon className="h-5 w-5 text-gray-400" />
        <div>
          <h4 className="font-medium text-white">{title}</h4>
          <p className="text-sm text-gray-400">{description}</p>
          <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
            <span>{time}</span>
            <span className={severityColor}>({severity})</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-400">Security & Compliance</h1>
          <p className="text-sm text-gray-400">Manage your security settings and compliance requirements</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30">
            <FileText className="mr-2 h-4 w-4" />
            Security Reports
          </Button>
          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Security Scan
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Security Score</CardTitle>
            <CardDescription className="text-gray-400">Your workspace security rating</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative flex h-36 w-36 items-center justify-center">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle className="stroke-gray-800" cx="50" cy="50" r="40" fill="none" strokeWidth="8" />
                  <circle
                    className="stroke-purple-600"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * securityScore) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-bold">{securityScore}%</span>
                  <span className="text-xs text-gray-400">Good</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">Complete 3 more recommendations to reach 100%</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">View Recommendations</Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Compliance Status</CardTitle>
            <CardDescription className="text-gray-400">Your regulatory compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 py-2">
              <ComplianceItem title="GDPR" status="compliant" />
              <ComplianceItem title="HIPAA" status="compliant" />
              <ComplianceItem title="SOC 2" status="in-progress" progress={75} />
              <ComplianceItem title="ISO 27001" status="in-progress" progress={40} />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Certificates
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription className="text-gray-400">Security events in your workspace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 py-2">
              <ActivityItem
                icon={User}
                title="New login detected"
                description="New device login from San Francisco, CA"
                time="2 hours ago"
                severity="low"
              />
              <ActivityItem
                icon={RefreshCw}
                title="Password changed"
                description="Admin user password was changed"
                time="Yesterday"
                severity="info"
              />
              <ActivityItem
                icon={AlertTriangle}
                title="Failed login attempts"
                description="Multiple failed login attempts detected"
                time="3 days ago"
                severity="high"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
            >
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="authentication" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-purple-900/30">
          <TabsTrigger
            value="authentication"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Authentication
          </TabsTrigger>
          <TabsTrigger
            value="data-protection"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Data Protection
          </TabsTrigger>
          <TabsTrigger
            value="access-control"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            Access Control
          </TabsTrigger>
          <TabsTrigger value="audit-logs" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Audit Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="authentication" className="mt-4">
          <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-4">
            <h3 className="text-lg font-semibold text-white">Authentication Settings</h3>
            <p className="text-sm text-gray-400">Configure how users authenticate to your workspace</p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Two-Factor Authentication (2FA)</h4>
                  <p className="text-sm text-gray-400">Require all users to set up 2FA for additional security</p>
                </div>
                <Switch id="2fa" defaultChecked className="data-[state=checked]:bg-purple-600" />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Single Sign-On (SSO)</h4>
                  <p className="text-sm text-gray-400">Allow users to sign in using your organization's SSO provider</p>
                  <div className="mt-2 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                    >
                      Configure SAML
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                    >
                      Configure OIDC
                    </Button>
                  </div>
                </div>
                <Switch id="sso" defaultChecked className="data-[state=checked]:bg-purple-600" />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Password Policy</h4>
                  <p className="text-sm text-gray-400">Set requirements for password strength and rotation</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">Minimum 12 characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">Require special characters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">Password rotation every 90 days</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                >
                  Edit Policy
                </Button>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Session Management</h4>
                  <p className="text-sm text-gray-400">Control user session duration and inactivity timeouts</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                >
                  Configure
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="data-protection" className="mt-4">
          <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-4">
            <h3 className="text-lg font-semibold text-white">Data Protection</h3>
            <p className="text-sm text-gray-400">Configure how your data is protected and encrypted</p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-purple-400" />
                    <h4 className="font-medium text-white">Data Encryption</h4>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">All data is encrypted at rest and in transit</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-gray-400">AES-256 encryption for data at rest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-gray-400">TLS 1.3 for data in transit</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-green-900/20 px-2 py-1 text-xs font-medium text-green-400">Enabled</div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    <h4 className="font-medium text-white">Customer-Managed Keys (CMK)</h4>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">Use your own encryption keys for enhanced control</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-yellow-900/20 px-2 py-1 text-xs font-medium text-yellow-400">
                    Enterprise Only
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                  >
                    Upgrade
                  </Button>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-400" />
                    <h4 className="font-medium text-white">Data Retention Policy</h4>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">
                    Configure how long data is stored before automatic deletion
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                >
                  Configure
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="access-control" className="mt-4">
          <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-4">
            <h3 className="text-lg font-semibold text-white">Access Control</h3>
            <p className="text-sm text-gray-400">Manage user permissions and access levels</p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Role-Based Access Control</h4>
                  <p className="text-sm text-gray-400">Define user roles and permissions</p>
                </div>
                <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                  Manage Roles
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="audit-logs" className="mt-4">
          <div className="rounded-lg border border-purple-900/50 bg-purple-900/10 p-4">
            <h3 className="text-lg font-semibold text-white">Audit Logs</h3>
            <p className="text-sm text-gray-400">Review security events and user activities</p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Activity Logs</h4>
                  <p className="text-sm text-gray-400">Track all user actions in the system</p>
                </div>
                <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                  View Logs
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
