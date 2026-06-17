const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://resumeforge.alfo.online';

export function sanitizeSlug(slug: string): string {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-\/]/g, '-') // Replace invalid chars with hyphen
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
}

export function normalizeRoute(path: string): string {
  if (!path) return '/';

  // Ensure lowercase
  let normalized = path.toLowerCase();

  // Remove duplicate slashes
  normalized = normalized.replace(/\/{2,}/g, '/');

  // Remove trailing slash unless it's just '/'
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  // Ensure it starts with a slash if it's relative and not empty
  if (normalized && !normalized.startsWith('/') && !normalized.startsWith('http')) {
    normalized = `/${normalized}`;
  }

  return normalized;
}

export function validateInternalLink(href: string): string {
  if (!href) return '/';

  if (href.startsWith('http')) {
    // If it's absolute but for our own domain, convert to relative
    if (href.includes(BASE_URL) || href.includes('localhost:') || href.includes('.vercel.app')) {
      try {
        const urlObj = new URL(href);
        if (urlObj.hostname === new URL(BASE_URL).hostname || urlObj.hostname === 'localhost' || urlObj.hostname.endsWith('.vercel.app')) {
          return normalizeRoute(urlObj.pathname);
        }
      } catch (e) {
        // Invalid URL, fallback
      }
    }
    // External link, leave as is
    return href;
  }

  return normalizeRoute(href);
}

export function buildAbsoluteUrl(path: string): string {
  const normalizedPath = normalizeRoute(path);
  const base = BASE_URL.replace(/\/$/, ''); // Remove trailing slash from base

  if (normalizedPath === '/') {
    return base + '/';
  }

  return `${base}${normalizedPath}`;
}
