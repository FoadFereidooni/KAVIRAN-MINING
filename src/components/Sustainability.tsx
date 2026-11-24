import { SUSTAINABILITY } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './SectionHeading';

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-ivory text-charcoal py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              dark
              eyebrow="مسئولیت اجتماعی و HSE"
              title="پایداری در قلب عملیات"
            />
            <p className="mt-6 text-base text-charcoal/75 leading-relaxed">
              کویران ماینینگ به توسعه پایدار به‌عنوان بخشی جدایی‌ناپذیر از فعالیت معدنی نگاه می‌کند.
              ما به safeguarding محیط زیست، ایمنی نیروها و ارتقای جوامع محلی متعهدیم.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SUSTAINABILITY.map((item, i) => (
              <SustainCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SustainCard({ item, index }: { item: typeof SUSTAINABILITY[number]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden h-[340px] flex flex-col justify-end reveal reveal-delay-${(index % 2) + 1} ${visible ? 'is-visible' : ''}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover img-zoom"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
      <div className="relative z-10 p-6 flex flex-col gap-2">
        <h3 className="text-ivory font-bold text-lg leading-snug">{item.title}</h3>
        <p className="text-sm text-ivory/75 leading-relaxed">{item.desc}</p>
      </div>
    </article>
  );
}
