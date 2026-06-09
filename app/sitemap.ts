import type { MetadataRoute } from 'next';

const baseUrl = 'https://legalsummitlawfirm.com';

const routes = ['/', '/about', '/contact', '/practice-areas', '/team', '/faq'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
