'use client'

import { useEffect, useRef } from 'react'

export default function IDCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple vanilla tilt effect
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      {/* Lanyard */}
      <div className="lanyard w-3 h-6 lg:h-8 mb-2 rounded-full"></div>
      
      {/* ID Card */}
      <div 
        ref={cardRef}
        className="id-card border-2 border-terminal-green rounded-lg shadow-2xl transition-transform duration-300 ease-out w-full overflow-hidden relative"
        style={{ width: '100%', maxWidth: '300px', height: '380px' }}
      >
        <div className="id-card-inner h-full w-full relative">
          {/* Full Card Image */}
          <img 
            src="./WhatsApp Image 2025-07-26 at 02.04.47_d7b39987.jpg" 
            alt="Harsh Rajwani" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Tag */}
      <div className="mt-2 bg-terminal-green text-black px-2 py-1 rounded text-xs font-bold">
        [Interactive 3D Card]
      </div>
    </div>
  )
}
