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
    ? 'mx-auto mt-4 flex max-w-7xl items-center justify-between gap-6 rounded-[2rem] border border-[#e4d6c1]/80 bg-[#fffaf3]/90 px-6 py-6 shadow-[0_18px_45px_rgba(97,73,39,0.08)] backdrop-blur sm:px-8 lg:px-10 lg:mt-6 lg:py-7'
    : 'mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10';

  const headerClassName = isHomePage
    ? 'absolute inset-x-0 top-0 z-40'
    : 'sticky top-0 z-40 border-b border-[#e6d8c3] bg-[#fffaf3]/95 backdrop-blur';

  const desktopNavClassName = isHomePage
    ? 'hidden items-center gap-6 text-[0.95rem] font-medium text-[#3f3127] lg:flex xl:gap-8'
    : 'hidden items-center gap-5 text-sm font-medium text-[#5b4b3f] lg:flex xl:gap-6';

  const desktopButtonClassName = isHomePage
    ? 'hidden lg:inline-flex items-center justify-center rounded-full bg-[#c9892d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b97b21]'
    : 'hidden lg:inline-flex items-center justify-center rounded-full bg-[#c9892d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b97b21]';

  const mobileToggleClassName = isHomePage
    ? 'inline-flex h-11 w-11 items-center justify-center border border-[#d8c6ad] bg-white/80 text-[#46372c] transition hover:border-[#c9892d] hover:text-[#c9892d] lg:hidden'
    : 'inline-flex h-11 w-11 items-center justify-center border border-[#d8c6ad] bg-white/80 text-[#5b4b3f] transition hover:border-[#c9892d] hover:text-[#c9892d] lg:hidden';

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
                    className={`transition hover:text-[#b27b2e] ${isActive ? 'text-[#b27b2e]' : ''}`}
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
        className={`fixed inset-0 z-40 bg-[#1d150d]/35 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[22rem] flex-col bg-[#fffaf3] px-6 py-6 text-[#221811] shadow-[0_0_50px_rgba(87,64,36,0.18)] transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#e7d9c3] pb-5">
          <SiteLogo href="/" size="header" />
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#dcc8aa] text-[#6c5948] transition hover:border-[#c9892d] hover:text-[#c9892d]"
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
                className={`border-b border-[#eee1d0] py-4 text-base font-medium transition hover:text-[#b27b2e] ${
                  isActive ? 'text-[#b27b2e]' : 'text-[#4c3d31]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c9892d] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b97b21]"
        >
          Request Appointment
        </Link>
      </aside>
    </>
  );
}
