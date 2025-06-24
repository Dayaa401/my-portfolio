"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Web Tech Solutions",
      position: "Python-FullStack Intern",
      period: "jan 2025 - Jun 2025",
      description: "Built a E-Commerce Project (React + DJango) to smoothen the diagnostic workflows.",
    },
    {
      id: 2,
      company: "HMI ",
      position: "Python Intern",
      period: "May 2024 - Jun 2024",
      description: "Implemented a Student Management system using VS code",
    },
  
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Internships
        </motion.h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`flex items-center mb-6 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-6" : "pl-6"}`}>
                <div className="bg-white bg-opacity-5 rounded-lg p-4 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-purple-400">{exp.position}</h3>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                  <p className="text-sm text-blue-400 mb-2">{exp.period}</p>
                  <p className="text-base text-gray-400">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
            </motion.div>
          ))}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-500 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  )
}
