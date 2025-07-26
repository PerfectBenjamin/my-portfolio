"use client"

import { useEffect, useState } from "react"

export function Floating3DShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating 3D Cubes */}
      <div
        className="absolute w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg animate-bounce"
        style={{
          top: "20%",
          left: "10%",
          transform: `perspective(1000px) rotateX(45deg) rotateY(45deg) translateZ(${mousePosition.x * 0.05}px)`,
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full"
        style={{
          top: "60%",
          right: "15%",
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg) translateZ(${mousePosition.y * 0.03}px)`,
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <div
        className="absolute w-12 h-12 bg-gradient-to-br from-green-500/25 to-emerald-500/25 rounded-lg"
        style={{
          top: "40%",
          left: "80%",
          transform: `perspective(1000px) rotateX(${mousePosition.x * 0.01}deg) rotateY(${mousePosition.y * 0.01}deg) translateZ(${mousePosition.x * 0.02}px)`,
          animation: "float 10s ease-in-out infinite",
        }}
      />

      {/* Morphing Shapes */}
      <div
        className="absolute w-24 h-24 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-sm"
        style={{
          top: "80%",
          left: "20%",
          transform: `perspective(1000px) rotateZ(${mousePosition.x * 0.01}deg) scale(${1 + mousePosition.y * 0.0001})`,
          animation: "morph 12s ease-in-out infinite",
        }}
      />

      <div
        className="absolute w-32 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-sm"
        style={{
          top: "25%",
          right: "25%",
          transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) translateZ(${mousePosition.y * 0.02}px)`,
          animation: "stretch 15s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateX(180deg) rotateY(180deg); }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 50%; }
          25% { border-radius: 25% 75% 75% 25%; }
          50% { border-radius: 75% 25% 25% 75%; }
          75% { border-radius: 25% 75% 25% 75%; }
        }
        
        @keyframes stretch {
          0%, 100% { transform: scaleX(1) scaleY(1); }
          50% { transform: scaleX(1.5) scaleY(0.5); }
        }
      `}</style>
    </div>
  )
}
