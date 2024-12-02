'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import myimage from '@/components/assets/myimg.jpg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Burra Vamshi</h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-6">Full Stack Developer</h2>
          <p className="text-xl text-gray-300 mb-8">Crafting digital experiences that inspire and innovate.</p>
          <a href="#contact" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">Get in Touch</a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <Image 
            src={myimage} 
            alt="Alex Chen" 
            width={400} 
            height={400} 
            className="rounded-full shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

