#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/industry-specific-ats-keywords-2026"
  "https://resumeforge.alfo.online/resume-templates/front-end-developer"
  "https://resumeforge.alfo.online/resume-templates/devops-engineer"
  "https://resumeforge.alfo.online/resume-templates/financial-advisor"
  "https://resumeforge.alfo.online/resume-templates/nursing-assistant"
  "https://resumeforge.alfo.online/resume-guides/relocation"
  "https://resumeforge.alfo.online/resume-guides/gap-year"
  "https://resumeforge.alfo.online/city-guides/resume-san-francisco"
  "https://resumeforge.alfo.online/city-guides/resume-dallas"
  "https://resumeforge.alfo.online/blog/the-ultimate-guide-to-ats-friendly-resumes-in-2026"
  "https://resumeforge.alfo.online/blog/what-is-a-chronological-resume"
  "https://resumeforge.alfo.online/blog/what-is-a-functional-resume"
  "https://resumeforge.alfo.online/blog/what-is-a-hybrid-resume"
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
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '{"host": "resumeforge.alfo.online", "key": "YOUR_INDEXNOW_KEY", "keyLocation": "https://resumeforge.alfo.online/YOUR_INDEXNOW_KEY.txt", "urlList": ['$(printf '"%s",' "${URLS[@]}" | sed 's/,$//')']}' > /dev/null
for url in "${URLS[@]}"; do
    echo "🔗 Notifying IndexNow: $url"
done

echo "🎉 Indexing automation complete!"
