import type { Metadata } from 'next';
import PageBanner from '../components/page-banner';
import { firmInfo, heroImage, teamMembers } from '../lib/site-data';

export const metadata: Metadata = {
  title: 'Team | Legal Summit Law Firm',
  description: 'Meet the Legal Summit Law Firm team serving clients from Bristol across the United Kingdom.',
  alternates: {
    canonical: '/team',
  },
};

export default function TeamPage() {
  return (
    <main className="bg-[#020202] text-[#f3ecde]">
      <PageBanner
        title="Meet Our Team"
        description="Get to know the people behind Legal Summit Law Firm through a clean overview of roles, responsibilities, and firm support."
        image={heroImage}
      />

      <section className="bg-[#090909] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="section-label">Our People</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">
              A Bristol-based team focused on clear legal support
            </h2>
            <p className="site-text-muted mt-6 text-lg leading-8">
              This page introduces the people behind your firm, from legal staff to leadership and administrative support. The
              layout is designed to present your team clearly without relying on portraits, keeping the focus on role, experience,
              and the support each person provides.
            </p>
            <div className="mt-6 rounded-[1.75rem] border border-[#c9892d]/25 bg-[#111111] px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Team Overview</p>
              <p className="mt-3 text-sm leading-7 text-[#d8c9b6]">
                Each team member is shown in a structured legal profile card with their name, position, and a short summary of their
                responsibilities within the firm.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="site-card-solid p-6 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Office Location</p>
              <p className="mt-3 font-serif text-2xl text-white">{firmInfo.location}</p>
              <p className="site-text-muted mt-3 leading-7">{firmInfo.address}</p>
            </div>

            <div className="site-card-solid p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Phone</p>
              <a href={firmInfo.phoneLink} className="mt-3 block font-serif text-2xl text-white">
                {firmInfo.phone}
              </a>
            </div>

            <div className="site-card-solid p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a84f]">Email</p>
              <a href={`mailto:${firmInfo.email}`} className="mt-3 block break-all text-base text-[#f3ecde]">
                {firmInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-label">Staff Profiles</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">The team behind Legal Summit Law Firm</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="site-card-solid p-7">
                <div className="h-1.5 w-14 rounded-full bg-[#c9892d]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#d6a84f]">{member.role}</p>
                <h3 className="mt-3 font-serif text-[1.9rem] leading-tight text-white">{member.name}</h3>
                <p className="site-text-muted mt-4 leading-8">{member.bio}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-[#f1e3ce]">Legal Information</p>
                  <p className="site-text-muted mt-2 text-sm leading-7">
                    Works as part of Legal Summit Law Firm&apos;s Bristol team, supporting client service, matter preparation, and
                    professional case handling.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090909] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="section-label">Need To Reach Us?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-[2.9rem]">Speak with our Bristol team today</h2>
          <p className="site-text-muted mt-5 text-lg leading-8">
            If you would like to request a consultation or expand these staff profiles with more personalised legal background, the
            page is ready for the next update.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={firmInfo.phoneLink}
              className="inline-flex items-center justify-center rounded-full bg-[#c9892d] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#b97b21]"
            >
              Call {firmInfo.phone}
            </a>
            <a
              href={`mailto:${firmInfo.email}`}
              className="inline-flex items-center justify-center rounded-full border border-[#c9892d] px-7 py-3.5 text-base font-semibold text-[#e0b258] transition hover:bg-[#c9892d] hover:text-white"
            >
              Email the Firm
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
