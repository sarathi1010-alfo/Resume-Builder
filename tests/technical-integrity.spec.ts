import { test, expect } from '@playwright/test';

const NEW_URLS = [
  '/blog/ats-resume-guide-2025',
  '/resume-templates/marketing-manager',
  '/resume-templates/software-engineer',
  '/resume-templates/registered-nurse',
  '/resume-templates/teacher',
  '/resume-guides/entry-level',
  '/resume-guides/executive',
  '/resume-guides/freelancer',
  '/city-guides/resume-new-york',
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
    await page.goto('/blog/ats-resume-guide-2025');
    const h2 = page.locator('h2', { hasText: 'How to make an ATS-friendly resume in 2025?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to make an ATS-friendly resume in 2025?") + p');
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
    await expect(page.locator('text=Resume Details')).toBeVisible();

    // 2. Test ATS Scoring (Open panel)
    const atsButton = page.locator('button:has-text("ATS Check")');
    await atsButton.click();

    // Ensure score is visible in the panel
    await expect(page.locator('text=/Overall Score/i')).toBeVisible();

    // Close the ATS panel to ensure it doesn't intercept clicks
    // The close button has an XCircle icon
    await page.locator('button:has(svg)').last().click();

    // 3. Test PDF Export
    const exportButton = page.getByRole('button', { name: /Export PDF/i });
    await exportButton.click();

    // Wait for the print call
    await expect.poll(() => printCalled, {
        message: 'window.print was not called',
        timeout: 5000,
    }).toBe(true);
  });
});
