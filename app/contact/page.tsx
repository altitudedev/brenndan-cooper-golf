import Hero from '@/components/Hero';
import { site } from '@/lib/site';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        headline="Let’s Talk About Your Game"
        sub="Questions about programs, scheduling, or what coaching can do for you? Send a message and Brenndan or the team will get back to you."
        image="/uploads/2026/02/facility3.jpg"
        primaryCta={{ label: 'Book Now', href: site.bookNowUrl, external: true }}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.3fr]">
          {/* Info column */}
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Brenndan Cooper
            </h2>

            <ul className="mt-10 space-y-7">
              <li>
                <div className="eyebrow text-navy-950/60">Call</div>
                <a
                  href={`tel:${site.phone.replace(/\D/g, '')}`}
                  className="mt-2 block font-display text-2xl text-navy-950 hover:text-crimson sm:text-3xl"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <div className="eyebrow text-navy-950/60">Email</div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-all font-display text-2xl text-navy-950 hover:text-crimson sm:text-3xl"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <div className="eyebrow text-navy-950/60">Follow</div>
                <div className="mt-3 flex gap-3">
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/15 transition hover:border-crimson hover:text-crimson"
                  >
                    IG
                  </a>
                  <a
                    href={site.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/15 transition hover:border-crimson hover:text-crimson"
                  >
                    FB
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Form column */}
          <div className="rounded-2xl bg-bone p-7 sm:p-10">
            <div className="eyebrow">Send a Message</div>
            <h3 className="mt-3 font-display text-2xl uppercase tracking-tight text-navy-950 sm:text-3xl">
              Do you have any questions?
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
