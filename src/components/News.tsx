import { NEWS } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './SectionHeading';
import { ArrowLeft, Calendar } from 'lucide-react';

export function News({ onOpen }: { onOpen: (slug: string) => void }) {
  return (
    <section className="bg-charcoal py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading eyebrow="اخبار و Insights" title="تازه‌های کویران ماینینگ" />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((article, i) => (
            <NewsCard key={article.slug} article={article} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ article, index, onOpen }: { article: typeof NEWS[number]; index: number; onOpen: (slug: string) => void }) {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      onClick={() => onOpen(article.slug)}
      className={`group bg-graphite border border-white/5 flex flex-col cursor-pointer hover:border-copper/40 transition-colors duration-300 reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
    >
      <div className="overflow-hidden h-52">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-2 text-metallic text-xs">
          <Calendar size={13} className="text-copper" />
          {article.date}
        </div>
        <h3 className="text-ivory font-bold text-lg leading-snug">{article.title}</h3>
        <p className="text-sm text-ivory/60 leading-relaxed flex-1">{article.excerpt}</p>
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(article.slug); }}
          className="flex items-center gap-2 text-copper text-sm font-semibold self-start mt-1 group-hover:gap-3 transition-all duration-300"
        >
          ادامه مطلب
          <ArrowLeft size={15} />
        </button>
      </div>
    </article>
  );
}
