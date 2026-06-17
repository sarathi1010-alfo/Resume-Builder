import { buildAbsoluteUrl, normalizeRoute, sanitizeSlug } from './urlNormalization';

export function buildCanonical(slug: string): string {
  // Use our new URL normalizers to ensure strict SEO standards
  // - No trailing slashes (except root)
  // - No duplicate slashes
  // - Lowercase only
  const safeSlug = sanitizeSlug(slug);
  return buildAbsoluteUrl(safeSlug);
}
