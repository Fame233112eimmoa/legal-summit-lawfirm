import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { firmInfo, officeLocations } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Offices',
  description:
    'Explore Summit Legal Partner office locations across the United States, including Las Vegas, Arlington, Atlanta, Chicago, Dallas, and Los Angeles.',
  alternates: {
    canonical: '/offices',
  },
};

export default function OfficesPage() {
  return (
    <main className="text-[#211b14]">
      <PageBanner
        eyebrow="Our Offices"
        title="A growing office presence across key U.S. markets."
        description="Summit Legal Partner maintains a primary office in Las Vegas with additional consultation and regional offices in Arlington, Atlanta, Chicago, Dallas, and Los Angeles."
      />

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">Office Locations</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">
              Offices positioned for clients who need access across the United States.
            </h2>
            <p className="site-text-muted mt-5 text-lg leading-8">
              Every location is supported by the same central intake process, premium client care standard, and direct communication
              style that defines the firm.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {officeLocations.map((office) => (
              <article key={`${office.city}-${office.state}`} className="site-card-solid p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">{office.type}</p>
                <h3 className="mt-4 font-serif text-[2rem] leading-tight text-[#20170f]">
                  {office.city}, {office.state}
                </h3>
                <p className="site-text-muted mt-4 leading-8">{office.coverage}</p>
                <div className="mt-6 border-t border-[#efefef] pt-5">
                  <p className="text-sm font-medium text-[#4d3d30]">Availability</p>
                  <p className="site-text-muted mt-2 text-sm leading-7">{office.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#efefef] bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="site-card-soft p-8">
            <p className="section-label">How It Works</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3rem]">
              One client experience, multiple U.S. offices.
            </h2>
            <p className="site-text-muted mt-5 text-lg leading-8">
              Whether your appointment is coordinated in Las Vegas, Arlington, Atlanta, Chicago, Dallas, or Los Angeles, every enquiry
              flows through the same firm-wide intake and service process.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="site-card-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Central Contact</p>
              <p className="mt-3 font-serif text-2xl text-[#20170f]">{firmInfo.phone}</p>
              <p className="site-text-muted mt-2 text-sm leading-7">{firmInfo.email}</p>
            </div>
            <div className="site-card-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Meeting Style</p>
              <p className="mt-3 font-serif text-2xl text-[#20170f]">By Appointment</p>
              <p className="site-text-muted mt-2 text-sm leading-7">Consultations can be arranged in person or coordinated remotely.</p>
            </div>
            <div className="site-card-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">Coverage</p>
              <p className="mt-3 font-serif text-2xl text-[#20170f]">{officeLocations.length} Offices</p>
              <p className="site-text-muted mt-2 text-sm leading-7">A wider national footprint for private and business matters.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link href="/contact" className="site-button-primary">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
