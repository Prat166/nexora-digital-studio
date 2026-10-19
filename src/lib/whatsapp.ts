import { WHATSAPP_NUMBER } from '../config/site';

/** Builds a wa.me link from the number in src/config/site.ts */
export function buildWhatsAppUrl(message: string): string {
  const digitsOnly = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
