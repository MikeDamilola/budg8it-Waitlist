const features = [
  {
    icon: '🎨',
    title: 'Create Payment Links Instantly',
    description:
      'Share a unique link via WhatsApp, Instagram, SMS, or anywhere and receive payments without stress.',
  },
  {
    icon: '💻',
    title: 'Smart Wallet Savings',
    description:
      'Every deposit goes straight to your secure wallet, with the option to save automatically.',
  },
  {
    icon: '📱',
    title: 'Easy Withdrawals',
    description:
      'Cash out to your bank anytime with smooth, fast processing.',
  },
]

function Features() {
  return (
    <section id="features" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-4xl">
          Core Features
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-100 bg-white p-6 shadow-md"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-indigo-100 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0F172A]">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
