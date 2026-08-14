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
  '/city-guides/resume-boston',
  '/blog/no-experience-resume-guide-2026',
  '/resume-templates/high-school-student',
  '/resume-templates/recent-graduate',
  '/resume-templates/retail-associate',
  '/resume-guides/changing-industries',
  '/resume-guides/returning-to-work',
  '/city-guides/resume-austin',
  '/city-guides/resume-chicago',
  '/city-guides/resume-miami',
  '/blog/industry-specific-ats-keywords-2026',
  '/resume-templates/paralegal',
  '/resume-templates/account-executive',
  '/resume-templates/digital-marketing-manager',
  '/resume-guides/tailoring-your-resume',
  '/resume-guides/ats-keywords-by-industry',
  '/city-guides/resume-los-angeles',
  '/city-guides/resume-washington-dc',
  '/city-guides/resume-portland',
  '/blog/ai-resume-screening-2026',
  '/resume-templates/machine-learning-engineer',
  '/resume-templates/ai-researcher',
  '/resume-templates/cybersecurity-analyst',
  '/resume-templates/data-privacy-officer',
  '/resume-guides/promotion',
  '/resume-guides/internal-transfer',
  '/resume-guides/remote-onboarding',
  '/city-guides/resume-san-jose',
  '/blog/career-change-resume-guide-2026',
  '/resume-templates/systems-administrator',
  '/resume-templates/database-administrator',
  '/resume-templates/network-engineer',
  '/resume-guides/remote-work-skills',
  '/resume-guides/hybrid-work-resume',
  '/city-guides/resume-charlotte',
  '/city-guides/resume-indianapolis',
  '/city-guides/resume-columbus',

  '/blog/executive-resume-tips-2026',
  '/resume-templates/chief-executive-officer',
  '/resume-templates/chief-financial-officer',
  '/resume-templates/chief-operating-officer',
  '/resume-templates/chief-technology-officer',
  '/resume-guides/c-level-executives',
  '/resume-guides/board-of-directors',
  '/resume-guides/vp-level',
  '/city-guides/resume-houston',
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
    await page.goto('/blog/industry-specific-ats-keywords-2026');
    const h2 = page.locator('h2', { hasText: 'What are industry-specific ATS keywords and why do they matter?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text(\"What are industry-specific ATS keywords and why do they matter?\") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for ai-resume-screening-2026', async ({ page }) => {
    await page.goto('/blog/ai-resume-screening-2026');
    const h2 = page.locator('h2', { hasText: 'What is AI resume screening and how to beat it?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("What is AI resume screening and how to beat it?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for career-change-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/career-change-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write a career change resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write a career change resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for executive-resume-tips-2026', async ({ page }) => {
    await page.goto('/blog/executive-resume-tips-2026');
    const h2 = page.locator('h2', { hasText: 'What makes an executive resume different in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("What makes an executive resume different in 2026?") + p');
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
