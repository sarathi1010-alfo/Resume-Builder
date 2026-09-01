# Plan for executing the daily publishing workflow (Penetration Tester / Cybersecurity angle)

We will execute the weekly content strategy schedule using a fresh thematic angle: **"Cybersecurity Resume Guide"**.

1. **Tier 1 Content Creation (Pillar Article):**
   - **Target Query:** "how to write a cybersecurity resume in 2026"
   - **URL Slug:** `/blog/cybersecurity-resume-guide-2026`
   - **Content:** Generate ~1,500 words with H1 ("The Ultimate Guide to Writing a Cybersecurity Resume in 2026"), proper H2/H3s.
   - **AI Snapshot:** Add a 30-40 word direct answer immediately following the first H2 ("How to write an ATS-friendly cybersecurity resume in 2026?").
   - **Schema/Format:** Add FAQ schema, valid JSON-LD, self-referencing canonical. Insert outbound links to `/` and `/ats-score`. Append entry to `data/seo-content.json`.

2. **Tier 2 Programmatic Pages (8 pages):**
   - **4 Resume Templates (Job roles):** e.g., Penetration Tester, Security Architect, Incident Responder, SOC Analyst. (append to `data/programmatic-pages.json` under `resume-templates`)
   - **3 Resume Guides (Experience/Skills):** e.g., Cybersecurity Certifications, IT Security Clearances, Ethical Hacking Portfolio. (append to `resume-guides`)
   - **1 City Guide:** e.g., Washington DC (if exists, update it, or add a new one like `resume-cyber-hub-dc` or pick an un-targeted city like `resume-baltimore`). Let's pick `resume-baltimore`.

3. **Tier 3 Social Posts:**
   - Draft 15 social media posts (X, LinkedIn, Facebook) promoting the new content and Append them to `social-posts.md`.

4. **Internal Linking (Inbound Retro):**
   - Find 2 legacy resource pages (e.g., `remote-work-resume-tips-2026` or `tech-resume-guide`) and add an anchor link pointing to the new `/blog/cybersecurity-resume-guide-2026`. Update their `lastModified` date.

5. **Test Maintenance & Technical Integrity:**
   - Append the 9 new URLs to `NEW_URLS` in `tests/technical-integrity.spec.ts`.
   - Add a test block for "Verify AI Snapshot in Tier 1 article for cybersecurity-resume-guide-2026".
   - Verify UI by running `npm run build` then `npm run dev` and taking screenshots if needed, or by ensuring zero console errors in playwright.

6. **Indexing Automation & Sitemap:**
   - Update `trigger_indexing.sh` with the 9 new URLs.
   - Run `bash trigger_indexing.sh`.
   - Verify sitemap outputs via build / tests.

7. **Pre-commit Steps & Submission:**
   - Run pre-commit instructions, ensure all Playwright tests pass (`npx playwright test`).
   - Run `npm run check-seo` to validate schema and URLs.
   - Complete Pre-commit checklist and submit.
