import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import Aurora from '@/components/Aurora';
import Grain from '@/components/Grain';
import CountUp from '@/components/CountUp';
import TrophyBento from '@/components/TrophyBento';
import { site } from '@/lib/site';

const achievements = [
  'National Collegiate Champion',
  'National Player of the Year',
  '8 — State Championship Winners',
  '4 — Kansas City Jr Championship Winners',
  '3 — Kansas City Jr Player of the Year Winners',
  '2 — Kansas Women’s Match Play Winners',
  '2 — Kansas City High School Player of the Year Winners',
  'Missouri Jr Boys Player of the Year',
  'Midwest PGA Jr Student Athlete Award Winner',
  'Drive, Chip & Putt Finals Participant at Augusta National',
  'AJGA Champions',
  'USGA Amateur Qualifiers',
  'USGA Jr Amateur Qualifiers',
  'High School District & Conference Champions',
  'US Kids Golf Series Champions',
];

const services = [
  {
    title: 'Individual Player & Game Assessment',
    body:
      'The first thing we do with players in this program is a Player/Game Assessment. We talk through your current game and start to set goals.',
    href: '/coaching',
  },
  {
    title: 'Weekly Supervised Practice',
    body:
      'Two hours each week in supervised group practice — full swing, wedge/chipping, putting, course management, mental training or a mix.',
    href: '/coaching',
  },
  {
    title: 'Online Training Space',
    body:
      'A personal online training space with videos and notes from individual sessions, practice plans, and program information.',
    href: '/coaching',
  },
];

const collegeLogos = [
  'a','as','at','bg','bu','cc','cm','cmu','d','dr','e','h','ls','lu','m','ms','msu','mw','nt','nu','pu','r','sbu','tmu','umkc','w','wj',
];

const testimonials = [
  {
    quote:
      'Brenndan’s program developed every part of my game — technical, physical, and mental. The structure and accountability is what separates it.',
    name: 'Kenny Trapp',
    title: 'Head Golf Coach, Dallas Baptist · 2021 National Champs',
  },
  {
    quote:
      'My short game went from a liability to a weapon. The skills assessments make practice intentional instead of random.',
    name: 'Junior Tour Player',
    title: 'AJGA Champion',
  },
  {
    quote:
      'The online training space and weekly group practices keep me on track between lessons. It’s the closest thing to a tour-level setup.',
    name: 'College Recruit',
    title: 'D1 Scholarship Recipient',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Brenndan Cooper Golf"
        headline="Serious Coaching for Serious Players"
        sub="Long-term player development from a two-time Midwest PGA Teacher of the Year. Built for competitive golfers who want to seriously compete."
        image="/uploads/2026/02/facility1.jpg"
        primaryCta={{ label: 'Explore Our Services', href: '/coaching' }}
        secondaryCta={{ label: 'Book Now', href: site.bookNowUrl, external: true }}
      />

      {/* Three pillars */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <div className="eyebrow">The Program</div>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold uppercase tracking-tight text-navy-950 sm:text-4xl md:text-5xl">
              A complete training environment.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                k: '01',
                t: 'Long Term Coaching',
                b: 'A long-term player development program that creates an extensive learning and training environment for serious competitive golfers.',
              },
              {
                k: '02',
                t: 'Technology',
                b: 'Trackman, force plates, video and short-game tracking integrated into every session so progress is measured, not guessed.',
              },
              {
                k: '03',
                t: 'Coaching Facilities',
                b: 'Year-round indoor and outdoor training space — short game, full swing, putting, and on-course assessment.',
              },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 0.08} className="group relative">
                <div className="absolute -inset-x-2 -inset-y-4 -z-10 rounded-3xl bg-gradient-to-br from-bone to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="font-display text-7xl leading-none text-bone transition-colors duration-500 group-hover:text-crimson/15">
                  {c.k}
                </div>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">{c.t}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{c.b}</p>
                <div className="mt-6 h-px w-12 bg-crimson transition-all duration-500 group-hover:w-24" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Player achievements + stats */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <Aurora tone="mixed" intensity={0.7} />
        <Grain opacity={0.08} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="eyebrow">Player Achievements</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <span className="shimmer-text">Achievements</span> from players in our program
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-[15px] text-white/85 sm:grid-cols-2">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" /> {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 self-start">
            {[
              { v: 20, suf: '+', l: 'Years of Experience' },
              { v: 2, suf: '×', l: 'Midwest PGA Teacher of the Year' },
              { v: 50, suf: '+', l: 'College Scholarships Earned' },
              { v: 100, suf: '+', l: 'First-Place Tournament Finishes' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08} className="glass rounded-2xl p-7">
                <div className="font-display text-5xl text-crimson sm:text-6xl">
                  <CountUp to={s.v} suffix={s.suf} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">
                  {s.l}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award-winning intro */}
      <section className="relative bg-bone py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-navy-950 glow-ring">
              <Image
                src="/uploads/2025/12/fb5a20481c79f848dd7d0d1b66b83a20_l.jpg"
                alt="Brenndan Cooper on the lesson tee"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
              />

              {/* Stat overlay */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                <div className="glass-dark rounded-xl px-3 py-2 text-xs text-white">
                  <div className="font-display text-lg leading-none">
                    <CountUp to={2025} duration={1.8} />
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/70">
                    Player Dev Award
                  </div>
                </div>
                <div className="glass-dark rounded-xl px-3 py-2 text-xs text-white">
                  <div className="font-display text-lg leading-none">2×</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/70">
                    PGA TOTY
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">Award Winning</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight text-navy-950 sm:text-5xl md:text-6xl">
              Two-time Midwest PGA Teacher of the Year
            </h2>
            <p className="mt-7 text-[16px] leading-relaxed text-muted">
              Brenndan has been recognized by Golf Digest as one of the Best Young Teachers in America and a Top Teacher in the State of Missouri. He has coached players on the PGA Tour, Champions Tour, Korn Ferry Tour, LPGA Tour, Symetra Tour and other mini tours.
            </p>
            <ul className="mt-8 space-y-2.5 text-sm text-navy-950">
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-crimson" /> 2025 — Player Development Award, KCMO Chapter</li>
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-crimson" /> 2023 — Teacher & Coach of the Year Award, KCMO Chapter</li>
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-crimson" /> 2× — Midwest Section PGA Teacher of the Year</li>
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-crimson" /> Golf Digest — Best Young Teachers in America</li>
            </ul>
            <Link href="/about" className="btn btn-primary glow-ring mt-10">Learn More</Link>
          </Reveal>
        </div>
      </section>

      {/* College scholarships marquee */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
          <Reveal>
            <div className="eyebrow">Where Our Players Go</div>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">
              Scholarships Earned at
            </h2>
          </Reveal>
        </div>
        <div className="relative mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 px-6">
            {[...collegeLogos, ...collegeLogos].map((slug, idx) => {
              const ext = ['d', 'ms'].includes(slug) ? 'png' : 'jpg';
              return (
                <div
                  key={`${slug}-${idx}`}
                  className="relative h-16 w-32 shrink-0 grayscale opacity-70 transition duration-500 hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={`/uploads/2026/01/${slug}.${ext}`}
                    alt={`${slug} logo`}
                    fill
                    sizes="128px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              );
            })}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* Trophy room (bento) */}
      <section className="relative isolate overflow-hidden bg-bone py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-160px] h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(194,53,40,0.18) 0%, transparent 65%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div className="eyebrow">The Trophy Room</div>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-navy-950 sm:text-5xl md:text-6xl">
                Champions <em className="not-italic text-crimson">made</em> here.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                State titles, national championships, AJGA wins, and college scholarships — earned by the players who put in the work.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <TrophyBento />
          </div>
        </div>
      </section>

      {/* Service selector */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-3xl">
            <div className="eyebrow">Coaching Services</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl md:text-6xl">
              Select a coaching service
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-bone p-8 transition duration-500 hover:-translate-y-1 hover:border-crimson hover:bg-navy-950 hover:text-white hover:shadow-[0_30px_60px_-30px_rgba(4,22,39,0.5)]"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(circle, rgba(194,53,40,0.55) 0%, transparent 70%)' }}
                  />
                  <span className="font-display text-sm text-crimson">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted group-hover:text-white/75">
                    {s.body}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson group-hover:text-white">
                    Get Started <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/coaching" className="btn btn-primary glow-ring">See all services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <Aurora tone="crimson" intensity={0.6} />
        <Grain opacity={0.08} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <div className="eyebrow">What Students Say</div>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="shimmer-text">Trusted</span> by players, coaches, and college programs
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} as="article">
                <figure className="glass relative h-full rounded-2xl p-7 transition duration-500 hover:-translate-y-1">
                  <span aria-hidden className="font-display text-5xl leading-none text-crimson">“</span>
                  <blockquote className="mt-2 text-[15px] leading-relaxed text-white/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-white/60">
                    <span className="text-white">{t.name}</span>
                    <div className="mt-1 text-[10px]">{t.title}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-bone py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(194,53,40,0.18) 0%, transparent 65%)' }}
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">
          <Reveal>
            <div className="eyebrow">Ready to commit to the work?</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl md:text-6xl">
              Coaching for golfers who are serious about their game.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] text-muted">
              Whether you’re starting your competitive journey or chasing a college scholarship, we’ll build a program around your goals.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={site.bookNowUrl} target="_blank" rel="noreferrer" className="btn btn-primary glow-ring">
                Book Now
              </a>
              <Link href="/contact" className="btn btn-outline">
                Contact Brenndan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
