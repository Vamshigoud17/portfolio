'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import project1 from '@/components/assets/page1.png'
import project2 from '@/components/assets/bus_reservation.png'
import project3 from '@/components/assets/hand_cric_ui.png'
import project4 from '@/components/assets/whatsapp_UI.jpg'


const projects = [
  {
    title: 'Invigilation Insights',
    description: 'It is a looker project designed to efficiently manage and monitor the activities of invigilators, providing real-time insights and data analysis.',
    technologies: ['LookerStudio', 'SpreadSheet', 'AppScript'],
    image: project1,
    link: 'https://lookerstudio.google.com/reporting/2b86c133-7a74-4ed2-a1a6-df7479cf8812'
  },
  {
    title: 'Bus Reservation Systemt',
    description: ' It is a console-based application aimed at enhancing and simplifying the bus ticket booking process. Users can search for available buses, verify seat availability and book tickets online.',
    technologies: ['c language', 'DSA'],
    image: project2,
    link: 'https://github.com/Vamshigoud17/BUS_RESERVATION'
  },
  {
    title: 'Hand cricket Game',
    description: 'It is a game developed using Next.js that uses emojis to score.',
    technologies: ['Next.js', 'Typescript', 'HTML', 'tailwind'],
    image: project3,
    link: 'https://github.com/Vamshigoud17/hand_cric_ai'
  },
  {
    title: 'WhatsApp UI Clone – Flutter: ',
    description: 'Designed and developed a WhatsApp-like user interface using Flutter, implementing responsive layouts and custom widgets for an authentic chat app experience.',
    technologies: ['Flutter', 'Dart'],
    image: project4,
    link: 'https://github.com/Vamshigoud17/Whatsapp_UI'
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-primary text-white text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

