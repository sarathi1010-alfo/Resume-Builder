#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/how-to-write-an-ats-friendly-cover-letter-2026"
  "https://resumeforge.alfo.online/resume-templates/copywriter"
  "https://resumeforge.alfo.online/resume-templates/public-relations-manager"
  "https://resumeforge.alfo.online/resume-templates/event-manager"
  "https://resumeforge.alfo.online/resume-templates/social-media-specialist"
  "https://resumeforge.alfo.online/resume-guides/cover-letter-formatting"
  "https://resumeforge.alfo.online/resume-guides/cover-letter-keywords"
  "https://resumeforge.alfo.online/resume-guides/cover-letter-action-verbs"
  "https://resumeforge.alfo.online/city-guides/resume-charleston"
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
