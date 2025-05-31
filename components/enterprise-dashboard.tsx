"use client"

import { useState } from "react"
import {
  Users,
  Shield,
  Globe,
  BarChart4,
  FileText,
  Settings,
  Lock,
  Server,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PremiumBackground } from "./premium-background"
import { PremiumCard } from "./premium-card"

export function EnterpriseDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="w-full min-h-screen">
      <PremiumBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-purple-400">Enterprise Dashboard</h1>
              <p className="text-gray-400">Manage your enterprise-level content operations</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-9 border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
              >
                <FileText className="mr-2 h-4 w-4" />
                Export Report
              </Button>
              <Button className="h-9 bg-purple-600 text-white hover:bg-purple-700">
                <Settings className="mr-2 h-4 w-4" />
                Configure
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 w-full max-w-3xl bg-purple-900/30">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
                Overview
              </TabsTrigger>
              <TabsTrigger value="teams" className="data-[state=active]:bg-purple-600">
                Teams
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-purple-600">
                Security
              </TabsTrigger>
              <TabsTrigger value="compliance" className="data-[state=active]:bg-purple-600">
                Compliance
              </TabsTrigger>
              <TabsTrigger value="infrastructure" className="data-[state=active]:bg-purple-600">
                Infrastructure
              </TabsTrigger>
            </TabsList>

            <div className="mt-6 grid gap-6">
              {activeTab === "overview" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <MetricCard
                      title="Active Teams"
                      value="12"
                      change="+2"
                      description="Teams using the platform"
                      icon={<Users className="h-4 w-4 text-blue-500" />}
                    />
                    <MetricCard
                      title="Content Items"
                      value="1,432"
                      change="+87"
                      description="Total content pieces"
                      icon={<FileText className="h-4 w-4 text-purple-500" />}
                    />
                    <MetricCard
                      title="Security Score"
                      value="94%"
                      change="+3%"
                      description="Overall security rating"
                      icon={<Shield className="h-4 w-4 text-green-500" />}
                    />
                    <MetricCard
                      title="Global CDN"
                      value="99.9%"
                      change="0%"
                      description="Content delivery uptime"
                      icon={<Globe className="h-4 w-4 text-blue-500" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                      <CardHeader>
                        <CardTitle>Team Activity</CardTitle>
                        <CardDescription className="text-gray-400">Content operations across teams</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="h-[200px] flex items-center justify-center">
                          <BarChart4 className="h-16 w-16 text-gray-500" />
                          <span className="ml-2 text-sm text-gray-400">Team activity visualization</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                      <CardHeader>
                        <CardTitle>Enterprise Features</CardTitle>
                        <CardDescription className="text-gray-400">
                          Advanced capabilities for your organization
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {enterpriseFeatures.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="rounded-md bg-purple-900/30 p-2 w-8 h-8 flex items-center justify-center">
                                {feature.icon}
                              </div>
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none text-white">{feature.title}</p>
                                <p className="text-xs text-gray-400">{feature.description}</p>
                              </div>
                              <div className="flex items-center">
                                <span
                                  className={`text-xs font-medium ${feature.status === "active" ? "text-green-500" : "text-amber-500"}`}
                                >
                                  {feature.status === "active" ? "Active" : "Configure"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <PremiumCard className="w-full">
                    <CardHeader>
                      <CardTitle>Enterprise Compliance Dashboard</CardTitle>
                      <CardDescription className="text-gray-400">
                        Monitor your organization's compliance status
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {complianceItems.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className={`rounded-full p-1 ${item.status === "compliant" ? "text-green-500" : "text-amber-500"}`}
                            >
                              {item.status === "compliant" ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : (
                                <AlertTriangle className="h-5 w-5" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-white">{item.title}</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 gap-1 text-white hover:bg-purple-900/30"
                                >
                                  <span className="text-xs">
                                    {item.status === "compliant" ? "View Details" : "Resolve"}
                                  </span>
                                  <ArrowUpRight className="h-3 w-3" />
                                </Button>
                              </div>
                              <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <Progress value={item.progress} className="h-1.5 bg-gray-800" />
                                <span className="text-xs text-gray-400">{item.progress}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-purple-900/50 bg-purple-900/20 text-white hover:bg-purple-900/30"
                      >
                        View Full Compliance Report
                      </Button>
                    </CardFooter>
                  </PremiumCard>
                </>
              )}

              {activeTab === "teams" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Team Management</CardTitle>
                      <CardDescription className="text-gray-400">Manage your enterprise teams</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <Users className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Team management interface</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "security" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Security Controls</CardTitle>
                      <CardDescription className="text-gray-400">Enterprise-grade security settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <Shield className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Security controls dashboard</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "compliance" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Compliance Management</CardTitle>
                      <CardDescription className="text-gray-400">Regulatory compliance tracking</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <FileText className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Compliance management interface</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "infrastructure" && (
                <div className="grid gap-6">
                  <Card className="border-purple-900/50 bg-purple-900/10 text-white">
                    <CardHeader>
                      <CardTitle>Infrastructure Management</CardTitle>
                      <CardDescription className="text-gray-400">
                        Global CDN and infrastructure settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <Server className="h-16 w-16 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-400">Infrastructure management interface</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, description, icon }) {
  const isPositive = !change.startsWith("-")

  return (
    <Card className="border-purple-900/50 bg-purple-900/10 text-white">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </div>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">{value}</div>
          <div className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</div>
        </div>
      </CardContent>
    </Card>
  )
}

const enterpriseFeatures = [
  {
    title: "Single Sign-On (SSO)",
    description: "Enterprise identity management",
    icon: <Lock className="h-4 w-4 text-purple-400" />,
    status: "active",
  },
  {
    title: "Global CDN",
    description: "Worldwide content delivery network",
    icon: <Globe className="h-4 w-4 text-purple-400" />,
    status: "active",
  },
  {
    title: "Advanced Analytics",
    description: "Enterprise-grade content performance metrics",
    icon: <BarChart4 className="h-4 w-4 text-purple-400" />,
    status: "active",
  },
  {
    title: "Private Cloud Deployment",
    description: "Dedicated infrastructure option",
    icon: <Server className="h-4 w-4 text-purple-400" />,
    status: "pending",
  },
]

const complianceItems = [
  {
    title: "GDPR Compliance",
    description: "Data protection and privacy controls",
    status: "compliant",
    progress: 100,
  },
  {
    title: "SOC 2 Certification",
    description: "Security, availability, and confidentiality",
    status: "compliant",
    progress: 100,
  },
  {
    title: "HIPAA Compliance",
    description: "Healthcare data protection standards",
    status: "pending",
    progress: 85,
  },
  {
    title: "ISO 27001",
    description: "Information security management",
    status: "pending",
    progress: 72,
  },
]
