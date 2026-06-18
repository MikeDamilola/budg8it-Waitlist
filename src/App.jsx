import { useState } from 'react'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Hero onJoinWaitlist={() => setIsModalOpen(true)} />
        <ValueProp />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
