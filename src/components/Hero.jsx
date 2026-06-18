import { useState } from 'react'
import { ArrowUpRight, Link2, Wallet } from 'lucide-react'
import heroBackground from '../assets/Background Hero section.png'
import phoneMockup from '../assets/Mockup 1.png'
import logo from '../assets/budg8it-logo.png'

function Hero({ onJoinWaitlist }) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setEmailError('Email is required.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email address.')
      return
    }

    setEmailError('')
    setEmail('')
    onJoinWaitlist()
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#060d24]">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-0 pt-4 text-center sm:px-6 sm:pt-5 lg:px-8">
        <div className="rounded-full bg-white px-6 py-2.5 shadow-md sm:px-7 sm:py-3">
          <img src={logo} alt="Budg8it" className="h-8 w-auto object-contain sm:h-9" />
        </div>

        <div className="mt-10 inline-flex items-center rounded-full border border-gray-100 bg-white pr-6 shadow-sm sm:mt-12 lg:mt-14">
          <span className="inline-flex items-center justify-center rounded-full bg-[#192250] px-5 py-2.5 text-sm font-bold tracking-widest text-white">
            NEW
          </span>
          <p className="ml-4 text-sm font-medium text-[#0a1628]">
            Your all-in-one budget app for payment and savings.
          </p>
        </div>

        <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          Get Paid. Save Automatically.
          <br />
          Grow Consistently.
        </h1>

        <p className="mt-5 max-w-2xl text-xs font-light leading-relaxed text-white/75 sm:mt-6 sm:text-sm lg:text-base">
          Generate secure payment links, receive payments into smart wallets, and automate savings for your
          business.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-xl sm:mt-10"
          noValidate
        >
          <div className="flex flex-col gap-2 rounded-2xl border border-white/35 bg-transparent p-1.5 sm:flex-row sm:items-center sm:rounded-full sm:p-1.5">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setEmailError('')
              }}
              placeholder="Enter your email address"
              className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 sm:rounded-full sm:py-3.5"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-white/90 sm:rounded-full sm:px-7"
            >
              Join Waitlist
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          {emailError && <p className="mt-2 text-left text-sm text-red-300">{emailError}</p>}
        </form>

        <div className="relative mt-4 flex w-full justify-center sm:mt-6">
          <div className="relative shrink-0">
            <div className="pointer-events-none absolute bottom-[32%] right-[calc(100%-7.5rem)] z-20 hidden w-[220px] rounded-2xl bg-white p-5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)] lg:block xl:w-[240px]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <Wallet className="h-5 w-5 text-emerald-600" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold leading-snug text-[#0F172A]">Smart Wallet Savings</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Every deposit goes straight to your secure wallet, with the option to save automatically.
              </p>
            </div>

            <div className="pointer-events-none absolute left-[calc(100%-7.5rem)] top-[8%] z-20 hidden w-[220px] rounded-2xl bg-white p-5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)] lg:block xl:w-[240px]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                <Link2 className="h-5 w-5 text-violet-600" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold leading-snug text-[#0F172A]">Create Payment Links Instantly</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Share a unique link via WhatsApp, Instagram, SMS, or anywhere and receive payments without
                stress.
              </p>
            </div>

            <img
              src={phoneMockup}
              alt="Budg8it mobile app preview showing wallet balance and quick actions"
              className="relative z-10 mx-auto w-[min(94vw,420px)] translate-y-2 sm:w-[min(88vw,500px)] sm:translate-y-4 lg:w-[540px] xl:w-[580px]"
            />
          </div>
        </div>

        <div className="mt-6 grid w-full max-w-3xl gap-4 px-2 pb-10 text-left lg:hidden">
          <div className="rounded-2xl bg-white p-5 shadow-lg">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <Wallet className="h-5 w-5 text-emerald-600" strokeWidth={2} />
            </div>
            <h3 className="text-sm font-bold text-[#0F172A]">Smart Wallet Savings</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Every deposit goes straight to your secure wallet, with the option to save automatically.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-lg">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
              <Link2 className="h-5 w-5 text-violet-600" strokeWidth={2} />
            </div>
            <h3 className="text-sm font-bold text-[#0F172A]">Create Payment Links Instantly</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Share a unique link via WhatsApp, Instagram, SMS, or anywhere and receive payments without
              stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
