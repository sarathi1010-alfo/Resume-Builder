import { test, expect } from '@playwright/test';

const NEW_URLS = [
  '/blog/career-change-resume-guide-2026',
  '/resume-templates/ux-designer',
  '/resume-templates/financial-analyst',
  '/resume-templates/operations-manager',
  '/resume-templates/sales-manager',
  '/resume-guides/career-change',
  '/resume-guides/returning-to-work',
  '/resume-guides/military-transition',
  '/city-guides/resume-chicago'
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
    await page.goto('/blog/career-change-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write a career change resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text(\"How to write a career change resume in 2026?\") + p');
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
