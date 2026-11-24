import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  onBack: () => void;
}

export function PageHero({ image, eyebrow, title, onBack }: PageHeroProps) {
  return (
    <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal/60 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-10 max-w-[1400px] mx-auto pb-14">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-ivory/70 hover:text-copper text-sm transition-colors duration-300 mb-6"
        >
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          بازگشت به صفحه اصلی
        </button>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-px bg-copper" />
          <span className="text-copper text-xs tracking-brand">{eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-ivory leading-[1.2] text-balance max-w-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
