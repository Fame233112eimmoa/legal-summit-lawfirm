import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const heroImage =
  'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1800&q=80';
const aboutImage =
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80';
const testimonialBackground =
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80';

const testimonials = [
  {
    quote:
      'The team provided clear, reassuring advice and handled my matter with real care. Every step was explained well, and I always felt supported.',
    name: 'Charlotte Bennett',
    location: 'United Kingdom',
  },
  {
    quote:
      'Professional, measured, and highly responsive from beginning to end. Legal Summit Law Firm helped make a difficult process far more manageable.',
    name: 'Daniel Hughes',
    location: 'United Kingdom',
  },
];

export const metadata: Metadata = {
  title: 'Legal Summit Law Firm | Solicitors & Legal Services',
  description:
    'Legal Summit Law Firm provides professional legal services, consultation, dispute resolution, corporate law, family law, and legal representation.',
  alternates: {
    canonical: 'https://legalsummitlawfirm.com/',
  },
};

function GoldLine() {
  return <span className="block h-px w-14 bg-[#d5ab56]" />;
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#d5ab56]">
      <path d="M12 2.75a6.75 6.75 0 0 0-6.75 6.75c0 4.67 5.01 10.73 6.14 12.03a.78.78 0 0 0 1.22 0c1.13-1.3 6.14-7.36 6.14-12.03A6.75 6.75 0 0 0 12 2.75Zm0 9.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#d5ab56]">
      <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-[#d5ab56]">
      <path d="M11 3h2v2.07c1.85.17 3.52.86 4.83 1.93h2.17v2h-1.07l1.83 3.67a1 1 0 0 1-.9 1.45h-4.72a1 1 0 0 1-.9-1.45L16.1 9H13v10h3v2H8v-2h3V9H7.9l1.83 3.67a1 1 0 0 1-.9 1.45H4.11a1 1 0 0 1-.9-1.45L5.04 9H4V7h2.17A8.97 8.97 0 0 1 11 5.07V3Zm-4.28 8 .72-1.44L8.16 11H6.72Zm8.56 0h1.44l-.72-1.44L15.28 11Z" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-[#d5ab56]">
      <path d="M6 3h2v2h8.59L18 6.41 15.41 9 18 11.59 16.59 13H8v8H6V3Z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-[#d5ab56]">
      <path d="M10.62 10.79c0 3.6-2.03 6.07-5.62 7.07l-.75-1.74c2-.76 3.02-1.94 3.25-3.75H4.25V4.75h6.37v6.04Zm9 0c0 3.6-2.03 6.07-5.62 7.07l-.75-1.74c2-.76 3.02-1.94 3.25-3.75h-3.25V4.75h6.37v6.04Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f7f1e8] text-[#211b14]">
      <section
        className="relative min-h-screen overflow-hidden bg-[#f7f1e8]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,248,238,0.78), rgba(244,233,214,0.82)), url(${heroImage})`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-48 sm:px-8 sm:pb-24 sm:pt-52 lg:items-end lg:px-10 lg:pb-14 lg:pt-44">
          <div className="w-full py-12 sm:py-16 lg:py-0">
            <div className="max-w-[72rem]">
              <div className="mb-12 mt-10 flex max-w-[20rem] items-center gap-4 sm:mb-14 sm:mt-12 sm:max-w-none sm:gap-5">
                <GoldLine />
                <p className="text-[0.95rem] font-medium leading-relaxed tracking-[0.03em] text-[#a97524] sm:text-[1.1rem] lg:text-[1.2rem]">
                  Solicitors, consultations, and legal representation shaped around your goals
                </p>
              </div>

              <h1 className="max-w-[19rem] font-serif text-[46px] font-medium leading-[1.12] tracking-[-0.02em] text-[#1f160f] sm:max-w-[40rem] sm:text-[60px] sm:leading-[1.12] lg:max-w-[56rem] lg:text-[72px] lg:leading-[1.1]">
                Legal Summit Law Firm
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-[#5a4b3b] sm:text-[1.18rem]">
                Legal Summit Law Firm provides professional legal services for individuals, families, business owners, and organisations
                seeking clear legal consultation, dispute resolution support, corporate law guidance, family law advice, and reliable
                representation. We focus on practical next steps, careful preparation, and responsive communication so clients can move
                forward with confidence when legal issues become urgent, sensitive, or commercially important.
              </p>
            </div>

            <div className="mt-24 border-t border-[#d7c7b2] pt-12 sm:mt-28 sm:pt-14 lg:mt-24">
              <div className="grid gap-14 md:grid-cols-2 md:gap-16">
                <div className="flex items-start gap-5">
                  <LocationIcon />
                  <div>
                    <p className="text-base font-semibold text-[#a97524]">Our Location</p>
                    <p className="mt-5 font-serif text-[1.95rem] leading-tight text-[#1f160f] sm:text-[2.45rem]">
                      Bristol, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <PhoneIcon />
                  <div>
                    <p className="text-base font-semibold text-[#a97524]">Free Review</p>
                    <p className="mt-5 font-serif text-[1.95rem] leading-tight text-[#1f160f] sm:text-[2.45rem]">
                      +44 20 7946 0958
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f0] px-6 py-24 text-[#171411] sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <div className="flex items-center gap-5">
              <GoldLine />
              <p className="text-base font-medium text-[#7d6540] sm:text-lg">
                Professional and Experienced Solicitors You Can Trust
              </p>
            </div>

            <h2 className="mt-8 font-serif text-[2.9rem] leading-tight sm:text-[4rem]">
              Professional legal services built around clarity and results
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-9 text-[#38302a] sm:text-[1.18rem]">
              <p>
                Legal Summit Law Firm supports clients across the United Kingdom with legal consultation that is practical, commercially
                aware, and tailored to the realities of each matter. We advise on dispute resolution, contract concerns, negotiation
                strategy, business issues, and personal legal questions with an emphasis on plain language, timely updates, and clear
                options from the start.
              </p>
              <p>
                Our family law support includes guidance on separation, divorce, financial arrangements, child-related issues, property
                concerns, and other sensitive matters where steady advice and confidentiality are essential. We approach each case with
                care, measured planning, and a strong commitment to protecting our clients&apos; interests while working toward stable,
                realistic outcomes.
              </p>
              <p>
                We also provide legal representation for clients who need structured support with formal correspondence, negotiations,
                risk assessment, and ongoing case management. Whether the priority is resolving a dispute efficiently, protecting a
                business position, or obtaining dependable advice before making an important decision, our firm is built to deliver
                thoughtful service, consistent communication, and focused legal strategy.
              </p>
            </div>

            <div className="mt-14 grid gap-8 border-t border-[#ddd2c0] pt-10 sm:grid-cols-2">
              <div>
                <ScaleIcon />
                <h3 className="mt-5 font-serif text-[1.95rem] leading-tight">5+ Years of Experience</h3>
                <p className="mt-4 text-lg leading-8 text-[#50463d]">
                  Providing trusted legal consultation, case preparation, and representation for clients across the United Kingdom.
                </p>
              </div>

              <div>
                <FlagIcon />
                <h3 className="mt-5 font-serif text-[1.95rem] leading-tight">Defining Success</h3>
                <p className="mt-4 text-lg leading-8 text-[#50463d]">
                  Achieving strong outcomes through dispute resolution planning, sound judgment, and responsive client care.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/team"
                className="inline-flex items-center justify-center border border-[#c79a38] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#5f4622] transition hover:bg-[#c79a38] hover:text-white"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          <div
            className="min-h-[640px] w-full bg-[#ddd3c5] lg:mt-2"
            style={{
              backgroundImage: `url(${aboutImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            aria-label="Solicitor portrait placeholder"
          />
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#f3e9d8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(251,244,234,0.92), rgba(244,232,214,0.9)), url(${testimonialBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden bg-[#eadcc8] sm:min-h-[540px] lg:min-h-[640px]">
            <Image
              src="/lawyer-standing.jpg"
              alt="Solicitor standing in office"
              fill
              priority
              className="object-cover object-[center_16%] lg:object-[center_12%]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5ebdd]/25 via-transparent to-white/20" />
          </div>

          <div className="flex flex-col justify-center lg:pl-4">
            <div className="flex items-center gap-5">
              <GoldLine />
              <p className="text-base font-medium text-[#a97524] sm:text-lg">We Look At The Law Differently</p>
            </div>

            <h2 className="mt-8 max-w-3xl font-serif text-[3rem] leading-tight text-[#1f160f] sm:text-[4rem]">
              What Our Clients Say
            </h2>

            <div className="mt-12 space-y-10">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.name}
                  className={`${index !== testimonials.length - 1 ? 'border-b border-[#ddcdb7] pb-10' : ''}`}
                >
                  <QuoteIcon />
                  <p className="mt-6 max-w-3xl text-[1.32rem] leading-10 text-[#3c2f24]">{testimonial.quote}</p>
                  <div className="mt-7 flex items-center gap-4 text-[#1f160f]">
                    <div className="h-px w-6 bg-[#a97524]" />
                    <div>
                      <p className="font-serif text-[1.6rem] leading-tight">{testimonial.name}</p>
                      <p className="mt-1 text-base text-[#7a6857]">{testimonial.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#d4aa4d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#15120e] transition hover:bg-[#c79a38]"
              >
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
