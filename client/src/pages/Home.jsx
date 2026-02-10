import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default Home