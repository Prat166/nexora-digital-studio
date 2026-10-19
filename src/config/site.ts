// ============================================================
//  EDIT YOUR DETAILS HERE. The whole website updates from this file.
// ============================================================

// WhatsApp number with country code. Digits and "+" only.
export const WHATSAPP_NUMBER = '+919860963770';

export const SITE = {
  brandName: 'Nexora Digital Studio',
  shortName: 'Nexora',
  tagline: 'Websites That Make Businesses Stand Out',
  description:
    'Premium websites for local businesses, startups, restaurants, salons, coaching institutes and consultants.',

  // Placeholder: replace with your real email before going live.
  email: 'hello@example.com',
  phone: WHATSAPP_NUMBER,
  location: 'Maharashtra, India',

  primaryCta: "Let's Build Your Website",
  secondaryCta: 'Explore Our Work',

  // Optional: paste a form-backend URL (e.g. https://formspree.io/f/xxxx) to ALSO
  // send enquiries there. Leave empty to use WhatsApp only.
  formEndpoint: '',
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

// ---- Pricing: edit prices and features freely ----
export const PRICING = [
  {
    name: 'Starter Website',
    price: 'Starting at ₹5999',
    blurb: 'A clean, fast one-page or small site to get your business online.',
    features: ['Up to 3 sections or pages', 'Mobile-friendly design', 'WhatsApp and call buttons', 'Basic SEO setup'],
    featured: false,
  },
  {
    name: 'Professional Website',
    price: 'Starting at ₹5999',
    blurb: 'A complete multi-page site that builds trust and brings in enquiries.',
    features: ['Up to 6 pages', 'Custom design and animations', 'Enquiry form', 'Google Maps and social links', 'Speed optimisation'],
    featured: true,
  },
  {
    name: 'Premium Website',
    price: 'Starting at ₹5999',
    blurb: 'A standout experience with 3D visuals and advanced features.',
    features: ['3D and interactive elements', 'Custom sections and integrations', 'Advanced SEO structure', 'Priority support'],
    featured: false,
  },
];
