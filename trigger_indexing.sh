#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/data-engineer-ats-resume-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/data-engineer-2026"
  "https://resumeforge.alfo.online/resume-templates/machine-learning-engineer-2026"
  "https://resumeforge.alfo.online/resume-templates/cloud-architect-2026"
  "https://resumeforge.alfo.online/resume-templates/bi-developer-2026"
  "https://resumeforge.alfo.online/resume-guides/senior-data-engineer"
  "https://resumeforge.alfo.online/resume-guides/entry-level-data-engineer"
  "https://resumeforge.alfo.online/resume-guides/lead-data-engineer"
  "https://resumeforge.alfo.online/city-guides/resume-columbus"
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
