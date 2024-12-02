'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const educationData = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Kamala Institute Of Technology & Sceince',
    year: '2022-2026',
    description: 'Major in Computer Sceince',
  },
  {
    degree: 'Intermediate',
    institution: 'Alphores Junior College',
    year: '2020-2022',
    description: 'Board Of Intermediate(MPC), TG',
  },
  {
    degree: 'S.S.c',
    institution: 'Sai Manair High School',
    year: '2019-2020',
    description: 'Board of SSC,TG',
  },
  
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          Education
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.degree}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{edu.degree}</h3>
              <p className="text-blue-400 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-4">{edu.year}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

