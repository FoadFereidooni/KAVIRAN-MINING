import { ArrowLeft, ArrowDown } from 'lucide-react';
import { IMAGES } from '@/data';

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="دید هوایی از معدن روباز مس در کرمان"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal/60 via-transparent to-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <span className="w-12 h-px bg-copper" />
            <span className="text-copper text-sm tracking-brand">صنایع معدنی کرمان</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-ivory leading-[1.15] text-balance animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            قدرت استخراج،
            <br />
            آینده‌ای ماندگار
          </h1>

          <p
            className="mt-8 text-lg lg:text-xl text-ivory/75 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            توسعه پایدار صنایع معدنی با تکیه بر دانش مهندسی، فناوری پیشرفته و سرمایه‌گذاری بلندمدت
          </p>

          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.95s', opacity: 0 }}
          >
            <button
              onClick={() => scrollTo('#about')}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-copper text-charcoal font-semibold hover:bg-copper-light transition-all duration-300"
            >
              آشنایی با مجموعه
              <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#projects')}
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-ivory/30 text-ivory font-semibold hover:border-copper hover:text-copper transition-all duration-300 backdrop-blur-sm"
            >
              مشاهده پروژه‌ها
              <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-ivory/50 text-xs tracking-widest">اسکرول کنید</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent flex flex-col items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-copper animate-scroll-dot mt-1" />
        </div>
        <ArrowDown size={14} className="text-ivory/40" />
      </div>
    </section>
  );
}
