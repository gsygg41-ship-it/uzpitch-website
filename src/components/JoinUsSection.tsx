'use client'

import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Sparkles, Users, Rocket, CheckCircle2, Star, Zap, Phone, Send, FileUp, MessageSquare, Briefcase, TrendingUp, DollarSign, Upload, Link } from 'lucide-react'
import { useJoinUs } from './JoinUsContext'

export function JoinUsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { isFormOpen, selectedRole } = useJoinUs()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    description: '',
    presentation: null,
    role: '',
    focus: false,
    // Investor-specific fields
    jobTitle: '',
    socialMedia: '',
    investmentStage: '',
    industries: '',
    investmentModel: '',
    investorDescription: ''
  })

  // Handle external triggers from context
  useEffect(() => {
    if (isFormOpen && selectedRole) {
      setFormData(prev => ({ ...prev, role: selectedRole }))
    }
  }, [isFormOpen, selectedRole])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]), springConfig)
  
  // Enhanced gradient rotation
  const gradientRotation = useTransform(scrollYProgress, [0, 1], [0, 360])

  const roles = [
    { 
      icon: Sparkles, 
      title: "Founder", 
      desc: "Ready to build the next big thing",
      color: "from-violet-500/20 to-purple-600/10",
      iconBg: "bg-violet-500/20",
      iconColor: "text-violet-400"
    },
    { 
      icon: Users, 
      title: "Investor", 
      desc: "Looking for promising startups",
      color: "from-emerald-500/20 to-green-600/10", 
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400"
    },
    { 
      icon: Rocket, 
      title: "Innovator", 
      desc: "Passionate about technology",
      color: "from-blue-500/20 to-indigo-600/10",
      iconBg: "bg-blue-500/20", 
      iconColor: "text-blue-400"
    }
  ]

  const benefits = [
    { icon: Zap, text: "Access to exclusive events" },
    { icon: Star, text: "Direct mentor connections" },
    { icon: CheckCircle2, text: "Priority startup support" },
    { icon: Users, text: "Global network access" }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section 
      ref={containerRef} 
      id="join-us"
      className="relative min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] overflow-hidden"
    >
      {/* Seamless transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent opacity-15" />

      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Optimized Flowing Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF6F00]/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Enhanced Gradient Orbs with better positioning */}
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-150, 150]),
            y: useTransform(scrollYProgress, [0, 1], [0, -75])
          }}
          className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-to-br from-[#FF6F00]/25 to-[#FF8F33]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [150, -150]),
            y: useTransform(scrollYProgress, [0, 1], [75, 0])
          }}
          className="absolute bottom-1/6 right-1/6 w-96 h-96 bg-gradient-to-br from-[#FF8F33]/20 to-[#FF6F00]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 pb-32">
        <motion.div
          style={{ y, scale }}
          className="max-w-6xl mx-auto px-6 w-full"
        >
          {/* Enhanced Cinematic Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="overflow-hidden mb-8"
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 tracking-[-0.02em] leading-[0.9]">
                Ready to
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-[#FF6F00] via-[#FF8F33] to-[#FF6F00] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Transform
                </motion.span>
                <br />
                <span className="text-white/80">Uzbekistan?</span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light mb-8"
            >
              Join the ecosystem where ideas become reality and innovators shape the future
            </motion.p>

            {/* Benefits Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                >
                  <benefit.icon className="w-4 h-4 text-[#FF6F00]" />
                  <span className="text-white/80 text-sm font-light">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Interactive Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Advanced Glassmorphism Container */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-3xl rounded-[2rem] border border-white/20 p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
              {/* Enhanced Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] opacity-60"
                style={{
                  background: `conic-gradient(from ${gradientRotation}deg, #FF6F00, transparent, #FF8F33, transparent, #FF6F00)`,
                  padding: '2px',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#0D0D0D]/95 via-[#0D0D0D]/90 to-[#0D0D0D]/95 rounded-[calc(2rem-2px)] backdrop-blur-xl" />
              </motion.div>

              <div className="relative z-10">
                {/* Enhanced Role Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-extralight text-white mb-2 text-center tracking-[-0.01em]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    What describes you best?
                  </motion.h3>
                  <motion.p
                    className="text-white/60 text-center mb-8 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Choose your role to get personalized recommendations
                  </motion.p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roles.map((role, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -8 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData({...formData, role: role.title})}
                        className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 border-2 backdrop-blur-sm group ${
                          formData.role === role.title 
                            ? `bg-gradient-to-br ${role.color} border-[#FF6F00]/60 shadow-lg shadow-[#FF6F00]/20` 
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        {/* Enhanced hover effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6F00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        <motion.div
                          animate={{ 
                            rotate: formData.role === role.title ? 360 : 0,
                            scale: formData.role === role.title ? 1.1 : 1
                          }}
                          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                          className={`w-14 h-14 ${role.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <role.icon className={`w-7 h-7 ${role.iconColor}`} />
                        </motion.div>
                        
                        <h4 className="text-xl text-white mb-3 font-medium">{role.title}</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">{role.desc}</p>

                        {/* Enhanced Selection Indicator */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ 
                            scale: formData.role === role.title ? 1 : 0,
                            rotate: formData.role === role.title ? 0 : -180
                          }}
                          transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                          className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] rounded-full flex items-center justify-center shadow-lg"
                        >
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Form Fields */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: formData.role ? "auto" : 0,
                    opacity: formData.role ? 1 : 0
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  {formData.role && (
                    <motion.form
                      onSubmit={handleSubmit}
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="space-y-6 pt-8 pb-4"
                    >
                  {/* Founder Form */}
                  {formData.role === 'Founder' && (
                    <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Enhanced Name Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: formData.role ? 1 : 0, x: formData.role ? 0 : -30 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative group"
                    >
                      <label className="block text-white/80 text-sm font-medium mb-3 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        onFocus={() => setFormData({...formData, focus: true})}
                        onBlur={() => setFormData({...formData, focus: false})}
                        className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </motion.div>

                    {/* Enhanced Email Input */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: formData.role ? 1 : 0, x: formData.role ? 0 : 30 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative group"
                    >
                      <label className="block text-white/80 text-sm font-medium mb-3 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </motion.div>
                  </div>

                  {/* Phone and Telegram Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: formData.role ? 1 : 0, x: formData.role ? 0 : -30 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative group"
                    >
                      <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                        <Phone className="w-4 h-4 text-[#FF6F00] mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+998 XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </motion.div>

                    {/* Telegram Username Input */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: formData.role ? 1 : 0, x: formData.role ? 0 : 30 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="relative group"
                    >
                      <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                        <Send className="w-4 h-4 text-[#FF6F00] mr-2" />
                        Telegram Username
                      </label>
                      <input
                        type="text"
                        placeholder="@yourusername"
                        value={formData.telegram}
                        onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                        className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </motion.div>
                  </div>

                  {/* Description Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: formData.role ? 1 : 0, y: formData.role ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative group"
                  >
                    <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                      <MessageSquare className="w-4 h-4 text-[#FF6F00] mr-2" />
                      Tell us about your pitching idea (100-150 words)
                    </label>
                    <textarea
                      placeholder="Describe your startup idea, vision, and what makes it unique..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={6}
                      maxLength={150}
                      className="w-full bg-white/5 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm resize-none"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />
                    <div className="text-right mt-2">
                      <span className="text-white/40 text-sm">
                        {formData.description.length}/150 words
                      </span>
                    </div>
                  </motion.div>

                  {/* File Upload for Presentation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: formData.role ? 1 : 0, y: formData.role ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative group"
                  >
                    <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                      <FileUp className="w-4 h-4 text-[#FF6F00] mr-2" />
                      Upload Your Presentation/Deck (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.ppt,.pptx,.key"
                        onChange={(e) => setFormData({...formData, presentation: e.target.files?.[0] || null})}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        id="presentation-upload"
                      />
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-20 bg-white/5 border-2 border-dashed border-white/30 rounded-2xl flex items-center justify-center cursor-pointer group-hover:border-[#FF6F00]/40 group-hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                      >
                        <div className="text-center">
                          <FileUp className="w-6 h-6 text-[#FF6F00] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-white/60 text-lg font-light">
                            {formData.presentation ? formData.presentation.name : "Click to upload or drag & drop"}
                          </span>
                          <p className="text-white/40 text-sm mt-1">
                            PDF, PPT, PPTX, KEY (Max 10MB)
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </div>
                  </motion.div>

                  </>
                  )}

                  {/* Innovator Form */}
                  {formData.role === 'Innovator' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Enhanced Name Input */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="relative group"
                        >
                          <label className="block text-white/80 text-sm font-medium mb-3 ml-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                          />
                        </motion.div>

                        {/* Enhanced Email Input */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="relative group"
                        >
                          <label className="block text-white/80 text-sm font-medium mb-3 ml-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                          />
                        </motion.div>
                      </div>

                      {/* Telegram Username */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative group"
                      >
                        <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                          <Send className="w-4 h-4 text-[#FF6F00] mr-2" />
                          Telegram Username
                        </label>
                        <input
                          type="text"
                          placeholder="@yourusername"
                          value={formData.telegram}
                          onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                          className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                      </motion.div>

                      {/* Tell us about yourself */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative group"
                      >
                        <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                          <MessageSquare className="w-4 h-4 text-[#FF6F00] mr-2" />
                          Tell us about yourself and your interests (100-150 words)
                        </label>
                        <textarea
                          placeholder="What areas of technology or innovation excite you most? What skills do you bring?"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          rows={6}
                          maxLength={150}
                          className="w-full bg-white/5 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm resize-none"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                        <div className="text-right mt-2">
                          <span className="text-white/40 text-sm">
                            {formData.description.length}/150 words
                          </span>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {/* Investor Form */}
                  {formData.role === 'Investor' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="relative group"
                        >
                          <label className="block text-white/80 text-sm font-medium mb-3 ml-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                          />
                        </motion.div>

                        {/* Telegram Username */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="relative group"
                        >
                          <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                            <Send className="w-4 h-4 text-[#FF6F00] mr-2" />
                            Telegram Username
                          </label>
                          <input
                            type="text"
                            placeholder="@yourusername"
                            value={formData.telegram}
                            onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                            className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                          />
                        </motion.div>
                      </div>

                      {/* Job Title/Role */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative group"
                      >
                        <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                          <Briefcase className="w-4 h-4 text-[#FF6F00] mr-2" />
                          Your Role/Title
                        </label>
                        <select
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                          className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                        >
                          <option value="" className="bg-[#0D0D0D] text-white">Select your role</option>
                          <option value="Angel Investor" className="bg-[#0D0D0D] text-white">Angel Investor</option>
                          <option value="VC Partner" className="bg-[#0D0D0D] text-white">VC Partner</option>
                          <option value="Business Owner" className="bg-[#0D0D0D] text-white">Business Owner</option>
                          <option value="Investment Manager" className="bg-[#0D0D0D] text-white">Investment Manager</option>
                          <option value="Fund Manager" className="bg-[#0D0D0D] text-white">Fund Manager</option>
                        </select>
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                      </motion.div>

                      {/* Social Media/Website URL */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative group"
                      >
                        <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                          <Link className="w-4 h-4 text-[#FF6F00] mr-2" />
                          Your social media profile/Website
                        </label>
                        <input
                          type="url"
                          placeholder="https://linkedin.com/in/yourname or https://yourwebsite.com"
                          value={formData.socialMedia}
                          onChange={(e) => setFormData({...formData, socialMedia: e.target.value})}
                          className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Investment Stage */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="relative group"
                        >
                          <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                            <TrendingUp className="w-4 h-4 text-[#FF6F00] mr-2" />
                            Preferred Investment Stage
                          </label>
                          <select
                            value={formData.investmentStage}
                            onChange={(e) => setFormData({...formData, investmentStage: e.target.value})}
                            className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                          >
                            <option value="" className="bg-[#0D0D0D] text-white">Select stage</option>
                            <option value="Idea" className="bg-[#0D0D0D] text-white">Idea Stage</option>
                            <option value="MVP" className="bg-[#0D0D0D] text-white">MVP</option>
                            <option value="Growth" className="bg-[#0D0D0D] text-white">Growth</option>
                            <option value="Scale" className="bg-[#0D0D0D] text-white">Scale</option>
                          </select>
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                          />
                        </motion.div>

                        {/* Investment Model */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="relative group"
                        >
                          <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                            <DollarSign className="w-4 h-4 text-[#FF6F00] mr-2" />
                            Preferred Investment Model
                          </label>
                          <select
                            value={formData.investmentModel}
                            onChange={(e) => setFormData({...formData, investmentModel: e.target.value})}
                            className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                          >
                            <option value="" className="bg-[#0D0D0D] text-white">Select model</option>
                            <option value="Equity" className="bg-[#0D0D0D] text-white">Equity</option>
                            <option value="Convertible Notes" className="bg-[#0D0D0D] text-white">Convertible Notes</option>
                            <option value="SAFE" className="bg-[#0D0D0D] text-white">SAFE</option>
                            <option value="Revenue Sharing" className="bg-[#0D0D0D] text-white">Revenue Sharing</option>
                            <option value="Debt Financing" className="bg-[#0D0D0D] text-white">Debt Financing</option>
                          </select>
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                          />
                        </motion.div>
                      </div>

                      {/* Industries */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="relative group"
                      >
                        <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                          <Zap className="w-4 h-4 text-[#FF6F00] mr-2" />
                          Industries of Interest
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Tech, Health, Education, Fintech, E-commerce..."
                          value={formData.industries}
                          onChange={(e) => setFormData({...formData, industries: e.target.value})}
                          className="w-full h-20 bg-white/5 border-2 border-white/20 rounded-2xl px-6 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                      </motion.div>

                      {/* Investor Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative group"
                      >
                        <label className="block text-white/80 text-sm font-medium mb-3 ml-1 flex items-center">
                          <MessageSquare className="w-4 h-4 text-[#FF6F00] mr-2" />
                          Describe Yourself (100-150 words)
                        </label>
                        <textarea
                          placeholder="Tell us about your investment philosophy, experience, and what you're looking for in startups..."
                          value={formData.investorDescription}
                          onChange={(e) => setFormData({...formData, investorDescription: e.target.value})}
                          rows={6}
                          maxLength={150}
                          className="w-full bg-white/5 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 text-lg focus:outline-none focus:border-[#FF6F00]/60 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm resize-none"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6F00]/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                        <div className="text-right mt-2">
                          <span className="text-white/40 text-sm">
                            {formData.investorDescription.length}/150 words
                          </span>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {/* Enhanced Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: (formData.role === 'Founder' ? 
                        (formData.name && formData.email && formData.phone && formData.telegram && formData.description && formData.role) :
                        formData.role === 'Investor' ?
                        (formData.name && formData.telegram && formData.jobTitle && formData.investmentStage && formData.industries && formData.investmentModel && formData.investorDescription && formData.role) :
                        formData.role === 'Innovator' ?
                        (formData.name && formData.email && formData.telegram && formData.description && formData.role) :
                        false
                      ) ? 1 : 0.5, 
                      y: (formData.role === 'Founder' ? 
                        (formData.name && formData.email && formData.phone && formData.telegram && formData.description && formData.role) :
                        formData.role === 'Investor' ?
                        (formData.name && formData.telegram && formData.jobTitle && formData.investmentStage && formData.industries && formData.investmentModel && formData.investorDescription && formData.role) :
                        formData.role === 'Innovator' ?
                        (formData.name && formData.email && formData.telegram && formData.description && formData.role) :
                        false
                      ) ? 0 : 30 
                    }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-center pt-8 pb-8"
                  >
                    <motion.button
                      type="submit"
                      disabled={formData.role === 'Founder' ? 
                        (!formData.name || !formData.email || !formData.phone || !formData.telegram || !formData.description || !formData.role) :
                        formData.role === 'Investor' ?
                        (!formData.name || !formData.telegram || !formData.jobTitle || !formData.investmentStage || !formData.industries || !formData.investmentModel || !formData.investorDescription || !formData.role) :
                        formData.role === 'Innovator' ?
                        (!formData.name || !formData.email || !formData.telegram || !formData.description || !formData.role) :
                        true
                      }
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-16 py-5 bg-[#FF6F00] hover:bg-[#FF8F33] text-white text-xl font-medium rounded-full overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-[#FF6F00]/30"
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#FF8F33] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      <span className="relative flex items-center">
                        Join the Revolution
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="w-6 h-6 ml-4" />
                        </motion.div>
                      </span>

                      {/* Enhanced Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/25"
                        initial={{ scale: 0, opacity: 1 }}
                        whileTap={{ scale: 4, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </motion.div>
                </motion.form>
                  )}
                </motion.div>

                {/* Enhanced Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: formData.role ? 1 : 0,
                    height: formData.role ? "auto" : 0,
                    marginTop: formData.role ? 48 : 0,
                    paddingTop: formData.role ? 32 : 0
                  }}
                  transition={{ duration: 0.6, delay: formData.role ? 0.5 : 0 }}
                  className="text-center border-t border-white/10 overflow-hidden"
                >
                  {formData.role && (
                    <motion.p 
                      className="text-white/60 mb-8 font-light text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Join 1,200+ innovators building the future of Uzbekistan
                    </motion.p>
                  )}
                  
                  {formData.role && (
                    <div className="flex flex-wrap justify-center gap-12">
                      {[
                        { number: "1,200+", label: "Active Members", icon: Users },
                        { number: "95%", label: "Success Rate", icon: Star },
                        { number: "24/7", label: "Expert Support", icon: Zap }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="text-center group cursor-pointer relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-[#FF6F00]/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-[#FF6F00]/30 transition-all duration-300">
                            <stat.icon className="w-6 h-6 text-[#FF6F00] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl text-[#FF6F00] font-extralight mb-2 tracking-tight group-hover:text-[#FF8F33] transition-colors duration-300">
                              {stat.number}
                            </div>
                            <div className="text-white/60 text-sm font-light">{stat.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10" />
    </section>
  )
}