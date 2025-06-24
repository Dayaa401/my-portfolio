"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  {
    category: "Languages",
    items: [
     
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "Version Control & Database",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
     
    ],
  },
  {
    category: "Web Technologies",
    items: [

{ name: "React Js", icon: "./image.png"},
    ],
  },
  {
    category: "Relevant Coursework",
    items: [
      {
        name: "DJango",
        icon: "./dicon.png",
       },
            
      {
        name: "Bootstrap",
        icon: "./bicon.png",
      },
      
    
    ],
  },
  {
    category: "Soft Skills",
    items: [
      {
        name: "Problem Solving",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      { name: "Self-learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Presentation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "Adaptability", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    items: [
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      
       
    ],
  },
  {
    category: "IDEs",
    items: [
      {
        name: "Visual Studio Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
     
    ],
  },

]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-5 rounded-lg p-4 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg h-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{skillCategory.category}</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center space-x-1">
                    <Image src={skill.icon} alt={skill.name} width={16} height={16} />
                    <span className="text-gray-300 text-xs">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
