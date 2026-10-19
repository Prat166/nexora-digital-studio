import { Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { PRICING } from '../config/site';

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <SectionHeading eyebrow="Pricing" title="Simple starting prices" description="These are starting points. Request a quotation and we will give you an exact price for your project." />
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <TiltCard className="h-full rounded-3xl" maxTilt={5}>
              <article className={`relative flex h-full flex-col rounded-3xl p-8 ${p.featured ? 'border border-violet-400/50 bg-gradient-to-b from-violet-500/15 to-white/[0.03] shadow-[0_0_60px_-15px_rgba(139,92,246,0.6)]' : 'glass'}`}>
                {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">Most popular</span>}
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.blurb}</p>
                <p className="mt-6 font-display text-3xl font-bold text-white">{p.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300"><Check size={16} className="mt-0.5 shrink-0 text-cyan-300" aria-hidden="true" />{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`${p.featured ? 'btn-primary' : 'btn-ghost'} mt-8 w-full`} aria-label={`Request a quotation for the ${p.name}`}>Request a Quotation</a>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
        The final price depends on the number of pages, features, content and integrations your project needs. Prices shown are placeholders you can change in <code className="text-slate-400">src/config/site.ts</code>.
      </p>
    </section>
  );
}
