"use client"

import type React from "react"

import { useMobileNavigation } from "@/hooks/use-mobile-navigation"
import { useTouchGestures } from "@/hooks/use-touch-gestures"

interface SwipeableSectionNavigatorProps {
  children: React.ReactNode
}

export function SwipeableSectionNavigator({ children }: SwipeableSectionNavigatorProps) {
  const { nextSection, prevSection, currentSection, totalSections } = useMobileNavigation()

  const gestureRef = useTouchGestures({
    onSwipeUp: nextSection,
    onSwipeDown: prevSection,
    threshold: 75,
  })

  return (
    <div ref={gestureRef} className="min-h-screen">
      {children}

      {/* Mobile Section Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 md:hidden">
        <div className="flex flex-col gap-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                index === currentSection ? "bg-primary shadow-lg shadow-primary/50" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
