type Tone = 'crimson' | 'navy' | 'mixed';

type Props = {
  tone?: Tone;
  className?: string;
  intensity?: number;
};

const tones: Record<Tone, string[]> = {
  crimson: ['rgba(194,53,40,0.45)', 'rgba(255,87,72,0.32)', 'rgba(150,20,8,0.4)'],
  navy: ['rgba(43,81,115,0.55)', 'rgba(7,34,59,0.6)', 'rgba(4,35,66,0.55)'],
  mixed: ['rgba(194,53,40,0.4)', 'rgba(43,81,115,0.55)', 'rgba(4,22,39,0.55)'],
};

export default function Aurora({ tone = 'mixed', className = '', intensity = 0.85 }: Props) {
  const [a, b, c] = tones[tone];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity: intensity }}
    >
      <div
        className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full blur-3xl will-change-transform animate-aurora-1"
        style={{ background: `radial-gradient(circle, ${a} 0%, transparent 65%)` }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[620px] w-[620px] rounded-full blur-3xl will-change-transform animate-aurora-2"
        style={{ background: `radial-gradient(circle, ${b} 0%, transparent 65%)` }}
      />
      <div
        className="absolute bottom-[-180px] left-1/3 h-[560px] w-[560px] rounded-full blur-3xl will-change-transform animate-aurora-3"
        style={{ background: `radial-gradient(circle, ${c} 0%, transparent 65%)` }}
      />
    </div>
  );
}
