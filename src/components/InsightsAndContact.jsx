import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function InsightsAndContact() {
  return (
    <section id="insights" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Insights</h2>
            <p className="mt-3 text-slate-600">Perspectives and practical guides for SMEs exploring automation.</p>
            <div className="mt-6 space-y-4">
              <a href="#" className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm">
                <div className="text-sm font-semibold text-[#0B1D39]">Strategy</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">How UK SMEs Can Save 20 Hours Weekly With AI</h3>
                <p className="mt-1 text-sm text-slate-600">Practical automation wins teams can implement this quarter.</p>
              </a>
              <a href="#" className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm">
                <div className="text-sm font-semibold text-[#0B1D39]">Trends</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">Automation Trends 2025: What Every Business Should Know</h3>
                <p className="mt-1 text-sm text-slate-600">The tools, risks, and opportunities shaping the next 12 months.</p>
              </a>
              <a href="#" className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm">
                <div className="text-sm font-semibold text-[#0B1D39]">Operations</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">The Hidden Costs of Manual Workflows</h3>
                <p className="mt-1 text-sm text-slate-600">Why repetitive tasks erode margins—and how to stop the leak.</p>
              </a>
            </div>
          </div>

          <div id="contact">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Contact</h2>
            <p className="mt-3 text-slate-600">Mon–Fri, 9 AM–6 PM • Manchester, England</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-[#2AB7CA] focus:ring" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Company</label>
                  <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-[#2AB7CA] focus:ring" placeholder="Acme Ltd" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-[#2AB7CA] focus:ring" placeholder="you@company.co.uk" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-[#2AB7CA] focus:ring" placeholder="+44 161 555 0198" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-[#2AB7CA] focus:ring" placeholder="Tell us about your goals…" />
              </div>
              <button type="submit" className="w-full rounded-full bg-[#2AB7CA] px-6 py-3 font-semibold text-[#0B1D39] transition hover:brightness-110">Send Enquiry</button>

              <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#2AB7CA]" /> info@novaedge.co.uk</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#2AB7CA]" /> +44 161 555 0198</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#2AB7CA]" /> Manchester, M1, United Kingdom</div>
              </div>
            </form>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <iframe
                title="NovaEdge Office Location"
                src="https://www.google.com/maps?q=Manchester%2C+UK&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <footer className="mt-8 rounded-2xl bg-[#0B1D39] p-6 text-white">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="text-lg font-semibold">NovaEdge Automations Ltd</div>
                  <div className="text-sm text-white/80">Registered in England • Manchester, M1 • Mon–Fri 9 AM–6 PM</div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <a href="#home" className="hover:text-white">Home</a>
                  <a href="#services" className="hover:text-white">Services</a>
                  <a href="#case-studies" className="hover:text-white">Case Studies</a>
                  <a href="#insights" className="hover:text-white">Blog</a>
                  <a href="#contact" className="hover:text-white">Contact</a>
                </div>
              </div>
              <div className="mt-4 text-xs text-white/70">© {new Date().getFullYear()} NovaEdge Automations Ltd. All rights reserved.</div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
