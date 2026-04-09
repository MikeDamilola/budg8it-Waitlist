import { useState } from 'react'

const faqs = [
  {
    question: 'How do payment links work?',
    answer: 'Create a unique payment link from your dashboard and share it. Once a customer pays, the funds settle in your Budg8it wallet.',
  },
  {
    question: 'Who can use this platform?',
    answer: 'Freelancers, creators, small businesses, and teams that want easier collections and wallet-based savings can use Budg8it.',
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes. Budg8it is designed with secure transaction handling and protected wallet flows for reliable fund management.',
  },
  {
    question: 'Are there any fees?',
    answer: 'Final pricing will be announced at launch. Waitlist members get early communication on plans and potential perks.',
  },
  {
    question: 'When is the official launch?',
    answer: 'We are currently in waitlist mode. Early access invitations will be sent to users on the list first.',
  },
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div id="faqs">
      <h2 className="text-3xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index
          return (
            <article key={faq.question} className="rounded-xl border border-slate-200 bg-white shadow-md">
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-[#0F172A]">{faq.question}</span>
                <span className="text-xl font-bold text-slate-500">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="px-5 pb-4 text-slate-600">{faq.answer}</p>}
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
