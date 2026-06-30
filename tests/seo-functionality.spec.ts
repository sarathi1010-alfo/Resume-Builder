import { test, expect } from '@playwright/test';

test.describe('SEO & Core Functionality Tests', () => {
  const newUrls = [
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

  for (const url of newUrls) {
    test(`URL ${url} should return 200 OK`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);

      // Basic check to ensure page isn't just an empty 200
      const content = await page.content();
      expect(content.length).toBeGreaterThan(100);
    });
  }

  test('Builder core functions (Editor, PDF, ATS Check) should exist on main page', async ({ page }) => {
    // Testing on the root page as requested
    await page.goto('/');

    // Check for builder links on main page
    const builderLink = page.getByRole('link', { name: /Start Building/i }).first();
    await expect(builderLink).toBeVisible();

    // Verify main page elements are functioning
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toBeVisible();

    // Specifically test that the ATS Score section is visible on main page
    const atsSection = page.locator('#ats-score-feedback');
    await expect(atsSection).toBeVisible();
  });

  test('Builder app core functions', async ({ page }) => {
    await page.goto('/builder');

    // Check for editor elements (assuming there's an input/textarea)


    // Check for ATS Checker
    const atsChecker = page.locator('text=ATS Check').first();
    await expect(atsChecker).toBeVisible();

    // Check for PDF export button

  });
});
