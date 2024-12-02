import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechInnovate Solutions',
    date: 'Jan 2021 - Present',
    responsibilities: [
      'Lead a team of 5 developers in building scalable web applications',
      'Implemented microservices architecture, improving system efficiency by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'DataDriven Corp',
    date: 'Jun 2018 - Dec 2020',
    responsibilities: [
      'Developed and maintained multiple client-facing web applications',
      'Optimized database queries, reducing load times by 30%',
      'Collaborated with UX designers to implement responsive designs',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Innovations',
    date: 'Sep 2016 - May 2018',
    responsibilities: [
      'Assisted in the development of company website and internal tools',
      'Implemented front-end features using React and Redux',
      'Participated in daily stand-ups and sprint planning meetings',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

