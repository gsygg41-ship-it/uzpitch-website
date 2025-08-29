'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import logoImage from 'figma:asset/28d73aedd10c1faab9b7e46535cc6f743da3420b.png'
import { useJoinUs } from './JoinUsContext'

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false)
  const { openForm } = useJoinUs()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleJoinUs = () => {
    openForm() // Opens without pre-selecting a role
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="UzPitch" className="w-8 h-8" />
          <span className="text-white text-lg font-medium">UzPitch</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#journey" className="text-white/80 hover:text-white transition-colors">Journey</a>
          <a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a>
          <a href="#mentors" className="text-white/80 hover:text-white transition-colors">Mentors</a>
          <button 
            onClick={handleJoinUs}
            className="bg-[#FF6F00] text-white px-6 py-2 rounded-full hover:bg-[#FF6F00]/90 transition-colors"
          >
            Join Us
          </button>
        </div>
      </div>
    </motion.nav>
  )
}