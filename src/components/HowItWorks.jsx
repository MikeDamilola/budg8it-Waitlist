const steps = [
  {
    icon: '✅',
    step: 'Step 1',
    title: 'Sign Up & Verify',
    description: 'Create your account in seconds.',
  },
  {
    icon: '🔗',
    step: 'Step 2',
    title: 'Generate Payment Link',
    description: 'Get paid by creating a payment link or QR code for payers.',
  },
  {
    icon: '💸',
    step: 'Step 3',
    title: 'Receive Money Immediately',
    description: 'Funds will be created to your wallet which can be saved or withdrawn.',
  },
]

function HowItWorks() {
  return (
    <div>
      <h2 className="text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-4xl">How It Works</h2>
      <div className="mt-8 space-y-5">
        {steps.map((step) => (
          <div key={step.title} className="rounded-xl border border-slate-200 p-5 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F6FA] text-lg">
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">{step.step}</p>
                <h3 className="mt-1 text-lg font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-1 text-slate-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
