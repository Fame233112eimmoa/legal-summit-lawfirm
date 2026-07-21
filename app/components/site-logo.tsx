import Image from 'next/image';
import Link from 'next/link';
import { markLogo, siteName, wordmarkLogo } from '../lib/site-data';

type SiteLogoProps = {
  framed?: boolean;
  href?: string;
  priority?: boolean;
  size?: 'badge' | 'footer' | 'header' | 'hero';
  variant?: 'mark' | 'wordmark';
};

const logoSizes = {
  mark: {
    badge: 'h-[96px] w-[96px] sm:h-[116px] sm:w-[116px]',
    footer: 'h-[112px] w-[112px] sm:h-[128px] sm:w-[128px]',
    header: 'h-[62px] w-[62px]',
    hero: 'h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] lg:h-[240px] lg:w-[240px]',
  },
  wordmark: {
    badge: 'h-[60px] w-[224px]',
    footer: 'h-[80px] w-[320px] sm:h-[92px] sm:w-[370px]',
    header: 'h-[48px] w-[220px] sm:h-[54px] sm:w-[250px]',
    hero: 'h-[70px] w-[300px] sm:h-[82px] sm:w-[350px] lg:h-[94px] lg:w-[404px]',
  },
};

export default function SiteLogo({
  framed = false,
  href = '/',
  priority = false,
  size = 'header',
  variant = 'wordmark',
}: SiteLogoProps) {
  const source = variant === 'mark' ? markLogo : wordmarkLogo;
  const alt = variant === 'mark' ? `${siteName} emblem` : siteName;

  const logo = (
    <div
      className={`inline-flex items-center justify-center overflow-hidden ${
        framed ? 'rounded-[2rem] border border-[#e6dac7] bg-white p-4 shadow-[0_16px_40px_rgba(92,67,37,0.08)]' : ''
      }`}
    >
      <div className={`relative ${logoSizes[variant][size]}`}>
        <Image
          src={source}
          alt={alt}
          fill
          priority={priority}
          className="object-contain"
          sizes={variant === 'mark' ? '240px' : size === 'hero' ? '404px' : size === 'footer' ? '370px' : '250px'}
        />
      </div>
    </div>
  );

  if (!href) {
    return logo;
  }

  return (
    <Link href={href} className="inline-flex max-w-full items-center" aria-label={`${siteName} home`}>
      {logo}
    </Link>
  );
}
