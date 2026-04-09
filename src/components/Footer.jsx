import logo from '../assets/budg8it-logo.png'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Join Waitlist', href: '#waitlist' },
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
              className="h-10 w-auto max-w-[170px] rounded-md bg-white px-2 py-1 object-contain"
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
