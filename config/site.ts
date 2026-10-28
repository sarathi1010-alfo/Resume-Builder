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

  return 'https://resumeforge.alfo.online';
};

export const siteConfig = {
  name: 'ResumeForge',
  shortName: 'ResumeForge',
  description: 'Build ATS-friendly resumes with real-time scoring and instant PDF export. 100% free ats resume builder with professional formatting and no fees.',
  url: getBaseUrl(),
  ogImage: `${getBaseUrl()}/og-image.jpg`,
  links: {
    twitter: 'https://x.com',
    ecosystem: 'https://alfo.online',
  },
  keywords: [
    'free ats resume builder',
    'ats friendly resume templates',
    'resume builder with ats score',
    'professional resume creator online',
    'free cv maker pdf'
  ],
};
