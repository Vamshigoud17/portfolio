import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Interests from '../components/Interests'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}

