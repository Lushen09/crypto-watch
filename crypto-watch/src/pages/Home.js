import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Download from '../components/Download'

import "../styles/index.css"


const Home = () => {

  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Download />
    </div>
  )
}

export default Home