import { Check, Info, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function SubscriptionPlans() {
  return (
    <Card className="border-purple-800/20 bg-gray-900/50 shadow-xl shadow-purple-900/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 p-2 shadow-lg shadow-amber-900/20">
              <Star className="h-5 w-5 text-white" />
            </div>
            <CardTitle>Subscription Plans</CardTitle>
          </div>
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">25% OFF</Badge>
        </div>
        <CardDescription className="text-gray-400">Upgrade to unlock premium features</CardDescription>
      </CardHeader>
      <CardContent className="pb-1">
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-4 grid w-48 grid-cols-2 bg-gray-800/50 p-1">
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                Yearly
                <span className="ml-1 rounded-full bg-green-500/20 px-1.5 py-0.5 text-[10px] font-medium text-green-400">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <div className="rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-4">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Professional</h3>
                  <p className="text-sm text-gray-400">For content creators and marketers</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    $79
                  </div>
                  <div className="text-xs text-gray-500">per month</div>
                </div>
              </div>
              <ul className="mb-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">200 transformations per month</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">All platforms supported</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">Advanced customization options</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">Content performance analytics</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
                Upgrade to Pro
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="mt-0">
            <div className="rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-4">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Professional</h3>
                  <p className="text-sm text-gray-400">For content creators and marketers</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    $759
                  </div>
                  <div className="text-xs text-gray-500">per year</div>
                </div>
              </div>
              <ul className="mb-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">200 transformations per month</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">All platforms supported</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">Advanced customization options</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">Content performance analytics</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-indigo-500">
                Upgrade to Pro
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-1">
        <div className="flex items-center text-xs text-gray-500">
          <Info className="mr-1 h-3 w-3" />
          <span>Compare all plans</span>
        </div>
        <div className="text-xs text-gray-500">Starter plan also available at $29/mo</div>
      </CardFooter>
    </Card>
  )
}
