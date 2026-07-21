import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { faqItems, heroImage } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'FAQ | Legal Summit Law Firm',
  description: 'Read answers to common questions about consultations, confidentiality, and legal support at Legal Summit Law Firm.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  return (
    <main className="bg-[#f7f1e8] text-[#211b14]">
      <PageBanner
        title="Frequently Asked Questions"
        description="Find clear answers to common questions about consultations, confidentiality, and how our firm works with clients."
        image={heroImage}
      />

      <section className="bg-[#f7f1e8] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-label">Client Questions</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[2.9rem]">Guidance before you get started</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqItems.map((faq) => (
              <article key={faq.question} className="site-card-solid p-8">
                <h3 className="font-serif text-2xl text-[#20170f]">{faq.question}</h3>
                <p className="site-text-muted mt-4 leading-8">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6ee] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="section-label">Still Need Help?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[2.9rem]">Contact our team for tailored guidance</h2>
          <p className="site-text-muted mt-5 text-lg leading-8">
            If your question relates to a specific matter, we can discuss it in more detail and explain your next options.
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
