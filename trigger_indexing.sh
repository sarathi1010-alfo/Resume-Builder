#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/supply-chain-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/supply-chain-manager-2026"
  "https://resumeforge.alfo.online/resume-templates/logistics-analyst-2026"
  "https://resumeforge.alfo.online/resume-templates/procurement-specialist-2026"
  "https://resumeforge.alfo.online/resume-templates/inventory-planner-2026"
  "https://resumeforge.alfo.online/resume-guides/supply-chain-certifications-2026"
  "https://resumeforge.alfo.online/resume-guides/logistics-metrics-2026"
  "https://resumeforge.alfo.online/resume-guides/vendor-management-skills-2026"
  "https://resumeforge.alfo.online/city-guides/resume-chicago-2026"
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
