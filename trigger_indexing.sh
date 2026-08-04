#!/bin/bash

# Trigger Indexing Automation Script
echo "🚀 Starting indexing automation for new URLs..."

# Define new URLs
URLS=(
  "https://resumeforge.alfo.online/blog/job-search-strategy-guide-2026"
  "https://resumeforge.alfo.online/resume-templates/paralegal"
  "https://resumeforge.alfo.online/resume-templates/digital-marketing-manager"
  "https://resumeforge.alfo.online/resume-templates/account-executive"
  "https://resumeforge.alfo.online/resume-templates/project-manager"
  "https://resumeforge.alfo.online/resume-guides/c-level"
  "https://resumeforge.alfo.online/resume-guides/recent-graduates"
  "https://resumeforge.alfo.online/city-guides/resume-washington-dc"
  "https://resumeforge.alfo.online/city-guides/resume-portland"
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
