import { MetadataRoute } from 'next';
import seoData from '@/data/seo-content.json';
import { buildCanonical } from '@/lib/seo/buildCanonical';
import { normalizeRoute } from '@/lib/seo/urlNormalization';
import { seoConfig } from '@/config/seo.config';

export const revalidate = 3600; // 1 hour ISR

function createSitemapEntry(slug: string, priority: number, changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'): MetadataRoute.Sitemap[number] | null {
  const normalizedRoute = normalizeRoute(slug);
  const url = buildCanonical(normalizedRoute);

  // Exclude localhost from sitemap (although buildCanonical normally doesn't output localhost unless configured)
  if (url.includes('localhost') || url.includes('.vercel.app')) {
    return null;
  }

  return {
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Only build sitemap if indexing is allowed
  if (!seoConfig.robots.index) {
    return [];
  }

  const staticRoutesRaw = [
    { slug: '', priority: 1.0, freq: 'weekly' as const },
    { slug: 'builder', priority: 0.9, freq: 'weekly' as const },
    { slug: 'about', priority: 0.5, freq: 'monthly' as const },
    { slug: 'contact', priority: 0.5, freq: 'monthly' as const },
    { slug: 'privacy-policy', priority: 0.3, freq: 'yearly' as const },
    { slug: 'terms-of-service', priority: 0.3, freq: 'yearly' as const },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticRoutesRaw
    .map(route => createSitemapEntry(route.slug, route.priority, route.freq))
    .filter((entry): entry is MetadataRoute.Sitemap[number] => entry !== null);

  const useCaseRoutes: MetadataRoute.Sitemap = seoData.useCases
    .map((uc) => createSitemapEntry(`use-cases/${uc.slug}`, 0.7, 'monthly'))
    .filter((entry): entry is MetadataRoute.Sitemap[number] => entry !== null);

  const comparisonRoutes: MetadataRoute.Sitemap = seoData.comparisons
    .map((comp) => createSitemapEntry(`vs/${comp.slug}`, 0.8, 'monthly'))
    .filter((entry): entry is MetadataRoute.Sitemap[number] => entry !== null);

  const blogRoutes: MetadataRoute.Sitemap = seoData.blogs
    .map((blog) => createSitemapEntry(`blog/${blog.slug}`, 0.7, 'weekly'))
    .filter((entry): entry is MetadataRoute.Sitemap[number] => entry !== null);

  // We add 'marketing' template from templates page, to make sure it exists in sitemap.
  const templateRoutes: MetadataRoute.Sitemap = [
    createSitemapEntry('templates/marketing', 0.8, 'monthly')
  ].filter((entry): entry is MetadataRoute.Sitemap[number] => entry !== null);

  return [...staticRoutes, ...useCaseRoutes, ...comparisonRoutes, ...blogRoutes, ...templateRoutes];
}
