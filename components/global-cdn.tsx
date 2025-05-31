"use client"

import { useState } from "react"
import { Globe, Server, Zap, Shield, BarChart2, RefreshCw, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function GlobalCDN() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const regions = [
    { id: "na", name: "North America", status: "Operational", latency: "12ms", traffic: 42, servers: 24 },
    { id: "eu", name: "Europe", status: "Operational", latency: "18ms", traffic: 35, servers: 18 },
    { id: "ap", name: "Asia Pacific", status: "Operational", latency: "45ms", traffic: 15, servers: 12 },
    { id: "sa", name: "South America", status: "Operational", latency: "65ms", traffic: 5, servers: 6 },
    { id: "af", name: "Africa", status: "Degraded", latency: "85ms", traffic: 3, servers: 4 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-400">Global CDN</h1>
          <p className="text-sm text-gray-400">Manage your global content delivery network</p>
        </div>
        <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1">
          <Shield className="mr-1 h-3 w-3" />
          Enterprise Feature
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-400" />
              Edge Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">64</div>
            <p className="text-sm text-gray-400">Global edge locations</p>
          </CardContent>
        </Card>

        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-400" />
              Average Latency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24ms</div>
            <p className="text-sm text-gray-400">Global average</p>
          </CardContent>
        </Card>

        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-green-400" />
              Cache Hit Ratio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">94.7%</div>
            <p className="text-sm text-gray-400">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card className="border-purple-900/50 bg-purple-900/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Server className="h-5 w-5 text-orange-400" />
              Total Traffic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8.2 TB</div>
            <p className="text-sm text-gray-400">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-purple-900/30 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
            Overview
          </TabsTrigger>
          <TabsTrigger value="regions" className="data-[state=active]:bg-purple-600">
            Regions
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
            Settings
          </TabsTrigger>
          <TabsTrigger value="purge" className="data-[state=active]:bg-purple-600">
            Cache Purge
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="border-purple-900/50 bg-purple-900/10 text-white">
            <CardHeader>
              <CardTitle>CDN Performance Overview</CardTitle>
              <CardDescription className="text-gray-400">
                Global performance metrics for your content delivery network
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-400">Global Status</Label>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Operational</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label className="text-gray-400">Cache Hit Ratio</Label>
                      <span className="text-sm">94.7%</span>
                    </div>
                    <Progress value={94.7} className="h-2 bg-gray-800" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label className="text-gray-400">Origin Shield Efficiency</Label>
                      <span className="text-sm">87.3%</span>
                    </div>
                    <Progress value={87.3} className="h-2 bg-gray-800" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label className="text-gray-400">Edge Compute Utilization</Label>
                      <span className="text-sm">62.8%</span>
                    </div>
                    <Progress value={62.8} className="h-2 bg-gray-800" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-purple-900/50 bg-purple-900/20 p-4">
                <h3 className="text-lg font-medium mb-2">Regional Traffic Distribution</h3>
                <div className="space-y-3">
                  {regions.map((region) => (
                    <div key={region.id} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{region.name}</span>
                        <span>{region.traffic}%</span>
                      </div>
                      <Progress value={region.traffic} className="h-1.5 bg-gray-800" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-purple-900/50 flex justify-between">
              <Button
                variant="outline"
                className="gap-2 bg-purple-900/20 border-purple-900/50 text-white hover:bg-purple-900/30"
              >
                <Download className="h-4 w-4" />
                Export Report
              </Button>
              <Button
                variant="outline"
                className="gap-2 bg-purple-900/20 border-purple-900/50 text-white hover:bg-purple-900/30"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="regions">
          <Card className="border-purple-900/50 bg-purple-900/10 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>CDN Regions</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your global CDN regions and edge locations
                  </CardDescription>
                </div>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-[180px] bg-purple-900/20 border-purple-900/50 text-white">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent className="bg-purple-900/10 border-purple-900/50 text-white">
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="ap">Asia Pacific</SelectItem>
                    <SelectItem value="sa">South America</SelectItem>
                    <SelectItem value="af">Africa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {regions.map((region) => (
                  <div key={region.id} className="rounded-lg border border-purple-900/50 bg-purple-900/20 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-medium">{region.name}</h3>
                      <Badge
                        className={
                          region.status === "Operational"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {region.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Edge Locations</span>
                        <span>{region.servers}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Average Latency</span>
                        <span>{region.latency}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Traffic Share</span>
                        <span>{region.traffic}%</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-purple-900/20 border-purple-900/50 text-white hover:bg-purple-900/30"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="border-purple-900/50 bg-purple-900/10 text-white">
            <CardHeader>
              <CardTitle>CDN Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Configure your global content delivery network settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">HTTP/3 Support</div>
                  <div className="text-sm text-gray-400">Enable HTTP/3 (QUIC) for faster connections</div>
                </div>
                <Switch checked={true} className="data-[state=checked]:bg-purple-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Brotli Compression</div>
                  <div className="text-sm text-gray-400">Use Brotli compression for faster content delivery</div>
                </div>
                <Switch checked={true} className="data-[state=checked]:bg-purple-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Origin Shield</div>
                  <div className="text-sm text-gray-400">Reduce load on origin servers by caching at the edge</div>
                </div>
                <Switch checked={true} className="data-[state=checked]:bg-purple-600" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Edge Computing</div>
                  <div className="text-sm text-gray-400">
                    Run serverless functions at the edge for faster processing
                  </div>
                </div>
                <Switch checked={true} className="data-[state=checked]:bg-purple-600" />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Cache TTL Settings</Label>
                <div className="space-y-2 rounded-lg border border-purple-900/50 bg-purple-900/20 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="static-ttl" className="text-xs text-gray-400">
                        Static Assets (CSS, JS, Images)
                      </Label>
                      <Select defaultValue="86400">
                        <SelectTrigger id="static-ttl" className="bg-purple-900/20 border-purple-900/50 text-white">
                          <SelectValue placeholder="Select TTL" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-900/10 border-purple-900/50 text-white">
                          <SelectItem value="3600">1 hour</SelectItem>
                          <SelectItem value="86400">1 day</SelectItem>
                          <SelectItem value="604800">1 week</SelectItem>
                          <SelectItem value="2592000">30 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dynamic-ttl" className="text-xs text-gray-400">
                        Dynamic Content (API, HTML)
                      </Label>
                      <Select defaultValue="300">
                        <SelectTrigger id="dynamic-ttl" className="bg-purple-900/20 border-purple-900/50 text-white">
                          <SelectValue placeholder="Select TTL" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-900/10 border-purple-900/50 text-white">
                          <SelectItem value="0">No cache</SelectItem>
                          <SelectItem value="60">1 minute</SelectItem>
                          <SelectItem value="300">5 minutes</SelectItem>
                          <SelectItem value="3600">1 hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-purple-900/50">
              <Button className="gap-2 bg-purple-600 text-white hover:bg-purple-700">
                <Settings className="h-4 w-4" />
                Save CDN Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="purge">
          <Card className="border-purple-900/50 bg-purple-900/10 text-white">
            <CardHeader>
              <CardTitle>Cache Purge</CardTitle>
              <CardDescription className="text-gray-400">Clear cached content from the CDN</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Purge Options</Label>
                <div className="space-y-4 rounded-lg border border-purple-900/50 bg-purple-900/20 p-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="purge-all"
                      name="purge-type"
                      className="h-4 w-4 text-purple-600 bg-purple-900/20 border-purple-900/50"
                    />
                    <Label htmlFor="purge-all" className="text-white cursor-pointer">
                      Purge All Cache
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="purge-url"
                      name="purge-type"
                      className="h-4 w-4 text-purple-600 bg-purple-900/20 border-purple-900/50"
                      defaultChecked
                    />
                    <Label htmlFor="purge-url" className="text-white cursor-pointer">
                      Purge Specific URLs
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="purge-prefix"
                      name="purge-type"
                      className="h-4 w-4 text-purple-600 bg-purple-900/20 border-purple-900/50"
                    />
                    <Label htmlFor="purge-prefix" className="text-white cursor-pointer">
                      Purge URL Prefix
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="purge-tag"
                      name="purge-type"
                      className="h-4 w-4 text-purple-600 bg-purple-900/20 border-purple-900/50"
                    />
                    <Label htmlFor="purge-tag" className="text-white cursor-pointer">
                      Purge Cache Tags
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purge-urls" className="text-white">
                  URLs to Purge
                </Label>
                <textarea
                  id="purge-urls"
                  placeholder="Enter URLs to purge (one per line)"
                  className="w-full min-h-[120px] rounded-md bg-purple-900/20 border border-purple-900/50 text-white placeholder:text-gray-500 p-2"
                ></textarea>
                <p className="text-xs text-gray-400">
                  Enter one URL per line. Use * for wildcards. Example: https://example.com/images/*
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Purge Region</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="bg-purple-900/20 border-purple-900/50 text-white">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent className="bg-purple-900/10 border-purple-900/50 text-white">
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="ap">Asia Pacific</SelectItem>
                    <SelectItem value="sa">South America</SelectItem>
                    <SelectItem value="af">Africa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="border-t border-purple-900/50">
              <Button className="gap-2 bg-purple-600 text-white hover:bg-purple-700">
                <RefreshCw className="h-4 w-4" />
                Purge Cache
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
