export const dynamic = 'force-static';

const baseUrl = 'https://legalsummitlawfirm.com';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/contact', priority: '0.8' },
  { path: '/practice-areas', priority: '0.8' },
  { path: '/team', priority: '0.8' },
  { path: '/faq', priority: '0.8' },
] as const;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET(): Response {
  const lastModified = new Date().toISOString();
  const urls = pages
    .map(({ path, priority }) => {
      const url = path === '/' ? `${baseUrl}/` : `${baseUrl}${path}`;

      return [
        '  <url>',
        `    <loc>${escapeXml(url)}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
