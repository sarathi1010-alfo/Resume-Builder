import type { SeoMeta, PageType } from '@/types/seo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://resumeforge.alfo.online';

export function buildStaticPageMeta(page: { title: string; description: string; slug: string; h1?: string }): SeoMeta {
  return {
    title: page.title || 'Untitled',
    description: (page.description || '').slice(0, 160),
    slug: page.slug,
    pageType: 'website' as PageType,
    h1: page.h1,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(page.title)}&type=website`,
      alt: page.title
    }
  };
}

export function buildBlogPostMeta(post: { title: string; description: string; slug: string; h1?: string; date?: string; author?: {name: string, url?: string} }): SeoMeta {
  return {
    title: post.title || 'Untitled',
    description: (post.description || '').slice(0, 160),
    slug: `/blog/${post.slug}`,
    pageType: 'article' as PageType,
    h1: post.h1,
    publishedAt: post.date,
    updatedAt: post.date,
    author: post.author,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(post.title)}&type=article`,
      alt: post.title
    }
  };
}

export function buildUseCaseMeta(useCase: { title: string; description: string; slug: string; h1?: string }): SeoMeta {
  return {
    title: useCase.title || 'Untitled',
    description: (useCase.description || '').slice(0, 160),
    slug: `/use-cases/${useCase.slug}`,
    pageType: 'website' as PageType,
    h1: useCase.h1,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(useCase.title)}&type=website`,
      alt: useCase.title
    }
  };
}

export function buildComparisonMeta(comp: { title: string; description: string; slug: string; h1?: string }): SeoMeta {
  return {
    title: comp.title || 'Untitled',
    description: (comp.description || '').slice(0, 160),
    slug: `/vs/${comp.slug}`,
    pageType: 'website' as PageType,
    h1: comp.h1,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(comp.title)}&type=website`,
      alt: comp.title
    }
  };
}
