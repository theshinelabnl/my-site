import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'The Shine Lab NL | Premium Mobile Car Detail Newfoundland',
      },
      {
        name: 'description',
        content: "Convenient, professional-grade mobile auto detail brought directly to your driveway across St. John's, Mount Pearl, CBS, and Paradise.",
      },
    ],
  }),
  component: Home,
})

type VehicleSize = 'Small' | 'Medium' | 'Large'

function Home() {
  const logoUrl =
    'https://drive.google.com/thumbnail?id=1YcM_mCCFSucl9eD1xmcCVFzGX0boOvLt&sz=w1000'

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
          src="https://drive.google.com/thumbnail?id=1nZh49E_-k_LiScjpkgp7EWuRW1ypkTea&sz=w2200"
          alt="The Shine Lab detailing background"
          className="absolute inset-0 h-full w-full object-cover object-[center_70%] brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:bg-gradient-to-r" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl rounded-3xl border border-white/60 bg-white/90 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-10 border-solid">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-emerald-700">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PREMIUM MOBILE DETAIL • NEWFOUNDLAND
            </div>
            
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl uppercase">
              the formula for a <span className="text-emerald-600 relative inline-block">premium detail</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              High-end tools. Quality chemicals. Proven techniques. We deliver top-tier detailing to driveways across Newfoundland.
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

      {/* Why Choose Us Section */}
      <section id="about" className="scroll-mt-20 py-24 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl uppercase">
              Why Choose Us
            </h2>
            <div className="h-1.5 w-20 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-950">High Quality Chemicals & Equipment</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  We use only professional-grade and vehicle-safe formulas to clean, shine, and protect your vehicle's delicate surfaces.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-950">Mobile Convenience</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  No drop-offs, shuttles, or wasted days. Our self-contained mobile setup brings premium results straight to your driveway.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-950">Supporting Local Business</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  We are proudly Newfoundland owned and operated. We take extreme pride in keeping Avalon Peninsula vehicles looking their absolute best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

{/* Services Section */}
      <section id="services" className="scroll-mt-20 py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl uppercase">
              Our Detail Formulas
            </h2>
            <div className="h-1.5 w-20 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600">
              Select a package to see starting prices adjusted by vehicle size. Transparent pricing, no hidden fees, and premium results every time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Full Detail Package */}
            <article className="hover-pop-card relative flex flex-col justify-between rounded-2xl border-2 border-emerald-500 bg-white p-6 shadow-xl shadow-emerald-500/5">
              <span className="absolute -top-3.5 right-4 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-md">
                Best Value
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">Full Detail Package</h3>
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
              </div>

              <div className="mt-6">
                <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Full interior vacuum & shampoo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Leather cleaning & conditioning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Exterior foam bath & safe hand wash
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Deep wheel & arch cleaning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 3-6 month paint sealant
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

            {/* Interior Detailing */}
            <article className="hover-pop-card flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">Interior Detailing</h3>
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
              </div>

              <div className="mt-6">
                <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Heavy floor-to-ceiling vacuuming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Carpet & fabric shampooing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Dash, center console & panels cleaned
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Interior dressing applied to plastic & vinyl
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

            {/* Exterior Detailing */}
            <article className="hover-pop-card flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">Exterior Detailing</h3>
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
                    <span className="text-emerald-500 font-bold">✓</span> Wheel barrels, arches & tires cleaned
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Glass cleaned inside and out
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 3-6 month paint sealant
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

            {/* Maintenance Package */}
            <article className="hover-pop-card flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">Maintenance Package</h3>
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
                    <span className="text-emerald-500 font-bold">✓</span> Wheel and rim wipe down
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Light clean & protectant application
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
            * prices listed are starting rates, prices are subject to change.
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
                Book Your Detail Today
              </h2>
              <div className="h-1.5 w-16 bg-emerald-500 mt-4 mb-6 rounded-full"></div>
              
              <p className="text-slate-600 leading-relaxed">
                Fill out our booking form to request a detail quote. Provide your details and vehicle type, select your requested package, and our team will get in touch to confirm your quote and schedule your detail.
              </p>
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
                        placeholder="(709) 330-0021"
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
                        <option value="Full Detail">Full Detail Package</option>
                        <option value="Interior Detail">Interior Detailing</option>
                        <option value="Exterior Detail">Exterior Detailing</option>
                        <option value="Maintenance Detail">Maintenance Package</option>
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
                        placeholder="Please note heavy pet hair, sand, excessive stains, etc."
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

      {/* Footer Section - Doubling as beautiful Contact Section anchor */}
      <footer id="contact" className="border-t border-slate-100 bg-slate-950 text-slate-400">
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
                Premium mobile car detail with professional safe washing, deep upholstery cleaning, and long-lasting shine and protection brought to your door.
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
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Details</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Phone: <span className="text-white">(709) 330-0021</span></li>
                <li>Email: <span className="text-white">theshinelabnl@gmail.com</span></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Social Media</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://www.instagram.com/theshinelabnl" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61591526211593" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </main>
  )
}
