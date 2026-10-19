import { Gauge, Search, Smartphone, Sparkles, Wallet, PhoneCall } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';

interface Reason {
  icon: LucideIcon;
  title: string;
  text: string;
  span: string;
}

const REASONS: Reason[] = [
  { icon: Smartphone, title: 'Mobile-first responsive design', text: 'Most customers will find you on a phone, so every page is designed for small screens first and scales up beautifully.', span: 'md:col-span-2' },
  { icon: Sparkles, title: 'Modern and premium visual experiences', text: 'Smooth animation, depth and 3D touches that make your business look established.', span: '' },
  { icon: Gauge, title: 'Fast loading and performance', text: 'Lean code and optimised assets so your site opens quickly.', span: '' },
  { icon: PhoneCall, title: 'Clear contact and enquiry options', text: 'Call, WhatsApp and form buttons placed exactly where visitors are ready to act.', span: '' },
  { icon: Search, title: 'SEO-friendly structure', text: 'Clean headings, titles and descriptions that help search engines understand your business.', span: '' },
  { icon: Wallet, title: 'Affordable solutions for small businesses', text: 'Clear starting prices and flexible packages, so you only pay for what you need.', span: 'md:col-span-2' },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="why" className="section-pad">
      <SectionHeading eyebrow="Why choose us" title="Built to look great and work hard" description="A website should do more than look good. It should earn trust and bring you enquiries." />
      <div className="grid gap-5 md:grid-cols-3">
        {REASONS.map((r, i) => (
          <motion.article
            key={r.title}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className={`glass group relative overflow-hidden rounded-3xl p-7 ${r.span}`}
          >
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/25 via-violet-500/20 to-cyan-400/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:border-cyan-300/40 group-hover:text-white">
                <r.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">{r.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
