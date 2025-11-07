"use client"
import { useEffect, useState } from 'react'

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const sections = ['hero', 'about', 'projects', 'contact']

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id)
            if (index !== -1) {
              setActiveSection(index)
            }
          }
        })
      },
      { 
        threshold: 0.6,
        rootMargin: '-10% 0px -10% 0px' // Adjusts the trigger zone
      }
    )

    // Wait for page to load before observing sections
    const timeoutId = setTimeout(() => {
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          observer.observe(element)
        } else {
          console.warn(`Section with id '${section}' not found`)
        }
      })
    }, 100)

    window.addEventListener('scroll', updateScrollProgress)
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [sections])

  return (
    <>
      {/* Vertical Progress Bar on Right Side */}
      <div className="fixed right-0 top-0 w-1 h-full z-50 bg-c2/20">
        <div 
          className="w-full bg-c1 transition-all duration-100"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((section, index) => (
          <a
            key={section}
            href={`#${section}`}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === activeSection 
                ? 'bg-c1 border-c1 scale-125' 
                : 'bg-transparent border-c2 opacity-60 hover:opacity-100'
            }`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>
    </>
  )
}


export default ScrollIndicator