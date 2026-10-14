#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/federal-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/federal-analyst-2026"
  "https://resumeforge.alfo.online/resume-templates/government-contractor-2026"
  "https://resumeforge.alfo.online/resume-templates/public-policy-advisor-2026"
  "https://resumeforge.alfo.online/resume-templates/federal-law-enforcement-2026"
  "https://resumeforge.alfo.online/resume-guides/usajobs-resume-tips-2026"
  "https://resumeforge.alfo.online/resume-guides/military-transition-federal-2026"
  "https://resumeforge.alfo.online/resume-guides/ses-resume-guide-2026"
  "https://resumeforge.alfo.online/city-guides/resume-washington-dc-2026"
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