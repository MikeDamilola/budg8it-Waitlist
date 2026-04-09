import DashboardImage from '../assets/Dashboard image 1.png'

function Hero() {
  return (
    <section id="home" className="bg-[#F5F6FA] pt-16 pb-8 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-4xl">
          Get Paid Faster, Manage Funds Smarter, <br />
          Save Automatically.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base text-slate-600 sm:text-lg">
          Generate secure payment links, receive payments into smart wallets, and automate savings for your business.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="rounded-full bg-[#0F172A] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
          >
            Join Waitlist ↗
          </a>
          <a
            href="#features"
            className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-md transition hover:border-slate-400"
          >
            Learn more
          </a>
        </div>
        <div className="mx-auto mt-4 w-full max-w-6xl">
          <img
            src={DashboardImage}
            alt="Budg8it dashboard preview"
            className="h-auto w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
