"use client"

import { useEffect, useRef, useState } from "react"

interface TouchGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onPinch?: (scale: number) => void
  onTap?: () => void
  onDoubleTap?: () => void
  onLongPress?: () => void
  threshold?: number
  longPressDelay?: number
}

export function useTouchGestures(options: TouchGestureOptions = {}) {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    onTap,
    onDoubleTap,
    onLongPress,
    threshold = 50,
    longPressDelay = 500,
  } = options

  const ref = useRef<HTMLElement>(null)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)
  const [lastTap, setLastTap] = useState<number>(0)
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null)
  const [initialDistance, setInitialDistance] = useState<number>(0)

  const getDistance = (touch1: Touch, touch2: Touch) => {
    return Math.sqrt(Math.pow(touch2.clientX - touch1.clientX, 2) + Math.pow(touch2.clientY - touch1.clientY, 2))
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0]
        setTouchStart({ x: touch.clientX, y: touch.clientY })
        setTouchEnd(null)

        // Long press detection
        const timer = setTimeout(() => {
          onLongPress?.()
        }, longPressDelay)
        setLongPressTimer(timer)
      } else if (e.touches.length === 2) {
        // Pinch gesture
        const distance = getDistance(e.touches[0], e.touches[1])
        setInitialDistance(distance)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (longPressTimer) {
        clearTimeout(longPressTimer)
        setLongPressTimer(null)
      }

      if (e.touches.length === 1) {
        const touch = e.touches[0]
        setTouchEnd({ x: touch.clientX, y: touch.clientY })
      } else if (e.touches.length === 2 && initialDistance > 0) {
        const currentDistance = getDistance(e.touches[0], e.touches[1])
        const scale = currentDistance / initialDistance
        onPinch?.(scale)
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (longPressTimer) {
        clearTimeout(longPressTimer)
        setLongPressTimer(null)
      }

      if (!touchStart || !touchEnd) {
        // Tap detection
        const now = Date.now()
        const timeDiff = now - lastTap

        if (timeDiff < 300 && timeDiff > 0) {
          onDoubleTap?.()
        } else {
          onTap?.()
        }
        setLastTap(now)
        return
      }

      const deltaX = touchEnd.x - touchStart.x
      const deltaY = touchEnd.y - touchStart.y
      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      if (Math.max(absDeltaX, absDeltaY) > threshold) {
        if (absDeltaX > absDeltaY) {
          // Horizontal swipe
          if (deltaX > 0) {
            onSwipeRight?.()
          } else {
            onSwipeLeft?.()
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            onSwipeDown?.()
          } else {
            onSwipeUp?.()
          }
        }
      }

      setTouchStart(null)
      setTouchEnd(null)
      setInitialDistance(0)
    }

    element.addEventListener("touchstart", handleTouchStart, { passive: false })
    element.addEventListener("touchmove", handleTouchMove, { passive: false })
    element.addEventListener("touchend", handleTouchEnd, { passive: false })

    return () => {
      element.removeEventListener("touchstart", handleTouchStart)
      element.removeEventListener("touchmove", handleTouchMove)
      element.removeEventListener("touchend", handleTouchEnd)
      if (longPressTimer) {
        clearTimeout(longPressTimer)
      }
    }
  }, [
    touchStart,
    touchEnd,
    lastTap,
    longPressTimer,
    initialDistance,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    onTap,
    onDoubleTap,
    onLongPress,
    threshold,
    longPressDelay,
  ])

  return ref
}
