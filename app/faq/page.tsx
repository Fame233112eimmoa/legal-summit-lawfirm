import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { faqItems } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Read common questions about consultations, confidentiality, and working with Summit Legal Partner.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  return (
    <main className="text-[#211b14]">
      <PageBanner
        eyebrow="Frequently Asked Questions"
        title="Frequently Asked Questions"
        description="A few clear answers before we speak, so you know what to expect from the first conversation onward."
      />

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">Client Questions</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">Guidance before you get started</h2>
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

      <section className="border-y border-[#ece2d4] bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="section-label">Still Need Help?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">Contact our team for tailored guidance</h2>
          <p className="site-text-muted mt-5 text-lg leading-8">
            If your question relates to a specific matter, we can discuss it in more detail and explain your next options.
          </p>
          <Link href="/contact" className="site-button-primary mt-8">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
