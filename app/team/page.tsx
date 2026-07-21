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

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label">Our People</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">
              A Las Vegas-based team built for focused counsel and polished execution.
            </h2>
            <p className="site-text-muted mt-6 text-lg leading-8">
              We keep the team presentation straightforward because that reflects how we like to work: clear roles, direct access,
              and thoughtful support at every stage of the client relationship.
            </p>
            <div className="site-card-soft mt-6 px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Team Overview</p>
              <p className="mt-3 text-sm leading-7 text-[#5e5144]">
                Each profile is intentionally concise so the focus stays on decision-making, service quality, and the role each team
                member plays in moving matters forward.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="site-card-solid p-6 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Office Location</p>
              <p className="mt-3 font-serif text-2xl text-[#20170f]">{firmInfo.location}</p>
              <p className="site-text-muted mt-3 leading-7">{firmInfo.address}</p>
            </div>

            <div className="site-card-solid p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Phone</p>
              <a href={firmInfo.phoneLink} className="mt-3 block font-serif text-2xl text-[#20170f]">
                {firmInfo.phone}
              </a>
            </div>

            <div className="site-card-solid p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b27b2e]">Email</p>
              <a href={`mailto:${firmInfo.email}`} className="mt-3 block break-all text-base text-[#211b14]">
                {firmInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#efefef] bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-label">Staff Profiles</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">The people behind Summit Legal Partner</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="site-card-solid p-7">
                <div className="h-1.5 w-14 rounded-full bg-[#c9892d]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#b27b2e]">{member.role}</p>
                <h3 className="mt-3 font-serif text-[1.9rem] leading-tight text-[#20170f]">{member.name}</h3>
                <p className="site-text-muted mt-4 leading-8">{member.bio}</p>
                <div className="mt-6 border-t border-[#efefef] pt-5">
                  <p className="text-sm font-medium text-[#4d3d30]">Legal Information</p>
                  <p className="site-text-muted mt-2 text-sm leading-7">
                    Supports Summit Legal Partner&apos;s client service, matter preparation, and strategic coordination across active
                    engagements.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="section-label">Need To Reach Us?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20170f] sm:text-[3.2rem]">Speak with our Las Vegas team today</h2>
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
