import { NextResponse } from 'next/server';
import seoData from '@/data/seo-content.json';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export async function GET() {
  const lastModified = new Date().toISOString();

  const blogUrls = seoData.blogs.map((blog) => `
    <url>
      <loc>${buildCanonical(`blog/${blog.slug}`)}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
