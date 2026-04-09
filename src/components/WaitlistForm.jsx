import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  interest: '',
}

function WaitlistForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Full name is required.'
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    return nextErrors
  }

  const handleSubmit = () => {
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setSubmitted(false)
      setErrors(nextErrors)
      return
    }

    setSubmitted(true)
    setErrors({})
    setValues(initialValues)
  }

  return (
    <section id="waitlist" className="bg-[#F5F6FA] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">Get early access!</h2>
        <div className="mt-5 flex justify-center">
          <div className="flex -space-x-3">
            <span className="h-10 w-10 rounded-full border-2 border-white bg-sky-300" />
            <span className="h-10 w-10 rounded-full border-2 border-white bg-indigo-300" />
            <span className="h-10 w-10 rounded-full border-2 border-white bg-emerald-300" />
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Join thousands waiting to simplify how they receive and save money.
        </p>

        <div className="mt-8 space-y-4 rounded-xl bg-white p-6 text-left shadow-md">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={values.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#0F172A] focus:ring-2"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#0F172A] focus:ring-2"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="interest">
              Why are you interested? (*Optional)
            </label>
            <textarea
              id="interest"
              name="interest"
              rows={4}
              placeholder="What catches your attention about the app?"
              value={values.interest}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#0F172A] focus:ring-2"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full rounded-full bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Join Waitlist ↗
          </button>

          {submitted && (
            <p className="text-center text-sm font-medium text-emerald-600">
              You&apos;re on the list! We&apos;ll be in touch.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default WaitlistForm
