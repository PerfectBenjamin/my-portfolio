"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Github, Linkedin, Phone, Download, Share2 } from "lucide-react"
import Link from "next/link"

interface MobileQuickActionsProps {
  isVisible: boolean
  onClose: () => void
  position: { x: number; y: number }
}

export function MobileQuickActions({ isVisible, onClose, position }: MobileQuickActionsProps) {
  const actions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:perfect@example.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "from-gray-700 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+1234567890",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Download,
      label: "Resume",
      href: "/resume.pdf",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Share2,
      label: "Share",
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: "Perfect Benjamin-Maji - Fullstack Developer",
            text: "Check out my portfolio!",
            url: window.location.href,
          })
        }
      },
      color: "from-orange-500 to-orange-600",
    },
  ]

  if (!isVisible) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={onClose} />
      <Card
        className="fixed z-50 p-4 bg-background/95 backdrop-blur-md border-primary/20 shadow-xl md:hidden"
        style={{
          left: Math.min(position.x, window.innerWidth - 200),
          top: Math.min(position.y, window.innerHeight - 300),
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="grid grid-cols-2 gap-3 w-48">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild={!!action.href}
              onClick={action.onClick || onClose}
              className={`group relative overflow-hidden bg-gradient-to-r ${action.color} text-white border-0 hover:scale-105 transition-all duration-300`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideInScale 0.3s ease-out forwards",
              }}
            >
              {action.href ? (
                <Link href={action.href} className="flex items-center gap-2">
                  {action.icon && <action.icon className="w-4 h-4" />}
                  <span className="text-xs">{action.label}</span>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  {action.icon && <action.icon className="w-4 h-4" />}
                  <span className="text-xs">{action.label}</span>
                </div>
              )}
            </Button>
          ))}
        </div>
      </Card>
    </>
  )
}
