import { IMAGES, STATS } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="bg-ivory text-charcoal py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          dark
          eyebrow="درباره کویران ماینینگ"
          title="فراتر از استخراج، در مسیر توسعه"
        />

        <div ref={ref} className={`mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center reveal ${visible ? 'is-visible' : ''}`}>
          {/* images */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
            <div className="col-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden h-[280px] lg:h-full">
              <img
                src={IMAGES.introMain}
                alt="عملیات معدنی و استخراج روباز"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden h-[200px] lg:h-[260px]">
              <img
                src={IMAGES.introSecondary}
                alt="جاده‌های دسترسی در معدن روباز"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden h-[200px] lg:h-[260px] bg-charcoal flex flex-col justify-between p-6 text-ivory">
              <span className="text-copper text-xs tracking-brand">چشم‌انداز</span>
              <p className="text-sm leading-relaxed text-ivory/80">
                تبدیل شدن به یکی از مرجع‌ترین مجموعه‌های استخراج و فرآوری مواد معدنی منطقه با تکیه بر استانداردهای جهانی.
              </p>
            </div>
          </div>

          {/* text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-charcoal/80">
              گروه صنعتی <span className="font-semibold text-copper">کویران ماینینگ</span> فعالیت خود را با هدف
              بهره‌برداری پایدار از معادن استان کرمان آغاز کرده و امروز به یکی از مجموعه‌های فعال در زمینه
              استخراج، فرآوری و توسعه زیرساخت‌های معدنی کشور تبدیل شده است.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              ما با تکیه بر دانش مهندسی داخلی، بهره‌گیری از تجهیزات پیشرفته و سرمایه‌گذاری بلندمدت، چرخه‌ای
              یکپارچه از اکتشاف تا فرآوری را مدیریت می‌کنیم و به توسعه پایدار جوامع محلی و حفاظت از محیط زیست
              متعهدیم.
            </p>
            <ul className="mt-2 space-y-3">
              {[
                'مدیریت یکپارچه چرخه اکتشاف تا فرآوری',
                'تجهیزات سنگین و فناوری روز دنیا',
                'تعهد به استانداردهای HSE و توسعه پایدار',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal/80">
                  <span className="w-1.5 h-1.5 bg-copper rotate-45" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* stats */}
        <div className="mt-24 lg:mt-32 border-t border-charcoal/15 pt-14">
          <p className="text-xs text-metallic mb-10 max-w-2xl leading-relaxed">
            * ارقام زیر صرفاً محتوای نمونه و نمایشی برای معرفی ساختار مجموعه هستند و معادل داده‌های واقعی نیستند.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} delay={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 border-r border-charcoal/15 pr-6 last:border-r-0 reveal reveal-delay-${delay + 1} ${visible ? 'is-visible' : ''}`}
    >
      <span className="text-4xl lg:text-5xl font-bold text-charcoal leading-none">{value}</span>
      <span className="text-sm text-metallic leading-relaxed">{label}</span>
    </div>
  );
}
