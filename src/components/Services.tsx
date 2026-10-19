import { Box, Briefcase, Monitor, RefreshCw, Rocket, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
}

const SERVICES: Service[] = [
  { icon: Monitor, title: 'Business Website Design', text: 'Professional multi-page websites that explain what you do and make it easy for customers to contact you.', accent: 'from-blue-500 to-cyan-400' },
  { icon: Box, title: '3D Website Experiences', text: 'Interactive 3D visuals and smooth animation that make your brand memorable from the first scroll.', accent: 'from-violet-500 to-fuchsia-400' },
  { icon: Rocket, title: 'Landing Page Design', text: 'Focused single pages built to turn visitors from ads and social media into enquiries.', accent: 'from-cyan-400 to-blue-500' },
  { icon: Briefcase, title: 'Portfolio Websites', text: 'Elegant showcases for consultants, creatives and freelancers who want their work to speak first.', accent: 'from-indigo-500 to-violet-400' },
  { icon: RefreshCw, title: 'Website Redesign', text: 'Give an outdated site a modern look, faster loading and a layout that works on every phone.', accent: 'from-blue-400 to-indigo-500' },
  { icon: Wrench, title: 'Website Maintenance', text: 'Updates, fixes and small changes handled for you, so your site stays current and secure.', accent: 'from-teal-400 to-cyan-400' },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <SectionHeading eyebrow="Services" title="Everything your business needs online" description="From a simple business site to a full 3D experience, each project is designed around your customers." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <TiltCard className="h-full rounded-3xl">
              <article className="glass h-full rounded-3xl p-7 transition-colors duration-300 hover:border-white/25">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-ink-900 shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                  <s.icon size={26} aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
