import { useState } from 'react'
import { ArrowUpRight, Menu } from 'lucide-react'
import logo from '../assets/budg8it-logo.png'

const links = ['Home', 'Features', 'Contact Us']

const linkToHref = {
  Home: '#home',
  Features: '#features',
  'Contact Us': '#contact',
}

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const getLinkClasses = (link) =>
    `text-sm transition-all duration-200 hover:text-[#0F172A] ${
      activeLink === link ? 'font-bold text-[#0F172A]' : 'font-normal text-gray-500'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-3 sm:px-6">
        <div className="rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="Budg8it logo"
                className="h-10 w-auto max-w-[170px] object-contain"
              />
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <a
                  key={link}
                  href={linkToHref[link]}
                  onClick={() => setActiveLink(link)}
                  className={getLinkClasses(link)}
                >
                  {link}
                </a>
              ))}
            </nav>

            <a
              href="#waitlist"
              className="hidden cursor-pointer items-center gap-1 rounded-full bg-[#0F172A] px-6 py-2.5 text-sm text-white transition-all duration-200 hover:opacity-90 md:inline-flex"
            >
              Join Waitlist
              <ArrowUpRight className="h-4 w-4 rotate-6" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-md p-2 text-[#0F172A] transition-all duration-200 hover:bg-gray-100 md:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {menuOpen && (
            <div className="mt-4 rounded-xl bg-white p-4 shadow-lg md:hidden">
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link}
                    href={linkToHref[link]}
                    onClick={() => {
                      setActiveLink(link)
                      setMenuOpen(false)
                    }}
                    className={getLinkClasses(link)}
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#waitlist"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-[#0F172A] px-6 py-2.5 text-sm text-white transition-all duration-200 hover:opacity-90"
                >
                  Join Waitlist
                  <ArrowUpRight className="h-4 w-4 rotate-6" />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
