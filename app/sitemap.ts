import type { MetadataRoute } from 'next';

const baseUrl = 'https://legalsummitlawfirm.com';

const routes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/practice-areas', priority: 0.8 },
  { path: '/team', priority: 0.8 },
  { path: '/faq', priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: path === '/' ? `${baseUrl}/` : `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority,
  }));
}
