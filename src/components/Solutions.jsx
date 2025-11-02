import React from 'react';
import { MessageSquare, Cog, Link as LinkIcon, Headphones, ShieldCheck, CheckCircle, Database } from 'lucide-react';

function Card({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2AB7CA]/10 text-[#0B1D39]">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">What We Do</h2>
          <p className="mt-3 text-slate-600">
            NovaEdge Automations helps UK SMEs streamline operations with AI chatbots, website automations, and bespoke integrations designed for real business outcomes.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card icon={MessageSquare} title="AI Chatbots">
            Custom GPT-powered assistants trained for UK industries. From finance to retail, give customers instant, accurate answers 24/7.
          </Card>
          <Card icon={Cog} title="Custom Automations">
            Eliminate manual processes with workflows that move data, trigger actions, and keep teams in sync—without the busywork.
          </Card>
          <Card icon={LinkIcon} title="Website Integrations">
            Connect your website to your CRM, email platform, and analytics to capture leads and follow up automatically.
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card icon={MessageSquare} title="AI Chatbots for UK Sectors">
            GPT-4 class chat systems tailored for finance, healthcare, property, and retail. Safely trained on your knowledge base.
          </Card>
          <Card icon={Database} title="CRM Integrations">
            Seamlessly connect with HubSpot, Zoho, and Salesforce so your leads, deals, and support tickets flow without friction.
          </Card>
          <Card icon={LinkIcon} title="Website Automations">
            From lead capture to automated email sequences, we turn your website into a high-converting, self-running engine.
          </Card>
          <Card icon={Headphones} title="Voice AI Support">
            Add voice assistance to customer service teams to speed up response times and improve first-call resolution.
          </Card>
        </div>

        <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/80">
          <h3 className="text-xl font-semibold text-slate-900">Why Choose Us</h3>
          <ul className="mt-4 grid list-inside list-none grid-cols-1 gap-2 text-slate-700 md:grid-cols-2">
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-[#2AB7CA]" /> UK-based support</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-[#2AB7CA]" /> GDPR-compliant systems</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-[#2AB7CA]" /> Transparent pricing</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-[#2AB7CA]" /> No technical setup needed</li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-full bg-[#0B1D39] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">Speak to a Specialist</a>
            <span className="inline-flex items-center gap-2 text-sm text-slate-600"><ShieldCheck className="h-4 w-4 text-[#2AB7CA]" /> Fully UK-compliant deployments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
