import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { siteConfig } from '@/config/site';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isVercelDomain = host.includes('.vercel.app');

  return {
    rules: {
      userAgent: '*',
      allow: isVercelDomain ? [] : ['/'],
      disallow: isVercelDomain ? ['/'] : ['/private/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
