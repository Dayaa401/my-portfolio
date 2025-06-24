"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"

// Update this array with your actual project image links
const projects = [
  {
    id: 1,
    title: "Expensive Tracker",
    description:
      "The Expense Tracker is a simple web application built using HTML, CSS, and JavaScript that helps users manage their daily income and expenses.",
    images: [
      "pr1.png",
      // "https://i.imgur.com/project1b.jpg",
      // "https://i.imgur.com/project1c.jpg",
    ], // Replace with your actual image URLs
    demoLink: "",
    codeLink:
      "https://github.com/SpringBoard795/PicasoPhrase_Infosys_Internship_Nov2024/blob/Vijay-Vardhan-satya-srinivasa-rao/project_picaso_phrase_final.ipynb",
    skills: ["HTML", "CSS", "JAVASCRIPT", ],
    longDescription:
      "Enhanced a system that generates captions for medical images in ROCO (Radiology objects in context) dataset using RNN and LSTM models.Implemented Data preprocessing Techniques and Feature Extraction on images in dataset and fed into model to generate captions.Trained on a dataset of 80,000+ annotated images with a BLEU score improvement of 15% over baseline",
  },
  {
    id: 2,
    title: "E-Commerce website",
    description:
      "A responsive web app to browse and search food items, built with React components and state management.",
    images: [
      "pr2.png",
      // "https://i.imgur.com/project2b.jpg",
      // "https://i.imgur.com/project2c.jpg",
    ], // Replace with your actual image URLs
    demoLink: "",
    codeLink: "https://github.com/vijay-nani-45/Facial-emotion-recognition-using-RESNET-50.git",
    skills: ["REACT-JS", "DJANGO", "PYTHON"],
    longDescription:
      "• A full-stack food ordering app where the frontend is built with React.js for a dynamic user interface, and the backend uses Django and Python to manage APIs, data, and user authentication. It allows users to browse, search, and view food items, with real-time interaction and secure backend logic.",
  },
  {
    id: 3,
    title: "expensivetracker",
    description: "Secures images by encoding them using Hopfield neural networks, ensuring robust and noise-resilient encryption for safe image transmission.",
    images: [
      "pr1.png",
      // "https://i.imgur.com/project3b.jpg",
      // "https://i.imgur.com/project3c.jpg",
    ], // Replace with your actual image URLs
    demoLink: "",
    codeLink: "",
    skills: ["HTML", "CSS", "JAVASCRIPT",],
    longDescription:
     "Enhanced a system that generates captions for medical images in ROCO (Radiology objects in context) dataset using RNN and LSTM models.Implemented Data preprocessing Techniques and Feature Extraction on images in dataset and fed into model to generate captions.Trained on a dataset of 80,000+ annotated images with a BLEU score improvement of 15% over baseline",
  },
  {
    id: 4,
    title: "ecommerce",
    description:
      "A responsive web app to browse and search food items, built with React components and state management.",
    images: [
      "pr2.png",
      // "https://i.imgur.com/project3b.jpg",
      // "https://i.imgur.com/project3c.jpg",
    ], // Replace with your actual image URLs
    demoLink: "",
    codeLink: "https://github.com/vijay-nani-45/fake-profile-detection.git",
    skills: ["REACT-JS", "DJANGO", "PYTHON"],
    longDescription:
   "• A full-stack food ordering app where the frontend is built with React.js for a dynamic user interface, and the backend uses Django and Python to manage APIs, data, and user authentication. It allows users to browse, search, and view food items, with real-time interaction and secure backend logic.",
  },
 
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const projectsContainerRef = useRef(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsFullscreen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const scrollProjects = (direction) => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current
      const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })

      // Update scroll position for arrow visibility
      setTimeout(() => {
        setScrollPosition(container.scrollLeft)
      }, 500)
    }
  }

  // Update scroll position when scrolling manually
  useEffect(() => {
    const container = projectsContainerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  // Set initial scroll position
  useEffect(() => {
    if (projectsContainerRef.current) {
      setScrollPosition(projectsContainerRef.current.scrollLeft)
    }
  }, [])

  const handleImageError = (projectId: number, imageIndex: number) => {
    setImageErrors((prev) => ({ ...prev, [`${projectId}-${imageIndex}`]: true }))
  }

  const getImageSrc = (projectId: number, imageIndex: number, imageUrl: string) => {
    return imageErrors[`${projectId}-${imageIndex}`] ? "/placeholder.svg" : imageUrl
  }

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = projectsContainerRef.current
    ? scrollPosition < projectsContainerRef.current.scrollWidth - projectsContainerRef.current.clientWidth - 10
    : true

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="relative">
          {/* Left scroll button */}
          <button
            onClick={() => scrollProjects("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 dark:bg-gray-800/30 p-3 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 ${
              !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400" />
          </button>

          <div
  ref={projectsContainerRef}
  className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth scrollbar-hide pb-6"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
>
  {projects.map((project, index) => (
    <motion.div
      key={project.id}
      className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] snap-center mx-3 first:ml-0 last:mr-0 group relative backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-lg overflow-hidden shadow-lg hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20 dark:border-gray-700/20 cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => openModal(project)}
    >
      {/* Image section */}
      <div className="relative w-full h-52 bg-black">
        <Image
          src={getImageSrc(project.id, 0, project.images[0]) || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-purple-200">{project.title}</h3>
        <p className="text-sm text-purple-300 mt-2">{project.description}</p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.skills.slice(0, 3).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 dark:text-purple-300"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 dark:text-purple-300">
              +{project.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</div>

          {/* Right scroll button */}
          <button
            onClick={() => scrollProjects("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 dark:bg-gray-800/30 p-3 rounded-full shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 ${
              !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-purple-400" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ${
              isFullscreen ? "overflow-hidden" : "overflow-y-auto"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg-white dark:bg-gray-800 rounded-lg ${
                isFullscreen ? "w-full h-full" : "max-w-4xl w-full max-h-[90vh]"
              } overflow-y-auto relative`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center space-x-4 overflow-hidden">
                 
                  <button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={closeModal}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div className="relative w-full h-32 md:h-[520px] rounded-t-lg overflow-hidden ">
                <Image
                  src={
                    getImageSrc(selectedProject.id, currentImageIndex, selectedProject.images[currentImageIndex]) ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt={selectedProject.title}
                  layout="fill"
                sizes="(max-width:768px)"
                style={{scrollbarWidth:"none"}}
                  objectFit="cover"
                  className="object-cover"
                  onError={() => handleImageError(selectedProject.id, currentImageIndex)}
                />
                              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                    {selectedProject.codeLink && (
                      <a
                        href={selectedProject.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-200 hover:bg-purple-600 dark:bg-gray-700 dark:hover:bg-purple-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
