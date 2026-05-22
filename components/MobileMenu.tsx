'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/lib/site';
import { useEffect } from 'react';

type Props = { open: boolean; onClose: () => void };

const overlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{
            clipPath: 'circle(150% at 100% 0%)',
            transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const },
          }}
          exit={{
            clipPath: 'circle(0% at 100% 0%)',
            transition: { duration: 0.55, ease: [0.6, 0, 0.7, 0.4] as const },
          }}
          className="fixed inset-0 z-[60] flex flex-col bg-navy-950 text-white md:hidden"
        >
          {/* Layered atmosphere */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(circle at 80% 0%, rgba(194,53,40,0.35) 0%, rgba(4,22,39,0) 55%), radial-gradient(circle at 0% 100%, rgba(43,81,115,0.5) 0%, rgba(4,22,39,0) 60%)',
            }}
          />

          {/* Top bar */}
          <div className="relative z-10 flex items-center justify-between px-5 pt-5">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <div className="relative h-10 w-9">
                <Image src={site.logo} alt={site.name} fill sizes="36px" style={{ objectFit: 'contain' }} />
              </div>
              <span className="font-display text-sm uppercase tracking-[0.22em]">{site.name}</span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            </button>
          </div>

          {/* Links */}
          <motion.nav
            variants={overlay}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-1 flex-col items-start justify-center gap-2 px-7"
            aria-label="Mobile primary"
          >
            {site.nav.map((l, i) => (
              <motion.div key={l.href} variants={item} className="overflow-hidden">
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="block font-display text-5xl uppercase leading-none tracking-tight text-white transition-colors hover:text-crimson sm:text-6xl"
                >
                  <span className="mr-4 align-top text-xs font-medium tracking-[0.3em] text-crimson">
                    0{i + 1}
                  </span>
                  {l.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={item} className="mt-10">
              <a href={site.bookNowUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Book Now →
              </a>
            </motion.div>
          </motion.nav>

          {/* Footer */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="relative z-10 flex items-center justify-between px-7 pb-7 text-xs uppercase tracking-[0.22em] text-white/60"
          >
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            <div className="flex gap-5">
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram
              </a>
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
                Facebook
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
