'use client';

import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { useCallback, useEffect } from 'react';

export type LightboxImage = { src: string; alt: string; caption?: string };

type Props = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
};

export default function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;
  const total = images.length;

  const goNext = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % total);
  }, [index, total, onChange]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + total) % total);
  }, [index, total, onChange]);

  // Keyboard nav + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, goNext, goPrev]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -80 || info.velocity.x < -500) goNext();
    else if (info.offset.x > 80 || info.velocity.x > 500) goPrev();
  }

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-zoom-out bg-navy-950/92 backdrop-blur-2xl"
          />

          {/* Decorative aurora glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse at 80% 90%, rgba(194,53,40,0.22) 0%, rgba(4,22,39,0) 60%), radial-gradient(ellipse at 10% 10%, rgba(43,81,115,0.32) 0%, rgba(4,22,39,0) 60%)',
            }}
          />

          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">
              <span className="text-white">
                {String((index ?? 0) + 1).padStart(2, '0')}
              </span>
              <span className="mx-2 text-white/30">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition hover:border-crimson hover:bg-crimson/20"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-1/2 block h-[2px] w-4 -translate-y-1/2 rotate-45 bg-white transition group-hover:bg-crimson" />
                <span className="absolute left-0 top-1/2 block h-[2px] w-4 -translate-y-1/2 -rotate-45 bg-white transition group-hover:bg-crimson" />
              </span>
            </button>
          </div>

          {/* Prev / Next desktop buttons */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="group absolute left-3 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition hover:border-crimson hover:bg-crimson/20 sm:left-6 sm:flex sm:h-14 sm:w-14"
          >
            <span className="text-white transition group-hover:-translate-x-0.5 group-hover:text-crimson">←</span>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="group absolute right-3 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition hover:border-crimson hover:bg-crimson/20 sm:right-6 sm:flex sm:h-14 sm:w-14"
          >
            <span className="text-white transition group-hover:translate-x-0.5 group-hover:text-crimson">→</span>
          </button>

          {/* Image area */}
          <div
            className="relative z-[5] flex h-full w-full items-center justify-center px-4 py-20 sm:px-20 sm:py-24"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.src}
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
                transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                drag="x"
                dragElastic={0.15}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="relative flex max-h-full max-w-full cursor-grab flex-col items-center justify-center active:cursor-grabbing"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.src}
                  alt={current.alt}
                  draggable={false}
                  className="block max-h-[78vh] w-auto max-w-[92vw] select-none rounded-2xl object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
                />
                {(current.caption || current.alt) && (
                  <figcaption className="mt-5 max-w-xl text-center text-xs uppercase tracking-[0.22em] text-white/65">
                    {current.caption ?? current.alt}
                  </figcaption>
                )}
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 sm:px-8 sm:pb-7">
            <div className="mx-auto max-w-3xl overflow-x-auto">
              <div className="flex justify-center gap-2 pb-1">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`relative h-10 w-12 shrink-0 overflow-hidden rounded-md transition sm:h-12 sm:w-16 ${
                      i === index
                        ? 'ring-2 ring-crimson'
                        : 'opacity-50 ring-1 ring-white/15 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
