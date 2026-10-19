import type { ReactNode } from 'react';
import { Check, Home, Search, Shield } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

/* ---------- Mini website mockups, drawn with plain divs ---------- */

function CoachingMock() {
  return (
    <div className="h-full bg-gradient-to-br from-blue-950 to-ink-800 p-3">
      <div className="h-2 w-2/3 rounded bg-white/80" />
      <div className="mt-1.5 h-2 w-1/2 rounded bg-cyan-300/70" />
      <div className="mt-3 inline-block rounded-full bg-blue-500 px-3 py-1 text-[8px] font-semibold text-white">Join a batch</div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[70, 45, 85].map((w) => (
          <div key={w} className="rounded-lg bg-white/10 p-2">
            <div className="h-4 w-4 rounded bg-cyan-400/80" />
            <div className="mt-2 h-1 w-full rounded bg-white/20"><div className="h-1 rounded bg-cyan-300" style={{ width: `${w}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RestaurantMock() {
  return (
    <div className="flex h-full items-center gap-3 bg-gradient-to-br from-stone-900 to-amber-950 p-3">
      <div className="flex-1">
        <div className="h-2 w-3/4 rounded bg-amber-200/90" />
        <div className="mt-1.5 h-2 w-1/2 rounded bg-amber-200/60" />
        <div className="mt-3 inline-block rounded-full border border-amber-300/60 px-3 py-1 text-[8px] text-amber-200">Reserve a table</div>
        <div className="mt-3 space-y-1.5">
          {[80, 65, 72].map((w) => (
            <div key={w} className="flex items-center gap-2"><div className="h-1 rounded bg-amber-100/40" style={{ width: `${w}%` }} /><div className="h-1 w-3 rounded bg-amber-400" /></div>
          ))}
        </div>
      </div>
      <div className="h-24 w-24 shrink-0 rounded-full bg-gradient-to-br from-amber-300 to-orange-700 shadow-[0_0_40px_rgba(251,146,60,0.45)]">
        <div className="m-3 rounded-full border-2 border-amber-100/40" style={{ height: "4.5rem" }} />
      </div>
    </div>
  );
}

function RealEstateMock() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-emerald-950 p-3">
      <div className="flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5"><Search size={10} className="text-emerald-300" aria-hidden="true" /><div className="h-1.5 w-1/2 rounded bg-white/30" /></div>
      <div className="mt-3 flex h-20 items-end gap-1.5">
        {[40, 70, 55, 90, 62, 78].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/70 to-teal-200/80" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        {['2 BHK', '3 BHK', 'Villa'].map((t) => (<span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[8px] text-emerald-200">{t}</span>))}
        <Home size={12} className="ml-auto text-emerald-300" aria-hidden="true" />
      </div>
    </div>
  );
}

function InsuranceMock() {
  return (
    <div className="flex h-full items-center gap-3 bg-gradient-to-br from-indigo-950 to-ink-800 p-3">
      <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-b-[2rem] rounded-t-xl bg-gradient-to-b from-indigo-400 to-violet-600 shadow-[0_0_30px_rgba(129,140,248,0.5)]">
        <Shield size={26} className="text-white" aria-hidden="true" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-2 w-3/4 rounded bg-white/80" />
        {['Life cover', 'Health cover', 'Tax planning'].map((t) => (
          <div key={t} className="flex items-center gap-1.5 text-[8px] text-indigo-200"><Check size={9} className="text-cyan-300" aria-hidden="true" />{t}</div>
        ))}
        <div className="inline-block rounded-full bg-violet-500 px-3 py-1 text-[8px] font-semibold text-white">Book a call</div>
      </div>
    </div>
  );
}

interface Project {
  title: string;
  text: string;
  tags: string[];
  mock: ReactNode;
}

const PROJECTS: Project[] = [
  { title: 'Modern Coaching Institute Website', text: 'Course listings, batch enquiry and a clear learning-journey layout for students and parents.', tags: ['Courses', 'Enquiry form', 'Mobile-first'], mock: <CoachingMock /> },
  { title: 'Premium Restaurant Website', text: 'A warm, appetising design with a menu showcase and easy table reservation through WhatsApp.', tags: ['Menu', 'Reservations', 'Gallery'], mock: <RestaurantMock /> },
  { title: 'Real Estate Property Website', text: 'Property listing layout with search, filters and direct enquiry buttons on every listing.', tags: ['Listings', 'Search', 'Lead capture'], mock: <RealEstateMock /> },
  { title: 'Insurance and Financial Consultant Website', text: 'A trust-building profile site with services, plain-language guidance and quick call booking.', tags: ['Services', 'Trust-focused', 'Call booking'], mock: <InsuranceMock /> },
];

export default function Portfolio() {
  return (
    <section id="work" className="section-pad">
      <SectionHeading eyebrow="Our work" title="Concept designs for local businesses" description="These are concept demonstrations that show the style and structure we can build for your industry. They are not completed client projects." />
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <TiltCard className="h-full rounded-3xl" maxTilt={5}>
              <article className="glass h-full overflow-hidden rounded-3xl">
                <div className="p-4 pb-0">
                  <div className="overflow-hidden rounded-t-xl border border-white/10 bg-ink-950">
                    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-red-400/80" /><span className="h-2 w-2 rounded-full bg-yellow-400/80" /><span className="h-2 w-2 rounded-full bg-green-400/80" />
                      <span className="ml-3 h-3 flex-1 rounded bg-white/5" />
                    </div>
                    <div className="h-44 transition-transform duration-500 group-hover:scale-[1.03]" role="img" aria-label={`${p.title} concept preview`}>{p.mock}</div>
                  </div>
                </div>
                <div className="p-7">
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">Concept Demo</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (<li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</li>))}
                  </ul>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
