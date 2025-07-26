"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Hand } from "lucide-react"

interface MobileGestureIndicatorProps {
  onDismiss?: () => void
}

export function MobileGestureIndicator({ onDismiss }: MobileGestureIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTip, setCurrentTip] = useState(0)

  const gestureTips = [
    {
      icon: ChevronUp,
      title: "Swipe Up",
      description: "Navigate to next section",
      animation: "animate-bounce",
    },
    {
      icon: ChevronDown,
      title: "Swipe Down",
      description: "Go to previous section",
      animation: "animate-bounce",
    },
    {
      icon: ChevronLeft,
      title: "Swipe Left",
      description: "Next project or skill",
      animation: "animate-pulse",
    },
    {
      icon: ChevronRight,
      title: "Swipe Right",
      description: "Previous project or skill",
      animation: "animate-pulse",
    },
    {
      icon: Hand,
      title: "Long Press",
      description: "Quick actions menu",
      animation: "animate-ping",
    },
  ]

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const hasSeenTutorial = localStorage.getItem("hasSeenGestureTutorial")

    if (isMobile && !hasSeenTutorial) {
      setIsVisible(true)
      const interval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % gestureTips.length)
      }, 2000)

      const timeout = setTimeout(() => {
        setIsVisible(false)
        localStorage.setItem("hasSeenGestureTutorial", "true")
        onDismiss?.()
      }, 10000)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [onDismiss])

  if (!isVisible) return null

  const currentGesture = gestureTips[currentTip]
  const Icon = currentGesture.icon

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border border-primary/20 rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full bg-primary/10 ${currentGesture.animation}`}>
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{currentGesture.title}</h4>
            <p className="text-xs text-muted-foreground">{currentGesture.description}</p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false)
              localStorage.setItem("hasSeenGestureTutorial", "true")
              onDismiss?.()
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ×
          </button>
        </div>
        <div className="flex gap-1 mt-3">
          {gestureTips.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentTip ? "bg-primary w-6" : "bg-muted w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
