"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "Track your income and expenses visually and clearly.",
    images: ["pr1.png"],
    demoLink: "https://smart-expensive-tracker.vercel.app",
    codeLink: "https://github.com/Dayaa401/smart-expensive-tracker.git",
    skills: ["HTML", "CSS", "JavaScript"],
    longDescription:
      "Helps users manage income and expenses with clear visualizations. Built with basic web technologies.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "Full-stack food ordering system using React and Django.",
    images: ["pr2.png"],
    demoLink: "https://food-app-blond-kappa.vercel.app",
    codeLink: "https://github.com/Dayaa401/Food-app.git",
    skills: ["React.js", "Django", "Python"],
    longDescription:
      "Users can browse, search, and order food in real-time with secure authentication.",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [selectedProject, setSelectedProject] = useState(null)
  const carouselRef = useRef(null)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (isAutoScrolling && !isHovering) {
      const timer = setInterval(nextProject, 4000)
      return () => clearInterval(timer)
    }
  }, [isAutoScrolling, isHovering])

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16 overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div
          className="relative w-full max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
        >
          <div className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="min-w-full p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-2/3 relative h-[340px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={imageErrors[index] ? "/placeholder.svg" : project.images[0]}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                      onError={() => handleImageError(index)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-300">{project.title}</h3>
                    <p className="text-gray-400 mb-2">{project.description}</p>
                    <p className="text-sm text-purple-200 mb-6">{project.longDescription}</p>
                    <div className="flex gap-2">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-200 hover:bg-purple-600 dark:bg-gray-700 dark:hover:bg-purple-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 dark:bg-gray-800/30 p-3 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 dark:bg-gray-800/30 p-3 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-purple-400" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-purple-500"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
