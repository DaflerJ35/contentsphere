import { SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UpgradeButton() {
  return (
    <Button variant="premium" size="sm" className="shadow-lg shadow-purple-900/30">
      <SparklesIcon className="mr-2 h-4 w-4" />
      Upgrade
    </Button>
  )
}
