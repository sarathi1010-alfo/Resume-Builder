import type { Metadata } from 'next';
import type { SeoMeta } from '@/types/seo';
import { formatTitle } from './formatTitle';
import { buildCanonical } from './buildCanonical';
import { seoConfig } from '@/config/seo.config';

export function resolveMetadata(meta: SeoMeta, isHomepage = false): Metadata {
  const canonical = meta.canonical ?? buildCanonical(meta.slug);
  const title = formatTitle(meta.title, isHomepage);

  return {
    title,
    description: meta.description,
    alternates: {
      canonical,
      languages: meta.alternateLocales
        ? Object.fromEntries(meta.alternateLocales.map(a => [a.locale, a.url]))
        : undefined,
    },
    robots: {
      index: meta.noindex ? false : seoConfig.robots.index,
      follow: meta.nofollow ? false : seoConfig.robots.follow,
      googleBot: {
        index: meta.noindex ? false : seoConfig.robots.googleBot.index,
        follow: meta.nofollow ? false : seoConfig.robots.googleBot.follow,
        'max-image-preview': seoConfig.robots.googleBot['max-image-preview'] as 'large',
        'max-snippet': seoConfig.robots.googleBot['max-snippet'],
        'max-video-preview': seoConfig.robots.googleBot['max-video-preview'],
      },
    },
    openGraph: {
      title,
      description: meta.description,
      url: canonical,
      siteName: seoConfig.siteName,
      type: meta.pageType === 'article' ? 'article' : seoConfig.openGraph.type as any,
      images: meta.ogImage
        ? [{ url: meta.ogImage.url, width: meta.ogImage.width ?? 1200, height: meta.ogImage.height ?? 630, alt: meta.ogImage.alt }]
        : undefined,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt,
      authors: meta.author?.url ? [meta.author.url] : undefined,
      locale: meta.locale ?? seoConfig.defaultLocale,
    },
    twitter: {
      card: meta.ogImage ? 'summary_large_image' : seoConfig.twitter.card as any,
      title,
      description: meta.description,
      images: meta.ogImage ? [meta.ogImage.url] : undefined,
      creator: seoConfig.twitter.creator,
      site: seoConfig.twitter.site,
    },
  };
}
