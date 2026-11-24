import { NAV_ITEMS } from '@/data';
import { MapPin, Phone, Mail, Linkedin, Instagram, Send } from 'lucide-react';

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-white/10 pt-20 pb-8 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* brand */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 border border-copper/60 flex items-center justify-center rotate-45">
                <span className="-rotate-45 text-copper text-base font-bold tracking-brand">K</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-ivory text-lg font-bold tracking-brand">KAVIRAN MINING</span>
                <span className="text-metallic text-xs mt-1 tracking-wider">کویران ماینینگ</span>
              </span>
            </div>
            <p className="text-sm text-ivory/55 leading-relaxed max-w-sm">
              گروه صنعتی فعال در حوزه اکتشاف، استخراج و فرآوری مواد معدنی در استان کرمان، با تکیه بر دانش
              مهندسی، فناوری پیشرفته و تعهد به توسعه پایدار.
            </p>
          </div>

          {/* nav */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-copper text-xs tracking-brand">دسترسی سریع</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-sm text-ivory/60 hover:text-copper transition-colors text-right"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-copper text-xs tracking-brand">اطلاعات تماس</h4>
            <ul className="flex flex-col gap-3 text-sm text-ivory/60">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-copper mt-0.5 shrink-0" />
                کرمان، خیابان شهید بهشتی، مجتمع صنعتی کویران
              </li>
              <li className="flex items-center gap-2" dir="ltr">
                <Phone size={15} className="text-copper shrink-0" />
                ۰۳۴ - ۳۲۱۰ ۰۰۰۰
              </li>
              <li className="flex items-center gap-2" dir="ltr">
                <Mail size={15} className="text-copper shrink-0" />
                info@kaviranmining.ir
              </li>
            </ul>
          </div>

          {/* social */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-copper text-xs tracking-brand">شبکه‌ها</h4>
            <div className="flex gap-3">
              <SocialIcon icon={<Instagram size={17} />} />
              <SocialIcon icon={<Linkedin size={17} />} />
              <SocialIcon icon={<Send size={17} />} />
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-metallic">
          <p>© ۱۴۰۴ کویران ماینینگ | تمامی حقوق محفوظ است.</p>
          <p className="text-metallic/70">طراحی و توسعه با استانداردهای صنعتی</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="w-9 h-9 border border-white/15 flex items-center justify-center text-ivory/70 hover:border-copper hover:text-copper transition-colors duration-300"
    >
      {icon}
    </a>
  );
}
