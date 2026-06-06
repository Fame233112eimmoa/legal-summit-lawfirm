import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { aboutImage, overviewPoints, processSteps, reasons, stats, statsImage } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'About | Legal Summit Law Firm',
  description: 'Learn more about Legal Summit Law Firm, our client care, and our approach to legal representation in the United Kingdom.',
};

export default function AboutPage() {
  return (
    <main className="bg-[#020202] text-[#f3ecde]">
      <PageBanner
        title="Professional and Experienced Solicitors You Can Trust"
        description="Learn more about our approach to legal advice, client care, confidentiality, and practical representation across the United Kingdom."
        image={aboutImage}
      />

      <section className="bg-[#020202] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div>
            <p className="section-label">About Our Firm</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">Legal Summit Law Firm</h2>
            <p className="site-text-muted mt-6 text-lg leading-8">
              Legal Summit Law Firm is based in Bristol and is committed to delivering clear, careful, and professional legal
              guidance for individuals, families, and businesses throughout the United Kingdom. We focus on practical advice that
              helps clients make confident, informed decisions at important moments.
            </p>
            <p className="site-text-muted mt-4 text-lg leading-8">
              Our work is shaped by responsiveness, confidentiality, and a strong sense of client care. Whether you need support with
              a personal matter, a family issue, or a dispute requiring structured representation, we aim to provide dependable advice
              with close attention to detail.
            </p>
            <div className="mt-8 space-y-4">
              {overviewPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c9892d]" />
                  <p className="site-text-muted text-base leading-7">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-full border border-[#c9892d] px-6 py-3 text-base font-semibold text-[#e0b258] transition hover:bg-[#c9892d] hover:text-white"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="site-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171717] font-serif text-xl text-[#d6a84f]">
                  {`0${index + 1}`}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white">{step.title}</h3>
                <p className="site-text-muted mt-4 leading-8">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-label">Why Clients Choose Us</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">Committed to service, clarity, and results</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="site-card-solid p-8">
                <h3 className="font-serif text-2xl text-white">{reason.title}</h3>
                <p className="site-text-muted mt-4 leading-8">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${statsImage})` }} />
        <div className="absolute inset-0 bg-[rgba(26,22,19,0.82)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-[1.75rem] border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm">
                <p className="font-serif text-5xl text-[#e0b258]">{value}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#f2e8d9]">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c9892d] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#b97b21]"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
