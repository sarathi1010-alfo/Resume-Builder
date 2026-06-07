/**
 * Resolves the absolute URL for the current environment.
 * Prioritizes explicitly set environment variables over Vercel's auto-generated ones.
 */
export const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
  }

  // Fallback to Vercel production URL if available (avoids branch preview URLs)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  // Fallback to generic Vercel URL (often used for previews)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Default to localhost for local development
  return 'http://localhost:3000';
};

export const siteConfig = {
  name: 'Resume Forge',
  shortName: 'Resume Forge',
  description: 'Build your resume with our real-time editor, verify its ATS score, and download a polished PDF instantly.',
  url: getBaseUrl(),
  ogImage: `${getBaseUrl()}/og-image.jpg`,
  links: {
    twitter: 'https://twitter.com/alfo_online',
    github: 'https://github.com/alfo-online',
    ecosystem: 'https://hub.alfo.online',
  },
  keywords: [
    'free resume builder',
    'ATS resume',
    'resume maker',
    'create resume online'
  ],
};
