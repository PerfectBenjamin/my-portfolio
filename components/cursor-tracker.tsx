"use client"

import { useEffect } from "react"

export function CursorTracker() {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      document.body.style.setProperty("--mouse-x", `${x}px`)
      document.body.style.setProperty("--mouse-y", `${y}px`)

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.matches('a, button, [role="button"], input, textarea, select') ||
        target.closest('a, button, [role="button"]') ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")

      if (isClickable) {
        document.body.style.setProperty("--cursor-scale", "1.8")
      } else {
        document.body.style.setProperty("--cursor-scale", "1")
      }
    }

    // Force hide system cursor
    const hideSystemCursor = () => {
      document.body.style.cursor = "none"
      document.documentElement.style.cursor = "none"
    }

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseenter", hideSystemCursor)
    hideSystemCursor()

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseenter", hideSystemCursor)
    }
  }, [])

  useEffect(() => {
    // Add CSS custom properties for cursor position
    const style = document.createElement("style")
    style.textContent = `
      body::before {
        left: var(--mouse-x, 0px);
        top: var(--mouse-y, 0px);
        transform: translate(-50%, -50%) scale(var(--cursor-scale, 1));
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return null
}
