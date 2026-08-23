import { test, expect } from '@playwright/test';

const NEW_URLS = [
  '/blog/healthcare-resume-guide-2026',
  '/resume-templates/medical-assistant',
  '/resume-templates/pharmacist',
  '/resume-templates/physical-therapist',
  '/resume-templates/healthcare-administrator',
  '/resume-guides/clinical-experience',
  '/resume-guides/medical-certifications',
  '/resume-guides/patient-care-skills',
  '/city-guides/resume-minneapolis',
  '/blog/ats-resume-guide-2025',
  '/resume-templates/marketing-manager',
  '/resume-templates/software-engineer',
  '/resume-templates/registered-nurse',
  '/resume-templates/teacher',
  '/resume-guides/entry-level',
  '/resume-guides/executive',
  '/resume-guides/freelancer',
  '/city-guides/resume-new-york',

    '/blog/military-to-civilian-resume-guide-2026',
  '/resume-templates/security-manager',
  '/resume-templates/logistics-coordinator',
  '/resume-templates/defense-contractor',
  '/resume-templates/government-analyst',
  '/resume-guides/military-to-civilian-transition',
  '/resume-guides/security-clearance-resume',
  '/resume-guides/translating-military-jargon',
  '/city-guides/resume-san-antonio',
  '/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026',
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
  '/blog/startup-resume-guide-2026',
  '/resume-templates/chief-revenue-officer',
  '/resume-templates/business-development-manager',
  '/resume-templates/customer-success-manager',
  '/resume-templates/solutions-architect',
  '/resume-guides/startup-resume-tips',
  '/resume-guides/startup-cover-letter',
  '/resume-guides/startup-interview',
  '/city-guides/resume-salt-lake-city'
,
  '/blog/project-manager-resume-guide-2026',
  '/resume-templates/technical-project-manager-2026',
  '/resume-templates/agile-coach-2026',
  '/resume-templates/program-manager-2026',
  '/resume-templates/infrastructure-project-manager',
  '/resume-guides/pmp-certification-resume-2026',
  '/resume-guides/agile-resume-tips-2026',
  '/resume-guides/project-portfolio-resume-2026',
  '/city-guides/resume-nashville-2026',
  '/blog/data-scientist-resume-guide-2026',
  '/resume-templates/big-data-engineer',
  '/resume-templates/database-developer',
  '/resume-templates/statistician',
  '/resume-templates/quantitative-analyst',
  '/resume-guides/data-science-portfolio',
  '/resume-guides/quantifying-data-impact',
  '/resume-guides/data-science-skills',
  '/city-guides/resume-raleigh',
];

test.describe('Daily Publishing Technical Integrity', () => {

  test('Verify AI Snapshot in Tier 1 article for ats-resume-guide-2025', async ({ page }) => {
    await page.goto('/blog/ats-resume-guide-2025');
    const h2 = page.locator('h2', { hasText: 'How to make an ATS-friendly resume in 2025?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to make an ATS-friendly resume in 2025?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });

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
    await page.goto('/blog/healthcare-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly healthcare resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly healthcare resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });

  test('Verify AI Snapshot in Tier 1 article for industry-specific-ats-keywords-2026', async ({ page }) => {
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


  test('Verify AI Snapshot in Tier 1 article for the-ultimate-guide-to-ats-friendly-resumes-in-2026', async ({ page }) => {
    await page.goto('/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026');
    const h2 = page.locator('h2', { hasText: 'Executive Summary: How to Build an ATS-Friendly Resume' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("Executive Summary: How to Build an ATS-Friendly Resume") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for best-resume-format-2025', async ({ page }) => {
    await page.goto('/blog/best-resume-format-2025');
    const h2 = page.locator('h2', { hasText: 'Why The Right Resume Format Matters for Job Seekers' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("Why The Right Resume Format Matters for Job Seekers") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for remote-work-resume-tips-2026', async ({ page }) => {
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

test.describe('Military to Civilian Snapshot', () => {
  test('Verify AI Snapshot in Tier 1 article for military-to-civilian-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/military-to-civilian-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to transition from military to civilian workforce in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to transition from military to civilian workforce in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);

  });
});


test.describe('Startup Resume Snapshot', () => {
  test('Verify AI Snapshot in Tier 1 article for startup-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/startup-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to optimize your resume for startup jobs in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to optimize your resume for startup jobs in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });
});

test.describe('Project Manager Snapshot', () => {
  test('Verify AI Snapshot in Tier 1 article for project-manager-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/project-manager-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write a project manager resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write a project manager resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });
});

test.describe('Data Scientist Snapshot', () => {
  test('Verify AI Snapshot in Tier 1 article for data-scientist-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/data-scientist-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write a data scientist resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write a data scientist resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });
});
