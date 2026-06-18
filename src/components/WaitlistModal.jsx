import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'
import SmImag1 from '../assets/Sm Imag1.png'
import SmImag2 from '../assets/Sm Imag2.png'
import SmImag3 from '../assets/Sm Imag3.png'

function WaitlistModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timer
    if (isOpen) {
      timer = setTimeout(() => setVisible(true), 10)
    } else {
      setVisible(false)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 transition-all duration-200 ease-out ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`relative w-full max-w-md rounded-2xl bg-white p-10 shadow-xl transition-all duration-300 ease-out sm:p-12 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-700"
          aria-label="Close success modal"
        >
          <X size={20} />
        </button>

        <div
          className={`flex flex-col items-center text-center transition-all duration-300 ease-out ${
            visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#E8EBF5]/80">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4DAEA]/70">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#001B3D]">
                <Check size={28} color="white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <p className="mt-8 text-2xl font-bold leading-snug text-[#001B3D]">
            You have been <br />
            added to our <span className="text-[#97A1FF]">Waitlist!</span>
          </p>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#666666]">
            Thank you for joining, you&apos;ll be the first to know when we are ready!
          </p>

          <div className="mt-8 flex items-center justify-center">
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

          <p className="mt-4 text-sm text-[#666666]">
            You&apos;re not <span className="font-medium text-[#97A1FF]">alone+</span> more people joined
          </p>
        </div>
      </div>
    </div>
  )
}

export default WaitlistModal
