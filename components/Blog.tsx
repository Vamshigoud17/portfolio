import Image from 'next/image'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape in the coming year.',
    date: 'Dec 15, 2023',
    image: '/placeholder.svg?height=200&width=300',
    link: '/blog/future-of-web-development',
  },
  {
    title: 'Optimizing React Applications for Performance',
    excerpt: 'Learn advanced techniques to boost the performance of your React applications and provide a smoother user experience.',
    date: 'Nov 28, 2023',
    image: '/placeholder.svg?height=200&width=300',
    link: '/blog/optimizing-react-applications',
  },
  {
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Discover best practices and patterns for developing robust and scalable microservices architectures using Node.js.',
    date: 'Oct 10, 2023',
    image: '/placeholder.svg?height=200&width=300',
    link: '/blog/scalable-microservices-nodejs',
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <Image 
                src={post.image} 
                alt={post.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400">{post.date}</span>
                  <a 
                    href={post.link} 
                    className="text-blue-400 hover:text-blue-300 transition duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

