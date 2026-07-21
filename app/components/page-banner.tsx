import { siteName } from '../lib/site-data';
import SiteLogo from './site-logo';

type PageBannerProps = {
  description: string;
  eyebrow?: string;
  title: string;
};

export default function PageBanner({ title, description, eyebrow = siteName }: PageBannerProps) {
  return (
    <section className="px-6 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="site-card-solid overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.38fr] lg:items-center">
            <div>
              <p className="section-label">{eyebrow}</p>
              <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[#1d150e] sm:text-[2.8rem] lg:text-[3.35rem]">
                {title}
              </h1>
              <p className="site-text-muted mt-4 max-w-2xl text-base leading-7 sm:text-lg">{description}</p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="site-card flex items-center justify-center p-4 sm:p-5">
                <SiteLogo variant="mark" size="header" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
