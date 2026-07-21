import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/page-banner';
import { overviewPoints, processSteps, reasons, stats } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Summit Legal Partner, our Las Vegas positioning, and our premium approach to legal service.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="text-[#211b14]">
      <PageBanner
        eyebrow="About Summit Legal Partner"
        title="A simpler, more premium standard for legal service in Las Vegas."
        description="Summit Legal Partner was reimagined to feel cleaner, calmer, and more direct, without losing the strategic depth serious legal work requires."
      />

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="section-label">Our Positioning</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">
              We combine strategic legal thinking with a more intentional client experience.
            </h2>
            <p className="site-text-muted mt-6 text-lg leading-8">
              Our move to Las Vegas marked more than a new location. It created an opportunity to rebuild the firm around clearer
              communication, stronger presentation, and a more premium way of serving clients with business, family, and private legal
              needs.
            </p>
            <p className="site-text-muted mt-4 text-lg leading-8">
              We believe excellent counsel should feel composed and practical. That means thoughtful preparation, measured advice,
              direct access, and a process that helps clients stay oriented even when the matter itself is complex or time-sensitive.
            </p>
            <div className="mt-8 space-y-4">
              {overviewPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#be9761]" />
                  <p className="site-text-muted text-base leading-7">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/team" className="site-button-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="site-card-solid p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a57c49]">{reason.title}</p>
                <p className="site-text-muted mt-4 leading-8">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ece2d4] bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">How We Work</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">
              Every matter moves through a clear three-step framework.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="site-card-solid p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eadf] font-serif text-lg text-[#9b7440]">
                  {`0${index + 1}`}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#20170f]">{step.title}</h3>
                <p className="site-text-muted mt-4 leading-8">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="site-card-soft p-6 text-center">
                <p className="font-serif text-5xl text-[#9b7440]">{value}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#6a5843]">{label}</p>
              </div>
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
