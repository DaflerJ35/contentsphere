import type React from "react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { TiktokIcon } from "@/components/tiktok-icon"
import { FileTextIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

type Platform = {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  premium?: boolean
}

interface PlatformSelectorProps {
  selectedPlatforms: string[]
  onChange: (platforms: string[]) => void
}

export function PlatformSelector({ selectedPlatforms, onChange }: PlatformSelectorProps) {
  const platforms: Platform[] = [
    { id: "twitter", name: "Twitter", icon: <TwitterIcon className="h-5 w-5" />, color: "bg-[#1DA1F2]" },
    { id: "linkedin", name: "LinkedIn", icon: <LinkedinIcon className="h-5 w-5" />, color: "bg-[#0A66C2]" },
    {
      id: "instagram",
      name: "Instagram",
      icon: <InstagramIcon className="h-5 w-5" />,
      color: "bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4]",
    },
    { id: "facebook", name: "Facebook", icon: <FacebookIcon className="h-5 w-5" />, color: "bg-[#1877F2]" },
    { id: "tiktok", name: "TikTok", icon: <TiktokIcon className="h-5 w-5" />, color: "bg-black", premium: true },
    { id: "youtube", name: "Youtube", icon: <YoutubeIcon className="h-5 w-5" />, color: "bg-[#FF0000]", premium: true },
    { id: "blog", name: "Blog", icon: <FileTextIcon className="h-5 w-5" />, color: "bg-purple-600", premium: true },
  ]

  const handlePlatformToggle = (platformId: string) => {
    onChange(
      selectedPlatforms.includes(platformId)
        ? selectedPlatforms.filter((id) => id !== platformId)
        : [...selectedPlatforms, platformId],
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className="relative flex items-center space-x-3 rounded-xl border border-purple-800/20 bg-gray-800/30 p-3 transition-all hover:border-purple-500/30 hover:bg-gray-800/50"
        >
          <Checkbox
            id={`platform-${platform.id}`}
            checked={selectedPlatforms.includes(platform.id)}
            onCheckedChange={() => handlePlatformToggle(platform.id)}
            className="border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
          />
          <Label
            htmlFor={`platform-${platform.id}`}
            className="flex cursor-pointer items-center gap-2 text-sm font-medium"
          >
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${platform.color} shadow-lg`}>
              {platform.icon}
            </div>
            <span className="text-gray-300">{platform.name}</span>
          </Label>
          {platform.premium && (
            <Badge
              variant="outline"
              className="absolute -top-2 right-0 border-purple-500/20 bg-purple-500/10 text-[10px] text-purple-400"
            >
              PRO
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
