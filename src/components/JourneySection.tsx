'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react'
import { useRef } from 'react'
import { Lightbulb, Rocket, Trophy } from 'lucide-react'

const journeySteps = [
  {
    icon: Lightbulb,
    title: "Spark",
    description: "Every great startup begins with a spark of innovation. Share your vision with Uzbekistan's brightest minds.",
    image: "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGZ1dHVyZXxlbnwxfHx8fDE3NTU5OTg0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Rocket,
    title: "Build", 
    description: "Transform your idea into reality with mentorship, resources, and a community that believes in your potential.",
    image: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NTk4MjI1MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Trophy,
    title: "Launch",
    description: "Present your startup to investors, customers, and the world. Make your mark on Uzbekistan's innovation landscape.",
    image: "https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwc3RhZ2V8ZW58MXx8fHwxNzU1OTQ3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
]

export function JourneySection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const progressHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), springConfig)

  // Animation variants for different entrance effects
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100, rotateY: -45 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100, rotateY: 45 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const flipIn = {
    hidden: { opacity: 0, rotateX: -90, y: 50 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const elasticIn = {
    hidden: { opacity: 0, scale: 0.3, rotate: -45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.68, -0.55, 0.265, 1.55],
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <section ref={containerRef} id="journey" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden -mt-[100vh]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Split Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -50, rotateX: 45 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  duration: 1.0, 
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
            className="text-5xl md:text-7xl font-extralight text-[#0D0D0D] mb-6 tracking-[-0.02em]"
          >
            The Journey
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
            className="text-xl text-[#0D0D0D]/70 max-w-2xl mx-auto font-light"
          >
            From idea to impact, we guide every step of your startup journey
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-1 h-full bg-[#0D0D0D]/10"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-[#FF6F00] to-[#FF8F33]"
              style={{ height: progressHeight }}
            />
          </motion.div>

          {journeySteps.map((step, index) => {
            // Determine animation variant based on index
            let contentVariant, imageVariant;
            
            switch(index) {
              case 0:
                contentVariant = slideInFromLeft;
                imageVariant = fadeInScale;
                break;
              case 1:
                contentVariant = flipIn;
                imageVariant = slideInFromRight;
                break;
              case 2:
                contentVariant = slideInFromRight;
                imageVariant = elasticIn;
                break;
              default:
                contentVariant = fadeInScale;
                imageVariant = fadeInScale;
            }

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                className={`relative flex items-center mb-32 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-20`}
              >
                {/* Content */}
                <motion.div 
                  variants={contentVariant}
                  className="flex-1 text-center md:text-left mb-8 md:mb-0"
                >
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <motion.div 
                      variants={{
                        hidden: { scale: 0, rotate: -180 },
                        visible: { 
                          scale: 1, 
                          rotate: 0,
                          transition: { 
                            duration: 0.8, 
                            delay: 0.3,
                            type: "spring",
                            stiffness: 200
                          }
                        }
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] rounded-full flex items-center justify-center mr-4 shadow-lg"
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.6, delay: 0.5 }
                        }
                      }}
                      className="text-4xl font-extralight text-[#0D0D0D] tracking-[-0.01em]"
                    >
                      {step.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.7 }
                      }
                    }}
                    className="text-lg text-[#0D0D0D]/70 leading-relaxed max-w-lg font-light"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  variants={imageVariant}
                  className="flex-1"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      rotateY: index % 2 === 0 ? 2 : -2
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    
                    {/* Glassmorphism overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                      initial={{ opacity: 0, scale: 1.1 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Floating number badge */}
                    <motion.div
                      className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Timeline Dot with Ripple Effect */}
                <motion.div
                  className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#FF6F00] to-[#FF8F33] rounded-full border-4 border-white shadow-lg z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3, 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                  viewport={{ once: true }}
                >
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FF6F00]/30"
                    animate={{
                      scale: [1, 2.5, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}