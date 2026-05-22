'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-950/85 backdrop-blur-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
            <div className="relative h-10 w-9 sm:h-12 sm:w-11">
              <Image
                src={site.logo}
                alt={site.name}
                fill
                sizes="48px"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="hidden font-display text-sm uppercase tracking-[0.22em] text-white sm:inline">
              Brenndan Cooper Golf
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {site.nav.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                    active ? 'text-crimson' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-crimson transition-all duration-300 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.bookNowUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden btn btn-primary md:inline-flex"
            >
              Book Now
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="group flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md md:hidden"
            >
              <span className="block h-[2px] w-5 bg-white transition-all group-hover:w-6" />
              <span className="block h-[2px] w-5 bg-white transition-all group-hover:w-4" />
              <span className="block h-[2px] w-5 bg-white transition-all group-hover:w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
