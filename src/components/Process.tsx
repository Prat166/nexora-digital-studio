import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STEPS = [
  { title: 'Understand Your Business', text: 'We learn about your services, customers and goals, so the website speaks to the right people.' },
  { title: 'Plan the Website', text: 'We map the pages, sections and enquiry paths, and agree on content and features before design starts.' },
  { title: 'Design and Develop', text: 'We craft the visual design and build a fast, responsive site, with 3D touches where they help.' },
  { title: 'Review and Refine', text: 'You review the site on phone and desktop, and we refine details until you are happy.' },
  { title: 'Launch Your Website', text: 'We connect your domain, publish the site and make sure everything works.' },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="process" className="section-pad">
      <SectionHeading eyebrow="Our process" title="From first chat to launch day" description="A simple five-step process, so you always know what happens next." />
      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div aria-hidden="true" className="absolute bottom-2 left-5 top-2 w-px bg-white/10" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduceMotion ? 1 : scaleY, transformOrigin: 'top' }}
          className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400"
        />
        <ol className="space-y-10">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative pl-16">
              <Reveal>
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/50 bg-ink-900 font-display text-sm font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.45)]" aria-hidden="true">{i + 1}</span>
                <div className="glass rounded-2xl p-6 transition-colors hover:border-white/25">
                  <h3 className="font-display text-xl font-semibold text-white"><span className="sr-only">Step {i + 1}: </span>{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
