import { useState } from 'react';
import { IMAGES } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, Send, ArrowLeft } from 'lucide-react';

export function Contact() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full bg-transparent border border-white/15 focus:border-copper px-4 py-3.5 text-ivory placeholder:text-metallic text-sm outline-none transition-colors duration-300 text-right';

  return (
    <section id="contact" className="relative bg-charcoal py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <img
        src={IMAGES.contactBg}
        alt="چشم‌انداز صنعتی"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />

      <div
        ref={ref}
        className={`relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 reveal ${visible ? 'is-visible' : ''}`}
      >
        {/* info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-copper" />
              <span className="text-copper text-xs tracking-brand">تماس با ما</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-ivory leading-tight text-balance">
              گفتگو درباره پروژه بعدی را آغاز کنید
            </h2>
            <p className="text-ivory/65 leading-relaxed max-w-lg">
              برای همکاری، استعلام یا هرگونه پرسش درباره خدمات و پروژه‌های کویران ماینینگ با ما در ارتباط باشید.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-2">
            <ContactInfo icon={<MapPin size={18} />} label="آدرس دفتر مرکزی" value="کرمان، خیابان شهید بهشتی، مجتمع صنعتی کویران، طبقه چهارم" />
            <ContactInfo icon={<Phone size={18} />} label="تلفن تماس" value="۰۳۴ - ۳۲۱۰ ۰۰۰۰" />
            <ContactInfo icon={<Mail size={18} />} label="ایمیل" value="info@kaviranmining.ir" dir="ltr" />
          </div>

          <button className="group self-start flex items-center gap-3 px-7 py-3.5 bg-copper text-charcoal font-semibold hover:bg-copper-light transition-colors duration-300 mt-2">
            درخواست همکاری تجاری
            <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
        </div>

        {/* form */}
        <div className="bg-graphite/80 backdrop-blur-sm border border-white/10 p-8 lg:p-10">
          <h3 className="text-ivory text-xl font-bold mb-6">فرم تماس</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-ivory/70">نام و نام خانوادگی</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="نام شما"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-ivory/70">ایمیل</label>
                <input
                  required
                  type="email"
                  dir="ltr"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-ivory/70">موضوع</label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClass}
                placeholder="موضوع درخواست"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-ivory/70">پیام شما</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="درخواست یا پیام خود را بنویسید…"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-copper text-charcoal font-semibold hover:bg-copper-light transition-colors duration-300 mt-2"
            >
              ارسال درخواست
              <Send size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            {submitted && (
              <p className="text-copper text-sm text-center mt-2 animate-fade-in">
                درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, dir }: { icon: React.ReactNode; label: string; value: string; dir?: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-10 h-10 border border-copper/40 flex items-center justify-center text-copper shrink-0">{icon}</span>
      <div className="flex flex-col gap-1">
        <span className="text-metallic text-xs">{label}</span>
        <span className="text-ivory text-sm leading-relaxed" dir={dir}>{value}</span>
      </div>
    </div>
  );
}
