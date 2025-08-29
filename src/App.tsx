'use client'

import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection, GlobalStylesAndKeyframes } from './components/HeroSection'
import { JourneySection } from './components/JourneySection'
import PortfolioSection from './components/PortfolioSection'
import { EventsSection } from './components/EventsSection'
import { MentorsSection } from './components/MentorsSection'
import { JoinUsSection } from './components/JoinUsSection'
import { FooterSection } from './components/FooterSection'
import { JoinUsProvider } from './components/JoinUsContext'

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Set up custom scrollbar styling for webkit browsers
    const style = document.createElement('style')
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0D0D0D;
      }
      ::-webkit-scrollbar-thumb {
        background: #FF6F00;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #FF8F33;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <JoinUsProvider>
      <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
        <GlobalStylesAndKeyframes />
        <Navigation />
        
        <main>
          <HeroSection />
          <JourneySection />
          <PortfolioSection />
          <EventsSection />
          <MentorsSection />
          <JoinUsSection />
          <FooterSection />
        </main>
      </div>
    </JoinUsProvider>
  )
}