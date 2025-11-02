import React from 'react';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import SocialProof from './components/SocialProof';
import InsightsAndContact from './components/InsightsAndContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#0B1D39]" />
            <div className="text-sm">
              <div className="font-semibold leading-tight">NovaEdge Automations Ltd</div>
              <div className="text-xs text-slate-500">Manchester, United Kingdom</div>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#case-studies" className="hover:text-slate-900">Case Studies</a>
            <a href="#insights" className="hover:text-slate-900">Insights</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-[#2AB7CA] px-4 py-2 text-sm font-semibold text-[#0B1D39] shadow-sm transition hover:brightness-110 md:inline-block">Book a Free Demo</a>
        </div>
      </header>

      <main>
        <Hero />

        {/* About Us */}
        <section id="about" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">About Us</h2>
                <p className="mt-3 text-slate-700">
                  Founded in 2023, NovaEdge Automations Ltd is dedicated to bringing enterprise‑level automation to small and mid‑sized UK businesses. We combine AI, sensible design, and robust integrations to remove repetitive work and unlock growth.
                </p>
                <div className="mt-4 rounded-xl bg-slate-50 p-5">
                  <div className="text-lg font-semibold text-slate-900">Our Mission</div>
                  <p className="mt-1 text-slate-700">Empowering every UK business to work smarter, not harder.</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Meet the Team</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-[#0B1D39]" />
                    <div className="mt-3 font-semibold">Eleanor Hughes</div>
                    <div className="text-sm text-slate-600">Managing Director</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-[#0B1D39]" />
                    <div className="mt-3 font-semibold">Thomas Reed</div>
                    <div className="text-sm text-slate-600">Head of AI Solutions</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-[#0B1D39]" />
                    <div className="mt-3 font-semibold">Priya Shah</div>
                    <div className="text-sm text-slate-600">Client Success Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Solutions />
        <SocialProof />
        <InsightsAndContact />
      </main>
    </div>
  );
}
