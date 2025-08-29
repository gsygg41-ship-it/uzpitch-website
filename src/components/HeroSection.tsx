'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useJoinUs } from './JoinUsContext';

// This component injects the necessary CSS keyframes for the animations.
const GlobalStylesAndKeyframes = () => (
  <style>
    {`
      @keyframes gradientShift {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(10deg); }
      }
      @keyframes lineMove {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes cornerLineAnimation {
        0% { stroke-dashoffset: 0; }
        25% { stroke-dashoffset: 100; }
        50% { stroke-dashoffset: 200; }
        75% { stroke-dashoffset: 300; }
        100% { stroke-dashoffset: 400; }
      }
      @keyframes gridMove {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }
    `}
  </style>
);

// The main animated hero section component.
const AnimatedHeroSection = ({ heroRef, scrollYProgress }: { heroRef: React.RefObject<HTMLDivElement>, scrollYProgress: any }) => {
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const { openForm } = useJoinUs();

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleJoinPitchDay = () => {
    openForm('Founder')
  }

  return (
    <div ref={heroRef} className="relative h-[200vh]">
      <GlobalStylesAndKeyframes />
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.section 
          className="relative w-full h-full flex items-center justify-center bg-black text-white font-sans overflow-hidden p-8 sm:p-16"
          style={{ 
            clipPath: useTransform(scrollYProgress, [0.5, 0.9], ['circle(150% at 50% 50%)', 'circle(0% at 50% 50%)'])
          }}
        >
          <motion.div 
            className="z-10 w-full h-full absolute flex items-center justify-center"
            style={{ opacity: contentOpacity, scale: contentScale }}
          >
            <div 
              className="pointer-events-none absolute -inset-px rounded-full transition-all duration-300"
              style={{ 
                background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 111, 0, 0.15), transparent 80%)`,
                left: 0, top: 0, width: '100vw', height: '100vh'
              }}
            ></div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(255,111,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,111,0,0.07)_1px,transparent_1px)] bg-[length:50px_50px] animate-[gridMove_20s_linear_infinite] z-0" />
            <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
              {['top-[15%]', 'top-[85%]'].map((topClass, index) => (
                <div key={index} className={`absolute w-full h-[100px] ${topClass}`}>
                  <div className="w-full h-0.5 relative overflow-hidden">
                    <div
                      className={`absolute top-0 w-full h-full animate-[lineMove_6s_linear_infinite] ${
                        index % 2 !== 0 ? '[animation-direction:reverse] [animation-delay:3s]' : ''
                      }`}
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, #FF6F00 10%, #fbbf24 50%, #FF6F00 90%, transparent 100%)',
                        opacity: 0.5,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Corner lines positioned exactly in the middle between headline and description */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[300px] h-[100px] z-[5]" style={{ top: 'calc(50% + 1px)' }}>
              <svg
                className="absolute top-0 left-[-150px] w-[120px] h-[60px] animate-[cornerLineAnimation_6s_linear_infinite]"
                viewBox="0 0 120 60" stroke="#FF6F00" strokeWidth="2" fill="none" strokeDasharray="50"
              >
                <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
              </svg>
              <svg
                className="absolute top-0 right-[-150px] w-[120px] h-[60px] transform scale-x-[-1] animate-[cornerLineAnimation_6s_linear_infinite]"
                viewBox="0 0 120 60" stroke="#FF6F00" strokeWidth="2" fill="none" strokeDasharray="50"
              >
                <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
              </svg>
            </div>
            <div className="text-center max-w-3xl z-[10] relative">
              <div className="relative">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight"
                >
                  Got an idea?
                  <br />
                  <span
                    className="inline-block animate-[gradientShift_3s_ease_in_out_infinite_alternate]"
                    style={{
                      backgroundImage: 'linear-gradient(45deg, #FF6F00, #fbbf24, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Let's make it real.
                  </span>
                </motion.h1>
                <div className="absolute w-full h-0.5 top-1/2 -translate-y-1/2 left-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-0 w-full h-full animate-[lineMove_4s_linear_infinite]"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, #FF6F00 20%, #fbbf24 50%, #FF6F00 80%, transparent 100%)',
                        }}
                    />
                </div>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6 mb-8"
              >
                UzPitch is Uzbekistan's stage for youth innovators — where ideas meet mentors, and projects grow into real startups.
              </motion.p>
              <div className="w-full max-w-xs mx-auto h-0.5 relative overflow-hidden my-8">
                  <div
                      className="absolute top-0 w-full h-full animate-[lineMove_5s_linear_infinite] [animation-direction:reverse]"
                      style={{
                          background: 'linear-gradient(90deg, transparent 0%, #FF6F00 30%, #fbbf24 50%, #FF6F00 70%, transparent 100%)',
                          opacity: 0.7
                      }}
                  />
              </div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                onClick={handleJoinPitchDay}
                className="inline-block py-3 px-8 sm:py-4 sm:px-10 bg-white text-black no-underline rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:translate-y-0 active:shadow-[0_5px_15px_rgba(255,255,255,0.1)] cursor-pointer border-none"
              >
                Join Pitch Day
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

// Main export component that handles the scroll setup
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  return <AnimatedHeroSection heroRef={heroRef} scrollYProgress={scrollYProgress} />;
}

export { GlobalStylesAndKeyframes };