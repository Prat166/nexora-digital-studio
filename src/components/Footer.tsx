import Logo from './Logo';
import { SITE } from '../config/site';

const COLUMNS = [
  { title: 'Services', links: [['Business Websites', '#services'], ['3D Experiences', '#services'], ['Landing Pages', '#services'], ['Maintenance', '#services']] },
  { title: 'Portfolio', links: [['Concept Demos', '#work'], ['Why Us', '#why'], ['Our Process', '#process'], ['Pricing', '#pricing']] },
  { title: 'Contact', links: [['Free Consultation', '#contact'], ['WhatsApp Enquiry', '#contact']] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{SITE.description}</p>
        </div>
        {COLUMNS.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="font-display text-sm font-semibold text-white">{c.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.links.map(([label, href]) => (
                <li key={label}><a href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <details id="privacy" className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-slate-400">
          <summary className="cursor-pointer font-medium text-slate-200">Privacy Policy</summary>
          <div className="mt-3 space-y-2 leading-relaxed">
            <p>This website does not use cookies for tracking. When you submit the enquiry form, the details you enter (name, business name, phone number, business type and requirements) are placed into a WhatsApp message that you choose to send.</p>
            <p>We use your details only to reply to your enquiry and do not sell or share them. To ask us to delete your details, message us on WhatsApp or email {SITE.email}.</p>
          </div>
        </details>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {SITE.brandName}. All rights reserved.</p>
        <p>Portfolio projects shown are concept demos.</p>
      </div>
    </footer>
  );
}
