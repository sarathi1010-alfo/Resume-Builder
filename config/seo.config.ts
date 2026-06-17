import { getBaseUrl, siteConfig } from './site';

export const seoConfig = {
  ...siteConfig,
  // SEO Limits
  limits: {
    titleLength: {
      min: 50,
      max: 60,
    },
    descriptionLength: {
      min: 140,
      max: 160,
    },
  },
  // Default values
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en_US',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@alfo_online',
    site: '@alfo_online',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
  }
};
