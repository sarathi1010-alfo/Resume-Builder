#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
    "https://resumeforge.alfo.online/blog/military-to-civilian-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/security-manager"
  "https://resumeforge.alfo.online/resume-templates/logistics-coordinator"
  "https://resumeforge.alfo.online/resume-templates/defense-contractor"
  "https://resumeforge.alfo.online/resume-templates/government-analyst"
  "https://resumeforge.alfo.online/resume-guides/military-to-civilian-transition"
  "https://resumeforge.alfo.online/resume-guides/security-clearance-resume"
  "https://resumeforge.alfo.online/resume-guides/translating-military-jargon"
  "https://resumeforge.alfo.online/city-guides/resume-san-antonio"
  "https://resumeforge.alfo.online/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026"
  "https://resumeforge.alfo.online/blog/international-resume-standards-2026"
  "https://resumeforge.alfo.online/resume-templates/development-director"
  "https://resumeforge.alfo.online/resume-templates/event-coordinator"
  "https://resumeforge.alfo.online/resume-templates/financial-planner"
  "https://resumeforge.alfo.online/resume-templates/data-engineer"
  "https://resumeforge.alfo.online/resume-guides/cover-letter"
  "https://resumeforge.alfo.online/resume-guides/certifications"
  "https://resumeforge.alfo.online/city-guides/resume-san-diego"
  "https://resumeforge.alfo.online/city-guides/resume-philadelphia"
  "https://resumeforge.alfo.online/blog/transferable-skills-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/product-manager"
  "https://resumeforge.alfo.online/resume-templates/hr-manager"
  "https://resumeforge.alfo.online/resume-templates/sales-director"
  "https://resumeforge.alfo.online/resume-templates/marketing-coordinator"
  "https://resumeforge.alfo.online/resume-templates/store-manager"
  "https://resumeforge.alfo.online/resume-templates/hotel-manager"
  "https://resumeforge.alfo.online/resume-guides/transferable-skills-guide"
  "https://resumeforge.alfo.online/resume-guides/portfolio-link"
  "https://resumeforge.alfo.online/blog/employment-gaps-resume-2026"
  "https://resumeforge.alfo.online/resume-templates/stay-at-home-parent"
  "https://resumeforge.alfo.online/resume-templates/sabbatical"
  "https://resumeforge.alfo.online/resume-templates/freelance-consultant"
  "https://resumeforge.alfo.online/resume-templates/temp-worker"
  "https://resumeforge.alfo.online/resume-guides/explaining-layoffs"
  "https://resumeforge.alfo.online/resume-guides/career-break"
  "https://resumeforge.alfo.online/resume-guides/contract-work"
  "https://resumeforge.alfo.online/city-guides/resume-boston"
  "https://resumeforge.alfo.online/blog/no-experience-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/high-school-student"
  "https://resumeforge.alfo.online/resume-templates/recent-graduate"
  "https://resumeforge.alfo.online/resume-templates/retail-associate"
  "https://resumeforge.alfo.online/resume-guides/changing-industries"
  "https://resumeforge.alfo.online/resume-guides/returning-to-work"
  "https://resumeforge.alfo.online/city-guides/resume-austin"
  "https://resumeforge.alfo.online/city-guides/resume-chicago"
  "https://resumeforge.alfo.online/city-guides/resume-miami"
  "https://resumeforge.alfo.online/blog/industry-specific-ats-keywords-2026"
  "https://resumeforge.alfo.online/resume-templates/paralegal"
  "https://resumeforge.alfo.online/resume-templates/account-executive"
  "https://resumeforge.alfo.online/resume-templates/digital-marketing-manager"
  "https://resumeforge.alfo.online/resume-guides/tailoring-your-resume"
  "https://resumeforge.alfo.online/resume-guides/ats-keywords-by-industry"
  "https://resumeforge.alfo.online/city-guides/resume-los-angeles"
  "https://resumeforge.alfo.online/city-guides/resume-washington-dc"
  "https://resumeforge.alfo.online/city-guides/resume-portland"
  "https://resumeforge.alfo.online/blog/ai-resume-screening-2026"
  "https://resumeforge.alfo.online/resume-templates/machine-learning-engineer"
  "https://resumeforge.alfo.online/resume-templates/ai-researcher"
  "https://resumeforge.alfo.online/resume-templates/cybersecurity-analyst"
  "https://resumeforge.alfo.online/resume-templates/data-privacy-officer"
  "https://resumeforge.alfo.online/resume-guides/promotion"
  "https://resumeforge.alfo.online/resume-guides/internal-transfer"
  "https://resumeforge.alfo.online/resume-guides/remote-onboarding"
  "https://resumeforge.alfo.online/city-guides/resume-san-jose"
  "https://resumeforge.alfo.online/blog/career-change-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/systems-administrator"
  "https://resumeforge.alfo.online/resume-templates/database-administrator"
  "https://resumeforge.alfo.online/resume-templates/network-engineer"
  "https://resumeforge.alfo.online/resume-guides/remote-work-skills"
  "https://resumeforge.alfo.online/resume-guides/hybrid-work-resume"
  "https://resumeforge.alfo.online/city-guides/resume-charlotte"
  "https://resumeforge.alfo.online/city-guides/resume-indianapolis"
  "https://resumeforge.alfo.online/city-guides/resume-columbus"
  "https://resumeforge.alfo.online/blog/executive-resume-tips-2026"
  "https://resumeforge.alfo.online/resume-templates/chief-executive-officer"
  "https://resumeforge.alfo.online/resume-templates/chief-financial-officer"
  "https://resumeforge.alfo.online/resume-templates/chief-operating-officer"
  "https://resumeforge.alfo.online/resume-templates/chief-technology-officer"
  "https://resumeforge.alfo.online/resume-guides/c-level-executives"
  "https://resumeforge.alfo.online/resume-guides/board-of-directors"
  "https://resumeforge.alfo.online/resume-guides/vp-level"
  "https://resumeforge.alfo.online/city-guides/resume-houston"
  "https://resumeforge.alfo.online/blog/startup-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/chief-revenue-officer"
  "https://resumeforge.alfo.online/resume-templates/business-development-manager"
  "https://resumeforge.alfo.online/resume-templates/customer-success-manager"
  "https://resumeforge.alfo.online/resume-templates/solutions-architect"
  "https://resumeforge.alfo.online/resume-guides/startup-resume-tips"
  "https://resumeforge.alfo.online/resume-guides/startup-cover-letter"
  "https://resumeforge.alfo.online/resume-guides/startup-interview"
  "https://resumeforge.alfo.online/city-guides/resume-salt-lake-city"




)

# 1. Ping Google Sitemaps
echo "📡 Pinging Google Sitemaps..."
curl -s "https://www.google.com/ping?sitemap=https://resumeforge.alfo.online/sitemap.xml" > /dev/null
curl -s "https://www.google.com/ping?sitemap=https://resumeforge.alfo.online/sitemap-articles.xml" > /dev/null
echo "✅ Google pinged."

# 2. Ping Bing Sitemaps
echo "📡 Pinging Bing Sitemaps..."
curl -s "https://www.bing.com/ping?sitemap=https://resumeforge.alfo.online/sitemap.xml" > /dev/null
echo "✅ Bing pinged."

# 3. Simulate IndexNow API Submission
echo "⚡ Simulating IndexNow API submission..."
# Submit to IndexNow
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '{"host": "resumeforge.alfo.online", "key": "resume_forge_indexnow_2026", "keyLocation": "https://resumeforge.alfo.online/resume_forge_indexnow_2026.txt", "urlList": ['$(printf '"%s",' "${URLS[@]}" | sed 's/,$//')']}' > /dev/null
for url in "${URLS[@]}"; do
    echo "🔗 Notifying IndexNow: $url"
done

echo "🎉 Indexing automation complete!"
