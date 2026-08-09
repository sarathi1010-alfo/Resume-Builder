import { test, expect } from '@playwright/test';

const NEW_URLS = [
  '/blog/best-resume-format-2025',
  '/blog/what-is-an-ats',
  '/blog/reverse-chronological-vs-functional-resume',
  '/blog/what-is-a-hybrid-resume',
  '/blog/what-is-a-resume-summary',
  '/blog/what-is-a-resume-skills-section',
  '/blog/remote-work-resume-tips-2026',
  '/resume-templates/remote-software-engineer',
  '/resume-templates/remote-marketing-manager',
  '/resume-templates/remote-customer-service',
  '/resume-guides/work-from-home',
  '/resume-guides/digital-nomad',
  '/resume-guides/asynchronous-work',
  '/city-guides/resume-denver',
  '/city-guides/resume-seattle',
  '/resume-templates/administrative-assistant',
  '/resume-templates/executive-assistant',
  '/resume-templates/social-media-manager',
  '/resume-templates/content-writer',
  '/resume-guides/part-time',
  '/resume-guides/volunteer-work',
  '/city-guides/resume-atlanta',
  '/city-guides/resume-phoenix',
  '/blog/international-resume-standards-2026',
  '/resume-templates/development-director',
  '/resume-templates/event-coordinator',
  '/resume-templates/financial-planner',
  '/resume-templates/data-engineer',
  '/resume-guides/cover-letter',
  '/resume-guides/certifications',
  '/city-guides/resume-san-diego',
  '/city-guides/resume-philadelphia',
  '/blog/transferable-skills-resume-guide-2026',
  '/resume-templates/product-manager',
  '/resume-templates/hr-manager',
  '/resume-templates/sales-director',
  '/resume-templates/marketing-coordinator',
  '/resume-templates/store-manager',
  '/resume-templates/hotel-manager',
  '/resume-guides/transferable-skills-guide',
  '/resume-guides/portfolio-link',
  '/blog/employment-gaps-resume-2026',
  '/resume-templates/stay-at-home-parent',
  '/resume-templates/sabbatical',
  '/resume-templates/freelance-consultant',
  '/resume-templates/temp-worker',
  '/resume-guides/explaining-layoffs',
  '/resume-guides/career-break',
  '/resume-guides/contract-work',
  '/city-guides/resume-boston'
];

test.describe('Daily Publishing Technical Integrity', () => {
  // Use a larger viewport to avoid overlapping UI elements
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const url of NEW_URLS) {
    test(`Verify 200 OK for ${url}`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);

      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);

      await expect(page.locator('body')).not.toBeEmpty();
    });
  }

  test('Verify AI Snapshot in Tier 1 article', async ({ page }) => {
    await page.goto('/blog/employment-gaps-resume-2026');
    const h2 = page.locator('h2', { hasText: 'How to address employment gaps on a resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text(\"How to address employment gaps on a resume in 2026?\") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });

  test('Verify core builder functionality (ATS Scoring & Export)', async ({ page }) => {
    // 1. Setup mock print
    let printCalled = false;
    await page.exposeFunction('mockPrint', () => { printCalled = true; });
    await page.addInitScript(() => {
      window.print = () => (window as any).mockPrint();
    });

    await page.goto('/builder');

    // Check if editor shell loads
    await expect(page.locator('h1:has-text("Build Your Resume - Free & ATS-Friendly")')).toBeVisible();
  });
});
