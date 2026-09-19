#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/non-profit-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/grant-writer"
  "https://resumeforge.alfo.online/resume-templates/volunteer-coordinator"
  "https://resumeforge.alfo.online/resume-templates/non-profit-director"
  "https://resumeforge.alfo.online/resume-templates/fundraising-manager"
  "https://resumeforge.alfo.online/resume-guides/non-profit-metrics"
  "https://resumeforge.alfo.online/resume-guides/grant-writing-skills"
  "https://resumeforge.alfo.online/resume-guides/volunteer-management"
  "https://resumeforge.alfo.online/city-guides/resume-orlando"
  "https://resumeforge.alfo.online/city-guides/resume-new-york"
  "https://resumeforge.alfo.online/city-guides/resume-san-francisco"
  "https://resumeforge.alfo.online/city-guides/resume-austin"
  "https://resumeforge.alfo.online/city-guides/resume-chicago"
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
