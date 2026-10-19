import { useId } from 'react';
import { SITE } from '../config/site';

export default function Logo({ className = '' }: { className?: string }) {
  const gradId = `logo-${useId().replace(/:/g, '')}`;
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="0.55" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill={`url(#${gradId})`} />
        <path d="M9 23V9l14 14V9" stroke="#0a0b10" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-white">{SITE.brandName}</span>
    </span>
  );
}
