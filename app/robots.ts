import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { siteConfig } from '@/config/site';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isVercelDomain = host.includes('.vercel.app');

  // ROBOTS_ALLOW_AI_CRAWLERS is false by config instructions
  const allowAiCrawlers = false;

  return {
    rules: [
      {
        userAgent: '*',
        allow: isVercelDomain ? [] : ['/'],
        disallow: [
          ...(isVercelDomain ? ['/'] : []),
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/',
          '/checkout/',
          '/thank-you/',
          '/cart/',
          '/*?*', // block query string variants
          '/search',
        ],
      },
      ...(!allowAiCrawlers ? [
        {
          userAgent: 'GPTBot',
          disallow: ['/'],
        },
        {
          userAgent: 'Claude-Web',
          disallow: ['/'],
        },
        {
          userAgent: 'CCBot',
          disallow: ['/'],
        },
        {
          userAgent: 'Google-Extended',
          disallow: ['/'],
        },
        {
          userAgent: 'anthropic-ai',
          disallow: ['/'],
        },
        {
          userAgent: 'Bytespider',
          disallow: ['/'],
        }
      ] : []),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
