import { EXPERTISE } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './SectionHeading';
import { ArrowLeft } from 'lucide-react';

export function Expertise() {
  return (
    <section id="expertise" className="bg-charcoal py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="حوزه‌های فعالیت"
          title="شش حوزه تخصصی در چرخه کامل معدنی"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE.map((item, i) => (
            <ExpertiseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ item, index }: { item: typeof EXPERTISE[number]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden bg-graphite border border-white/5 h-[420px] flex flex-col justify-end reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-700 img-zoom"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
      <div className="relative z-10 p-7 flex flex-col gap-3">
        <span className="text-copper text-xs tracking-brand">۰{index + 1}</span>
        <h3 className="text-xl font-bold text-ivory leading-snug">{item.title}</h3>
        <p className="text-sm text-ivory/65 leading-relaxed max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {item.desc}
        </p>
        <span className="flex items-center gap-2 text-copper text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          مطالعه بیشتر
          <ArrowLeft size={14} />
        </span>
      </div>
    </article>
  );
}
