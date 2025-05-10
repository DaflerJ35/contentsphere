"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationToastProps {
  title: string
  description: string
  type?: "success" | "info" | "warning" | "error"
  duration?: number
  onClose?: () => void
}

export function NotificationToast({
  title,
  description,
  type = "info",
  duration = 5000,
  onClose,
}: NotificationToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) onClose()
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return <Check className="h-5 w-5 text-green-400" />
      case "info":
        return <Bell className="h-5 w-5 text-blue-400" />
      case "warning":
        return <Bell className="h-5 w-5 text-amber-400" />
      case "error":
        return <Bell className="h-5 w-5 text-red-400" />
      default:
        return <Bell className="h-5 w-5 text-blue-400" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500/10 border-green-500/20"
      case "info":
        return "bg-blue-500/10 border-blue-500/20"
      case "warning":
        return "bg-amber-500/10 border-amber-500/20"
      case "error":
        return "bg-red-500/10 border-red-500/20"
      default:
        return "bg-blue-500/10 border-blue-500/20"
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`fixed right-4 top-4 z-50 flex w-80 items-start gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm ${getBgColor()}`}
        >
          <div className="rounded-full bg-white/10 p-2">{getIcon()}</div>
          <div className="flex-1">
            <h4 className="font-medium text-white">{title}</h4>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full text-gray-400 hover:bg-white/10 hover:text-white"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
