"use client"

import { useState, useEffect } from "react"

export function useMobileNavigation() {
  const [currentSection, setCurrentSection] = useState(0)
  const sections = ["hero", "about", "skills", "projects", "experience", "contact"]

  const navigateToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index])
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setCurrentSection(index)
      }
    }
  }

  const nextSection = () => {
    navigateToSection(currentSection + 1)
  }

  const prevSection = () => {
    navigateToSection(currentSection - 1)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    currentSection,
    totalSections: sections.length,
    nextSection,
    prevSection,
    navigateToSection,
    sections,
  }
}
