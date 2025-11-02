import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amelia Wright',
    role: 'Operations Manager, Northern Retail Co.',
    quote:
      'NovaEdge helped us automate customer queries with an AI assistant. We now resolve common questions instantly and our team focuses on higher‑value tasks.',
  },
  {
    name: 'James Patel',
    role: 'Director, Manchester Property Group',
    quote:
      'Their chatbot cut our email back‑and‑forth dramatically. Viewings get booked automatically and our response time is night and day.',
  },
  {
    name: 'Sophie Evans',
    role: 'Founder, Lakeside Wellness Clinics',
    quote:
      'Seamless integrations and a friendly team. Bookings sync with the CRM and reminders go out automatically—patients love it.',
  },
];

export default function SocialProof() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section id="proof" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Results that speak for themselves</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              UK businesses across property, healthcare, retail, and professional services use NovaEdge to reduce manual work and deliver better customer experiences.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[#2AB7CA]">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mt-4 text-lg text-slate-900">“{t.quote}”</p>
              <div className="mt-3 text-sm text-slate-600">— {t.name}, {t.role}</div>
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-6 rounded-full transition ${i === index ? 'bg-[#2AB7CA]' : 'bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div id="case-studies" className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Case Studies</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-semibold text-[#0B1D39]">Property Agency</div>
                <p className="mt-2 text-slate-700">A Manchester property agency saved 18 hours a week using our AI chatbot to qualify leads and book viewings.</p>
                <div className="mt-3 text-xs text-slate-500">+38% faster response • 24/7 lead capture</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-semibold text-[#0B1D39]">Healthcare Clinics</div>
                <p className="mt-2 text-slate-700">Automated triage and appointment reminders reduced no‑shows by 22% and freed up reception time.</p>
                <div className="mt-3 text-xs text-slate-500">−22% no‑shows • +15% patient satisfaction</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 md:col-span-2">
                <div className="text-sm font-semibold text-[#0B1D39]">E‑commerce</div>
                <p className="mt-2 text-slate-700">Order status chatbots and automated returns processing cut support tickets by 30% within the first month.</p>
                <div className="mt-3 text-xs text-slate-500">−30% tickets • +12% repeat purchases</div>
              </div>
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2AB7CA] px-5 py-3 text-sm font-semibold text-[#0B1D39] shadow-sm transition hover:brightness-110">
              See More Results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
