import type { Metadata } from 'next';
import PageBanner from '../components/page-banner';
import { firmInfo, teamMembers } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the team behind Summit Legal Partner and our Las Vegas-based approach to legal service.',
  alternates: {
    canonical: '/team',
  },
};

export default function TeamPage() {
  return (
    <main className="text-[#211b14]">
      <PageBanner
        eyebrow="Our Team"
        title="Meet Our Team"
        description="The people behind Summit Legal Partner are organized around strategy, responsiveness, and a more personal standard of legal support."
      />

      <section className="border-y border-[#efefef] bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-label">Leadership & Team</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.1rem]">
              The people behind Summit Legal Partner.
            </h2>
            <p className="site-text-muted mt-4 text-lg leading-8">
              A focused team led by Mark Webb, with direct support across strategy, operations, and client care.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className={index === 0 ? 'site-card-solid p-8 md:col-span-2 xl:col-span-3' : 'site-card-solid p-7'}
              >
                <div className={index === 0 ? 'grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start' : ''}>
                  <div>
                    {index === 0 ? (
                      <div className="site-pill">Firm Leadership</div>
                    ) : (
                      <div className="h-1.5 w-14 rounded-full bg-[#c9892d]" />
                    )}
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#b27b2e]">{member.role}</p>
                    <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[#20170f]">{member.name}</h3>
                    <p className="site-text-muted mt-4 leading-8">{member.bio}</p>
                  </div>

                  {index === 0 ? (
                    <div className="site-card-soft p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Head of the Firm</p>
                      <p className="mt-3 font-serif text-2xl text-[#20170f]">{member.name}</p>
                      <p className="site-text-muted mt-3 leading-7">
                        Leads the firm’s direction, client standards, and overall legal strategy across the practice.
                      </p>
                    </div>
                  ) : null}
                </div>

                {index !== 0 ? (
                  <div className="mt-6 border-t border-[#efefef] pt-5">
                    <p className="text-sm font-medium text-[#4d3d30]">Legal Information</p>
                    <p className="site-text-muted mt-2 text-sm leading-7">
                      Supports Summit Legal Partner&apos;s client service, matter preparation, and strategic coordination across active
                      engagements.
                    </p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="section-label">Need To Reach Us?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">Speak with our team today</h2>
          <p className="site-text-muted mt-5 text-lg leading-8">
            If you are ready to talk through a matter, we can arrange a consultation and outline the best next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={firmInfo.phoneLink} className="site-button-primary">
              Call {firmInfo.phone}
            </a>
            <a href={`mailto:${firmInfo.email}`} className="site-button-secondary">
              Email the Firm
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
