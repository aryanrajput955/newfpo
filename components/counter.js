"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Tractor, Leaf, Droplet, Sun, ArrowRight, TrendingUp, Users } from 'lucide-react'

const Counter = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2.5, type: 'spring', stiffness: 50, damping: 20 },
    },
  }

  const stats = [
    {
      number: 1000,
      suffix: '+',
      title: 'Farmers Empowered',
      description: 'Supporting agricultural businesses across India.',
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-[#2e8b57]" />,
      bgColor: 'bg-white',
      numberColor: 'text-[#2e8b57]',
    },
    {
      number: 50,
      suffix: 'K+',
      title: 'Hectares Cultivated',
      description: 'High-yield solutions for vast farmlands.',
      icon: <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      bgColor: 'bg-[#1b3a5c]',
      numberColor: 'text-white',
    },
    {
      number: 200,
      suffix: '+',
      title: 'FPOs Connected',
      description: 'Building a strong network of producer organizations.',
      icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      bgColor: 'bg-[#e8632b]',
      numberColor: 'text-white',
    },
    {
      number: 500,
      suffix: '+',
      title: 'Solar Installations',
      description: 'Renewable energy for eco-friendly operations.',
      icon: <Sun className="h-8 w-8 sm:h-10 sm:w-10 text-[#2e8b57]" />,
      bgColor: 'bg-white',
      numberColor: 'text-[#2e8b57]',
    },
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isVisible) return

    const intervals = stats.map((stat, index) => {
      const target = stat.number
      const duration = 2500
      const increment = target / (duration / 16)
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.round(current)
          return newCounters
        })
      }, 16)

      return interval
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  return (
    <section className="bg-[#2e8b57] relative overflow-hidden py-16 sm:py-20 font-sans">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full rotate-180">
         <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto preserve-3d">
            <path d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 17.75C960 17.75 1056 35.5 1152 44.375C1248 53.25 1344 53.25 1392 53.25H1440V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>

      <main
        className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="flex-1 max-w-lg text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-green-100 font-medium mb-3">
              Partner with us to revolutionize Indian agriculture
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Sustainable Growth <br/>for Agri-Businesses
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              We bridge the gap between farmers and technology, ensuring better yields, fair prices, and a sustainable future for rural India.
            </p>
            <a
              href="https://fpoconnect.org/#eco-tourism"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#2e8b57] rounded-full text-base font-bold shadow-lg hover:bg-green-50 hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`${stat.bgColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col items-start shadow-xl border border-white/10`}
                variants={counterVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                custom={index}
              >
                <div className="bg-black/5 p-2 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <div className="mt-1">
                  <motion.div
                    className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${stat.numberColor} leading-tight mb-2`}
                    variants={numberVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                  >
                    {counters[index]}
                    <span>{stat.suffix}</span>
                  </motion.div>
                  <p className="mt-1">
                    <span className={`text-base sm:text-lg font-bold block ${stat.bgColor === 'bg-white' ? 'text-[#1b3a5c]' : 'text-white'}`}>{stat.title}</span>
                    <span className={`text-xs sm:text-sm block mt-1 leading-snug ${stat.bgColor === 'bg-white' ? 'text-gray-600' : 'text-white/80'}`}>{stat.description}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Wave */}
       <div className="absolute bottom-0 left-0 w-full">
         <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto preserve-3d">
            <path d="M0 100L48 91.125C96 82.25 192 64.5 288 55.625C384 46.75 480 46.75 576 55.625C672 64.5 768 82.25 864 82.25C960 82.25 1056 64.5 1152 55.625C1248 46.75 1344 46.75 1392 46.75H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V100Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  )
}

export default Counter