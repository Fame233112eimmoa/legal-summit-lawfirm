import type { Metadata } from 'next';
import ContactForm from '../components/contact-form';
import PageBanner from '../components/page-banner';
import { firmInfo, heroImage } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Contact | Legal Summit Law Firm',
  description: 'Contact Legal Summit Law Firm to request a consultation with our Bristol-based legal team.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#020202] text-[#f3ecde]">
      <PageBanner
        title="Request a Consultation"
        description="Speak with our Bristol legal team about your matter and arrange a suitable consultation."
        image={heroImage}
      />

      <section className="bg-[#111111] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-10">
          <div>
            <p className="section-label">Contact Our Firm</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">Speak with our Bristol legal team</h2>
            <p className="site-text-muted mt-5 text-lg leading-8">
              Tell us about your matter and we will respond promptly to discuss the next steps. We provide clear, confidential support for clients across the United Kingdom.
            </p>

            <div className="mt-8 space-y-4">
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Call Us</p>
                <a href={firmInfo.phoneLink} className="mt-2 block font-serif text-2xl text-white">
                  {firmInfo.phone}
                </a>
              </div>
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Email</p>
                <a href={`mailto:${firmInfo.email}`} className="site-text-muted mt-2 block text-base">
                  {firmInfo.email}
                </a>
              </div>
              <div className="site-card-soft px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Visit Our Office</p>
                <p className="site-text-muted mt-2 text-base leading-7">{firmInfo.address}</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
