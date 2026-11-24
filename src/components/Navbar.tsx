import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '@/data';

interface NavbarProps {
  onNavigate?: (href: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
        <button onClick={() => handleNav('#hero')} className="flex items-center gap-3 group" aria-label="کویران ماینینگ">
          <span className="w-10 h-10 border border-copper/60 flex items-center justify-center rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]">
            <span className="-rotate-45 text-copper text-sm font-bold tracking-brand">K</span>
          </span>
          <span className="flex flex-col leading-none text-right">
            <span className="text-ivory text-base font-bold tracking-brand">KAVIRAN MINING</span>
            <span className="text-metallic text-[11px] mt-1 tracking-wider">کویران ماینینگ</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-ivory/80 hover:text-copper text-sm transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:right-0 after:h-px after:w-0 after:bg-copper after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleNav('#contact')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-copper text-charcoal text-sm font-semibold hover:bg-copper-light transition-colors duration-300"
          >
            <Phone size={15} className="transition-transform duration-300 group-hover:rotate-12" />
            تماس با ما
          </button>
        </div>

        <button
          className="lg:hidden text-ivory p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="منو"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pt-4 pb-6 bg-charcoal/98 backdrop-blur-md border-t border-white/5 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-right py-3 px-3 text-ivory/85 hover:text-copper hover:bg-white/5 transition-colors text-sm border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-copper text-charcoal text-sm font-semibold"
          >
            <Phone size={15} />
            تماس با ما
          </button>
        </nav>
      </div>
    </header>
  );
}
