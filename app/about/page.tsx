import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import Aurora from '@/components/Aurora';
import Grain from '@/components/Grain';
import { site } from '@/lib/site';

const awards = [
  'Best Young Teachers in America — Golf Digest',
  'Top Teachers in State — Golf Digest',
  '2025 — Player Development Award — KCMO Chapter',
  '2× — Teacher of the Year Award — Midwest Section PGA',
  '2023 — Teacher & Coach of the Year Award — KCMO Chapter',
];

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
  'USGA Amateur & Jr Amateur Qualifiers',
  'High School District & Conference Champions',
  'US Kids Golf Series Champions',
];

const collegeLogos = [
  'a','as','at','bg','bu','cc','cm','cmu','d','dr','e','h','ls','lu','m','ms','msu','mw','nt','nu','pu','r','sbu','tmu','umkc','w','wj',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="Meet Brenndan"
        sub="Two-time Midwest PGA Teacher of the Year, Golf Digest Best Young Teacher in America, and Director of Instruction for serious competitive golfers."
        image="/uploads/2025/12/fb5a20481c79f848dd7d0d1b66b83a20_l.jpg"
        primaryCta={{ label: 'Book Now', href: site.bookNowUrl, external: true }}
        secondaryCta={{ label: 'See Programs', href: '/coaching' }}
      />

      {/* Bio */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-950">
            <Image
              src="/uploads/2025/12/fb5a20481c79f848dd7d0d1b66b83a20_l.jpg"
              alt="Brenndan Cooper"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="eyebrow">Award Winning Coach</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight text-navy-950 sm:text-5xl md:text-6xl">
              Brenndan Cooper
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted">
              <p>
                Brenndan has been recognized by Golf Digest as one of the Best Young Teachers in America as well as a Top Teacher in the State of Missouri. A two-time recipient of the Midwest Section PGA Teacher of the Year and KCMO Teacher & Coach of the Year awards, Brenndan has had the opportunity to coach players on the PGA Tour, Champions Tour, Korn Ferry Tour, LPGA Tour, Symetra Tour and other Mini Tours.
              </p>
              <p>
                He has also been recognized as one of the top junior golf coaches in the area, having received the Midwest Section PGA Player Development Award as well as the Youth Player Development Awards. Brenndan’s success with his young competitive players is evident — he has had the great pleasure of helping numerous high school players receive college golf scholarships. His players have also won National Championships, State Championships, AJGA events along with local Player of the Year honors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <Aurora tone="mixed" intensity={0.65} />
        <Grain opacity={0.08} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-14 md:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <div className="eyebrow">Awards</div>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight sm:text-5xl">
                <span className="shimmer-text">Recognition</span> that backs the program.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {awards.map((a, i) => (
                  <Reveal
                    key={a}
                    delay={0.05 + i * 0.05}
                    as="li"
                    className="group flex items-start gap-4 border-b border-white/10 pb-4 text-[15px] text-white/90 transition-colors hover:text-white"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson transition-all duration-300 group-hover:w-6" />
                    <span>{a}</span>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Player achievements */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="eyebrow">Player Achievements</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-tight text-navy-950 sm:text-5xl md:text-6xl">
            Achievements from players in our program
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 text-[15px] text-navy-950 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Schools logos grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="eyebrow text-center">College Programs</div>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold uppercase tracking-tight text-navy-950 sm:text-4xl">
            Where our players have earned scholarships
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
            {collegeLogos.map((slug, i) => {
              const ext = ['d', 'ms'].includes(slug) ? 'png' : 'jpg';
              return (
                <Reveal
                  key={slug}
                  delay={(i % 7) * 0.04}
                  className="relative aspect-square overflow-hidden rounded-lg bg-bone p-4 transition hover:bg-white hover:shadow-md"
                >
                  <Image
                    src={`/uploads/2026/01/${slug}.${ext}`}
                    alt={`${slug} logo`}
                    fill
                    sizes="120px"
                    style={{ objectFit: 'contain' }}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-navy-950 sm:text-5xl">
            Ready to work with Brenndan?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Book a Player & Game Assessment and start building a plan around your goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.bookNowUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book Now
            </a>
            <Link href="/contact" className="btn btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
