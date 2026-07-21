import type { Metadata } from 'next';
import SiteFooter from './components/site-footer';
import SiteHeader from './components/site-header';
import { firmInfo, siteDescription, siteDomain, siteName, wordmarkLogo } from './lib/site-data';
import './globals.css';

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteName,
  url: siteDomain,
  logo: `${siteDomain}${wordmarkLogo}`,
  telephone: firmInfo.phoneLink.replace('tel:', ''),
  email: firmInfo.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  areaServed: 'United States',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteDomain,
  logo: `${siteDomain}${wordmarkLogo}`,
  telephone: firmInfo.phoneLink.replace('tel:', ''),
  email: firmInfo.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  areaServed: 'United States',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  alternateName: siteName,
  url: `${siteDomain}/`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteDomain),
  title: {
    default: `${siteName} | Las Vegas Law Firm`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
