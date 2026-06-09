import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { heroImage, practiceAreaItems } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Practice Areas | Legal Summit Law Firm',
  description: 'Explore the legal services offered by Legal Summit Law Firm across family, personal, and estate-related matters.',
  alternates: {
    canonical: '/practice-areas',
  },
};

export default function PracticeAreasPage() {
  return (
    <main className="bg-[#020202] text-[#f3ecde]">
      <PageBanner
        title="Areas of Expertise We Cover"
        description="Explore the legal matters we support, with practical advice and careful representation tailored to each client."
        image={heroImage}
      />

      <section className="bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-label">Practice Areas</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">Dedicated support across key legal issues</h2>
            <p className="site-text-muted mt-5 text-lg leading-8">
              We provide structured advice, sensitive client care, and dependable representation across a range of legal matters affecting individuals and families.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {practiceAreaItems.map((area) => (
              <article key={area.title} className="site-card-solid p-6 transition hover:-translate-y-1">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[#c9892d]" />
                <h3 className="font-serif text-2xl text-white">{area.title}</h3>
                <p className="site-text-muted mt-4 leading-7">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="section-label">Need Specific Advice?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">Speak with our team about your legal matter</h2>
          <p className="site-text-muted mt-5 text-lg leading-8">
            If your issue is urgent or requires tailored guidance, we can arrange a consultation and outline the next practical steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c9892d] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#b97b21]"
          >
            Request Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
