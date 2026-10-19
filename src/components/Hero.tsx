import { Suspense, lazy, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import HeroFallback from './HeroFallback';
import { SITE } from '../config/site';

// The heavy 3D code only downloads when it is needed.
const HeroScene = lazy(() => import('./HeroScene'));

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    setUse3D(!reduceMotion && hasWebGL());
  }, [reduceMotion]);

  const item = (i: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p {...item(0)} className="eyebrow mb-6">{SITE.brandName}</motion.p>
          <motion.h1 {...item(1)} className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Your Business Deserves More Than an <span className="gradient-text">Ordinary Website.</span>
          </motion.h1>
          <motion.p {...item(2)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We design beautiful, fast, mobile-friendly websites that help businesses build trust, showcase their services, and generate more enquiries.
          </motion.p>
          <motion.div {...item(3)} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="btn-primary">{SITE.secondaryCta} <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#contact" className="btn-ghost"><MessageCircle size={16} aria-hidden="true" /> Get a Free Consultation</a>
          </motion.div>
          <motion.p {...item(4)} className="mt-8 text-sm text-slate-500">{SITE.tagline}</motion.p>
        </div>

        <div className="relative h-[340px] sm:h-[440px] lg:h-[620px]" role="img" aria-label="Animated 3D glass shapes">
          {use3D ? (
            <Suspense fallback={<HeroFallback />}>
              <HeroScene />
            </Suspense>
          ) : (
            <HeroFallback />
          )}
        </div>
      </div>
    </section>
  );
}
