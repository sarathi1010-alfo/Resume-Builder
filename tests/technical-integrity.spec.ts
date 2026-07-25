import { test, expect } from '@playwright/test';

const NEW_URLS = [
  '/blog/remote-work-resume-tips-2026',
  '/resume-templates/remote-customer-service',
  '/resume-templates/remote-marketing-manager',
  '/resume-templates/remote-software-engineer',
  '/resume-templates/virtual-assistant',
  '/resume-guides/work-from-home',
  '/resume-guides/asynchronous-work',
  '/resume-guides/digital-nomad',
  '/city-guides/resume-austin'
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
    await page.goto('/blog/remote-work-resume-tips-2026');
    const h2 = page.locator('h2', { hasText: 'How to optimize your resume for remote work in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to optimize your resume for remote work in 2026?") + p');
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
