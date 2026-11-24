import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  dark?: boolean;
  align?: 'right' | 'center';
}

export function SectionHeading({ eyebrow, title, dark = false, align = 'right' }: SectionHeadingProps) {
  const { ref, visible } = useReveal();
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-right';

  return (
    <div
      ref={ref}
      className={`flex flex-col ${alignClass} max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="w-10 h-px bg-copper" />
        <span className="text-copper text-xs tracking-brand uppercase">{eyebrow}</span>
      </div>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-balance ${
          dark ? 'text-charcoal' : 'text-ivory'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
