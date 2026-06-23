import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'The Shine Lab NL | Premium Mobile Car Detailing Newfoundland',
      },
      {
        name: 'description',
        content: "Convenient, showroom-quality mobile auto detailing brought directly to your driveway across St. John's, Mount Pearl, CBS, and Paradise.",
      },
    ],
  }),
  component: Home,
})

type VehicleSize = 'Small' | 'Medium' | 'Large'

function Home() {
  const logoUrl =
    'https://drive.google.com/thumbnail?id=1YcM_mCCFSucl9eD1xmcCVFzGX0boOvLt&sz=w1000'
  const heroImageUrl =
    'https://drive.google.com/thumbnail?id=1NgEUd5KxyDrXXRlXls8XiA_ZBafNMBcs&sz=w2200'

  const [fullSize, setFullSize] = useState<VehicleSize>('Small')
  const [interiorSize, setInteriorSize] = useState<VehicleSize>('Small')
  const [exteriorSize, setExteriorSize] = useState<VehicleSize>('Small')
  const [maintenanceSize, setMaintenanceSize] = useState<VehicleSize>('Small')
  const [bookingSent, setBookingSent] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const fullPrices = { Small: 180, Medium: 200, Large: 230 } as const
  const interiorPrices = { Small: 100, Medium: 110, Large: 130 } as const
  const exteriorPrices = { Small: 90, Medium: 100, Large: 120 } as const
  const maintenancePrices = { Small: 80, Medium: 90, Large: 110 } as const
  const sizeOptions: VehicleSize[] = ['Small', 'Medium', 'Large']

  const handleBookingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBookingSent(false)

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch('https://formspree.io/f/xojbnnra', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      setBookingSent(true)
      form.reset()
    }
  }

  return (
    <main id="top" className="bg-white text-slate-900 scroll-smooth selection:bg-emerald-500 selection:text-white">
      {/* Premium Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={logoUrl}
              alt="The Shine Lab logo"
              className="h-10 w-10 rounded-xl border border-slate-200 bg-white object-cover object-top shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-slate-950 sm:text-lg">
                THE SHINE LAB
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
                Newfoundland
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { label: 'Home', href: '#top' },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Booking', href: '#booking' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-emerald-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#booking"
              className="hover-pop-button rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/10 hover:bg-emerald-700 transition-all"
            >
              Request Quote
            </a>
          </div>

          {/* Burger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 hover:bg-slate-50 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white/95 px-4 py-3 md:hidden animate-fade-in">
            <nav className="flex flex-col gap-1">
              {[
                { label: 'Home', href: '#top' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Booking', href: '#booking' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center rounded-xl bg-emerald-600 py-3 text-base font-bold text-white shadow-md hover:bg-emerald-700"
              >
                Request Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative isolate min-h-[85vh] overflow-hidden flex items-center">
        <img
          src={heroImageUrl}
          alt="The Shine Lab detailing background"
          className="absolute inset-0 h-full w-full object-cover object-[center_70%] brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:bg-gradient-to-r" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl rounded-3xl border border-white/60 bg-white/90 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-10 border-solid">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-emerald-700">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PREMIUM MOBILE DETAILING • NEWFOUNDLAND
            </div>
            
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl uppercase font-display">
              the formula to a <span className="text-emerald-600 relative inline-block">premium detail</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              No drop-offs, no waiting rooms — just convenient, professional-grade auto detailing brought directly to your doorstep in Newfoundland. We deliver high-gloss showroom depth with safe wash methods and absolute care.
            </p>
            
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="hover-pop-button inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="hover-pop-button inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-800 hover:border-emerald-300 hover:bg-slate-50 shadow-sm"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KPI & Quick Value Props Bar */}
      <section className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-center md:grid-cols-4">
            {[
              { value: '100%', label: 'Mobile Laboratory', sub: 'At your doorstep' },
              { value: 'No. 1', label: 'Convenience Focus', sub: 'Save hours of time' },
              { value: 'Eco', label: 'Pro-grade Wash', sub: 'Safe, scratch-free' },
              { value: 'Gloss', label: 'Showroom Finish', sub: 'Depth and sealant' },
            ].map((kpi) => (
              <div key={kpi.label} className="flex flex-col items-center">
                <span className="text-3xl font-black tracking-tight text-emerald-600 font-display">
                  {kpi.value}
                </span>
                <span className="mt-1.5 text-sm font-bold text-slate-950">
                  {kpi.label}
                </span>
                <span className="text-xs text-slate-500">
                  {kpi.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20 py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl uppercase">
              Our Detailing Formulas
            </h2>
            <div className="h-1.5 w-20 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600">
              Select a package to see starting prices adjusted by vehicle size. Transparent pricing, no hidden fees, and premium results every time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Full Detail */}
            <article className="hover-pop-card relative flex flex-col justify-between rounded-2xl border-2 border-emerald-500 bg-white p-6 shadow-xl shadow-emerald-500/5">
              <span className="absolute -top-3.5 right-4 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-md">
                Best Value
              </span>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=400&q=80"
                  alt="Full Detail showroom car"
                  className="h-40 w-full rounded-xl object-cover mb-5"
                />
                <h3 className="text-2xl font-extrabold text-slate-950">Full Detail</h3>
                <p className="mt-1 text-xs text-slate-500 font-semibold uppercase tracking-wider">Premium Reset</p>
                <div className="mt-4 flex items-baseline text-emerald-600">
                  <span className="text-sm font-bold uppercase mr-1 text-slate-400">Starting at</span>
                  <span className="text-3xl font-black">${fullPrices[fullSize]}</span>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Size:</span>
                  <div className="mt-1.5 flex gap-1 bg-slate-50 p-1 rounded-lg">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFullSize(size)}
                        className={`flex-1 rounded-md py-1 text-xs font-bold transition-all ${
                          fullSize === size
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-150'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Our most complete package for drivers who want a absolute reset inside and out with high-grade paint protection.
                </p>
              </div>

              <div className="mt-6">
                <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Full interior vacuum & shampoo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Leather treatment / steam sanitize
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Exterior foam bath & scratch-free wash
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Wheels, tire deep clean & gloss dress
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 3-6 month premium paint sealant
                  </li>
                </ul>
                <a
                  href="#booking"
                  className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
                >
                  Book Full Detail
                </a>
              </div>
            </article>

            {/* Interior Detail */}
            <article className="hover-pop-card flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80"
                  alt="Interior detailing car seat vacuum"
                  className="h-40 w-full rounded-xl object-cover mb-5"
                />
                <h3 className="text-2xl font-extrabold text-slate-950">Interior Detail</h3>
                <p className="mt-1 text-xs text-slate-500 font-semibold uppercase tracking-wider">Cabin Refresh</p>
                <div className="mt-4 flex items-baseline text-emerald-600">
                  <span className="text-sm font-bold uppercase mr-1 text-slate-400">Starting at</span>
                  <span className="text-3xl font-black">${interiorPrices[interiorSize]}</span>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Size:</span>
                  <div className="mt-1.5 flex gap-1 bg-slate-50 p-1 rounded-lg">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setInteriorSize(size)}
                        className={`flex-1 rounded-md py-1 text-xs font-bold transition-all ${
                          interiorSize === size
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-150'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Perfect for reviving your cabin with a deeper clean that restores comfort, freshness, and a polished interior feel.
                </p>
              </div>

              <div className="mt-6">
                <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Heavy floor-to-ceiling vacuuming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Carpet & fabric extraction/shampoo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Dash, center console & panels detailed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Detail brush vent cleaning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Odor neutralizer & UV protectant
                  </li>
                </ul>
                <a
                  href="#booking"
                  className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all"
                >
                  Book Interior
                </a>
              </div>
            </article>

            {/* Exterior Detail */}
            <article className="hover-pop-card flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&w=400&q=80"
                  alt="Exterior foam wash auto"
                  className="h-40 w-full rounded-xl object-cover mb-5"
                />
                <h3 className="text-2xl font-extrabold text-slate-950">Exterior Detail</h3>
                <p className="mt-1 text-xs text-slate-500 font-semibold uppercase tracking-wider">Paint & Glow</p>
                <div className="mt-4 flex items-baseline text-emerald-600">
                  <span className="text-sm font-bold uppercase mr-1 text-slate-400">Starting at</span>
                  <span className="text-3xl font-black">${exteriorPrices[exteriorSize]}</span>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Size:</span>
                  <div className="mt-1.5 flex gap-1 bg-slate-50 p-1 rounded-lg">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setExteriorSize(size)}
                        className={`flex-1 rounded-md py-1 text-xs font-bold transition-all ${
                          exteriorSize === size
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-150'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Built to safely clean and protect your paint, wheels, and trim while bringing back a bright, glossy finish.
                </p>
              </div>

              <div className="mt-6">
                <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Multi-stage foam bath wash
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Safe hand wash using microfiber mitts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Wheel barrels, arches & tires clean
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Glass cleaned & rain repellent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Premium hand-applied paint sealant
                  </li>
                </ul>
                <a
                  href="#booking"
                  className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all"
                >
                  Book Exterior
                </a>
              </div>
            </article>

            {/* Maintenance Detail */}
            <article className="hover-pop-card flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&w=400&q=80"
                  alt="Maintenance car care wipe down"
                  className="h-40 w-full rounded-xl object-cover mb-5"
                />
                <h3 className="text-2xl font-extrabold text-slate-950">Maintenance Package</h3>
                <p className="mt-1 text-xs text-slate-500 font-semibold uppercase tracking-wider">Recurring Care</p>
                <div className="mt-4 flex items-baseline text-emerald-600">
                  <span className="text-sm font-bold uppercase mr-1 text-slate-400">Starting at</span>
                  <span className="text-3xl font-black">${maintenancePrices[maintenanceSize]}</span>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Select Size:</span>
                  <div className="mt-1.5 flex gap-1 bg-slate-50 p-1 rounded-lg">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setMaintenanceSize(size)}
                        className={`flex-1 rounded-md py-1 text-xs font-bold transition-all ${
                          maintenanceSize === size
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-150'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Designed for regularly maintained vehicles. Keep your car showroom fresh with bi-weekly or monthly mobile touchups.
                </p>
              </div>

              <div className="mt-6">
                <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Express interior vacuum & wipe down
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Glass cleaned inside and out
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Exterior foam wash and dry
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Wheel wipe down and tire shine
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Gloss booster spray application
                  </li>
                </ul>
                <a
                  href="#booking"
                  className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all"
                >
                  Book Maintenance
                </a>
              </div>
            </article>
          </div>

          <div className="mt-12 text-center text-sm text-slate-500">
            * Starting rates are for well-maintained vehicles. Additional charges may apply for excessive mud, sand, mold, biohazards, or heavy pet hair.
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 py-24 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-4">
                THE SHINE LAB NL
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl uppercase font-display">
                Engineered for show-room gloss.
              </h2>
              <div className="h-1.5 w-16 bg-emerald-500 mt-4 mb-6 rounded-full"></div>
              
              <p className="text-slate-700 leading-relaxed text-base mb-6">
                The Shine Lab brings a premium, high-end car detailing experience directly to Newfoundland driveways. Founded by car enthusiasts who believe high-quality paint care shouldn't come with long drop-offs or wasted Saturdays, we created a completely self-contained mobile detailing laboratory.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-base mb-6">
                We focus on advanced chemistry, multi-bucket safe-wash methods, and premium-grade sealants to deliver results that rival any brick-and-mortar shop. We preserve and enhance your vehicle's gloss and long-term resale value right where you are.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mt-8">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-950">100% Mobile</h4>
                    <p className="text-xs text-slate-500 mt-0.5">We detail at your home or work place across NL.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-950">Swirl-Free Guarantee</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Microfiber-only washing prevents paint scratches.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
                alt="Detailing sportscar close up"
                className="rounded-3xl object-cover shadow-2xl w-full max-h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col rounded-2xl bg-white border border-slate-100 p-5 shadow-xl">
                <span className="text-2xl font-black text-emerald-600">Avalon Pen.</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Primary Service Area</span>
                <span className="text-sm text-slate-600 mt-1">St. John's, Mount Pearl, Paradise & CBS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="scroll-mt-20 py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-4">
                BOOK APPOINTMENT
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl uppercase">
                Ready for the Formula?
              </h2>
              <div className="h-1.5 w-16 bg-emerald-500 mt-4 mb-6 rounded-full"></div>
              
              <p className="text-slate-600 leading-relaxed">
                Fill out our secure booking form to request a detail quote. Provide your details and vehicle type, select your requested package, and our team will get in touch to confirm your custom quote and schedule your detailing laboratory.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-lg">⏱</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Rapid Response</h4>
                    <p className="text-xs text-slate-500">Quotes confirmed within 2 hours during work hours.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-lg">📅</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Flexible Schedule</h4>
                    <p className="text-xs text-slate-500">Pick any available date that aligns with your day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                action="https://formspree.io/f/xojbnnra"
                method="POST"
                onSubmit={handleBookingSubmit}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100/50 sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Full Name *
                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                        placeholder="John Doe"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Phone Number *
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                        placeholder="(709) 555-1234"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Email Address *
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                        placeholder="john@example.com"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Vehicle Make, Model & Year *
                      <input
                        type="text"
                        name="vehicle_type"
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                        placeholder="2022 Honda Civic, SUV..."
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Service Requested *
                      <select
                        name="service_requested"
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                      >
                        <option value="Full Detail">Full Detail (Starting at $180)</option>
                        <option value="Interior Detail">Interior Detail (Starting at $100)</option>
                        <option value="Exterior Detail">Exterior Detail (Starting at $90)</option>
                        <option value="Maintenance Detail">Maintenance Detail (Starting at $80)</option>
                      </select>
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Preferred Date & Time *
                      <input
                        type="datetime-local"
                        name="preferred_datetime"
                        required
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-950 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                      />
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Additional Notes / Special Requirements
                      <textarea
                        name="notes"
                        rows={4}
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                        placeholder="Please note heavy pet hair, sand, custom wrap, etc."
                      />
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="hover-pop-button flex w-full justify-center rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
                    >
                      Request Quote
                    </button>
                  </div>

                  {bookingSent && (
                    <div className="sm:col-span-2 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center text-sm font-semibold text-emerald-800">
                      Quote request successfully sent! Our team will reach out shortly.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms" className="scroll-mt-20 py-12 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950 uppercase">Terms & Booking Conditions</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 text-xs leading-relaxed text-slate-600">
              <ul className="list-disc space-y-2 pl-5">
                <li>Weather delays may occur due to high wind, precipitation, or heavy cold, requiring reschedule.</li>
                <li>Extra surcharges apply for vehicles containing heavy sand, pet hair, dirt, or mud.</li>
                <li>Biohazard situations (molds, heavy bodily fluids) may be declined for health & safety.</li>
              </ul>
              <ul className="list-disc space-y-2 pl-5">
                <li>Customers are requested to clear valuable personal belongs prior to our arrival. We hold no liability for lost belongings.</li>
                <li>Job times given are estimates and can vary based on condition.</li>
                <li>Starting rates apply to vehicles in average condition. High contamination may vary quote.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl uppercase">
              Connect With The Lab
            </h2>
            <div className="h-1.5 w-16 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600">
              Get in touch for questions, customized commercial fleet pricing, or help booking.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xl font-bold mb-4">
                📞
              </div>
              <h4 className="text-base font-bold text-slate-950">Phone Number</h4>
              <p className="mt-2 text-sm text-slate-600">(709) 219-9934</p>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">Call or Text</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xl font-bold mb-4">
                ✉
              </div>
              <h4 className="text-base font-bold text-slate-950">Email Address</h4>
              <p className="mt-2 text-sm text-slate-600">theshinelabnl@gmail.com</p>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">General Inquiries</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xl font-bold mb-4">
                ⏰
              </div>
              <h4 className="text-base font-bold text-slate-950">Operating Hours</h4>
              <p className="mt-2 text-sm text-slate-600">Mon - Sun: 8:00 AM - 7:00 PM</p>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">Detailing Daily</span>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xl font-bold mb-4">
                📍
              </div>
              <h4 className="text-base font-bold text-slate-950">Service Area</h4>
              <p className="mt-2 text-sm text-slate-600">St. John's, NL & surrounding area</p>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">Avalon Peninsula</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-slate-100 bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 mb-12">
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logoUrl}
                  alt="The Shine Lab logo"
                  className="h-12 w-12 rounded-xl border border-slate-800 bg-white object-cover object-top shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-white tracking-tight">THE SHINE LAB</span>
                  <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Newfoundland</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Premium mobile car detailing with professional safe washing, deep upholstery extraction, and long-lasting gloss protection brought to your door.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Our Service Areas</h4>
              <ul className="space-y-2.5 text-sm">
                <li>• St. John’s, NL</li>
                <li>• Mount Pearl, NL</li>
                <li>• Conception Bay South (CBS)</li>
                <li>• Paradise & Torbay</li>
                <li>• Portugal Cove-St. Philip's</li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Detials</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Phone: <span className="text-white">(709) 219-9934</span></li>
                <li>Email: <span className="text-white">theshinelabnl@gmail.com</span></li>
                <li>Hours: <span className="text-white">8:00 AM - 7:00 PM (Daily)</span></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Social Media</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} The Shine Lab NL. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#top" className="hover:text-slate-300">Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
