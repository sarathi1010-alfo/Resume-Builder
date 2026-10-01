import { test, expect } from '@playwright/test';

test('Take screenshot of new Tier 1 article', async ({ page }) => {
  await page.goto('http://localhost:3000/blog/ats-keyword-strategy-2026');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/home/jules/verification/screenshots/ats-keyword-strategy-2026.png', fullPage: true });
});
