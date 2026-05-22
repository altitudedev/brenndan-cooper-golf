import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-11">
              <Image src={site.logo} alt={site.name} fill sizes="44px" style={{ objectFit: 'contain' }} />
            </div>
            <span className="font-display text-lg uppercase tracking-[0.22em]">{site.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {site.tagline}. Long-term player development from a two-time Midwest PGA Teacher of the Year.
          </p>
          <a href={site.bookNowUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-7">
            Book Now
          </a>
        </div>

        <div>
          <div className="eyebrow text-white/60">Explore</div>
          <ul className="mt-4 space-y-2.5 font-display text-lg uppercase tracking-wide">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/85 hover:text-crimson">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow text-white/60">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="hover:text-white">{site.phone}</a>
            </li>
          </ul>
          <div className="eyebrow mt-8 text-white/60">Follow</div>
          <div className="mt-3 flex gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-crimson hover:text-crimson"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-crimson hover:text-crimson"
              aria-label="Facebook"
            >
              FB
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.22em] text-white/50 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} Brenndan Cooper Golf. All Rights Reserved.</span>
          <span>Built for Serious Players.</span>
        </div>
      </div>
    </footer>
  );
}
