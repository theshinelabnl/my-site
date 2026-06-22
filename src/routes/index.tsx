import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title:
          'The Shine Lab | Mobile Car Detailing in St. John’s, Newfoundland',
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
    <main id="top" className="bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="The Shine Lab logo"
              className="h-10 w-10 rounded-lg border border-gray-200 bg-white object-cover object-top shadow-sm"
            />
            <span className="text-sm font-bold text-gray-900 sm:text-base">
              The Shine Lab
            </span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              { label: 'Why Us', href: '#why-choose' },
              { label: 'Services & Pricing', href: '#pricing' },
              { label: 'Booking', href: '#booking' },
              { label: 'Terms', href: '#terms' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-pop-button rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hover-pop-button hidden rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex"
          >
            Book Now
          </a>
        </div>

        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden sm:px-6">
          {[
            { label: 'Why Us', href: '#why-choose' },
            { label: 'Services & Pricing', href: '#pricing' },
            { label: 'Booking', href: '#booking' },
            { label: 'Terms', href: '#terms' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover-pop-button shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="relative isolate overflow-hidden">
        <img
          src={heroImageUrl}
          alt="The Shine Lab detailing background"
          className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative mx-auto flex min-h-[76vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <p className="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700">
              Mobile Car Detailing • St. John’s, NL
            </p>
            <h1 className="text-balance text-4xl tracking-tight text-gray-950 sm:text-5xl">
              the Formula To a Perfect Finish
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
              Premium interior and exterior car detailing brought directly to you in
              <br />
              St. John’s, Mt Pearl and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="hover-pop-button inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Book Now
              </a>
              <a
                href="#pricing"
                className="hover-pop-button inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:border-emerald-300 hover:bg-gray-50"
              >
                View Services & Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-choose"
        className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <h2 className="flex items-center gap-2 text-3xl tracking-tight text-gray-950">
            <span aria-hidden="true">🧪</span>
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600">
            We focus on premium-quality work, reliable service, and a
            stress-free mobile experience from start to finish.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Premium products and pro-grade equipment',
              description:
                'We use trusted detailing chemicals, safe wash methods, and professional tools to protect your vehicle while delivering a true showroom-level finish.',
            },
            {
              title: 'Fully mobile and convenient',
              description:
                'No waiting rooms and no wasted time. We come directly to your home or workplace across St. John’s and surrounding areas.',
            },
            {
              title: 'Detail-focused, consistent results',
              description:
                'Every job follows a consistent process with careful attention to trim, glass, surfaces, and hard-to-reach areas that are often missed.',
            },
            {
              title: 'Flexible scheduling and clear communication',
              description:
                'We keep booking simple, provide realistic time windows, and keep you updated so your detail fits smoothly into your day.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="hover-pop-card rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-xl">
            <h2 className="text-3xl tracking-tight text-gray-950">
              Services and Pricing
            </h2>
            <p className="mt-3 text-gray-600">
              Transparent packages with premium products and mobile convenience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="hover-pop-card relative rounded-2xl border-2 border-emerald-500 bg-white p-6 shadow-lg">
              <span className="absolute -top-3 left-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
              <h3 className="text-xl text-gray-900">Full Detail</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Starting at
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-700">
                ${fullPrices[fullSize]}
              </p>
              <p className="mt-4 text-xs font-semibold text-gray-500">
                Vehicle size:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFullSize(size)}
                    className={`hover-pop-button rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      fullSize === size
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Our most complete package for drivers who want a full reset
                inside and out with lasting protection.
              </p>
              <p className="mt-4 text-sm text-gray-900">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                <li>Full interior deep clean</li>
                <li>Exterior wash and protection</li>
                <li>Carpet and upholstery cleaning</li>
                <li>Interior surfaces cleaned and protected</li>
                <li>Windows cleaned</li>
              </ul>
              <a
                href="#booking"
                className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Book Now
              </a>
            </article>

            <article className="hover-pop-card rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl text-gray-900">Interior Detail</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Starting at
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-700">
                ${interiorPrices[interiorSize]}
              </p>
              <p className="mt-4 text-xs font-semibold text-gray-500">
                Vehicle size:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setInteriorSize(size)}
                    className={`hover-pop-button rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      interiorSize === size
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Perfect for reviving your cabin with a deeper clean that restores
                comfort, freshness, and a polished interior feel.
              </p>
              <p className="mt-4 text-sm text-gray-900">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                <li>Full vacuum</li>
                <li>Carpet and seat cleaning</li>
                <li>Surface cleaning (dash, panels, console)</li>
                <li>Detail brushes and compressed air</li>
                <li>Interior protectant applied</li>
              </ul>
              <a
                href="#booking"
                className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Book Now
              </a>
            </article>

            <article className="hover-pop-card rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl text-gray-900">Exterior Detail</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Starting at
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-700">
                ${exteriorPrices[exteriorSize]}
              </p>
              <p className="mt-4 text-xs font-semibold text-gray-500">
                Vehicle size:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setExteriorSize(size)}
                    className={`hover-pop-button rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      exteriorSize === size
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Built to safely clean and protect your paint, wheels, and trim
                while bringing back a bright, glossy finish.
              </p>
              <p className="mt-4 text-sm text-gray-900">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                <li>Pre-wash and foam wash</li>
                <li>Hand wash using premium products</li>
                <li>Wheels and tires cleaned</li>
                <li>Tire shine</li>
                <li>Sealant protection</li>
              </ul>
              <a
                href="#booking"
                className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Book Now
              </a>
            </article>

            <article className="hover-pop-card rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl text-gray-900">Maintenance Detail</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Starting at
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-700">
                ${maintenancePrices[maintenanceSize]}
              </p>
              <p className="mt-4 text-xs font-semibold text-gray-500">
                Vehicle size:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setMaintenanceSize(size)}
                    className={`hover-pop-button rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      maintenanceSize === size
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Designed for regularly maintained vehicles. A full light interior
                and exterior refresh to keep your vehicle looking its best.
              </p>
              <p className="mt-4 text-sm text-gray-900">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                <li>Light interior vacuum and wipe-down</li>
                <li>Quick dash, console, and panel refresh</li>
                <li>Exterior foam wash and hand dry</li>
                <li>Wheels cleaned and tire shine applied</li>
              </ul>
              <a
                href="#booking"
                className="hover-pop-button mt-6 inline-flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Book Now
              </a>
            </article>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Prices listed are starting rates. Final pricing may vary depending on
            vehicle size, condition, and service requirements.
          </p>
        </div>
      </section>

      <section
        id="booking"
        className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl tracking-tight text-gray-950">
              Book your detail today.
            </h2>
            <p className="mt-3 text-gray-600">
              Fill out the quick form and we’ll confirm your service time.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xojbnnra"
            method="POST"
            onSubmit={handleBookingSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <label className="text-sm font-medium text-gray-700">
                Name
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-gray-900 outline-none ring-emerald-500 focus:ring"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Phone number
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-gray-900 outline-none ring-emerald-500 focus:ring"
                  placeholder="(709) 555-1234"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Vehicle type
                <input
                  type="text"
                  name="vehicle"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-gray-900 outline-none ring-emerald-500 focus:ring"
                  placeholder="Sedan, SUV, Truck..."
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Service requested
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none ring-emerald-500 focus:ring"
                >
                  <option>Full Detail</option>
                  <option>Interior Detail</option>
                  <option>Exterior Detail</option>
                  <option>Maintenance Detail</option>
                </select>
              </label>
              <label className="text-sm font-medium text-gray-700">
                Preferred date
                <input
                  type="date"
                  name="date"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-gray-900 outline-none ring-emerald-500 focus:ring"
                />
              </label>
              <button
                type="submit"
                className="hover-pop-button mt-2 inline-flex justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Book Now
              </button>
              {bookingSent ? (
                <p className="text-sm font-medium text-emerald-700">
                  Booking request sent
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>

      <section
        id="terms"
        className="scroll-mt-28 mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg text-gray-900">Terms & Conditions</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>Weather delays may require rescheduling.</li>
            <li>
              Additional charges may apply for excessive dirt, pet hair, or
              heavy soiling.
            </li>
            <li>Biohazard situations may be declined.</li>
            <li>
              Customers must remove personal valuables; not responsible for lost
              items.
            </li>
            <li>Service times are estimates and may vary.</li>
            <li>Some stains and odors may not be fully removable.</li>
            <li>Prices listed are starting rates. Final prices may vary.</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-gray-800">
            By booking, you agree to these terms.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <img
              src={logoUrl}
              alt="The Shine Lab logo"
              className="h-16 w-16 rounded-xl border border-gray-200 bg-white object-cover object-top shadow-sm"
            />
            <h3 className="mt-3 text-base text-gray-900">The Shine Lab</h3>
            <p className="mt-2 text-sm text-gray-600">
              Premium mobile car detailing with dependable, professional results.
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-900">Service Area</h4>
            <p className="mt-2 text-sm text-gray-600">
              St. John’s, Mt Pearl, Newfoundland and surrounding areas.
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-900">Contact</h4>
            <p className="mt-2 text-sm text-gray-600">(709) 219-9934</p>
            <p className="text-sm text-gray-600">theshinelabnl@gmail.com</p>
          </div>
          <div>
            <h4 className="text-sm text-gray-900">Social</h4>
            <p className="mt-2 text-sm text-gray-600">Instagram • Facebook</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
