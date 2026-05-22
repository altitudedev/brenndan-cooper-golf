import Image from 'next/image';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import Aurora from '@/components/Aurora';
import Grain from '@/components/Grain';
import { site } from '@/lib/site';

/* Cards defined inline below — each gets a distinct visual treatment */

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'phone':
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        headline="Let’s Talk About Your Game"
        sub="Phone, email, or the booking calendar — pick what works. Brenndan and the team get back fast."
        image="/uploads/2025/12/480830633_2875408172646768_479899102765999617_n.jpg"
        primaryCta={{ label: 'Book Now', href: site.bookNowUrl, external: true }}
        secondaryCta={{ label: 'See Programs', href: '/coaching' }}
      />

      {/* Floating portrait + greeting + contact methods */}
      <section className="relative bg-white pb-24 md:pb-32">
        {/* Portrait — overlaps the hero above, becomes the focal point */}
        <div className="relative z-20 mx-auto -mt-28 flex justify-center sm:-mt-36 md:-mt-44">
          <Reveal y={32}>
            <div className="group relative">
              {/* Soft crimson aura */}
              <div
                aria-hidden
                className="absolute inset-0 -m-8 rounded-full bg-crimson/25 blur-3xl"
              />
              {/* Spinning conic ring */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full opacity-80"
                style={{
                  background:
                    'conic-gradient(from 90deg, rgba(194,53,40,0.85) 0deg, rgba(194,53,40,0) 120deg, rgba(194,53,40,0) 240deg, rgba(255,87,72,0.6) 360deg)',
                  animation: 'spin 14s linear infinite',
                  WebkitMask:
                    'radial-gradient(closest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
                  mask: 'radial-gradient(closest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
                }}
              />
              {/* Portrait */}
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-[6px] border-white bg-navy-950 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)] sm:h-64 sm:w-64 md:h-72 md:w-72">
                <Image
                  src="/uploads/2025/12/fb5a20481c79f848dd7d0d1b66b83a20_l.jpg"
                  alt="Brenndan Cooper"
                  fill
                  priority
                  sizes="288px"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[1500ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              {/* Availability pill */}
              <div className="absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_18px_30px_-15px_rgba(0,0,0,0.35)] ring-1 ring-navy-950/5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-950">
                  Taking new players
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Greeting */}
        <div className="relative z-10 mx-auto mt-14 max-w-2xl px-6 text-center sm:px-8 md:mt-16">
          <Reveal>
            <div className="eyebrow">Hi, I’m Brenndan</div>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-navy-950 sm:text-4xl md:text-5xl">
              Let’s talk about your game.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
              The fastest way to get started is a call, an email, or the booking calendar. I’ll personally reach back out within a day to set up an assessment.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric contact bento — Book Now is the hero card */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8 md:mt-20">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
            {/* Call */}
            <Reveal delay={0} className="contents">
              <a
                href={`tel:${site.phone.replace(/\D/g, '')}`}
                className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-navy-950/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-crimson hover:shadow-[0_30px_60px_-30px_rgba(4,22,39,0.4)]"
              >
                {/* Decorative dots */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(4,22,39,0.06) 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/10 text-navy-950 transition-colors duration-500 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white">
                    <Icon name="phone" />
                  </div>
                  <span className="eyebrow">Call</span>
                </div>
                <div className="relative z-10">
                  <div className="font-display text-2xl uppercase leading-none tracking-tight text-navy-950 sm:text-3xl">
                    {site.phone}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted">
                    Mon – Fri · 8 AM – 6 PM CT
                  </div>
                </div>
              </a>
            </Reveal>

            {/* Email — body font, lowercase, break-all so it never overflows */}
            <Reveal delay={0.06} className="contents">
              <a
                href={`mailto:${site.email}`}
                className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-navy-950/10 bg-bone p-6 transition duration-500 hover:-translate-y-1 hover:border-crimson hover:shadow-[0_30px_60px_-30px_rgba(4,22,39,0.4)]"
              >
                {/* Diagonal stripes */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #041627 0px, #041627 1px, transparent 1px, transparent 12px)',
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/10 text-navy-950 transition-colors duration-500 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white">
                    <Icon name="mail" />
                  </div>
                  <span className="eyebrow">Email</span>
                </div>
                <div className="relative z-10">
                  <div className="break-all font-body text-base font-semibold leading-tight text-navy-950 sm:text-lg">
                    {site.email}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted">
                    Reply within 24 hours
                  </div>
                </div>
              </a>
            </Reveal>

            {/* Book Now — featured crimson hero card, spans 2 cols × 2 rows on lg */}
            <Reveal delay={0.12} className="contents">
              <a
                href={site.bookNowUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl bg-crimson p-7 text-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_rgba(194,53,40,0.65)] sm:p-9 lg:col-span-2 lg:row-span-2"
                style={{
                  backgroundImage:
                    'linear-gradient(140deg, #C23528 0%, #961408 100%)',
                }}
              >
                {/* Spinning conic accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-40"
                  style={{
                    background:
                      'conic-gradient(from 30deg, rgba(255,255,255,0.35) 0deg, rgba(255,255,255,0) 110deg, rgba(255,255,255,0) 250deg, rgba(255,255,255,0.25) 360deg)',
                    animation: 'spin 16s linear infinite',
                  }}
                />
                {/* Grain */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                    backgroundSize: '240px 240px',
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                    <Icon name="calendar" />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    Booking open
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="eyebrow text-white/80">Book a Lesson</div>
                  <h3 className="mt-3 font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                    Schedule online
                  </h3>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85">
                    Pick a time for your Player & Game Assessment — the first step of every program.
                  </p>
                  <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em]">
                    Open Calendar
                    <span
                      aria-hidden
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-crimson transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            {/* Visit — wide card with facility image and address */}
            <Reveal delay={0.18} className="contents">
              <a
                href={site.location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative col-span-2 row-span-1 flex items-end overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-950 p-6 text-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(4,22,39,0.5)] lg:col-span-2"
              >
                <Image
                  src="/uploads/2026/02/facility3.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                  className="opacity-65 transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(110deg, rgba(4,22,39,0.85) 0%, rgba(4,22,39,0.55) 55%, rgba(4,22,39,0.4) 100%)',
                  }}
                />

                <div className="relative z-10 flex w-full items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                        <Icon name="pin" />
                      </div>
                      <span className="eyebrow text-white/70">Visit</span>
                    </div>
                    <div className="mt-4 font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl">
                      {site.location.name}
                    </div>
                    <div className="mt-2 text-[13px] text-white/80">
                      {site.location.street} · {site.location.cityState}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-950 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Directions / map */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <Aurora tone="mixed" intensity={0.6} />
        <Grain opacity={0.08} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="eyebrow">Find Us</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight sm:text-5xl">
              <span className="shimmer-text">{site.location.name}</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-white/80">
              Lessons and program training take place at Staley Farms Golf Club in Kansas City — full short-game area, range, putting green, and on-course access.
            </p>

            <div className="mt-8 space-y-4 text-[15px] text-white/85">
              <div className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">Address</div>
                  <div className="mt-1">{site.location.street}</div>
                  <div>{site.location.cityState}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">Phone</div>
                  <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="mt-1 block hover:text-crimson">
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">Email</div>
                  <a href={`mailto:${site.email}`} className="mt-1 block break-all hover:text-crimson">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary glow-ring"
              >
                Get Directions →
              </a>
              <a href={site.bookNowUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Book a Lesson
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/55">
              <span>Follow</span>
              <span className="h-px w-8 bg-white/20" />
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-crimson hover:text-crimson"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-crimson hover:text-crimson"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:aspect-[5/4]">
              <iframe
                title="Map to Staley Farms Golf Club"
                src={site.location.mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) saturate(0.75) contrast(1.05)' }}
              />
              {/* Pin badge */}
              <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-navy-950/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                Brenndan Cooper Golf
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
