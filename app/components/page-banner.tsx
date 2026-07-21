import { siteName } from '../lib/site-data';
import SiteLogo from './site-logo';

type PageBannerProps = {
  description: string;
  eyebrow?: string;
  title: string;
};

export default function PageBanner({ title, description, eyebrow = siteName }: PageBannerProps) {
  return (
    <section className="px-6 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="site-card-solid overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.45fr] lg:items-center">
            <div>
              <p className="section-label">{eyebrow}</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1d150e] sm:text-5xl lg:text-[4rem]">
                {title}
              </h1>
              <p className="site-text-muted mt-6 max-w-2xl text-lg leading-8">{description}</p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="site-card flex items-center justify-center p-6">
                <SiteLogo variant="mark" size="badge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
