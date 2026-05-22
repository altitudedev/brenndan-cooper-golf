'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export default function MagneticButton({ children, href, className = '', external, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const innerX = useTransform(sx, (v) => v * 0.35);
  const innerY = useTransform(sy, (v) => v * 0.35);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * 0.4);
    y.set((e.clientY - cy) * 0.6);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.div ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <motion.div style={{ x: innerX, y: innerY }} className={className} onClick={onClick}>
        {children}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    ) : (
      <a href={href}>{inner}</a>
    );
  }
  return inner;
}
