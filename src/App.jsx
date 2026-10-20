import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}