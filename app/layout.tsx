import type { Metadata } from 'next';
import { firmInfo } from './lib/site-data';
import SiteFooter from './components/site-footer';
import SiteHeader from './components/site-header';
import './globals.css';

const baseUrl = 'https://legalsummitlawfirm.com';

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Legal Summit Law Firm',
  url: baseUrl,
  logo: `${baseUrl}/legal-summit-logo.png`,
  telephone: firmInfo.phone,
  email: firmInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Generator Building, Counterslip, Redcliffe',
    addressLocality: 'Bristol',
    postalCode: 'BS1 6BX',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  sameAs: [baseUrl],
};

export const metadata: Metadata = {
  title: 'Legal Summit Law Firm | Solicitors in Bristol',
  description:
    'Legal Summit Law Firm provides clear, client-focused legal guidance from Bristol for individuals, families, and businesses across the United Kingdom.',
  icons: {
    icon: '/legal-summit-logo.png',
    apple: '/legal-summit-logo.png',
    shortcut: '/legal-summit-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
