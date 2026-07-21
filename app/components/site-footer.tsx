import Link from 'next/link';
import { firmInfo, navigationItems, siteDescription, siteName, siteTagline } from '../lib/site-data';
import SiteLogo from './site-logo';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e7ddce] bg-white text-[#5b4b3b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr_0.8fr] lg:px-10">
        <div>
          <SiteLogo href="/" size="footer" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a57c49]">{siteTagline}</p>
          <p className="site-text-muted mt-5 max-w-xl leading-8">
            {siteDescription}
          </p>
          <div className="site-pill mt-6">{firmInfo.location}</div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-[#20170f]">Contact Details</h3>
          <div className="site-text-muted mt-5 space-y-3 text-sm leading-7">
            <p>Address: {firmInfo.address}</p>
            <p>Phone: {firmInfo.phone}</p>
            <p>Email: {firmInfo.email}</p>
            <p>{firmInfo.hours}</p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-[#20170f]">Quick Links</h3>
          <div className="site-text-muted mt-5 flex flex-col gap-3 text-sm">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#b27b2e]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#e7ddce] px-6 py-6 text-center text-sm text-[#8b755b] sm:px-8 lg:px-10">
        Copyright © {currentYear} {siteName}
      </div>
    </footer>
  );
}
