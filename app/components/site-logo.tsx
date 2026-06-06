import Image from 'next/image';
import Link from 'next/link';

type SiteLogoProps = {
  framed?: boolean;
  href?: string;
  priority?: boolean;
  size?: 'footer' | 'header' | 'hero';
};

const logoSizes = {
  header: 'h-[64px] w-[100px] sm:h-[72px] sm:w-[114px]',
  footer: 'h-[92px] w-[146px] sm:h-[104px] sm:w-[164px]',
  hero: 'h-[96px] w-[152px] sm:h-[108px] sm:w-[171px] lg:h-[124px] lg:w-[196px]',
};

export default function SiteLogo({
  framed = false,
  href = '/',
  priority = false,
  size = 'header',
}: SiteLogoProps) {
  const logo = (
    <div
      className={`inline-flex items-center justify-center overflow-hidden ${
        framed ? 'rounded-2xl bg-white px-3 py-2 shadow-soft sm:px-4 sm:py-2.5' : ''
      }`}
    >
      <div className={`relative ${logoSizes[size]}`}>
        <Image
          src="/legal-summit-logo-transparent-v4.png"
          alt="Legal Summit Law Firm"
          fill
          priority={priority}
          className="object-contain"
          sizes={size === 'hero' ? '196px' : size === 'header' ? '114px' : '164px'}
        />
      </div>
    </div>
  );

  if (!href) {
    return logo;
  }

  return (
    <Link href={href} className="inline-flex max-w-full items-center" aria-label="Legal Summit Law Firm home">
      {logo}
    </Link>
  );
}
