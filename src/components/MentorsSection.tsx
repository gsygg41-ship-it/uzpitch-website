'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { MessageCircle, Calendar, Star, TrendingUp, Users } from 'lucide-react'

const mentors = [
  {
    id: 1,
    name: "Alisher Usmanov",
    role: "Tech Investor & Visionary",
    expertise: "Deep Tech, AI/ML, Fintech",
    experience: "20+ years",
    portfolio: "$2.5B+ portfolio value",
    companies: "40+ successful investments",
    achievements: ["15 unicorn investments", "Global recognition", "Industry pioneer"],
    image: "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Leading the next generation of deep tech innovations with unparalleled expertise in AI and fintech ecosystems.",
    orbitRadius: { desktop: 160, tablet: 120, large: 200 },
    angle: 0
  },
  {
    id: 2,
    name: "Sardor Mukhammadiev",
    role: "Serial Entrepreneur",
    expertise: "E-commerce, SaaS, Mobile",
    experience: "15+ years",
    portfolio: "$500M+ in exits",
    companies: "3 successful exits",
    achievements: ["20+ portfolio companies", "Industry pioneer", "Growth specialist"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Transforming digital commerce through strategic innovation and sustainable growth methodologies.",
    orbitRadius: { desktop: 190, tablet: 140, large: 240 },
    angle: 60
  },
  {
    id: 3,
    name: "Nilufar Khodjayeva",
    role: "Fintech Pioneer",
    expertise: "Banking, Payments, Blockchain",
    experience: "18+ years",
    portfolio: "$1B+ deals closed",
    companies: "Former Goldman Sachs VP",
    achievements: ["Fintech innovator", "Regulatory expert", "Market leader"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Pioneering the future of financial technology with deep regulatory expertise and market insight.",
    orbitRadius: { desktop: 175, tablet: 130, large: 220 },
    angle: 120
  },
  {
    id: 4,
    name: "Jamshid Kuchkarov",
    role: "Banking & Finance Leader",
    expertise: "Traditional Banking, Digital Transformation",
    experience: "25+ years",
    portfolio: "Digital transformation",
    companies: "Former Central Bank advisor",
    achievements: ["Banking transformation", "Policy influence", "Digital pioneer"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Bridging traditional banking with digital innovation through strategic leadership and policy expertise.",
    orbitRadius: { desktop: 200, tablet: 150, large: 260 },
    angle: 180
  },
  {
    id: 5,
    name: "Gulnara Karimova",
    role: "Digital Innovation Strategist",
    expertise: "IoT, Smart Cities, Digital Health",
    experience: "12+ years",
    portfolio: "Smart city projects",
    companies: "Former Microsoft Director",
    achievements: ["IoT innovation", "Digital health leader", "Smart cities expert"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Architecting the connected future through IoT innovation and smart city development initiatives.",
    orbitRadius: { desktop: 165, tablet: 125, large: 210 },
    angle: 240
  },
  {
    id: 6,
    name: "Bobur Khojimatov",
    role: "E-commerce Pioneer",
    expertise: "Marketplace, Logistics, Cross-border",
    experience: "16+ years",
    portfolio: "$100M+ platforms built",
    companies: "Multiple marketplace exits",
    achievements: ["E-commerce leader", "Logistics innovation", "Market expansion"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lbnRvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=600",
    bio: "Revolutionizing global commerce through innovative marketplace solutions and logistics optimization.",
    orbitRadius: { desktop: 185, tablet: 135, large: 230 },
    angle: 300
  }
]

const stats = [
  { number: "25+", label: "Expert Mentors", icon: Users },
  { number: "1000+", label: "Mentorship Hours", icon: TrendingUp },
  { number: "95%", label: "Success Rate", icon: Star }
]

export function MentorsSection() {
  const [selectedMentor, setSelectedMentor] = useState(0)
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null)
  const [orbitRotation, setOrbitRotation] = useState(0)
  const [screenSize, setScreenSize] = useState<'tablet' | 'desktop' | 'large'>('desktop')
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect screen size
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      if (width < 1024) {
        setScreenSize('tablet')
      } else if (width < 1440) {
        setScreenSize('desktop')
      } else {
        setScreenSize('large')
      }
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Continuous orbit rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitRotation(prev => prev + 0.3)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Auto mentor rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedMentor(prev => (prev + 1) % mentors.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentMentor = mentors[selectedMentor]

  const getOrbitPosition = (mentor: typeof mentors[0], rotationOffset: number = 0) => {
    const angle = (mentor.angle + orbitRotation + rotationOffset) * (Math.PI / 180)
    let radius
    
    switch (screenSize) {
      case 'tablet':
        radius = mentor.orbitRadius.tablet
        break
      case 'large':
        radius = mentor.orbitRadius.large
        break
      default:
        radius = mentor.orbitRadius.desktop
    }
    
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y }
  }

  // Dynamic orbit ring sizes based on screen size
  const getOrbitRings = () => {
    switch (screenSize) {
      case 'tablet':
        return [120, 130, 140, 150]
      case 'large':
        return [200, 220, 240, 260]
      default:
        return [160, 175, 190, 200]
    }
  }

  // Dynamic orbital container height
  const getOrbitalHeight = () => {
    switch (screenSize) {
      case 'tablet':
        return '350px'
      case 'large':
        return '600px'
      default:
        return '450px'
    }
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden py-12 lg:py-16 xl:py-20">
      {/* Background constellation effect */}
      <div className="absolute inset-0">
        {/* Ambient background circles */}
        {Array.from({ length: screenSize === 'tablet' ? 8 : screenSize === 'large' ? 16 : 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 lg:w-2 lg:h-2 xl:w-3 xl:h-3 bg-gray-100 rounded-full"
            style={{
              left: `${20 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center w-full">
          
          {/* Left: Orbital System */}
          <div 
            className="relative flex items-center justify-center order-2 lg:order-1" 
            ref={containerRef} 
            style={{ height: getOrbitalHeight() }}
          >
            
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {getOrbitRings().map((radius, i) => (
                <motion.div
                  key={radius}
                  className="absolute border border-gray-100 rounded-full"
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                />
              ))}
            </div>

            {/* Central Featured Mentor */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMentor.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-20 rounded-full bg-white shadow-2xl overflow-hidden border-4 border-[#FF6F00]/20 ${
                  screenSize === 'tablet' ? 'w-24 h-24' : screenSize === 'large' ? 'w-40 h-40' : 'w-32 h-32'
                }`}
              >
                <img
                  src={currentMentor.image}
                  alt={currentMentor.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Central pulse ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#FF6F00] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0.3, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Experience badge */}
                <div className={`absolute -top-1 -right-1 lg:-top-2 lg:-right-2 xl:-top-3 xl:-right-3 bg-[#FF6F00] text-white rounded-full font-medium ${
                  screenSize === 'tablet' ? 'text-xs px-1.5 py-0.5' : screenSize === 'large' ? 'text-sm px-3 py-1.5' : 'text-xs px-2 py-1'
                }`}>
                  {currentMentor.experience}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Orbiting Mentors */}
            {mentors.map((mentor, index) => {
              const position = getOrbitPosition(mentor)
              const isSelected = index === selectedMentor
              const isHovered = index === hoveredMentor

              return (
                <motion.div
                  key={mentor.id}
                  className="absolute z-10"
                  style={{
                    x: position.x,
                    y: position.y,
                  }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredMentor(index)}
                  onHoverEnd={() => setHoveredMentor(null)}
                >
                  <motion.button
                    onClick={() => setSelectedMentor(index)}
                    className={`relative rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      screenSize === 'tablet' ? 'w-12 h-12' : screenSize === 'large' ? 'w-20 h-20' : 'w-16 h-16'
                    } ${
                      isSelected 
                        ? 'border-[#FF6F00] shadow-lg shadow-[#FF6F00]/30' 
                        : 'border-gray-200 hover:border-[#FF6F00]/50'
                    }`}
                    animate={{
                      scale: isSelected ? 1.2 : 1,
                      opacity: isSelected ? 0.3 : 1,
                    }}
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Orbital connection line */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-r from-[#FF6F00]/30 to-transparent origin-left"
                      style={{
                        height: '2px',
                        width: screenSize === 'tablet' ? mentor.orbitRadius.tablet : 
                               screenSize === 'large' ? mentor.orbitRadius.large : 
                               mentor.orbitRadius.desktop,
                        transform: 'translate(-50%, -50%) rotate(180deg)',
                      }}
                      animate={{
                        opacity: isSelected ? 0.6 : 0.2,
                      }}
                    />
                  </motion.button>

                  {/* Floating info panel */}
                  <AnimatePresence>
                    {isHovered && !isSelected && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-100 p-2 lg:p-3 xl:p-4 z-30 ${
                          screenSize === 'tablet' ? 'w-36' : screenSize === 'large' ? 'w-56' : 'w-48'
                        }`}
                      >
                        <p className={`font-medium text-gray-900 mb-1 ${
                          screenSize === 'tablet' ? 'text-xs' : screenSize === 'large' ? 'text-base' : 'text-sm'
                        }`}>
                          {mentor.name}
                        </p>
                        <p className={`text-[#FF6F00] mb-2 ${screenSize === 'large' ? 'text-sm' : 'text-xs'}`}>
                          {mentor.role}
                        </p>
                        <p className={`text-gray-600 ${screenSize === 'large' ? 'text-sm' : 'text-xs'}`}>
                          {mentor.expertise}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}

            {/* Stats orbit */}
            {stats.map((stat, index) => {
              const angle = (index * 120 + orbitRotation * 0.5) * (Math.PI / 180)
              const radius = screenSize === 'tablet' ? 180 : screenSize === 'large' ? 320 : 240
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={index}
                  className="absolute z-5"
                  style={{ x, y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <div className={`bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg ${
                    screenSize === 'tablet' ? 'p-2' : screenSize === 'large' ? 'p-4' : 'p-3'
                  }`}>
                    <stat.icon className={`text-[#FF6F00] ${
                      screenSize === 'tablet' ? 'w-4 h-4' : screenSize === 'large' ? 'w-6 h-6' : 'w-5 h-5'
                    }`} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Information Panel */}
          <div className="space-y-4 lg:space-y-6 xl:space-y-8 order-1 lg:order-2">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 lg:space-y-6 xl:space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-[#FF6F00]/10 text-[#FF6F00] px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-full text-xs lg:text-sm xl:text-base font-medium">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                Mentorship Constellation
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Your orbit of
                <span className="block text-[#FF6F00]">industry experts</span>
              </h1>
              
              <p className="text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                Connect with visionaries who've shaped the future of technology. 
                Each mentor brings unique expertise to guide your journey.
              </p>
            </motion.div>

            {/* Featured Mentor Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gray-50 rounded-2xl xl:rounded-3xl p-4 lg:p-6 xl:p-8 space-y-3 lg:space-y-4 xl:space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-900 mb-1">
                    {currentMentor.name}
                  </h3>
                  <p className="text-[#FF6F00] font-medium text-sm lg:text-base xl:text-lg">
                    {currentMentor.role}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm lg:text-base xl:text-lg">
                  {currentMentor.bio}
                </p>

                <div className="grid grid-cols-2 gap-3 lg:gap-4 xl:gap-6">
                  <div className="bg-white rounded-lg xl:rounded-xl p-3 lg:p-4 xl:p-5">
                    <p className="text-xs lg:text-sm xl:text-base text-gray-500 mb-1">Portfolio</p>
                    <p className="font-medium text-gray-900 text-xs lg:text-sm xl:text-base">{currentMentor.portfolio}</p>
                  </div>
                  <div className="bg-white rounded-lg xl:rounded-xl p-3 lg:p-4 xl:p-5">
                    <p className="text-xs lg:text-sm xl:text-base text-gray-500 mb-1">Expertise</p>
                    <p className="font-medium text-gray-900 text-xs lg:text-sm xl:text-base">{currentMentor.expertise}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 lg:gap-3 xl:gap-4 pt-1 lg:pt-2 xl:pt-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#FF6F00] text-white py-2.5 lg:py-3 xl:py-4 rounded-lg xl:rounded-xl font-medium transition-all duration-200 hover:bg-[#FF6F00]/90 flex items-center justify-center gap-2 text-sm lg:text-base xl:text-lg"
                  >
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                    Book Session
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white border border-gray-200 text-gray-700 py-2.5 lg:py-3 xl:py-4 rounded-lg xl:rounded-xl font-medium transition-all duration-200 hover:bg-gray-50 flex items-center justify-center gap-2 text-sm lg:text-base xl:text-lg"
                  >
                    <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                    Message
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Program Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 lg:gap-4 xl:gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl lg:text-2xl xl:text-3xl font-light text-[#FF6F00] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs lg:text-sm xl:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mentor selection indicators */}
            <div className="flex justify-center gap-1.5 lg:gap-2 xl:gap-3">
              {mentors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMentor(index)}
                  className={`h-1.5 lg:h-2 xl:h-3 rounded-full transition-all duration-300 ${
                    index === selectedMentor 
                      ? 'bg-[#FF6F00] w-4 lg:w-6 xl:w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 w-1.5 lg:w-2 xl:w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}