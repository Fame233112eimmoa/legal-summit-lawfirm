import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { practiceAreaItems, reasons } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Explore the core practice areas Summit Legal Partner supports across business, private, and strategic legal matters.',
  alternates: {
    canonical: '/practice-areas',
  },
};

export default function PracticeAreasPage() {
  return (
    <main className="text-[#211b14]">
      <PageBanner
        eyebrow="Practice Areas"
        title="Legal services selected for clarity, complexity, and real-world impact."
        description="We focus on matters where thoughtful strategy, careful communication, and disciplined execution create meaningful value for the client."
      />

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">Practice Areas</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">
              Dedicated support across the legal issues that most often define a turning point.
            </h2>
            <p className="site-text-muted mt-5 text-lg leading-8">
              Whether the matter is commercial, personal, or highly sensitive, our role is to bring structure, calm, and a strategic
              plan that fits the stakes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {practiceAreaItems.map((area) => (
              <article key={area.title} className="site-card-solid p-6 transition hover:-translate-y-1">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#c9892d]" />
                <h3 className="font-serif text-2xl text-[#20170f]">{area.title}</h3>
                <p className="site-text-muted mt-4 leading-7">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ece2d4] bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">What You Can Expect</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">
              The same level of care, whatever the practice area.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="site-card-soft p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">{reason.title}</p>
                <p className="site-text-muted mt-4 leading-8">{reason.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/contact" className="site-button-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
