import { useEffect, useState } from 'react';
import type { NavLink } from '../data/nav';

interface MobileMenuProps {
  links: NavLink[];
  ctaLabel: string;
}

export default function MobileMenu({ links, ctaLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);

  // Kunci scroll body selama menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Panel menempel tepat di bawah nav (tinggi nav diukur, bukan angka mati)
  const toggle = () => {
    if (!open) {
      const nav = document.querySelector('nav');
      setMenuTop(nav ? nav.getBoundingClientRect().bottom : 0);
    }
    setOpen((v) => !v);
  };

  useEffect(() => {
    if (!open) return;

    const nav = document.querySelector('nav');
    const update = () => {
      setMenuTop(nav ? nav.getBoundingClientRect().bottom : 0);
    };

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [open]);

  // Tutup otomatis saat viewport melebar ke layout desktop
  useEffect(() => {
    if (!open) return;

    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };

    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={toggle}
        className="lg:hidden flex items-center justify-center p-2 brutal-border bg-surface brutal-shadow transition-neobrutal brutal-hover"
      >
        <span
          className="material-symbols-outlined text-on-surface"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {open ? 'close' : 'menu'}
        </span>
      </button>

      {open && (
        <div
          id="mobile-menu"
          style={{ top: menuTop }}
          className="fixed inset-x-0 bottom-0 z-40 bg-surface border-b-[3px] border-outline flex flex-col gap-2 p-margin-mobile overflow-y-auto overscroll-contain lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-label-mono text-label-mono uppercase text-[16px] text-on-surface hover:bg-surface-container-high brutal-border brutal-shadow transition-neobrutal brutal-hover px-4 py-4 font-bold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-on-primary brutal-border brutal-shadow transition-neobrutal brutal-hover px-4 py-4 font-label-mono text-label-mono uppercase text-[16px] font-bold text-center"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </>
  );
}
