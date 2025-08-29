'use client'

import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useState, useRef } from 'react'
import { Instagram, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react'

export function FooterSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]), springConfig)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-[#0D0D0D] via-black to-black overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Starfield Effect */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              opacity: [null, Math.random() * 0.8 + 0.2, null],
              scale: [1, Math.random() * 2 + 1, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Aurora Effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${useTransform(scrollYProgress, [0, 1], [20, 80])}% ${useTransform(scrollYProgress, [0, 1], [20, 80])}%, 
              rgba(255, 111, 0, 0.05) 0%, 
              transparent 50%)`
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center py-20">
        <motion.div
          style={{ y, opacity }}
          className="max-w-7xl mx-auto px-6 w-full"
        >
          {/* Hero Finale */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-thin text-white mb-8 tracking-tighter leading-tight"
            >
              UzPitch
              <br />
              <motion.span
                className="bg-gradient-to-r from-[#FF6F00] via-[#FF8F33] to-[#FF6F00] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Where Ideas
              </motion.span>
              <br />
              Take Flight
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            >
              The future of Uzbekistan's innovation ecosystem starts here.
              <br />
              Every idea. Every dream. Every breakthrough.
            </motion.p>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-thin text-white mb-4">Stay in the Loop</h3>
              <p className="text-white/70">Be first to know about events, opportunities, and success stories</p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className="relative flex bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10">
                <motion.input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-6 py-4 text-white placeholder-white/50 focus:outline-none text-lg"
                  whileFocus={{ scale: 1.01 }}
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!email || isSubscribed}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#FF8F33] text-white rounded-full font-medium disabled:opacity-50 transition-all duration-300"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </div>

              {/* Success Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isSubscribed ? 1 : 0, scale: isSubscribed ? 1 : 0.8 }}
                className="absolute inset-0 flex items-center justify-center bg-[#FF6F00]/20 backdrop-blur-xl rounded-full border border-[#FF6F00]/50"
              >
                <span className="text-white font-medium">Welcome to the future! 🚀</span>
              </motion.div>
            </form>
          </motion.div>

          {/* Links and Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-white text-2xl font-thin tracking-wide">UzPitch</span>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center space-x-12">
              {['Journey', 'Events', 'Mentors', 'Community'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2, color: '#FF6F00' }}
                  className="text-white/70 hover:text-[#FF6F00] transition-colors text-lg"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5, rotateY: 180 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 hover:border-[#FF6F00]/50 hover:bg-[#FF6F00]/20 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="text-white/50 text-sm">
                © 2024 UzPitch. Crafted with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block text-red-400"
                >
                  <Heart className="w-4 h-4 inline fill-current" />
                </motion.span>
                {' '}in Uzbekistan
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Contact</a>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#FF6F00]/20 transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Final Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20 pt-12"
          >
            <motion.p
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-white/30 text-lg font-thin tracking-widest"
            >
              THE FUTURE IS NOW
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Fade to Black */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4, delay: 2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent"
      />
    </motion.footer>
  )
}