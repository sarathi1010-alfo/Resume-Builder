import type { SeoMeta, PageType } from '@/types/seo';
import { seoConfig } from '@/config/seo.config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://resumeforge.alfo.online';

function enforceLength(text: string, max: number): string {
  if (!text) return '';
  return text.length > max ? text.slice(0, max - 3) + '...' : text;
}

export function buildStaticPageMeta(page: { title: string; description: string; slug: string; h1?: string }): SeoMeta {
  return {
    title: page.title || 'Untitled',
    description: enforceLength(page.description || seoConfig.description, seoConfig.limits.descriptionLength.max),
    slug: page.slug,
    pageType: 'website' as PageType,
    h1: page.h1,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(page.title || seoConfig.name)}&type=website`,
      alt: page.title || seoConfig.name
    }
  };
}

export function buildBlogPostMeta(post: { title: string; description: string; slug: string; h1?: string; date?: string; author?: {name: string, url?: string} }): SeoMeta {
  return {
    title: post.title || 'Untitled',
    description: enforceLength(post.description || seoConfig.description, seoConfig.limits.descriptionLength.max),
    slug: `/blog/${post.slug}`,
    pageType: 'article' as PageType,
    h1: post.h1,
    publishedAt: post.date,
    updatedAt: post.date,
    author: post.author,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(post.title || seoConfig.name)}&type=article`,
      alt: post.title || seoConfig.name
    }
  };
}

export function buildUseCaseMeta(useCase: { title: string; description: string; slug: string; h1?: string }): SeoMeta {
  return {
    title: useCase.title || 'Untitled',
    description: enforceLength(useCase.description || seoConfig.description, seoConfig.limits.descriptionLength.max),
    slug: `/use-cases/${useCase.slug}`,
    pageType: 'website' as PageType,
    h1: useCase.h1,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(useCase.title || seoConfig.name)}&type=website`,
      alt: useCase.title || seoConfig.name
    }
  };
}

export function buildComparisonMeta(comp: { title: string; description: string; slug: string; h1?: string }): SeoMeta {
  return {
    title: comp.title || 'Untitled',
    description: enforceLength(comp.description || seoConfig.description, seoConfig.limits.descriptionLength.max),
    slug: `/vs/${comp.slug}`,
    pageType: 'website' as PageType,
    h1: comp.h1,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(comp.title || seoConfig.name)}&type=website`,
      alt: comp.title || seoConfig.name
    }
  };
}
