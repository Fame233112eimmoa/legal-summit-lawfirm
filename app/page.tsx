import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteLogo from './components/site-logo';
import {
  firmInfo,
  overviewPoints,
  practiceAreaItems,
  processSteps,
  reasons,
  siteDescription,
  siteName,
  siteTagline,
  stats,
  testimonialItems,
} from './lib/site-data';

export const metadata: Metadata = {
  title: 'Las Vegas Legal Counsel',
  description:
    'Summit Legal Partner offers a premium, white-glove legal experience in Las Vegas with clear strategy, responsive counsel, and dependable representation.',
  alternates: {
    canonical: '/',
  },
};

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#be9761]">
      <path d="M12 2.75a6.75 6.75 0 0 0-6.75 6.75c0 4.67 5.01 10.73 6.14 12.03a.78.78 0 0 0 1.22 0c1.13-1.3 6.14-7.36 6.14-12.03A6.75 6.75 0 0 0 12 2.75Zm0 9.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#be9761]">
      <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-[#be9761]">
      <path d="M12 3.75A8.25 8.25 0 1 0 20.25 12 8.26 8.26 0 0 0 12 3.75Zm.75 4.5h-1.5v4.44l3.2 1.92.77-1.28-2.47-1.48V8.25Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="m13.72 5.47 6.03 6.03-6.03 6.03-1.06-1.06 4.22-4.22H4.25v-1.5h12.63l-4.22-4.22 1.06-1.06Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="text-[#211b14]">
      <section className="relative overflow-hidden px-6 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-18">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_right,rgba(190,151,97,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="pt-4 lg:pt-8">
              <div className="site-pill">Las Vegas, Nevada</div>
              <p className="section-label mt-6">{siteName}</p>
              <h1 className="mt-4 max-w-4xl font-serif text-[2.75rem] leading-[1.02] text-[#19120c] sm:text-[4rem] lg:text-[4.9rem]">
                Simple, strategic legal counsel for the moments that matter most.
              </h1>
              <p className="site-text-muted mt-5 max-w-3xl text-lg leading-8 sm:text-[1.12rem]">
                {siteDescription} We combine direct communication, careful preparation, and a more elevated client experience so legal
                work feels organized, understandable, and confidently managed from day one.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="site-button-primary gap-2">
                  Schedule Consultation
                  <ArrowIcon />
                </Link>
                <Link href="/practice-areas" className="site-button-secondary">
                  View Practice Areas
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="site-card-soft p-4">
                  <LocationIcon />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Office</p>
                  <p className="mt-2 font-serif text-[1.55rem] text-[#1c140d]">{firmInfo.location}</p>
                </div>
                <div className="site-card-soft p-4">
                  <PhoneIcon />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Direct</p>
                  <p className="mt-2 font-serif text-[1.55rem] text-[#1c140d]">{firmInfo.phone}</p>
                </div>
                <div className="site-card-soft p-4">
                  <ClockIcon />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Hours</p>
                  <p className="mt-2 font-serif text-[1.2rem] text-[#1c140d]">{firmInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="site-card-solid p-5 sm:p-6 lg:p-8">
              <div className="grid gap-4">
                <div className="site-card flex items-center justify-center p-6">
                  <SiteLogo variant="mark" size="hero" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="site-card-soft p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Brand Promise</p>
                    <p className="mt-3 font-serif text-2xl text-[#1c140d]">{siteTagline}</p>
                  </div>
                  <div className="site-card-soft p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Client Experience</p>
                    <p className="mt-3 text-base leading-7 text-[#594c40]">
                      Clean communication, discreet handling, and a more refined standard of legal support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-18 sm:px-8 sm:py-20 lg:px-10 lg:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-label">Selected Practice Areas</p>
            <h2 className="mt-4 max-w-xl font-serif text-[2.6rem] leading-tight text-[#19120c] sm:text-[3.5rem]">
              A modern legal practice shaped around clarity and composure.
            </h2>
            <p className="site-text-muted mt-5 max-w-xl text-lg leading-8">
              Our interface may be minimal, but the work behind it is rigorous. We focus on legal matters that demand careful judgment,
              clean execution, and steady communication.
            </p>

            <div className="mt-8 space-y-3">
              {overviewPoints.map((point) => (
                <div key={point} className="site-card-soft flex items-start gap-4 p-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#be9761]" />
                  <p className="site-text-muted text-base leading-7">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about" className="site-button-secondary">
                Learn About the Firm
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {practiceAreaItems.slice(0, 4).map((area) => (
              <article key={area.title} className="site-card-solid p-6">
                <div className="h-1.5 w-16 rounded-full bg-[#be9761]" />
                <h3 className="mt-5 font-serif text-[1.8rem] leading-tight text-[#1d150e]">{area.title}</h3>
                <p className="site-text-muted mt-3 leading-7">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#efefef] bg-white px-6 py-18 sm:px-8 sm:py-20 lg:px-10 lg:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2.3rem] border border-[#efefef] bg-[#fcfcfc] sm:min-h-[480px] lg:min-h-[560px]">
            <Image
              src="/lawyer-standing.jpg"
              alt="Attorney standing in office"
              fill
              priority
              className="object-cover object-[center_16%] lg:object-[center_12%]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/16 via-transparent to-white/18" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="site-card max-w-xs p-6">
                <p className="section-label">Premium Service</p>
                <p className="mt-3 font-serif text-2xl text-[#1d150e]">Carefully prepared. Quietly confident.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-4">
            <p className="section-label">How We Work</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[2.7rem] leading-tight text-[#1d150e] sm:text-[3.6rem]">
              Designed to keep legal work clear, composed, and moving forward.
            </h2>
            <p className="site-text-muted mt-5 max-w-2xl text-lg leading-8">
              We have rebuilt the experience around simplicity and signal. Every stage of the relationship is meant to feel more direct,
              better organized, and more premium than a typical legal website or intake process.
            </p>

            <div className="mt-8 space-y-3">
              {processSteps.map((step, index) => (
                <article key={step.title} className="site-card-solid p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f6f6f6] font-serif text-lg text-[#9b7440]">
                      {`0${index + 1}`}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#1d150e]">{step.title}</h3>
                      <p className="site-text-muted mt-3 leading-7">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.slice(0, 2).map((reason) => (
                <div key={reason.title} className="site-card-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">{reason.title}</p>
                  <p className="site-text-muted mt-3 text-sm leading-7">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-18 sm:px-8 sm:py-20 lg:px-10 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="site-card-solid p-7 lg:p-8">
              <p className="section-label">Why Clients Choose Us</p>
              <h2 className="mt-4 font-serif text-[2.45rem] leading-tight text-[#1d150e] sm:text-[3.2rem]">
                Refined legal support with real-world momentum.
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {stats.map(([value, label]) => (
                  <div key={label} className="site-card-soft p-4">
                    <p className="font-serif text-4xl text-[#9b7440]">{value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#6f5d4b]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {testimonialItems.map((testimonial) => (
                <article key={testimonial.name} className="site-card-solid p-7 lg:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a57c49]">Client Perspective</p>
                  <p className="mt-4 font-serif text-[1.7rem] leading-[1.45] text-[#1d150e]">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-5 border-t border-[#efefef] pt-4">
                    <p className="font-serif text-2xl text-[#1d150e]">{testimonial.name}</p>
                    <p className="site-text-muted mt-1">{testimonial.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="site-card-soft mt-6 flex flex-col gap-5 p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div>
              <p className="section-label">Next Step</p>
              <h2 className="mt-3 font-serif text-[2.15rem] leading-tight text-[#1d150e] sm:text-[2.7rem]">
                Ready to discuss your matter with Summit Legal Partner?
              </h2>
              <p className="site-text-muted mt-3 max-w-2xl text-lg leading-8">
                Reach out for a clear first conversation. We will help define the issue, the urgency, and the most practical way
                forward.
              </p>
            </div>

            <Link href="/contact" className="site-button-primary shrink-0">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
