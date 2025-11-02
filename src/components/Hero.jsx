import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B1D39] text-white">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20 backdrop-blur">
            Manchester, UK • Trusted Automation Partner
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Smarter Workflows. Effortless Growth.
          </h1>
          <p className="mt-5 max-w-xl text-white/80 md:text-lg">
            AI-powered automation solutions for UK businesses that want to save time, cut costs, and scale faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-full bg-[#2AB7CA] px-6 py-3 text-sm font-semibold text-[#0B1D39] shadow-lg shadow-teal-500/20 transition hover:brightness-110">
              Book a Free Demo
            </a>
            <a href="#services" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1D39] via-[#0B1D39]/30 to-transparent" />
    </section>
  );
}
