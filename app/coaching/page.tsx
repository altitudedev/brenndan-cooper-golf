import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import Aurora from '@/components/Aurora';
import Grain from '@/components/Grain';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const programModules = [
  {
    title: 'Individual Player & Game Assessment',
    body:
      'The very first thing we do with players in this program is give them a Player/Game Assessment. During this assessment we will talk with the player about their current game and start to set goals. We will look at certain areas of their game and put together our initial "plan of attack" and practice plan.',
  },
  {
    title: 'Individual Private Instruction',
    body:
      'The program includes individual 1-on-1 instruction training. The amount of individual sessions will depend on the length of the player’s program.',
  },
  {
    title: 'Weekly Supervised Practice Sessions',
    body:
      '2 hours each week players can take part in supervised group practice sessions. These supervised practices could be full swing, wedge/chipping, putting, course management sessions, mental training — or a combination of everything.',
  },
  {
    title: 'Online Training Space',
    body:
      'Players will have access to their own personal online training space. Their space will have videos and notes from individual instruction sessions, personal practice plans, important information as it relates to the group, plus more.',
  },
  {
    title: 'Mental Training & Performance Coaching',
    body:
      'The mental game has remained an elusive thing. Every golfer knows about its importance — few know how to train it. Players receive a detailed mental game assessment and access to an online mental training and performance space.',
  },
  {
    title: 'Skills Assessments',
    body:
      'Comprehensive skills assessments and evaluations let us put players on a practice regimen that focuses directly on any critical weaknesses, and helps establish carefully-crafted performance goals.',
  },
  {
    title: 'Comprehensive Short Game Evaluations',
    body:
      'Our short game test analyzes each player’s short game condition and motivates improvement. Through many years of research we know how players at every level should score in order to perform well in tournaments — and we use that to prioritize practice.',
  },
  {
    title: 'Equipment Evaluation & Fitting',
    body:
      'Players go through an extensive equipment evaluation and club fitting session to ensure their gear is built for their game.',
  },
];

const durations = ['3 Months', '6 Months', '9 Months', '12 Months'];

export default function CoachingPage() {
  return (
    <>
      <Hero
        eyebrow="Brenndan Cooper Golf"
        headline="Turning Golfers into Players"
        sub="A long-term player development program for golfers starting their competitive journey — or stepping up to seriously compete."
        image="/uploads/2025/12/Photo-Dec-11-2025-2-48-00-PM.jpg"
        primaryCta={{ label: 'Book Now', href: site.bookNowUrl, external: true }}
        secondaryCta={{ label: 'Contact Brenndan', href: '/contact' }}
      />

      {/* Intro */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="eyebrow">Coaching Programs</div>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl md:text-6xl">
            Built for golfers who are serious about getting better.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[16px] text-muted">
            Our Coaching Program is a long-term player development program that creates an extensive learning and training environment. It’s a comprehensive program for golfers starting their competitive journey or for players who want to take their game to a new level to seriously compete.
          </p>
        </div>
      </section>

      {/* Long Term Program durations */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <Aurora tone="mixed" intensity={0.7} />
        <Grain opacity={0.08} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="eyebrow">Long Term Coaching Program</div>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight sm:text-5xl">
                <span className="shimmer-text">Choose</span> your duration.
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-white/80">
                This program can be done in either a 3, 6, 9, or 12-month option, and is designed from top to bottom to deliver a complete training and improvement experience. Students are immersed in an atmosphere where everything from the game’s basic fundamentals to the little-known subtle keys to success are incorporated into each session.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 self-start">
              {durations.map((d, i) => (
                <Reveal key={d} delay={i * 0.08}>
                  <div className="group glass relative overflow-hidden rounded-2xl p-7 transition duration-500 hover:-translate-y-1 hover:border-crimson">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                      style={{ background: 'radial-gradient(circle, rgba(194,53,40,0.55) 0%, transparent 70%)' }}
                    />
                    <div className="text-xs uppercase tracking-[0.22em] text-white/55">Option 0{i + 1}</div>
                    <div className="mt-2 font-display text-4xl uppercase tracking-tight">{d}</div>
                    <div className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-crimson">
                      Inquire <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Module grid */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="eyebrow">What’s Included</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl md:text-6xl">
              Eight pillars of player development.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {programModules.map((m, i) => (
              <Reveal
                key={m.title}
                delay={(i % 2) * 0.08}
                as="article"
                className="group relative flex flex-col rounded-2xl border border-navy-950/10 bg-white p-8 transition hover:-translate-y-0.5 hover:border-crimson hover:shadow-lg"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-crimson">0{i + 1}</span>
                  <h3 className="font-display text-xl uppercase tracking-tight text-navy-950 sm:text-2xl">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-height assessment CTA with background image */}
      <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-navy-950 text-white">
        {/* Background image */}
        <Image
          src="/uploads/2026/02/facility2.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="opacity-55"
        />
        <Aurora tone="crimson" intensity={0.7} />
        {/* Veil */}
        <div
          aria-hidden
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(220deg, rgba(7,34,59,0.78) 0%, rgba(4,22,39,0.82) 60%, rgba(4,22,39,0.92) 100%)',
          }}
        />
        <Grain opacity={0.07} />
        {/* Top curve so it tucks under the previous white section nicely */}
        <svg
          aria-hidden
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 top-[-1px] z-[3] h-[50px] w-full fill-white"
        >
          <path d="M0,0v40C200,60,400,20,500,18C600,16,800,55,1000,40V0H0z" />
        </svg>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal>
            <div className="eyebrow">Step One</div>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
              Start with an <span className="shimmer-text">assessment.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Every program starts with a Player & Game Assessment so we can set goals and build the right plan for you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={site.bookNowUrl} target="_blank" rel="noreferrer" className="btn btn-primary glow-ring">
                Book Now
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Ask a Question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
