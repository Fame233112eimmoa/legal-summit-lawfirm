'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationItems } from '../lib/site-data';
import SiteLogo from './site-logo';

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#efefef] bg-[rgba(255,255,255,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
          <SiteLogo href="/" priority size="header" />

          <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
            <nav className="hidden items-center gap-4 text-[0.9rem] font-medium text-[#584a3c] lg:flex xl:gap-6 xl:text-[0.95rem]">
              {items.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition hover:text-[#9b7440] ${isActive ? 'text-[#9b7440]' : ''}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/contact" className="site-button-primary hidden xl:inline-flex">
              Schedule Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#5b4a39] transition hover:border-[#be9761] hover:text-[#9b7440] lg:hidden"
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
        className={`fixed inset-0 z-40 bg-[#20170f]/25 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[22rem] flex-col bg-white px-6 py-6 text-[#221811] shadow-[0_0_50px_rgba(15,23,42,0.08)] transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#efefef] pb-5">
          <SiteLogo href="/" size="header" />
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] text-[#6c5948] transition hover:border-[#be9761] hover:text-[#9b7440]"
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
                className={`border-b border-[#f2f2f2] py-4 text-base font-medium transition hover:text-[#9b7440] ${
                  isActive ? 'text-[#9b7440]' : 'text-[#4c3d31]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="site-button-primary mt-8"
        >
          Schedule Consultation
        </Link>
      </aside>
    </>
  );
}
