import type { Metadata } from 'next';
import ContactForm from '../components/contact-form';
import PageBanner from '../components/page-banner';
import { firmInfo } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Summit Legal Partner to schedule a consultation with our Las Vegas legal team.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="text-[#211b14]">
      <PageBanner
        eyebrow="Contact Summit Legal Partner"
        title="Schedule a consultation with our Las Vegas team."
        description="Tell us what you are facing and we will help you understand the next best move, the right timing, and how we can support you."
      />

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-label">Contact Our Firm</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">Speak with our Las Vegas legal team</h2>
            <p className="site-text-muted mt-5 text-lg leading-8">
              If the matter is time-sensitive, confidential, or simply too important for uncertain advice, we can help you organize the
              next step with more clarity.
            </p>

            <div className="mt-8 space-y-4">
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Call Us</p>
                <a href={firmInfo.phoneLink} className="mt-2 block font-serif text-2xl text-[#20170f]">
                  {firmInfo.phone}
                </a>
              </div>
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Email</p>
                <a href={`mailto:${firmInfo.email}`} className="site-text-muted mt-2 block text-base">
                  {firmInfo.email}
                </a>
              </div>
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Visit Our Office</p>
                <p className="site-text-muted mt-2 text-base leading-7">{firmInfo.address}</p>
              </div>
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Office Hours</p>
                <p className="site-text-muted mt-2 text-base leading-7">{firmInfo.hours}</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
