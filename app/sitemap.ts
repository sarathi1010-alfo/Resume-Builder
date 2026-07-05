import { MetadataRoute } from 'next';
import seoData from '@/data/seo-content.json';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: buildCanonical(''),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: buildCanonical('builder'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('about'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: buildCanonical('contact'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: buildCanonical('privacy-policy'),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: buildCanonical('terms-of-service'),
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const useCaseRoutes: MetadataRoute.Sitemap = seoData.useCases.map((uc) => ({
    url: buildCanonical(`use-cases/${uc.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const comparisonRoutes: MetadataRoute.Sitemap = seoData.comparisons.map((comp) => ({
    url: buildCanonical(`vs/${comp.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const templateRoutes: MetadataRoute.Sitemap = [
    'marketing-manager',
    'software-engineer',
    'registered-nurse',
    'teacher'
  ].map((slug) => ({
    url: buildCanonical(`resume-templates/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const guideRoutes: MetadataRoute.Sitemap = [
    'entry-level',
    'executive',
    'freelancer'
  ].map((slug) => ({
    url: buildCanonical(`resume-guides/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const cityGuideRoutes: MetadataRoute.Sitemap = [
    'resume-new-york'
  ].map((slug) => ({
    url: buildCanonical(`city-guides/${slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...useCaseRoutes,
    ...comparisonRoutes,
    ...templateRoutes,
    ...guideRoutes,
    ...cityGuideRoutes
  ];
}
