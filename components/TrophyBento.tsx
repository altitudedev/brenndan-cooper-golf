'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Tile = {
  src: string;
  alt: string;
  /**
   * Span classes for the sm+ 4-column grid.
   * Mobile (2 cols) uses sensible defaults derived from these.
   */
  span?: string;
  caption?: string;
};

/**
 * Layout math (sm: 4 columns):
 *   Featured (col-span-2 row-span-2)  = 4 cells
 *   Tall    (row-span-2)              = 2 cells
 *   Wide    (col-span-2)              = 2 cells   ×2 = 4 cells
 *   Singles (1×1)                     = 1 cell    ×6 = 6 cells
 *                                      ─────────
 *                                       16 cells = 4 rows × 4 cols  ✓ no orphan
 *
 * Mobile (default 2 columns) — wides become full-width, the tall stays
 * 1×2, singles stack 2-up. Math also lands on an even row count.
 */
const tiles: Tile[] = [
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-3-18-41-PM.jpg',
    alt: 'Student with championship trophy',
    span: 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2',
    caption: 'Champions, made here.',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-55-23-PM-2.jpg',
    alt: 'Player seated with trophy',
    span: 'row-span-2 sm:row-span-2',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM-1.jpg',
    alt: 'Champion celebrating',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-55-23-PM.jpg',
    alt: 'Trophy lift',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-55-23-PM-3.jpg',
    alt: 'Awards podium moment',
    span: 'col-span-2 sm:col-span-2',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM.jpg',
    alt: 'Player with hardware',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM-2.jpg',
    alt: 'Champion holding trophy',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM-3.jpg',
    alt: 'Title-winning moment',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM-4.jpg',
    alt: 'Player with trophy',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-55-23-PM-1.jpg',
    alt: 'Tournament victory',
    span: 'col-span-2 sm:col-span-2',
  },
  {
    src: '/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM-7.jpg',
    alt: 'Champion player',
  },
];

const tileVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.2, 0.7, 0.2, 1] as const,
      delay: (i % 6) * 0.06,
    },
  }),
};

export default function TrophyBento() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <motion.div
      ref={ref}
      style={{ y, gridAutoFlow: 'dense' }}
      className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4 md:auto-rows-[220px]"
    >
      {tiles.map((t, i) => (
        <motion.figure
          key={t.src}
          custom={i}
          variants={tileVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`group relative overflow-hidden rounded-2xl bg-navy-950 ring-1 ring-white/5 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(194,53,40,0.55)] ${t.span ?? ''}`}
        >
          <Image
            src={t.src}
            alt={t.alt}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-[1500ms] ease-out group-hover:scale-[1.08]"
          />
          {/* Sheen sweep */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-[1100ms] group-hover:left-[120%] group-hover:opacity-100"
          />
          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-transparent" />
          {/* Corner accent */}
          <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-crimson opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {t.caption && (
            <figcaption className="absolute inset-x-4 bottom-4 z-10">
              <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                {t.caption}
              </div>
            </figcaption>
          )}
        </motion.figure>
      ))}
    </motion.div>
  );
}
