import { SeoMeta } from '@/types/seo';
import { buildCanonical } from './buildCanonical';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://resumeforge.alfo.online';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Resume Forge';

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`, // Placeholder for actual logo
    "sameAs": [
      // Social links here
    ]
  };
}

export function buildWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildBreadcrumbSchema(items: Array<{ label: string; href: string }>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`
    }))
  };
}

export function buildHowToSchema(page: { title: string; description: string; steps: Array<{ heading: string; body: string; image?: { url: string } }>; estimatedTime?: string }): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": page.title,
    "description": page.description,
    "step": page.steps.map((s, i) => {
      const step: Record<string, unknown> = {
        "@type": "HowToStep",
        "position": i + 1,
        "name": s.heading,
        "text": s.body,
      };
      if (s.image?.url) {
        step.image = s.image.url;
      }
      return step;
    }),
    "totalTime": page.estimatedTime,
  };
}

export function buildSpeakableSchema(cssSelectors: string[] = ["h1", ".article-summary", ".tldr"]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": cssSelectors
  };
}

export function buildArticleSchema(meta: SeoMeta): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.description,
    "image": meta.ogImage ? [meta.ogImage.url] : undefined,
    "datePublished": meta.publishedAt,
    "dateModified": meta.updatedAt || meta.publishedAt,
    "author": meta.author ? {
      "@type": "Person",
      "name": meta.author.name,
      "url": meta.author.url
    } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": buildCanonical(meta.slug)
    }
  };
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}
