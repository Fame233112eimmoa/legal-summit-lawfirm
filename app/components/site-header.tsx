'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationItems } from '../lib/site-data';
import SiteLogo from './site-logo';

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = pathname === '/';
  const items = navigationItems;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const containerClassName = isHomePage
    ? 'mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-7 sm:px-8 lg:px-10 lg:py-8'
    : 'mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10';

  const headerClassName = isHomePage
    ? 'absolute inset-x-0 top-0 z-40'
    : 'sticky top-0 z-40 border-b border-white/10 bg-[#050505]/95 backdrop-blur';

  const desktopNavClassName = isHomePage
    ? 'hidden items-center gap-6 text-[0.95rem] font-medium text-white lg:flex xl:gap-8'
    : 'hidden items-center gap-5 text-sm font-medium text-[#eadfce] lg:flex xl:gap-6';

  const desktopButtonClassName = isHomePage
    ? 'hidden lg:inline-flex items-center justify-center bg-[#d4aa4d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#17130e] transition hover:bg-[#c79a38]'
    : 'hidden lg:inline-flex items-center justify-center rounded-full bg-[#c9892d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b97b21]';

  const mobileToggleClassName = isHomePage
    ? 'inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/35 text-white transition hover:border-[#d6b16a] hover:text-[#d6b16a] lg:hidden'
    : 'inline-flex h-11 w-11 items-center justify-center border border-[#d6a84f]/25 bg-[#0a0a0a] text-[#eadfce] transition hover:border-[#d6a84f] hover:text-[#d6a84f] lg:hidden';

  return (
    <>
      <header className={headerClassName}>
        <div className={containerClassName}>
          <SiteLogo href="/" priority size={isHomePage ? 'hero' : 'header'} />

          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            <nav className={desktopNavClassName}>
              {items.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition hover:text-[#d6b16a] ${isActive ? 'text-[#d6b16a]' : ''}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/contact" className={desktopButtonClassName}>
              Request Appointment
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={mobileToggleClassName}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M4 6.75h16v1.5H4v-1.5Zm0 4.5h16v1.5H4v-1.5Zm0 4.5h16v1.5H4v-1.5Z" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[22rem] flex-col bg-[#050505] px-6 py-6 text-white shadow-[0_0_50px_rgba(0,0,0,0.45)] transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <SiteLogo href="/" size="header" />
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#eadfce] transition hover:border-[#d6b16a] hover:text-[#d6b16a]"
            aria-label="Close navigation menu"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="m6.4 5.34 5.6 5.6 5.6-5.6 1.06 1.06-5.6 5.6 5.6 5.6-1.06 1.06-5.6-5.6-5.6 5.6-1.06-1.06 5.6-5.6-5.6-5.6L6.4 5.34Z" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-2">
          {items.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-white/8 py-4 text-base font-medium transition hover:text-[#d6b16a] ${
                  isActive ? 'text-[#d6b16a]' : 'text-[#eadfce]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center bg-[#d4aa4d] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#17130e] transition hover:bg-[#c79a38]"
        >
          Request Appointment
        </Link>
      </aside>
    </>
  );
}
