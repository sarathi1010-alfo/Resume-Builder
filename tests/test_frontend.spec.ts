import { test, expect } from '@playwright/test';

test.use({ video: 'on' });

test('Verify new Tier 1 article UI', async ({ page }) => {
  await page.goto('http://localhost:3000/blog/how-to-tailor-resume-ats-2026');
  await page.waitForLoadState('networkidle');

  // Verify H1
  const h1 = page.locator('h1', { hasText: 'How to Tailor Your Resume for ATS in 2026: A Complete Guide' });
  await expect(h1).toBeVisible();

  // Verify AI Snapshot
  const snapshot = page.locator('p', { hasText: 'To tailor your resume for an ATS in 2026, mirror the exact keywords' }).first();
  await expect(snapshot).toBeVisible();

  // Take screenshot
  await page.screenshot({ path: '/home/jules/verification/screenshots/how-to-tailor-resume-ats-2026.png', fullPage: true });
});
