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
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '{"host": "resumeforge.alfo.online", "key": "eb49c2df6996835bd368105d7e23bb42", "keyLocation": "https://resumeforge.alfo.online/eb49c2df6996835bd368105d7e23bb42.txt", "urlList": ['$(printf '"%s",' "${URLS[@]}" | sed 's/,$//')']}' > /dev/null
for url in "${URLS[@]}"; do
    echo "🔗 Notifying IndexNow: $url"
done

echo "🎉 Indexing automation complete!"
