import { MapPin, Layers, Gauge, Calendar, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PageHero } from './PageHero';
import type { PROJECTS } from '@/data';

type Project = (typeof PROJECTS)[number];

export function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  const { ref: overviewRef, visible: overviewVisible } = useReveal();
  const { ref: statsRef, visible: statsVisible } = useReveal();
  const { ref: galleryRef, visible: galleryVisible } = useReveal();
  const { ref: challengesRef, visible: challengesVisible } = useReveal();
  const { ref: highlightsRef, visible: highlightsVisible } = useReveal();

  return (
    <div className="bg-charcoal min-h-screen">
      <PageHero image={project.image} eyebrow="جزئیات پروژه" title={project.name} onBack={onBack} />

      <div className="px-6 lg:px-10 py-16 lg:py-24 max-w-[1400px] mx-auto">
        {/* meta bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-white/10 pb-10 mb-16">
          <MetaItem icon={<MapPin size={18} />} label="موقعیت" value={project.location} />
          <MetaItem icon={<Layers size={18} />} label="ماده معدنی" value={project.mineral} />
          <MetaItem icon={<Gauge size={18} />} label="ظرفیت" value={project.capacity} />
          <MetaItem icon={<Calendar size={18} />} label="سال آغاز" value={project.year} />
        </div>

        {/* overview */}
        <section ref={overviewRef} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 reveal ${overviewVisible ? 'is-visible' : ''}`}>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-copper" />
              <span className="text-copper text-xs tracking-brand">معرفی پروژه</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-ivory leading-snug mb-6">نگاهی کلی به پروژه</h2>
            <p className="text-ivory/70 leading-relaxed text-lg">{project.overview}</p>
          </div>
          <div className="lg:col-span-5 overflow-hidden h-[340px] lg:h-full">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </section>

        {/* status bar */}
        <div ref={statsRef} className={`bg-graphite border border-white/5 px-8 py-6 mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal ${statsVisible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-copper rounded-full animate-pulse" />
            <span className="text-ivory/80 text-sm">وضعیت پروژه:</span>
            <span className="text-copper font-semibold text-sm">{project.status}</span>
          </div>
          <span className="text-metallic text-xs">* محتوای نمونه برای معرفی ساختار پروژه‌ها</span>
        </div>

        {/* gallery */}
        <section ref={galleryRef} className={`mb-20 reveal ${galleryVisible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-copper" />
            <span className="text-copper text-xs tracking-brand">گالری تصاویر</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden h-[240px] lg:h-[300px] group">
                <img src={img} alt={`${project.name} - تصویر ${i + 1}`} className="w-full h-full object-cover img-zoom" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* highlights + challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <section ref={highlightsRef} className={`reveal ${highlightsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-copper" />
              <span className="text-copper text-xs tracking-brand">دستاوردهای کلیدی</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-ivory mb-6">برجسته‌ترین نتایج پروژه</h3>
            <ul className="space-y-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-ivory/75">
                  <CheckCircle2 size={18} className="text-copper mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section ref={challengesRef} className={`reveal ${challengesVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-copper" />
              <span className="text-copper text-xs tracking-brand">چالش‌های پروژه</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-ivory mb-6">چالش‌های فنی و اجرایی</h3>
            <ul className="space-y-4">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-ivory/75">
                  <AlertCircle size={18} className="text-copper/70 mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="border-t border-white/10 pt-10 flex justify-center">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-7 py-3.5 border border-ivory/20 text-ivory hover:border-copper hover:text-copper transition-all duration-300 text-sm font-semibold"
          >
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-copper text-xs">
        {icon}
        {label}
      </span>
      <span className="text-ivory text-sm font-semibold">{value}</span>
    </div>
  );
}
