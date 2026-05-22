'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Aurora from './Aurora';
import Grain from './Grain';

type CTA = { label: string; href: string; external?: boolean };

type Props = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  image: string;
  align?: 'left' | 'center';
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

export default function Hero({
  eyebrow,
  headline,
  sub,
  image,
  align = 'left',
  primaryCta,
  secondaryCta,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Subtle mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const mouseX = useTransform(smx, (v) => `${v * 14}px`);
  const mouseY = useTransform(smy, (v) => `${v * 14}px`);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-navy-950 text-white"
    >
      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY, x: mouseX }}>
        <div className="absolute -inset-12">
          <Image src={image} alt="" fill priority sizes="120vw" style={{ objectFit: 'cover' }} className="opacity-90" />
        </div>
      </motion.div>

      {/* Aurora orbs — softer so the photo reads */}
      <Aurora tone="mixed" intensity={0.5} className="z-[1]" />

      {/* Gradient veil — lighter so the photo reads through */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(200deg, rgba(7,34,59,0.45) 0%, rgba(4,22,39,0.55) 55%, rgba(4,22,39,0.85) 100%)',
        }}
      />

      {/* Grain texture */}
      <Grain opacity={0.07} />

      {/* Crimson glow accent (mouse-tracking) */}
      <motion.div
        aria-hidden
        style={{ x: mouseY, y: mouseX }}
        className="absolute -right-32 bottom-[-160px] z-[2] h-[600px] w-[600px] rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(194,53,40,0.45) 0%, transparent 65%)' }}
        />
      </motion.div>

      {/* Bottom curve */}
      <svg
        aria-hidden
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute bottom-[-1px] left-0 right-0 z-[3] h-[60px] w-full fill-white"
      >
        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
      </svg>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className={clsx(
          'relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8',
          align === 'center' && 'text-center',
        )}
      >
        <div className={clsx('max-w-3xl pt-32 pb-28 sm:pt-36 sm:pb-32', align === 'center' && 'mx-auto')}>
          {eyebrow && (
            <div className="blur-up inline-flex items-center gap-3">
              <span className="block h-px w-8 bg-crimson" />
              <span className="eyebrow !text-crimson">{eyebrow}</span>
            </div>
          )}
          <h1 className="blur-up delay-1 mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            {headline}
          </h1>
          {sub && (
            <p className="blur-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {sub}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={clsx(
                'blur-up delay-3 mt-10 flex flex-wrap gap-4',
                align === 'center' && 'justify-center',
              )}
            >
              {primaryCta &&
                (primaryCta.external ? (
                  <a href={primaryCta.href} target="_blank" rel="noreferrer" className="btn btn-primary glow-ring">
                    {primaryCta.label}
                  </a>
                ) : (
                  <Link href={primaryCta.href} className="btn btn-primary glow-ring">
                    {primaryCta.label}
                  </Link>
                ))}
              {secondaryCta &&
                (secondaryCta.external ? (
                  <a href={secondaryCta.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link href={secondaryCta.href} className="btn btn-ghost">
                    {secondaryCta.label}
                  </Link>
                ))}
            </div>
          )}
        </div>

      </motion.div>
    </section>
  );
}
