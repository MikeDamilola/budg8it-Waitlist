import logo from '../assets/Budg8it.png'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Join Waitlist', href: '#home' },
]

function Footer() {
  return (
    <footer className="bg-[#0F172A] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center">
            <img
              src={logo}
              alt="Budg8it logo"
              className="h-10 w-auto max-w-[170px] object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Get Paid Instantly. Save Seamlessly. All in One Wallet.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Payment Links</li>
            <li>Smart Wallets</li>
            <li>Withdrawal System</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-4 text-sm text-slate-300">support@budg8it.app</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
