import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PageHero } from './PageHero';
import { NEWS } from '@/data';
import type { NEWS as NEWS_TYPE } from '@/data';

type Article = (typeof NEWS_TYPE)[number];

export function NewsDetail({ article, onBack, onNavigate }: { article: Article; onBack: () => void; onNavigate: (slug: string) => void }) {
  const { ref, visible } = useReveal();
  const currentIndex = NEWS.findIndex((n) => n.slug === article.slug);
  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 2);

  return (
    <div className="bg-charcoal min-h-screen">
      <PageHero image={article.image} eyebrow={article.category} title={article.title} onBack={onBack} />

      <article className="px-6 lg:px-10 py-16 lg:py-24 max-w-3xl mx-auto">
        {/* meta */}
        <div className="flex flex-wrap items-center gap-5 mb-10 pb-8 border-b border-white/10">
          <span className="flex items-center gap-2 text-metallic text-sm">
            <Calendar size={15} className="text-copper" />
            {article.date}
          </span>
          <span className="flex items-center gap-2 text-metallic text-sm">
            <Tag size={15} className="text-copper" />
            {article.category}
          </span>
        </div>

        {/* body */}
        <div ref={ref} className={`flex flex-col gap-6 reveal ${visible ? 'is-visible' : ''}`}>
          {article.body.map((para, i) => (
            <p key={i} className="text-ivory/80 leading-loose text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* back button */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-7 py-3.5 border border-ivory/20 text-ivory hover:border-copper hover:text-copper transition-all duration-300 text-sm font-semibold"
          >
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            بازگشت به صفحه اصلی
          </button>
        </div>
      </article>

      {/* related */}
      <section className="px-6 lg:px-10 py-16 border-t border-white/10 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-px bg-copper" />
          <span className="text-copper text-xs tracking-brand">اخبار مرتبط</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map((item) => (
            <article
              key={item.slug}
              onClick={() => onNavigate(item.slug)}
              className="group bg-graphite border border-white/5 flex cursor-pointer hover:border-copper/40 transition-colors duration-300"
            >
              <div className="overflow-hidden w-32 sm:w-40 shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <span className="text-metallic text-xs">{item.date}</span>
                <h4 className="text-ivory font-semibold text-sm leading-snug group-hover:text-copper transition-colors">{item.title}</h4>
                <span className="flex items-center gap-1 text-copper text-xs mt-auto">
                  ادامه مطلب
                  <ArrowLeft size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
