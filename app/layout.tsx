import type { Metadata } from 'next';
import SiteFooter from './components/site-footer';
import SiteHeader from './components/site-header';
import './globals.css';

const legalServiceSchema = {
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
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
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Legal Summit Law Firm',
  alternateName: 'Legal Summit Law Firm',
  url: 'https://legalsummitlawfirm.com/',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://legalsummitlawfirm.com'),
  title: 'Legal Summit Law Firm | Solicitors & Legal Services',
  description:
    'Legal Summit Law Firm provides professional legal services, consultation, dispute resolution, corporate law, family law, and legal representation.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/logo.png',
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
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
