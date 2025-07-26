"use client"

import { useEffect, useState } from "react"

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1 - Slowest */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Layer 2 - Medium */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_70%)]"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Layer 3 - Fastest */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_60%)]"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
    </div>
  )
}
