import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO, TechInnovate Solutions',
    content: 'Alex is an exceptional developer with a keen eye for detail. His ability to tackle complex problems and deliver high-quality solutions is truly impressive.',
  },
  {
    name: 'Michael Lee',
    position: 'Project Manager, DataDriven Corp',
    content: 'Working with Alex was a pleasure. His technical skills and communication abilities made our project a success. I highly recommend him for any development role.',
  },
  {
    name: 'Emily Chen',
    position: 'Co-founder, StartUp Innovations',
    content: 'Alex's contributions were crucial to our startup's early success. His dedication and innovative thinking helped us overcome numerous technical challenges.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div>
                <p className="text-blue-400 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

