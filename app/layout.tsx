import type { Metadata } from 'next';
import SiteFooter from './components/site-footer';
import SiteHeader from './components/site-header';
import './globals.css';

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
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
