'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const minHold = 1400;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minHold - elapsed);
      window.setTimeout(() => setDone(true), wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    const fallback = window.setTimeout(finish, 3500);
    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 text-white"
        >
          {/* Soft radial glow */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse at 50% 40%, rgba(194,53,40,0.35) 0%, rgba(4,22,39,0) 60%)',
            }}
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div className="relative h-28 w-28 sm:h-32 sm:w-32">
              <Image
                src="/logo.png"
                alt="Brenndan Cooper Golf"
                fill
                priority
                sizes="128px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative z-10 mt-6 text-center"
          >
            <div className="font-display text-2xl uppercase tracking-[0.18em]">
              Brenndan Cooper Golf
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
              Serious Coaching for Serious Players
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 mt-10 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="h-full w-1/2 bg-crimson"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
