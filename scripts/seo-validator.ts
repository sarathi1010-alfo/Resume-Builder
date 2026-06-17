import fs from 'fs';
import path from 'path';

// Parse JSON directly instead of require to fix ESM issues
const seoDataRaw = fs.readFileSync(path.join(process.cwd(), 'data', 'seo-content.json'), 'utf-8');
const seoData = JSON.parse(seoDataRaw);

let errors = 0;

function reportError(msg: string) {
  console.error(`❌ ERROR: ${msg}`);
  errors++;
}

console.log('🔍 Starting SEO Validation Pipeline...');

// 1. Check SEO Data Integrity
['useCases', 'comparisons', 'blogs'].forEach((collection) => {
  if (!seoData[collection]) {
    reportError(`Missing collection '${collection}' in seo-content.json`);
    return;
  }

  seoData[collection].forEach((item: any, index: number) => {
    if (!item.slug) reportError(`${collection}[${index}] is missing a slug`);
    if (!item.title) reportError(`${collection}[${index}] (${item.slug || 'unknown'}) is missing a title`);
    if (!item.description) reportError(`${collection}[${index}] (${item.slug || 'unknown'}) is missing a description`);

    // Slug rules: lowercase, kebab-case, no trailing slashes
    if (item.slug && item.slug !== item.slug.toLowerCase()) {
      reportError(`Slug must be lowercase: ${item.slug}`);
    }
    if (item.slug && item.slug.endsWith('/')) {
      reportError(`Slug must not end with slash: ${item.slug}`);
    }
  });
});

// 2. Scan core files for obvious SEO anti-patterns (trailing slash hrefs)
function scanFileForBadLinks(filePath: string) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Check for href="/something/"
    const match = line.match(/href="\/[a-zA-Z0-9_-]+\/"/);
    if (match) {
      reportError(`Trailing slash found in ${filePath}:${index + 1} -> ${match[0]}`);
    }

    // Check for dev URLs
    if (line.includes('href="http://localhost') || line.includes('href="https://localhost')) {
      reportError(`Localhost link found in ${filePath}:${index + 1}`);
    }

    if (line.includes('.vercel.app') && !filePath.includes('middleware.ts') && !filePath.includes('site.ts') && !filePath.includes('robots.ts') && !filePath.includes('urlNormalization.ts') && !filePath.includes('SEO_ARCHITECTURE.md')) {
       // Just warn about vercel.app links, we usually don't want them hardcoded except in specific configs
       console.warn(`⚠️  WARNING: Vercel domain found in ${filePath}:${index + 1}`);
    }
  });
}

// Scan important layout files
const filesToScan = [
  path.join(process.cwd(), 'app', 'page.tsx'),
  path.join(process.cwd(), 'components', 'layout', 'Header.tsx'),
  path.join(process.cwd(), 'components', 'layout', 'Footer.tsx')
];

filesToScan.forEach(scanFileForBadLinks);

if (errors > 0) {
  console.error(`\n💥 SEO Validation Failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log('\n✅ SEO Validation Passed. Architecture is safe.');
  process.exit(0);
}
