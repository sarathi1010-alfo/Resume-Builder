
import { test, expect } from '@playwright/test';

test.use({ video: 'on' });

test('Verify Federal Resume Guide', async ({ page }) => {
  await page.goto('http://localhost:3000/blog/federal-resume-guide-2026');

  await expect(page.locator('h1')).toHaveText('How to Write a Federal Resume That Passes the ATS in 2026');

  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/home/jules/verification/screenshots/federal_resume_guide.png', fullPage: true });
});

test('Verify DC City Guide', async ({ page }) => {
  await page.goto('http://localhost:3000/city-guides/resume-washington-dc-2026');

  await expect(page.locator('h1')).toHaveText('Washington DC Resume Guide - ATS Tips for the Capital Market');

  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/home/jules/verification/screenshots/dc_city_guide.png', fullPage: true });
});
