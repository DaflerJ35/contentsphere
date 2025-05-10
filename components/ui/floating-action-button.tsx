"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, X, Sparkles, Clock, FileText, BarChart3, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const actions = [
    { icon: <Sparkles className="h-5 w-5" />, label: "Transform Content", color: "from-purple-600 to-indigo-600" },
    { icon: <Clock className="h-5 w-5" />, label: "Schedule Post", color: "from-blue-600 to-cyan-600" },
    { icon: <FileText className="h-5 w-5" />, label: "New Template", color: "from-amber-500 to-orange-600" },
    { icon: <BarChart3 className="h-5 w-5" />, label: "View Analytics", color: "from-green-600 to-emerald-600" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Get Help", color: "from-pink-600 to-rose-600" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col-reverse items-end gap-2">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center gap-2"
              >
                <div className="rounded-full bg-gray-800/90 px-3 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                  {action.label}
                </div>
                <Button
                  className={`h-12 w-12 rounded-full bg-gradient-to-r ${action.color} p-0 text-white shadow-lg shadow-purple-900/30 hover:shadow-xl hover:shadow-purple-900/40`}
                >
                  {action.icon}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <Button
        onClick={toggleOpen}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 p-0 text-white shadow-lg shadow-purple-900/30 hover:shadow-xl hover:shadow-purple-900/40"
        size="icon"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  )
}
