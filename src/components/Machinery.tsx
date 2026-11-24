import { MACHINERY } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './SectionHeading';
import { IMAGES } from '@/data';

export function Machinery() {
  return (
    <section id="machinery" className="bg-graphite py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="تجهیزات و فناوری" title="مهندسی دقیق، تجهیزات پیشرفته" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* feature image */}
          <FeatureImage />

          {/* list */}
          <div className="lg:col-span-5 flex flex-col">
            {MACHINERY.map((m, i) => (
              <MachineItem key={m.title} item={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureImage() {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`lg:col-span-7 overflow-hidden h-[300px] lg:h-[640px] group relative reveal ${visible ? 'is-visible' : ''}`}
    >
      <img
        src={IMAGES.machine1}
        alt="کامیون معدن‌کاری در محل استخراج"
        className="w-full h-full object-cover img-zoom"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 p-8 max-w-md">
        <span className="text-copper text-xs tracking-brand">ناوگان سنگین</span>
        <p className="text-ivory text-xl font-bold mt-2 leading-relaxed">
          بهره‌گیری از مدرن‌ترین تجهیزات معدن‌کاری با ظرفیت بالا و مصرف بهینه
        </p>
      </div>
    </div>
  );
}

function MachineItem({ item, index }: { item: typeof MACHINERY[number]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`group flex gap-5 py-6 border-b border-white/10 last:border-b-0 reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
    >
      <div className="w-24 h-20 shrink-0 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
      </div>
      <div className="flex flex-col gap-1.5 justify-center">
        <div className="flex items-center gap-3">
          <span className="text-copper text-xs">۰{index + 1}</span>
          <h3 className="text-ivory font-semibold text-lg">{item.title}</h3>
        </div>
        <p className="text-sm text-ivory/60 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}
