import { useEffect, useState } from 'react'
import { ArrowUpRight, X, Check } from 'lucide-react'
import SmImag1 from '../assets/Sm Imag1.png'
import SmImag2 from '../assets/Sm Imag2.png'
import SmImag3 from '../assets/Sm Imag3.png'

const initialFormData = {
  fullName: '',
  email: '',
  interest: '',
}

function WaitlistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timer
    if (submitted) {
      timer = setTimeout(() => setVisible(true), 10)
    } else {
      setVisible(false)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [submitted])

  const resetState = () => {
    setSubmitted(false)
    setVisible(false)
    setErrors({})
    setFormData(initialFormData)
  }

  const handleClose = () => {
    resetState()
    onClose()
  }

  const handleChange = (field) => (event) => {
    const { value } = event.target
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-200 ease-out ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={handleClose}
      role="presentation"
    >
      <div
        className={`relative mx-4 w-full max-w-lg rounded-2xl bg-white shadow-xl transition-all duration-200 ease-out ${
          submitted ? 'p-12' : 'p-10'
        } ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 cursor-pointer text-gray-400 transition hover:text-gray-700"
          aria-label="Close waitlist modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h2 className="mb-4 text-center text-2xl font-bold text-[#0F172A]">Get early access!</h2>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center">
                <img
                  src={SmImag1}
                  alt="Waitlist member 1"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={SmImag2}
                  alt="Waitlist member 2"
                  className="-ml-3 h-10 w-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={SmImag3}
                  alt="Waitlist member 3"
                  className="-ml-3 h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="max-w-xs text-sm leading-snug text-gray-500">
                Join thousands waiting to simplify how they receive and save money.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#0F172A]" htmlFor="modalFullName">
                  Full Name
                </label>
                <input
                  id="modalFullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                  value={formData.fullName}
                  onChange={handleChange('fullName')}
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#0F172A]" htmlFor="modalEmail">
                  Email Address
                </label>
                <input
                  id="modalEmail"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                  value={formData.email}
                  onChange={handleChange('email')}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#0F172A]" htmlFor="modalInterest">
                  Why are you interested? <span className="text-red-500">(*Optional)</span>
                </label>
                <textarea
                  id="modalInterest"
                  rows={3}
                  placeholder="what catches your attention about the app?"
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-500 outline-none transition focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                  value={formData.interest}
                  onChange={handleChange('interest')}
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F172A] py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Join Waitlist
                <ArrowUpRight size={16} className="ml-2" />
              </button>
            </div>
          </>
        ) : (
          <div
            className={`flex flex-col items-center gap-6 text-center transition-all duration-300 ease-out ${
              visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200/60">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-300/70">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F172A]">
                  <Check size={28} color="white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <p className="text-2xl font-bold leading-snug text-[#0F172A]">
              You have been <br />
              added to our <span className="text-blue-500">Waitlist</span>!
            </p>

            <p className="max-w-xs text-center text-sm leading-relaxed text-gray-400">
              Thank you for joining, you&apos;ll be the first to know when we are ready!
            </p>

            <div className="flex items-center justify-center">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="Waitlist member 1"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="Waitlist member 2"
                className="-ml-3 h-10 w-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="Waitlist member 3"
                className="-ml-3 h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            <p className="text-sm text-gray-400">
              You&apos;re not <span className="font-medium text-blue-500">alone+</span> more people joined
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WaitlistModal
