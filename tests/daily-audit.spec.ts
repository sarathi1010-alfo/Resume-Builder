import { test, expect } from '@playwright/test';

const URLS = [
  '/',
  '/blog/ats-resume-guide-2025',
  '/resume-templates/marketing-manager',
  '/resume-templates/software-engineer',
  '/resume-templates/registered-nurse',
  '/resume-templates/teacher',
  '/resume-guides/entry-level',
  '/resume-guides/executive',
  '/resume-guides/freelancer',
  '/city-guides/resume-new-york'
];

test.describe('Daily Technical Audit', () => {
  for (const url of URLS) {
    test(`Verify ${url} status and basic structure`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);

      // Enforce single H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });
  }

  test('Verify Tier 1 AI Snapshot and Schema', async ({ page }) => {
    await page.goto('/blog/ats-resume-guide-2025');

    // Find the H2 that contains the target text
    const h2 = page.locator('h2:has-text("How to make an ATS-friendly resume in 2025?")');
    await expect(h2).toBeVisible();

    // The snapshot is the paragraph immediately following that H2
    const snapshotContent = await h2.evaluate(el => el.nextElementSibling?.textContent || "");
    const wordCount = snapshotContent.trim().split(/\s+/).length;

    expect(wordCount).toBeGreaterThanOrEqual(25);
    expect(wordCount).toBeLessThanOrEqual(45);

    // Schema check
    const script = await page.locator('script[type="application/ld+json"]').first();
    expect(script).toBeDefined();
  });

  test('Verify Core Home Page Elements', async ({ page }) => {
    await page.goto('/');

    // Check if hero H1 exists
    await expect(page.locator('h1')).toContainText('stands out');

    // Check if ATS Score section exists
    await expect(page.locator('#ats-score-feedback')).toBeDefined();

    // Check if internal links to Tier 1 guide exist
    await expect(page.locator('a[href="/blog/ats-resume-guide-2025"]')).toBeDefined();
  });
});
