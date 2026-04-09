import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Features />
        <section id="contact" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <HowItWorks />
            <FAQ />
          </div>
        </section>
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
