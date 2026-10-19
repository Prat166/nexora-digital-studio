import { useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SITE } from '../config/site';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface FormValues {
  name: string;
  business: string;
  phone: string;
  type: string;
  requirements: string;
}
type Errors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = { name: '', business: '', phone: '', type: '', requirements: '' };
const BUSINESS_TYPES = ['Coaching institute', 'Restaurant or cafe', 'Salon or spa', 'Real estate', 'Consultant or finance', 'Startup', 'Shop or retail', 'Other'];

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (v.business.trim().length < 2) e.business = 'Please enter your business name.';
  const digits = v.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) e.phone = 'Enter a valid phone or WhatsApp number (10 to 15 digits).';
  if (!v.type) e.type = 'Please choose your business type.';
  if (v.requirements.trim().length < 10) e.requirements = 'Please describe what you need (at least 10 characters).';
  return e;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-rose-300">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const update = (key: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setDone(false);
  };
  const aria = (key: keyof FormValues) => ({ 'aria-invalid': Boolean(errors[key]), 'aria-describedby': errors[key] ? `${key}-error` : undefined });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const message = `Hello ${SITE.brandName}, I would like a website.\n\nName: ${values.name.trim()}\nBusiness: ${values.business.trim()}\nPhone: ${values.phone.trim()}\nBusiness type: ${values.type}\nRequirements: ${values.requirements.trim()}`;

    // Optional: also send to a form backend if one is configured in src/config/site.ts
    if (SITE.formEndpoint) {
      fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) }).catch(() => undefined);
    }

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setDone(true);
    setValues(EMPTY);
  };

  return (
    <section id="contact" className="section-pad">
      <SectionHeading eyebrow="Contact" title="Let's Build Your Website" description="Tell us about your business. Your enquiry opens in WhatsApp, so you can chat with us directly." />
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-8" aria-label="Website enquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Your name" error={errors.name}>
                <input id="name" className="field" autoComplete="name" placeholder="Full name" value={values.name} onChange={update('name')} {...aria('name')} />
              </Field>
              <Field id="business" label="Business name" error={errors.business}>
                <input id="business" className="field" autoComplete="organization" placeholder="Your business" value={values.business} onChange={update('business')} {...aria('business')} />
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="phone" label="Phone or WhatsApp number" error={errors.phone}>
                <input id="phone" type="tel" inputMode="tel" className="field" autoComplete="tel" placeholder="+91 98765 43210" value={values.phone} onChange={update('phone')} {...aria('phone')} />
              </Field>
              <Field id="type" label="Business type" error={errors.type}>
                <select id="type" className="field" value={values.type} onChange={update('type')} {...aria('type')}>
                  <option value="">Select one</option>
                  {BUSINESS_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>
              </Field>
            </div>
            <Field id="requirements" label="Website requirements" error={errors.requirements}>
              <textarea id="requirements" rows={4} className="field resize-y" placeholder="Number of pages, features you need, examples you like..." value={values.requirements} onChange={update('requirements')} {...aria('requirements')} />
            </Field>
            <button type="submit" className="btn-primary w-full"><Send size={16} aria-hidden="true" /> Send Enquiry on WhatsApp</button>
            <p role="status" className="min-h-5 text-sm text-emerald-300">{done ? 'WhatsApp opened with your enquiry. Press send there to reach us.' : ''}</p>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass flex h-full flex-col gap-6 rounded-3xl p-6 sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">Prefer to chat right now?</h3>
              <p className="mt-2 text-sm text-slate-400">Message us directly on WhatsApp for a free consultation.</p>
            </div>
            <a href={buildWhatsAppUrl(`Hello ${SITE.brandName}, I would like a free consultation about a website.`)} target="_blank" rel="noopener noreferrer" className="btn-ghost !border-emerald-400/40 !text-emerald-300 hover:!bg-emerald-400/10">
              <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
            </a>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3"><MessageCircle size={16} className="text-cyan-300" aria-hidden="true" />{SITE.phone}</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-cyan-300" aria-hidden="true" />{SITE.email}</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-cyan-300" aria-hidden="true" />{SITE.location}</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
