import type { Metadata } from 'next';
import SiteFooter from './components/site-footer';
import SiteHeader from './components/site-header';
import './globals.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Legal Summit Law Firm',
  url: 'https://legalsummitlawfirm.com',
  logo: 'https://legalsummitlawfirm.com/logo.png',
  telephone: '+1-725-238-1725',
  email: 'info@legalsummitlawfirm.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'United Kingdom',
  },
  areaServed: 'United Kingdom',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://legalsummitlawfirm.com'),
  title: 'Legal Summit Law Firm | Solicitors in Bristol',
  description:
    'Legal Summit Law Firm provides clear, client-focused legal guidance from Bristol for individuals, families, and businesses across the United Kingdom.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
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
            __html: JSON.stringify(schema),
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
