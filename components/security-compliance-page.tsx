"use client"

import { useState } from "react"
import { Shield, Lock, FileText, Download, Check, AlertCircle, Clock, Eye, EyeOff, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SecurityCompliancePage() {
  const [activeTab, setActiveTab] = useState("security")
  const [showPassword, setShowPassword] = useState(false)
  const [securityScore, setSecurityScore] = useState(85)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Security & Compliance</h1>
          <p className="text-muted-foreground">Manage security settings and compliance requirements</p>
        </div>
        <Badge className="enterprise-badge">
          <Shield className="mr-1 h-3 w-3" />
          Enterprise Feature
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Security Score</CardTitle>
            <CardDescription>Your organization's security posture</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-3xl font-bold">{securityScore}/100</div>
              <Progress value={securityScore} className="h-2 w-full" />
              <p className="mt-2 text-sm text-muted-foreground">
                {securityScore >= 80
                  ? "Excellent security posture"
                  : securityScore >= 60
                    ? "Good security posture"
                    : "Needs improvement"}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Recommendations
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Compliance Status</CardTitle>
            <CardDescription>Regulatory compliance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    <Check className="mr-1 h-3 w-3" />
                    GDPR
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">Compliant</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    <Check className="mr-1 h-3 w-3" />
                    HIPAA
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">Compliant</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    <Check className="mr-1 h-3 w-3" />
                    SOC 2
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">Compliant</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                  >
                    ISO 27001
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">In Progress</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Compliance Reports
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Last Security Audit</CardTitle>
            <CardDescription>Security audit history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>May 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span>No critical issues found</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span>2 medium-risk findings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>All issues addressed</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Schedule New Audit
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="security" onValueChange={setActiveTab}>
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="security" className="flex-1">
            Security Settings
          </TabsTrigger>
          <TabsTrigger value="compliance" className="flex-1">
            Compliance
          </TabsTrigger>
          <TabsTrigger value="data-privacy" className="flex-1">
            Data Privacy
          </TabsTrigger>
          <TabsTrigger value="audit-logs" className="flex-1">
            Audit Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="security" className="mt-0 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Security</CardTitle>
              <CardDescription>Configure authentication security settings for your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Multi-Factor Authentication (MFA)</div>
                  <div className="text-sm text-muted-foreground">Require MFA for all users in your organization</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Single Sign-On (SSO)</div>
                  <div className="text-sm text-muted-foreground">Enable SSO with your identity provider</div>
                </div>
                <Button variant="outline" size="sm">
                  Configure SSO
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Password Policy</Label>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="min-length" className="text-xs">
                        Minimum Length
                      </Label>
                      <Select defaultValue="12">
                        <SelectTrigger id="min-length">
                          <SelectValue placeholder="Select minimum length" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8">8 characters</SelectItem>
                          <SelectItem value="10">10 characters</SelectItem>
                          <SelectItem value="12">12 characters</SelectItem>
                          <SelectItem value="16">16 characters</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="complexity" className="text-xs">
                        Complexity Requirements
                      </Label>
                      <Select defaultValue="high">
                        <SelectTrigger id="complexity">
                          <SelectValue placeholder="Select complexity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low (letters only)</SelectItem>
                          <SelectItem value="medium">Medium (letters + numbers)</SelectItem>
                          <SelectItem value="high">High (letters, numbers, symbols)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiration" className="text-xs">
                        Password Expiration
                      </Label>
                      <Select defaultValue="90">
                        <SelectTrigger id="expiration">
                          <SelectValue placeholder="Select expiration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="history" className="text-xs">
                        Password History
                      </Label>
                      <Select defaultValue="5">
                        <SelectTrigger id="history">
                          <SelectValue placeholder="Select history" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">Remember 3 passwords</SelectItem>
                          <SelectItem value="5">Remember 5 passwords</SelectItem>
                          <SelectItem value="10">Remember 10 passwords</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Account Lockout</div>
                      <div className="text-xs text-muted-foreground">Lock account after 5 failed login attempts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Session Timeout</div>
                  <div className="text-sm text-muted-foreground">Automatically log out inactive users</div>
                </div>
                <Select defaultValue="60">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select timeout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                    <SelectItem value="240">4 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">IP Restrictions</div>
                  <div className="text-sm text-muted-foreground">
                    Restrict access to specific IP addresses or ranges
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Shield className="h-4 w-4" />
                Save Security Settings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Security</CardTitle>
              <CardDescription>Configure security settings for API access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">API Key Rotation</div>
                  <div className="text-sm text-muted-foreground">Automatically rotate API keys on a schedule</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>API Key Rotation Schedule</Label>
                <Select defaultValue="90">
                  <SelectTrigger>
                    <SelectValue placeholder="Select rotation schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">Every 30 days</SelectItem>
                    <SelectItem value="60">Every 60 days</SelectItem>
                    <SelectItem value="90">Every 90 days</SelectItem>
                    <SelectItem value="180">Every 180 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Rate Limiting</div>
                  <div className="text-sm text-muted-foreground">Limit the number of API requests per minute</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Rate Limit (requests per minute)</Label>
                <Input type="number" defaultValue="1000" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">JWT Token Expiration</div>
                  <div className="text-sm text-muted-foreground">Set the expiration time for JWT tokens</div>
                </div>
                <Select defaultValue="60">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select expiration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                    <SelectItem value="1440">24 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Shield className="h-4 w-4" />
                Save API Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="mt-0 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Reports</CardTitle>
              <CardDescription>Access compliance reports and documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">SOC 2 Type II Report</h3>
                      <p className="text-sm text-muted-foreground">Last updated: April 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">GDPR Compliance Report</h3>
                      <p className="text-sm text-muted-foreground">Last updated: March 10, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">HIPAA Compliance Report</h3>
                      <p className="text-sm text-muted-foreground">Last updated: February 22, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-yellow-100 p-2 dark:bg-yellow-900/30">
                      <FileText className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">ISO 27001 Certification</h3>
                      <p className="text-sm text-muted-foreground">In progress - Expected June 2025</p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                  >
                    In Progress
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Processing Agreements</CardTitle>
              <CardDescription>Manage data processing agreements for compliance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>DPA Required</AlertTitle>
                <AlertDescription>
                  As an enterprise customer, you may need to sign a Data Processing Agreement (DPA) to comply with
                  regulations like GDPR.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h3 className="font-medium">Standard DPA</h3>
                    <p className="text-sm text-muted-foreground">Our standard Data Processing Agreement</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline">Request Signature</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h3 className="font-medium">Custom DPA</h3>
                    <p className="text-sm text-muted-foreground">Upload your organization's custom DPA</p>
                  </div>
                  <Button variant="outline">Upload</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data-privacy" className="mt-0 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Privacy Settings</CardTitle>
              <CardDescription>Configure data privacy settings for your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data Retention</div>
                  <div className="text-sm text-muted-foreground">
                    Set how long data is retained before automatic deletion
                  </div>
                </div>
                <Select defaultValue="365">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                    <SelectItem value="forever">Forever</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data Encryption</div>
                  <div className="text-sm text-muted-foreground">Enable end-to-end encryption for all data</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data Anonymization</div>
                  <div className="text-sm text-muted-foreground">Anonymize personal data in analytics and reports</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Data Export</div>
                  <div className="text-sm text-muted-foreground">Allow users to export their personal data</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Right to be Forgotten</div>
                  <div className="text-sm text-muted-foreground">Allow users to request complete data deletion</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Data Processing Locations</Label>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">European Union (EU)</div>
                      <div className="text-xs text-muted-foreground">Process and store data in EU data centers</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">United States (US)</div>
                      <div className="text-xs text-muted-foreground">Process and store data in US data centers</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Asia Pacific (APAC)</div>
                      <div className="text-xs text-muted-foreground">Process and store data in APAC data centers</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Shield className="h-4 w-4" />
                Save Privacy Settings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookie Consent</CardTitle>
              <CardDescription>Configure cookie consent settings for your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Cookie Consent Banner</div>
                  <div className="text-sm text-muted-foreground">Display a cookie consent banner to users</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Cookie Categories</Label>
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Essential Cookies</div>
                      <div className="text-xs text-muted-foreground">
                        Required for basic functionality (always enabled)
                      </div>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Functional Cookies</div>
                      <div className="text-xs text-muted-foreground">Enhance user experience and functionality</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Analytics Cookies</div>
                      <div className="text-xs text-muted-foreground">Track user behavior and usage patterns</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">Marketing Cookies</div>
                      <div className="text-xs text-muted-foreground">Used for targeted advertising</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Shield className="h-4 w-4" />
                Save Cookie Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="audit-logs" className="mt-0 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Audit Logs</CardTitle>
              <CardDescription>View and export security audit logs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Audit Log Retention</div>
                  <div className="text-sm text-muted-foreground">How long audit logs are retained</div>
                </div>
                <Select defaultValue="365">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Audit Log Events</Label>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export Logs
                  </Button>
                </div>
                <div className="max-h-96 overflow-auto rounded-lg border">
                  <div className="space-y-2 p-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg border p-3">
                        <div className="mt-0.5 rounded-full bg-muted p-1">
                          {i % 5 === 0 ? (
                            <Shield className="h-4 w-4 text-purple-500" />
                          ) : i % 5 === 1 ? (
                            <Lock className="h-4 w-4 text-blue-500" />
                          ) : i % 5 === 2 ? (
                            <Eye className="h-4 w-4 text-green-500" />
                          ) : i % 5 === 3 ? (
                            <EyeOff className="h-4 w-4 text-red-500" />
                          ) : (
                            <RefreshCw className="h-4 w-4 text-orange-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">
                              {i % 5 === 0
                                ? "Security settings updated"
                                : i % 5 === 1
                                  ? "User login attempt"
                                  : i % 5 === 2
                                    ? "Sensitive data accessed"
                                    : i % 5 === 3
                                      ? "API key revoked"
                                      : "Password reset requested"}
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {i === 0
                                ? "Just now"
                                : i === 1
                                  ? "5 minutes ago"
                                  : i === 2
                                    ? "1 hour ago"
                                    : i === 3
                                      ? "Yesterday, 3:45 PM"
                                      : `May ${15 - i}, 2025`}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {i % 5 === 0
                              ? "Admin user updated security settings"
                              : i % 5 === 1
                                ? "Successful login from new device"
                                : i % 5 === 2
                                  ? "User accessed customer data export"
                                  : i % 5 === 3
                                    ? "Admin revoked API key due to suspicious activity"
                                    : "Password reset requested for user account"}
                          </p>
                          <div className="mt-1 text-xs text-muted-foreground">
                            User:{" "}
                            {i % 3 === 0 ? "admin@example.com" : i % 3 === 1 ? "john@example.com" : "sarah@example.com"}
                            {" • "}
                            IP: {`192.168.1.${i + 1}`}
                            {" • "}
                            Location: {i % 2 === 0 ? "San Francisco, US" : "London, UK"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Filter Logs</Button>
              <Button variant="outline">View All Logs</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
