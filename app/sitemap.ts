import { MetadataRoute } from 'next';
import seoData from '@/data/seo-content.json';
import citiesData from '@/data/cities.json';
import jobsData from '@/data/job-titles.json';
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

  const blogRoutes: MetadataRoute.Sitemap = seoData.blogs.map((blog) => ({
    url: buildCanonical(`blog/${blog.slug}`),
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const locationRoutes: MetadataRoute.Sitemap = citiesData.map((city) => ({
    url: buildCanonical(`location/${city.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const jobRoutes: MetadataRoute.Sitemap = jobsData.map((job) => ({
    url: buildCanonical(`resume-for/${job.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...useCaseRoutes, ...comparisonRoutes, ...blogRoutes, ...locationRoutes, ...jobRoutes];
}
