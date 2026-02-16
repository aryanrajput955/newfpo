"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

const FPOSection = () => {
  const fpos = [
    { name: "ISLAND FARMER PRODUCER COMPANY LIMITED", state: "Jammu and Kashmir", district: "Jammu", block: "Mandal Phallain" },
    { name: "SARTHALIBANI FARMER PRODUCER COMPANY LIMITED", state: "Jammu and Kashmir", district: "Kathua", block: "Bani" },
    { name: "REHIANSAMBA FARMER PRODUCER COMPANY LIMITED", state: "Jammu and Kashmir", district: "Samba", block: "Samba" },
    { name: "MRIGANK FARMER PRODUCER COMPANY LIMITED", state: "Uttar Pradesh", district: "Kanpur Nagar", block: "Bhitargaon" },
    { name: "UDEERNAH AGRO PRODUCER COMPANY LIMITED", state: "Uttar Pradesh", district: "Kanpur Nagar", block: "Vidhunu" },
    { name: "PULKETU FARMER PRODUCER COMPANY LIMITED", state: "Uttar Pradesh", district: "Kanpur Nagar", block: "Patara" },
    { name: "JANNITI FARMER PRODUCER COMPANY LIMITED", state: "Uttar Pradesh", district: "Kanpur Dehat", block: "Sandalpur" },
    { name: "UZZAL AGRO FED FARMER PRODUCER COMPANY LIMITED", state: "Assam", district: "Dhubri", block: "Debitola" },
    { name: "ENAJARI AGRO FED FARMER PRODUCER COMPANY LIMITED", state: "Assam", district: "Dhubri", block: "Gauripur" },
    { name: "ASSAM SILCHAR DAIRY FED FARMER PRODUCER COMPANY LIMITED", state: "Assam", district: "Cachar", block: "Silchar" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const autoScrollRef = useRef(null)
  const visibleItems = 3
  const extendedFPOs = [...fpos, ...fpos.slice(0, visibleItems)]

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        if (next >= fpos.length) {
          return 0
        }
        return next
      })
    }, 5000)

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    }
  }, [fpos.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + fpos.length) % fpos.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      if (next >= fpos.length) {
        return 0
      }
      return next
    })
  }

  return (
    <section className="py-24 bg-[#1b3a5c] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 p-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
           <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#2e8b57]/20 text-[#4caf50] text-sm font-bold tracking-wider mb-4 border border-[#4caf50]/30">
            OUR NETWORK
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-6">
            Empowering Agricultural Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join forces with India's premier Farmer Producer Organizations to foster sustainable growth and innovation in agriculture.
          </p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:-left-4 top-1/2 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all border border-white/20 text-white hover:text-[#1b3a5c]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-4 top-1/2 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all border border-white/20 text-white hover:text-[#1b3a5c]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden px-2 py-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${(currentIndex % fpos.length) * (100 / visibleItems)}%` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {extendedFPOs.map((fpo, i) => (
                <motion.div
                  key={`${fpo.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 min-w-[350px] bg-white rounded-2xl p-6 shadow-xl border border-white/10 relative group/card"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#eaf6ee] p-3 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-[#2e8b57]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1b3a5c] leading-tight line-clamp-2">{fpo.name}</h3>
                      <div className="h-1 w-12 bg-[#e8632b] mt-3 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-[#5a6a7a] text-sm bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-[#122a44]">State:</span> 
                      <span>{fpo.state}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="font-semibold text-[#122a44]">District:</span> 
                       <span>{fpo.district}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="font-semibold text-[#122a44]">Block:</span> 
                       <span>{fpo.block}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#1b3a5c] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#2e8b57] transition-colors shadow-lg shadow-[#1b3a5c]/20">
                    View Profile
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://fpcl.in"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8632b] text-white text-lg font-bold rounded-full shadow-lg shadow-[#e8632b]/30 hover:bg-[#d4551f] hover:-translate-y-1 transition-all"
          >
            <span>Explore All FPO Members</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FPOSection