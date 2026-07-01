import { MetadataRoute } from 'next';
import seoData from '@/data/seo-content.json';
import citiesData from '@/data/cities.json';
import jobsData from '@/data/job-titles.json';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export const revalidate = 3600; // 1 hour ISR

const LANGUAGES = [
  'en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi', 'tr', 'pl'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [];

  const basePaths = [
    '',
    'builder',
    'about',
    'contact',
    'privacy-policy',
    'terms-of-service',
  ];

  const addRoute = (path: string, priority: number, changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = 'weekly') => {
    // Add base route
    routes.push({
      url: buildCanonical(path),
      lastModified,
      changeFrequency,
      priority,
    });

    // Add language variants
    LANGUAGES.forEach(lang => {
      const urlPath = path ? `${lang}/${path}` : lang;
      routes.push({
        url: buildCanonical(urlPath),
        lastModified,
        changeFrequency,
        priority,
      });
    });
  };

  // Static routes
  basePaths.forEach(path => {
    let priority = 0.5;
    let freq: any = 'monthly';
    if (path === '') { priority = 1.0; freq = 'weekly'; }
    if (path === 'builder') { priority = 0.9; freq = 'weekly'; }
    if (path.includes('policy') || path.includes('terms')) { priority = 0.3; freq = 'yearly'; }
    addRoute(path, priority, freq);
  });

  // Use cases
  seoData.useCases.forEach((uc) => {
    addRoute(`use-cases/${uc.slug}`, 0.7, 'monthly');
  });

  // Comparisons
  seoData.comparisons.forEach((comp) => {
    addRoute(`vs/${comp.slug}`, 0.8, 'monthly');
  });

  // Blogs
  seoData.blogs.forEach((blog) => {
    addRoute(`blog/${blog.slug}`, 0.7, 'weekly');
  });

  // Locations (Cities)
  citiesData.forEach((city) => {
    addRoute(`location/${city.slug}`, 0.7, 'monthly');
  });

  // Jobs
  jobsData.forEach((job) => {
    addRoute(`resume-for/${job.slug}`, 0.7, 'monthly');
  });

  // Max 50,000 URLs per sitemap.
  // Base routes: 6
  // Use cases: 2
  // Comparisons: 2
  // Blogs: 13
  // Cities: 350
  // Jobs: 20
  // Total base: 393
  // With 15 languages + base = 16 variants
  // Total URLs = 393 * 16 = 6288 URLs, perfectly around the 5k target.

  return routes;
}
