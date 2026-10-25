#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/remote-work-resume-tips-2026-complete-guide"
  "https://resumeforge.alfo.online/resume-templates/remote-graphic-designer-2026"
  "https://resumeforge.alfo.online/resume-templates/remote-data-analyst-2026"
  "https://resumeforge.alfo.online/resume-templates/remote-sales-manager-2026"
  "https://resumeforge.alfo.online/resume-templates/remote-financial-analyst-2026"
  "https://resumeforge.alfo.online/resume-guides/remote-entry-level-2026"
  "https://resumeforge.alfo.online/resume-guides/remote-mid-level-2026"
  "https://resumeforge.alfo.online/resume-guides/remote-senior-level-2026"
  "https://resumeforge.alfo.online/city-guides/resume-san-jose-2026"

  "https://resumeforge.alfo.online/blog/ai-recruiter-resume-optimization-2026"
  "https://resumeforge.alfo.online/resume-templates/prompt-engineer-2026"
  "https://resumeforge.alfo.online/resume-templates/data-annotator-2026"
  "https://resumeforge.alfo.online/resume-templates/machine-learning-researcher-2026"
  "https://resumeforge.alfo.online/resume-templates/nlp-engineer-2026"
  "https://resumeforge.alfo.online/resume-guides/ai-career-transition-2026"
  "https://resumeforge.alfo.online/resume-guides/future-proofing-resume-2026"
  "https://resumeforge.alfo.online/resume-guides/beating-ai-resume-screeners-2026"
  "https://resumeforge.alfo.online/city-guides/resume-miami-2026"

  "https://resumeforge.alfo.online/blog/quantifying-resume-achievements-2026"
  "https://resumeforge.alfo.online/resume-templates/data-analyst-2026"
  "https://resumeforge.alfo.online/resume-templates/financial-analyst-quantitative-2026"
  "https://resumeforge.alfo.online/resume-templates/marketing-manager-quantitative-2026"
  "https://resumeforge.alfo.online/resume-templates/sales-manager-quantitative-2026"
  "https://resumeforge.alfo.online/resume-guides/quantifying-sales-impact-2026"
  "https://resumeforge.alfo.online/resume-guides/quantifying-marketing-metrics-2026"
  "https://resumeforge.alfo.online/resume-guides/quantifying-tech-achievements-2026"
  "https://resumeforge.alfo.online/city-guides/resume-boston-2026"
  "https://resumeforge.alfo.online/blog/certifications-ats-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/database-administrator-2026"
  "https://resumeforge.alfo.online/resume-templates/ui-designer-2026"
  "https://resumeforge.alfo.online/resume-templates/mechanical-engineer-2026"
  "https://resumeforge.alfo.online/resume-templates/pharmacist-2026"
  "https://resumeforge.alfo.online/resume-guides/gap-year-2026"
  "https://resumeforge.alfo.online/resume-guides/sabbatical-2026"
  "https://resumeforge.alfo.online/resume-guides/explaining-layoffs-2026"
  "https://resumeforge.alfo.online/city-guides/resume-dallas-2026"
  "https://resumeforge.alfo.online/blog/best-ats-friendly-resume-fonts-2026"
  "https://resumeforge.alfo.online/resume-templates/graphic-designer-fonts-2026"
  "https://resumeforge.alfo.online/resume-templates/software-engineer-fonts-2026"
  "https://resumeforge.alfo.online/resume-templates/accountant-fonts-2026"
  "https://resumeforge.alfo.online/resume-templates/teacher-fonts-2026"
  "https://resumeforge.alfo.online/resume-guides/entry-level-fonts-2026"
  "https://resumeforge.alfo.online/resume-guides/executive-fonts-2026"
  "https://resumeforge.alfo.online/resume-guides/creative-resume-fonts-2026"
  "https://resumeforge.alfo.online/city-guides/resume-atlanta-2026"

  "https://resumeforge.alfo.online/blog/how-to-tailor-resume-ats-2026"
  "https://resumeforge.alfo.online/resume-templates/agile-project-manager-2026"
  "https://resumeforge.alfo.online/resume-templates/recruitment-manager-2026"
  "https://resumeforge.alfo.online/resume-templates/machine-learning-engineer-2026"
  "https://resumeforge.alfo.online/resume-templates/investment-analyst-2026"
  "https://resumeforge.alfo.online/resume-guides/college-graduate-2026"
  "https://resumeforge.alfo.online/resume-guides/returning-to-work-2026"
  "https://resumeforge.alfo.online/resume-guides/contract-to-hire-2026"
  "https://resumeforge.alfo.online/city-guides/resume-austin-2026"

  "https://resumeforge.alfo.online/blog/industry-specific-ats-strategies-2026"
  "https://resumeforge.alfo.online/resume-templates/healthcare-administrator-2026"
  "https://resumeforge.alfo.online/resume-templates/supply-chain-manager-2026"
  "https://resumeforge.alfo.online/resume-templates/legal-counsel-2026"
  "https://resumeforge.alfo.online/resume-templates/financial-controller-2026"
  "https://resumeforge.alfo.online/resume-guides/manufacturing-resume-keywords-2026"
  "https://resumeforge.alfo.online/resume-guides/non-profit-resume-keywords-2026"
  "https://resumeforge.alfo.online/resume-guides/retail-management-keywords-2026"
  "https://resumeforge.alfo.online/city-guides/resume-houston-2026"
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
