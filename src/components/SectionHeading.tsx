import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';
  return (
    <Reveal className={`mb-14 flex max-w-3xl flex-col gap-5 md:mb-20 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
