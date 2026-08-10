#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
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
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '{"host": "resumeforge.alfo.online", "key": "2b11e7a2dd04be5144508bf2ed8731c7", "keyLocation": "https://resumeforge.alfo.online/2b11e7a2dd04be5144508bf2ed8731c7.txt", "urlList": ['$(printf '"%s",' "${URLS[@]}" | sed 's/,$//')']}' > /dev/null
for url in "${URLS[@]}"; do
    echo "🔗 Notifying IndexNow: $url"
done

echo "🎉 Indexing automation complete!"
