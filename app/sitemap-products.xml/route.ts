import { NextResponse } from 'next/server';
import citiesData from '@/data/cities.json';
import jobsData from '@/data/job-titles.json';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export async function GET() {
  const lastModified = new Date().toISOString();

  const locationUrls = citiesData.map((city) => `
    <url>
      <loc>${buildCanonical(`location/${city.slug}`)}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`).join('');

  const jobUrls = jobsData.map((job) => `
    <url>
      <loc>${buildCanonical(`resume-for/${job.slug}`)}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationUrls}
${jobUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
