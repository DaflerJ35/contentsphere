"use client"

import { Shield, Users, Clock, BarChart, FileText, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThreeDCard } from "@/components/3d-enterprise-card"
import { motion } from "framer-motion"
import { ThreeDGlobe } from "@/components/3d-globe"

export function EnterpriseFeatures() {
  const features = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with unlimited team members",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "SSO, audit logs, and compliance controls",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Team performance and content insights",
    },
    {
      icon: Clock,
      title: "Priority Support",
      description: "24/7 dedicated support with 1-hour response time",
    },
    {
      icon: FileText,
      title: "Custom Templates",
      description: "Create and share custom templates",
    },
    {
      icon: Lock,
      title: "Role-Based Access",
      description: "Control permissions and access levels",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="h-5 w-5 text-purple-500" />
          <span className="text-xl font-bold">Enterprise Features</span>
        </motion.div>
        <Badge className="enterprise-badge">New</Badge>
      </div>

      <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg">
        <ThreeDGlobe className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-background/80 to-background/80 p-6 text-center">
          <h3 className="mb-2 text-xl font-semibold">Global Enterprise Network</h3>
          <p className="text-sm text-muted-foreground">
            Access your content transformation platform from anywhere in the world
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <ThreeDCard key={index} className="rounded-lg border bg-background p-4 transition-all">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-purple-100 p-1.5 dark:bg-purple-900/30">
                <feature.icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          Learn More
        </Button>
      </motion.div>
    </div>
  )
}
