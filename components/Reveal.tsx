'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

const variants: Variants = {
  hidden: (custom: { y: number }) => ({ opacity: 0, y: custom.y, filter: 'blur(6px)' }),
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
}: Props) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      custom={{ y }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
