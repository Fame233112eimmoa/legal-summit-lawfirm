import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legalsummitlawfirm.com';
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified,
    },
    {
      url: `${baseUrl}/team`,
      lastModified,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
    },
  ];
}
