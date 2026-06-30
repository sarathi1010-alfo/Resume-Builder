# Google Search Console Fix Plan for alfo.online

## Objective
Address coverage issues identified in Google Search Console to maintain a zero-error technical environment and maximize indexation.

## Identified Issues & Resolutions

### 1. "Crawled - currently not indexed" (Excluded)
**Issue:** Google has crawled certain dynamic routes (e.g., deep `/location/` pages or low-traffic templates) but has chosen not to index them yet.
**Fix Plan:**
- **Quality Review:** Review the content on these pages to ensure it is unique, substantial, and meets the high-quality threshold (e.g., avoiding boilerplate programmatic text).
- **Internal Linking:** Improve internal linking to these orphaned or low-priority pages. Add a "Popular Locations" or "Related Templates" widget to pillar pages to flow PageRank to these URLs.
- **Sitemap Priority:** Ensure these URLs are included in `app/sitemap.ts` with appropriate priority and change frequency, and ping the sitemap.

### 2. "Discovered - currently not indexed" (Excluded)
**Issue:** Google knows these URLs exist (likely via the sitemap or internal links) but hasn't crawled them due to crawl budget constraints or site architecture issues.
**Fix Plan:**
- **Crawl Budget Optimization:** Ensure that non-essential assets or parameter-heavy URLs are blocked in `robots.txt` to free up crawl budget.
- **IndexNow API:** Implement or manually trigger the IndexNow API for these specific URLs to force rapid discovery and crawling.
- **Pillar Linking:** Add direct links from the homepage or high-traffic blog posts to the most important "Discovered" URLs.

### 3. Soft 404s
**Issue:** Pages that return a 200 OK status but have thin content or look like an error page to Google.
**Fix Plan:**
- **Validation:** Run the SEO validator script (`npm run check-seo`) to ensure no empty programmatic pages are being generated due to missing data in `cities.json` or `job-titles.json`.
- **Content Expansion:** Ensure the `generateStaticParams` data for these pages includes sufficient unique content, FAQ schema, and functional builder components. If a location or job title lacks data, return a hard 404 (`notFound()`) instead of a thin 200 page.

### 4. Hard 404s (Not Found)
**Issue:** URLs that legitimately return a 404 status code, usually due to deleted content or broken internal links.
**Fix Plan:**
- **Redirects:** Implement 301 redirects in `next.config.ts` for any permanently moved or deleted pages, pointing them to the most relevant active template or blog post.
- **Link Auditing:** Run a headless crawler (like Screaming Frog or a custom Playwright script) across the site to identify and fix any broken internal links pointing to these 404 URLs.

## Ongoing Maintenance
- Schedule a weekly review of the GSC Coverage report.
- Maintain the zero-error policy by ensuring the `check-seo` script runs before every production build.
