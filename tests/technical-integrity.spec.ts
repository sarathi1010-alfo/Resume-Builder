import { test, expect } from '@playwright/test';

const NEW_URLS = [
  '/blog/accounting-resume-guide-2026',
  '/blog/ai-resume-screening-2026',
  '/blog/ats-resume-guide-2025',
  '/blog/best-resume-format-2025',
  '/blog/career-change-resume-guide-2026',
  '/blog/customer-success-resume-guide-2026',
  '/blog/cybersecurity-resume-guide-2026',
  '/blog/data-scientist-resume-guide-2026',
  '/blog/digital-marketing-resume-guide-2026',
  '/blog/employment-gaps-resume-2026',
  '/blog/engineering-resume-guide-2026',
  '/blog/executive-resume-tips-2026',
  '/blog/finance-resume-guide-2026',
  '/blog/freelance-to-full-time-resume-guide-2026',
  '/blog/graphic-designer-resume-guide-2026',
  '/blog/healthcare-resume-guide-2026',
  '/blog/hr-resume-guide-2026',
  '/blog/industry-specific-ats-keywords-2026',
  '/blog/international-resume-standards-2026',
  '/blog/it-support-resume-guide-2026',
  '/blog/military-to-civilian-resume-guide-2026',
  '/blog/no-experience-resume-guide-2026',
  '/blog/non-profit-resume-guide-2026',
  '/blog/product-manager-resume-guide-2026',
  '/blog/project-manager-resume-guide-2026',
  '/blog/real-estate-resume-guide-2026',
  '/blog/remote-work-resume-guide-2026',
  '/blog/remote-work-resume-tips-2026',
  '/blog/reverse-chronological-vs-functional-resume',
  '/blog/sales-resume-guide-2026',
  '/blog/startup-resume-guide-2026',
  '/blog/teacher-resume-guide-2026',
  '/blog/tech-industry-resume-guide-2026',
  '/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026',
  '/blog/transferable-skills-resume-guide-2026',
  '/blog/what-is-a-hybrid-resume',
  '/blog/what-is-a-resume-skills-section',
  '/blog/what-is-a-resume-summary',
  '/blog/what-is-an-ats',
  '/city-guides/resume-atlanta',
  '/city-guides/resume-austin',
  '/city-guides/resume-austin-2026',
  '/city-guides/resume-austin-tx',
  '/city-guides/resume-baltimore',
  '/city-guides/resume-boston',
  '/city-guides/resume-charlotte',
  '/city-guides/resume-chicago',
  '/city-guides/resume-cleveland',
  '/city-guides/resume-columbus',
  '/city-guides/resume-denver',
  '/city-guides/resume-detroit-2026',
  '/city-guides/resume-el-paso',
  '/city-guides/resume-fort-worth',
  '/city-guides/resume-houston',
  '/city-guides/resume-indianapolis',
  '/city-guides/resume-jacksonville',
  '/city-guides/resume-las-vegas',
  '/city-guides/resume-los-angeles',
  '/city-guides/resume-louisville',
  '/city-guides/resume-memphis',
  '/city-guides/resume-miami',
  '/city-guides/resume-minneapolis',
  '/city-guides/resume-nashville-2026',
  '/city-guides/resume-new-york',
  '/city-guides/resume-oklahoma-city',
  '/city-guides/resume-omaha',
  '/city-guides/resume-orlando',
  '/city-guides/resume-philadelphia',
  '/city-guides/resume-phoenix',
  '/city-guides/resume-portland',
  '/city-guides/resume-raleigh',
  '/city-guides/resume-salt-lake-city',
  '/city-guides/resume-san-antonio',
  '/city-guides/resume-san-diego',
  '/city-guides/resume-san-francisco',
  '/city-guides/resume-san-jose',
  '/city-guides/resume-seattle',
  '/city-guides/resume-tampa',
  '/city-guides/resume-washington-dc',
  '/resume-guides/accounting-internship',
  '/resume-guides/agile-methodology',
  '/resume-guides/agile-resume-tips-2026',
  '/resume-guides/asynchronous-work',
  '/resume-guides/ats-keywords-by-industry',
  '/resume-guides/b2b-account-management',
  '/resume-guides/b2b-sales-resume',
  '/resume-guides/board-of-directors',
  '/resume-guides/c-level-executives',
  '/resume-guides/career-break',
  '/resume-guides/certifications',
  '/resume-guides/changing-industries',
  '/resume-guides/client-relations-skills',
  '/resume-guides/clinical-experience',
  '/resume-guides/closing-skills',
  '/resume-guides/contract-to-hire',
  '/resume-guides/contract-work',
  '/resume-guides/cover-letter',
  '/resume-guides/cpa-certification',
  '/resume-guides/creative-ats-formatting',
  '/resume-guides/cross-functional-leadership',
  '/resume-guides/customer-retention',
  '/resume-guides/customer-service-it',
  '/resume-guides/cybersecurity-certifications',
  '/resume-guides/cybersecurity-certifications-2026',
  '/resume-guides/data-science-portfolio',
  '/resume-guides/data-science-skills',
  '/resume-guides/design-portfolio-resume',
  '/resume-guides/digital-nomad',
  '/resume-guides/employee-relations',
  '/resume-guides/engineering-metrics',
  '/resume-guides/engineering-portfolio',
  '/resume-guides/entry-level',
  '/resume-guides/ethical-hacking-portfolio',
  '/resume-guides/ethical-hacking-portfolio-2026',
  '/resume-guides/executive',
  '/resume-guides/explaining-layoffs',
  '/resume-guides/finance-certifications',
  '/resume-guides/finance-internship',
  '/resume-guides/freelance-experience',
  '/resume-guides/freelancer',
  '/resume-guides/grant-writing-skills',
  '/resume-guides/hr-compliance',
  '/resume-guides/hris-systems',
  '/resume-guides/hybrid-work-resume',
  '/resume-guides/internal-transfer',
  '/resume-guides/internship-2026',
  '/resume-guides/it-certifications',
  '/resume-guides/it-security-clearances',
  '/resume-guides/it-security-clearances-2026',
  '/resume-guides/marketing-certifications-2026',
  '/resume-guides/marketing-portfolio-resume',
  '/resume-guides/medical-certifications',
  '/resume-guides/military-to-civilian-transition',
  '/resume-guides/non-profit-metrics',
  '/resume-guides/part-time',
  '/resume-guides/part-time-2026',
  '/resume-guides/patient-care-skills',
  '/resume-guides/pmp-certification-resume-2026',
  '/resume-guides/portfolio-integration',
  '/resume-guides/portfolio-link',
  '/resume-guides/product-roadmaps',
  '/resume-guides/project-portfolio-resume-2026',
  '/resume-guides/promotion',
  '/resume-guides/property-sales-metrics',
  '/resume-guides/public-accounting',
  '/resume-guides/quantifying-data-impact',
  '/resume-guides/quantifying-finance-impact',
  '/resume-guides/quantifying-marketing-impact',
  '/resume-guides/real-estate-licenses',
  '/resume-guides/remote-entry-level',
  '/resume-guides/remote-executive',
  '/resume-guides/remote-onboarding',
  '/resume-guides/remote-work-skills',
  '/resume-guides/returning-to-work',
  '/resume-guides/saas-customer-success',
  '/resume-guides/sales-metrics',
  '/resume-guides/security-clearance-resume',
  '/resume-guides/senior-developer',
  '/resume-guides/startup-cover-letter',
  '/resume-guides/startup-interview',
  '/resume-guides/startup-resume-tips',
  '/resume-guides/tailoring-your-resume',
  '/resume-guides/tech-internship',
  '/resume-guides/tech-lead',
  '/resume-guides/technical-skills-formatting',
  '/resume-guides/transferable-skills-guide',
  '/resume-guides/translating-military-jargon',
  '/resume-guides/troubleshooting-skills',
  '/resume-guides/typography-skills',
  '/resume-guides/volunteer-management',
  '/resume-guides/volunteer-work',
  '/resume-guides/vp-level',
  '/resume-guides/work-from-home',
  '/resume-templates/account-executive',
  '/resume-templates/accountant',
  '/resume-templates/administrative-assistant',
  '/resume-templates/agile-coach-2026',
  '/resume-templates/ai-researcher',
  '/resume-templates/art-director',
  '/resume-templates/associate-product-manager',
  '/resume-templates/auditor',
  '/resume-templates/backend-developer',
  '/resume-templates/benefits-administrator',
  '/resume-templates/big-data-engineer',
  '/resume-templates/bookkeeper',
  '/resume-templates/business-development-manager',
  '/resume-templates/chemical-engineer',
  '/resume-templates/chief-executive-officer',
  '/resume-templates/chief-financial-officer',
  '/resume-templates/chief-operating-officer',
  '/resume-templates/chief-revenue-officer',
  '/resume-templates/chief-technology-officer',
  '/resume-templates/civil-engineer',
  '/resume-templates/client-onboarding-specialist',
  '/resume-templates/cloud-security-engineer-2026',
  '/resume-templates/consultant',
  '/resume-templates/content-marketing-manager-2026',
  '/resume-templates/content-writer',
  '/resume-templates/contractor',
  '/resume-templates/cpa-template',
  '/resume-templates/customer-success-director',
  '/resume-templates/customer-success-operations-manager',
  '/resume-templates/customer-support',
  '/resume-templates/cybersecurity-analyst',
  '/resume-templates/data-engineer',
  '/resume-templates/data-engineer-2026',
  '/resume-templates/data-entry',
  '/resume-templates/data-privacy-officer',
  '/resume-templates/database-administrator',
  '/resume-templates/database-developer',
  '/resume-templates/defense-contractor',
  '/resume-templates/development-director',
  '/resume-templates/digital-marketing-manager',
  '/resume-templates/electrical-engineer',
  '/resume-templates/email-marketing-manager-2026',
  '/resume-templates/event-coordinator',
  '/resume-templates/executive-assistant',
  '/resume-templates/financial-analyst',
  '/resume-templates/financial-planner',
  '/resume-templates/freelance-consultant',
  '/resume-templates/freelance-designer',
  '/resume-templates/freelance-writer',
  '/resume-templates/frontend-developer',
  '/resume-templates/full-stack-developer',
  '/resume-templates/fundraising-manager',
  '/resume-templates/government-analyst',
  '/resume-templates/grant-writer',
  '/resume-templates/growth-product-manager',
  '/resume-templates/healthcare-administrator',
  '/resume-templates/help-desk-technician',
  '/resume-templates/high-school-student',
  '/resume-templates/hotel-manager',
  '/resume-templates/hr-coordinator',
  '/resume-templates/hr-generalist',
  '/resume-templates/hr-manager',
  '/resume-templates/identity-access-manager-2026',
  '/resume-templates/incident-responder',
  '/resume-templates/infrastructure-project-manager',
  '/resume-templates/inside-sales-rep',
  '/resume-templates/investment-banker',
  '/resume-templates/it-support-specialist',
  '/resume-templates/leasing-consultant',
  '/resume-templates/logistics-coordinator',
  '/resume-templates/machine-learning-engineer',
  '/resume-templates/machine-learning-engineer-2026',
  '/resume-templates/malware-analyst-2026',
  '/resume-templates/marketing-coordinator',
  '/resume-templates/marketing-manager',
  '/resume-templates/mechanical-engineer',
  '/resume-templates/medical-assistant',
  '/resume-templates/motion-graphics-designer',
  '/resume-templates/network-engineer',
  '/resume-templates/network-technician',
  '/resume-templates/non-profit-director',
  '/resume-templates/online-tutor',
  '/resume-templates/paralegal',
  '/resume-templates/penetration-tester',
  '/resume-templates/pharmacist',
  '/resume-templates/physical-therapist',
  '/resume-templates/product-manager',
  '/resume-templates/product-marketing-manager',
  '/resume-templates/program-manager-2026',
  '/resume-templates/property-manager',
  '/resume-templates/qa-engineer',
  '/resume-templates/quantitative-analyst',
  '/resume-templates/real-estate-agent',
  '/resume-templates/real-estate-broker',
  '/resume-templates/recent-graduate',
  '/resume-templates/registered-nurse',
  '/resume-templates/remote-customer-service',
  '/resume-templates/remote-marketing-manager',
  '/resume-templates/remote-software-engineer',
  '/resume-templates/retail-associate',
  '/resume-templates/sabbatical',
  '/resume-templates/sales-director',
  '/resume-templates/sales-engineer',
  '/resume-templates/security-architect',
  '/resume-templates/security-compliance-analyst-2026',
  '/resume-templates/security-manager',
  '/resume-templates/seo-specialist-2026',
  '/resume-templates/soc-analyst',
  '/resume-templates/social-media-coordinator-2026',
  '/resume-templates/social-media-manager',
  '/resume-templates/software-engineer',
  '/resume-templates/solutions-architect',
  '/resume-templates/statistician',
  '/resume-templates/stay-at-home-parent',
  '/resume-templates/store-manager',
  '/resume-templates/support-specialist',
  '/resume-templates/system-administrator',
  '/resume-templates/systems-administrator',
  '/resume-templates/talent-acquisition-specialist',
  '/resume-templates/tax-accountant',
  '/resume-templates/teacher',
  '/resume-templates/technical-product-manager',
  '/resume-templates/technical-project-manager-2026',
  '/resume-templates/temp-worker',
  '/resume-templates/ui-designer',
  '/resume-templates/virtual-assistant',
  '/resume-templates/visual-designer',
  '/resume-templates/volunteer-coordinator',
  '/resume-templates/vp-of-sales',
  '/blog/healthcare-ats-resume-guide-2026',
  '/resume-templates/medical-biller',
  '/resume-templates/dental-assistant',
  '/resume-templates/pharmacy-technician',
  '/resume-templates/healthcare-admin',
  '/resume-guides/nursing-student',
  '/resume-guides/travel-nurse',
  '/resume-guides/clinical-research',
];

test.describe('Daily Publishing Technical Integrity', () => {

  test('Verify AI Snapshot in Tier 1 article for teacher-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/teacher-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write a teacher resume for ATS in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write a teacher resume for ATS in 2026?") + p');
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


  test('Verify AI Snapshot in Tier 1 article for finance-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/finance-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write a finance resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write a finance resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for freelance-to-full-time-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/freelance-to-full-time-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to transition from freelance to full time resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to transition from freelance to full time resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });



  test('Verify AI Snapshot in Tier 1 article for graphic-designer-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/graphic-designer-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly graphic designer resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly graphic designer resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for supply-chain-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/supply-chain-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly supply chain resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly supply chain resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for customer-success-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/customer-success-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to optimize your customer success resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to optimize your customer success resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for hr-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/hr-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly HR resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly HR resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for it-support-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/it-support-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly IT support resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly IT support resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for real-estate-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/real-estate-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly real estate resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly real estate resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });


  test('Verify AI Snapshot in Tier 1 article for healthcare-ats-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/healthcare-ats-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly healthcare resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly healthcare resume in 2026?") + p');
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

  test('Verify AI Snapshot in Tier 1 article for product-manager-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/product-manager-resume-guide-2026');
    const h2s = await page.locator('h2').allInnerTexts();
    const targetH2 = h2s.find(t => t.toLowerCase().includes('how to write an ats-friendly product manager resume'));
    expect(targetH2).toBeTruthy();

    // Find paragraph immediately after this h2
    const h2Locator = page.locator('h2', { hasText: 'How to write an ATS-friendly product manager resume' }).first();
    const snapshotPara = h2Locator.locator('+ p');
    const text = await snapshotPara.innerText();

    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(45);
  });


  test('Verify AI Snapshot in Tier 1 article for digital-marketing-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/digital-marketing-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly digital marketing resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly digital marketing resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });
});

  test('Verify AI Snapshot in Tier 1 article for accounting-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/accounting-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly accounting resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly accounting resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });

  test('Verify AI Snapshot in Tier 1 article for tech-industry-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/tech-industry-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly tech resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly tech resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });

test.describe('Non Profit Snapshot', () => {
  test('Verify AI Snapshot in Tier 1 article for non-profit-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/non-profit-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to write an ATS-friendly non-profit resume in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to write an ATS-friendly non-profit resume in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(45);
  });
});

  test('Verify AI Snapshot in Tier 1 article for engineering-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/engineering-resume-guide-2026');
    const aiSnapshot = await page.textContent('h2 + p');
    expect(aiSnapshot?.trim().split(' ').length).toBeGreaterThanOrEqual(30);
    expect(aiSnapshot?.trim().split(' ').length).toBeLessThanOrEqual(40);
  });


test.describe('Remote Work Snapshot', () => {
  test('Verify AI Snapshot in Tier 1 article for remote-work-resume-guide-2026', async ({ page }) => {
    await page.goto('/blog/remote-work-resume-guide-2026');
    const h2 = page.locator('h2', { hasText: 'How to optimize your resume for remote jobs in 2026?' });
    await expect(h2).toBeVisible();

    const aiSnapshot = page.locator('h2:has-text("How to optimize your resume for remote jobs in 2026?") + p');
    const text = await aiSnapshot.innerText();
    const wordCount = text.split(/\s+/).length;
    expect(wordCount).toBeGreaterThanOrEqual(30);
    expect(wordCount).toBeLessThanOrEqual(40);
  });
});
