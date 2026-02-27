'use client';

import { useState } from 'react';

export default function SeniorsHousingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-[#002B5C] border-b border-[#003570]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white">
              <div className="text-xl font-bold tracking-tight">COLLIERS</div>
              <div className="text-[10px] tracking-[0.3em] text-blue-200 uppercase">Ontario Multifamily</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="https://onmultifamily.com" className="text-blue-200 hover:text-white transition-colors">Multifamily</a>
            <span className="text-white font-medium border-b-2 border-blue-300 pb-0.5">Seniors Housing</span>
            <a href="mailto:dayma.itamunoala@colliers.com" className="text-blue-200 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#002B5C] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001A3A] via-[#002B5C] to-[#003D7A]" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-blue-200 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              New Vertical Launch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Seniors Housing<br />
              <span className="text-blue-300">Capital Markets</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Dedicated advisory for owners and investors in seniors housing and retirement living across Ontario. Market intelligence, capital markets insight, and strategic guidance — whether you&apos;re evaluating options, planning a disposition, or underwriting an acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#subscribe" className="inline-flex items-center justify-center gap-2 bg-white text-[#002B5C] font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                Join the Distribution List
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="mailto:aman.rana@colliers.com" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-sm">
                Speak With Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#001A3A] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$1.1B+', label: 'Multifamily, Seniors & Student Housing Sales' },
              { value: '81%', label: 'Closing Rate on Listings Undertaken' },
              { value: '3,000+', label: 'Units Sold Since 2018' },
              { value: '40%', label: 'Projected 75+ Population Growth (10yr)' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-blue-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Seniors Housing Cycle is Turning</h2>
            <p className="text-lg text-gray-500">For the first time since pre-COVID, fundamentals are all moving in the right direction at the same time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#002B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                ),
                title: 'Demographics Accelerating',
                body: 'The 75+ cohort is expected to grow more than 40% over the next decade. In Ontario alone, 3 million residents are over 65 — the core demand base for retirement living. This is non-discretionary demand.',
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#002B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                ),
                title: 'Supply Constrained',
                body: 'Development starts declined sharply through 2023–24. Older homes are closing. In many Ontario markets, replacement cost remains well above where existing assets are trading. New supply is not coming fast enough.',
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#002B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Capital Re-Engaging',
                body: 'Occupancy across stabilized retirement product has improved. Operators are rebuilding margins. Lenders are engaging again, selectively. Strong operators with stabilized assets are regaining pricing power.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market implications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Implications</h2>
              <div className="space-y-6">
                {[
                  { title: 'Pricing Power Returning', desc: 'Strong operators with stabilized assets are regaining pricing power, particularly in supply-constrained submarkets.' },
                  { title: 'Recapitalization Candidates', desc: 'Heavily levered or underperforming properties are becoming recapitalization candidates as capital returns to the market.' },
                  { title: 'Operations First, Real Estate Second', desc: 'Buyers are underwriting operations first. Expenses are being monitored and controlled. Post-COVID labour shortages are being alleviated.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#002B5C] text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">This Is Not Conventional Multifamily</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Seniors housing requires a fundamentally different approach. Revenues and expenses are driven by care levels, staffing models, and service mixes. Expense control determines value. Financing structure can make or break a transaction.
              </p>
              <div className="space-y-3">
                {['Care level revenue modelling', 'Staffing & labour cost analysis', 'Service mix optimization', 'CMHC & conventional financing structures', 'Operator assessment & transition planning'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Deep capital markets expertise with a specialized focus on seniors housing and retirement living across Ontario.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Dayma */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-24 h-24 bg-[#002B5C] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">DI</div>
              <h3 className="text-lg font-bold text-gray-900">Dayma Itamunoala</h3>
              <p className="text-sm text-[#002B5C] font-medium mb-1">Senior Vice President, Sales Representative</p>
              <p className="text-xs text-gray-400 mb-4">Ontario Multifamily & Seniors Housing</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Over $1.1B in career transaction volume across multifamily, seniors housing, and student housing. Advising institutional and private capital on acquisition, disposition, and recapitalization strategies across Ontario.
              </p>
              <div className="flex flex-col gap-1 text-sm text-gray-500">
                <a href="mailto:dayma.itamunoala@colliers.com" className="hover:text-[#002B5C] transition-colors">dayma.itamunoala@colliers.com</a>
                <a href="https://onmultifamily.com" className="hover:text-[#002B5C] transition-colors">onmultifamily.com</a>
              </div>
            </div>

            {/* Aman */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-24 h-24 bg-[#002B5C] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">AR</div>
              <h3 className="text-lg font-bold text-gray-900">Aman Rana</h3>
              <p className="text-sm text-[#002B5C] font-medium mb-1">Associate, Seniors Housing</p>
              <p className="text-xs text-gray-400 mb-4">Capital Markets & Credit</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                A decade in real estate credit, most recently as Associate Director of Credit at Timbercreek. Experience underwriting complex transactions across Canada and the U.S. brings a capital markets lens to an asset class where structure matters as much as pricing.
              </p>
              <div className="flex flex-col gap-1 text-sm text-gray-500">
                <a href="mailto:aman.rana@colliers.com" className="hover:text-[#002B5C] transition-colors">aman.rana@colliers.com</a>
                <span>647-971-8384</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section id="subscribe" className="py-16 md:py-24 bg-[#002B5C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seniors Housing Intelligence</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Join our distribution list for dedicated seniors housing and retirement living updates — market data, pricing trends, new listings, off-market opportunities, and lender activity.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list</h3>
              <p className="text-blue-200">You&apos;ll receive our seniors housing updates as they&apos;re published.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 outline-none focus:ring-2 focus:ring-blue-300/50 focus:border-blue-300 text-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-4 bg-white text-[#002B5C] font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm disabled:opacity-70"
                >
                  {submitting ? 'Joining...' : 'Subscribe'}
                </button>
              </div>
              <p className="text-xs text-blue-300/60 mt-3">Market data, new listings, and off-market intelligence. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm mb-2">Prefer a direct conversation?</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <a href="mailto:aman.rana@colliers.com" className="flex items-center gap-2 text-[#002B5C] font-medium hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              aman.rana@colliers.com
            </a>
            <a href="tel:6479718384" className="flex items-center gap-2 text-[#002B5C] font-medium hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              647-971-8384
            </a>
            <a href="mailto:dayma.itamunoala@colliers.com" className="flex items-center gap-2 text-[#002B5C] font-medium hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              dayma.itamunoala@colliers.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001A3A] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-white font-bold text-lg">COLLIERS</div>
              <div className="text-blue-300 text-xs">Ontario Multifamily & Seniors Housing Capital Markets</div>
            </div>
            <div className="text-blue-400 text-xs text-center md:text-right">
              <p>181 Bay Street, Suite 1400, Toronto ON M5J 2T3</p>
              <p className="mt-1">© {new Date().getFullYear()} Colliers International. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
