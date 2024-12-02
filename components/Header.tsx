'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-background bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">BURRA VAMSHI</Link>
        <nav className="hidden md:flex space-x-8">
          {['About', 'Education', 'Skills', 'Projects', 'Interests', 'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="text-text hover:text-primary transition duration-300">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-text hover:text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background py-4"
        >
          {['About', 'Education', 'Skills', 'Projects', 'Interests', 'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="block px-4 py-2 text-text hover:text-primary transition duration-300">
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export default Header

