'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const interests = [
  {
    title: 'Drawing',
    description: 'I enjoy expressing my creativity through drawing, whether its sketching simple doodles or creating detailed artwork.',
    icon: '🎨',
  },
  {
    title: 'MicroArt',
    description: 'Microart allows me to explore intricate and miniature details, creating tiny masterpieces that showcase my precision and patience.',
    icon: '✏️',
  },
  {
    title: 'Coding',
    description: 'Coding is my passion for building and problem-solving, where I turn ideas into functional software and explore new technologies.',
    icon: '💻',
  },
]

const Interests = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="interests" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Interests & Hobbies
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div 
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <motion.span 
                  className="text-4xl mr-4"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15 }}
                >
                  {interest.icon}
                </motion.span>
                <h3 className="text-xl font-semibold">{interest.title}</h3>
              </div>
              <p className="text-gray-300">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests

