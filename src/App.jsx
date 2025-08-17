import React from 'react'
import Hero from './components/Hero'
import About  from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Links from './components/Links'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <About  />
      <Education />
      <Skills />
      <Projects />
      <Links />
      <Footer />
    </div>
  )
}
