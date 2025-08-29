'use client'

import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useRef } from 'react'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import { useJoinUs } from './JoinUsContext'

export function EventsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { openForm } = useJoinUs()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig)

  const handleRegisterNow = () => {
    openForm('Founder')
  }

  // Stagger animation for stats
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const staggerItem = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.8,
      rotateX: -30
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100
      }
    }
  }

  // Card animation with 3D effect
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateY: -25,
      z: -100
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      z: 0,
      transition: { 
        duration: 1.0, 
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80
      }
    }
  }

  // Icon animation variants
  const iconFloat = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section ref={containerRef} id="events" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Seamless transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-10" />

      {/* Background Effects */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6F00]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6F00]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with slide-in from opposite directions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -100, rotateZ: -5 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateZ: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-[-0.02em]"
          >
            Next Event
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 100, rotateZ: 5 },
              visible: { 
                opacity: 1, 
                x: 0, 
                rotateZ: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
          >
            Join Uzbekistan's most inspiring startup event
          </motion.p>
        </motion.div>

        {/* Main Event Card with 3D perspective */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          className="relative max-w-4xl mx-auto mb-20"
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] p-1"
            whileHover={{ 
              rotateY: 2, 
              rotateX: 2, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-[#0D0D0D] rounded-3xl p-12 md:p-16">
              <div className="text-center">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0, rotate: -180 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      transition: { 
                        duration: 0.8, 
                        delay: 0.4,
                        type: "spring",
                        stiffness: 200
                      }
                    }
                  }}
                  className="inline-block bg-[#FF6F00]/10 text-[#FF6F00] px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  UPCOMING EVENT
                </motion.div>

                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -45 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      transition: { 
                        duration: 0.8, 
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                  className="text-4xl md:text-6xl font-extralight text-white mb-4 tracking-[-0.01em]"
                >
                  UzPitch Day
                </motion.h3>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        duration: 0.6, 
                        delay: 0.8
                      }
                    }
                  }}
                  className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light"
                >
                  Where Uzbekistan's brightest minds pitch their groundbreaking ideas to top investors and industry leaders.
                </motion.p>

                {/* Event details with stagger animation */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
                >
                  {[
                    { icon: Calendar, title: "March 15", subtitle: "2024" },
                    { icon: Clock, title: "6:00 PM", subtitle: "Tashkent Time" },
                    { icon: MapPin, title: "IT Park", subtitle: "Tashkent" },
                    { icon: Users, title: "500+", subtitle: "Attendees" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="text-center group"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div
                        variants={iconFloat}
                        animate="animate"
                        className="mx-auto mb-2"
                        style={{ transitionDelay: `${index * 0.5}s` }}
                      >
                        <item.icon className="w-8 h-8 text-[#FF6F00] group-hover:text-[#FF8F33] transition-colors duration-300" />
                      </motion.div>
                      <p className="text-white font-medium group-hover:text-[#FF6F00] transition-colors duration-300">{item.title}</p>
                      <p className="text-white/60 text-sm">{item.subtitle}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        duration: 0.8, 
                        delay: 1.2,
                        type: "spring",
                        stiffness: 150
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(255, 111, 0, 0.3)",
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRegisterNow}
                  className="bg-gradient-to-r from-[#FF6F00] to-[#FF8F33] text-white px-12 py-4 rounded-full text-lg font-medium hover:from-[#FF8F33] hover:to-[#FF6F00] transition-all duration-300 shadow-lg relative overflow-hidden cursor-pointer"
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Register Now</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Past Highlights with wave animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h3 
            variants={{
              hidden: { opacity: 0, rotateX: 45 },
              visible: { 
                opacity: 1, 
                rotateX: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="text-3xl font-extralight text-white mb-12 tracking-[-0.01em]"
          >
            Past Highlights
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "120+", label: "Startups Pitched" },
              { number: "$2.5M", label: "Funding Raised" },
              { number: "15", label: "Success Stories" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 50,
                    rotateY: index % 2 === 0 ? -30 : 30,
                    scale: 0.8
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: { 
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer relative"
              >
                {/* Floating background effect */}
                <motion.div
                  className="absolute inset-0 bg-[#FF6F00]/5 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <motion.div 
                  className="text-4xl md:text-5xl font-extralight text-[#FF6F00] mb-2 tracking-tight group-hover:text-[#FF8F33] transition-colors duration-300 relative z-10"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {item.number}
                </motion.div>
                <div className="text-white/70 group-hover:text-white transition-colors duration-300 font-light relative z-10">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10" />
    </section>
  )
}