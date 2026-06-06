import Link from 'next/link';
import { firmInfo, navigationItems } from '../lib/site-data';
import SiteLogo from './site-logo';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#010101] text-[#dfd2c2]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-10">
        <div>
          <SiteLogo href="/" size="footer" />
          <h2 className="mt-4 font-serif text-3xl text-white">About Legal Summit Law Firm</h2>
          <p className="site-text-muted mt-4 max-w-xl leading-8">
            We are based in Bristol and provide trusted legal advice, professional representation, and attentive client care for clients across the United Kingdom.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-white">Contact Details</h3>
          <div className="site-text-muted mt-5 space-y-3 text-sm leading-7">
            <p>Address: {firmInfo.address}</p>
            <p>Phone: {firmInfo.phone}</p>
            <p>Email: {firmInfo.email}</p>
            <p>{firmInfo.hours}</p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-white">Quick Links</h3>
          <div className="site-text-muted mt-5 flex flex-col gap-3 text-sm">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#d6a84f]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-[#998870] sm:px-8 lg:px-10">
        Copyright © 2026 Legal Summit Law Firm
      </div>
    </footer>
  );
}
