"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Update this array with your actual certification image links
const certifications = [
  {
    id: 1,
    name: "Python programing",
    issuer: "DARPAN-NITI",
    year: "2024",
    link: "https://drive.google.com/file/d/1Y37vKy32bnSjeBfJqGtQ1GRAfHIAzYfF/view?usp=drive_link",
    image: "mycertify.png", // Replace with your actual image URL
  },
  {
    id: 2,
    name: "Python (Basic)",
    issuer: "HMI-INDUSTRAL",
    year: "2024",
    link: "https://drive.google.com/file/d/1e7fUAojvCpGCbBsmu2oiz38Eepo4d6v_/view?usp=drive_link",
    image: "my-basic.png", // Replace with your actual image URL
  },
 


]

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})
  const carouselRef = useRef(null)

  const nextCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length)
  }

  const prevCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length)
  }

  useEffect(() => {
    if (isAutoScrolling && !isHovering) {
      const timer = setInterval(nextCertification, 3000)
      return () => clearInterval(timer)
    }
  }, [isAutoScrolling, isHovering])

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-16 overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <div
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
        >
          <div className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certifications.map((cert, index) => (
                <div key={cert.id} className="min-w-full p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-2/3 relative h-[340px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={imageError[index] ? "/placeholder.svg" : cert.image}
                      alt={cert.name}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 hover:scale-105"
                      onError={() => handleImageError(index)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4">{cert.name}</h3>
                    <p className="text-cyan-400 mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 mb-6">{cert.year}</p>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg self-start"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Certificate
                    </motion.a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevCertification}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 dark:bg-gray-800/30 p-3 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>

          <button
            onClick={nextCertification}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 dark:bg-gray-800/30 p-3 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
            aria-label="Next certification"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-cyan-500"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
